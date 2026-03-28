import { Suspense, useLayoutEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { Component } from 'react';
import * as THREE from 'three';

class ModelBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.assetPath !== this.props.assetPath && this.state.failed) {
      this.setState({ failed: false });
    }
  }

  render() {
    if (this.state.failed) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

function ProceduralUAV({ isMiltechMode }) {
  const hullColor = isMiltechMode ? '#1d201d' : '#1c252c';
  const panelColor = isMiltechMode ? '#313822' : '#30485a';
  const glowColor = isMiltechMode ? '#657338' : '#547792';

  return (
    <group>
      <mesh castShadow receiveShadow position={[0, 0, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.18, 0.24, 4.2, 14]} />
        <meshStandardMaterial color={hullColor} roughness={0.9} metalness={0.16} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0, 2.48]} rotation={[-Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.2, 0.62, 14]} />
        <meshStandardMaterial color={hullColor} roughness={0.82} metalness={0.18} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, -0.08, 0.1]}>
        <boxGeometry args={[4.25, 0.08, 0.86]} />
        <meshStandardMaterial color={hullColor} roughness={0.94} metalness={0.1} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, -0.03, -0.7]}>
        <boxGeometry args={[1.45, 0.04, 1.9]} />
        <meshStandardMaterial color={panelColor} roughness={0.95} metalness={0.06} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0.27, -1.2]}>
        <boxGeometry args={[0.52, 0.38, 0.18]} />
        <meshStandardMaterial color={hullColor} roughness={0.88} metalness={0.16} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0.08, -1.42]}>
        <boxGeometry args={[1.05, 0.04, 0.52]} />
        <meshStandardMaterial color={hullColor} roughness={0.88} metalness={0.14} />
      </mesh>
      <mesh castShadow receiveShadow position={[0.22, 0.12, -2.02]} rotation={[0.42, 0.04, 0]}>
        <boxGeometry args={[0.22, 0.03, 0.74]} />
        <meshStandardMaterial color={panelColor} roughness={0.9} metalness={0.08} emissive={glowColor} emissiveIntensity={0.06} />
      </mesh>
      <mesh castShadow receiveShadow position={[-0.22, 0.12, -2.02]} rotation={[0.42, -0.04, 0]}>
        <boxGeometry args={[0.22, 0.03, 0.74]} />
        <meshStandardMaterial color={panelColor} roughness={0.9} metalness={0.08} emissive={glowColor} emissiveIntensity={0.06} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0, -1.96]}>
        <torusGeometry args={[0.28, 0.018, 12, 28]} />
        <meshStandardMaterial color={panelColor} roughness={0.82} metalness={0.24} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0, -1.96]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.72, 0.03, 0.08]} />
        <meshStandardMaterial color={panelColor} roughness={0.84} metalness={0.18} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0, -1.96]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.72, 0.03, 0.08]} />
        <meshStandardMaterial color={panelColor} roughness={0.84} metalness={0.18} />
      </mesh>
    </group>
  );
}

function NormalizedGLTFModel({ assetPath, modelRotation }) {
  const { scene } = useGLTF(assetPath);
  const model = useMemo(() => scene.clone(true), [scene]);

  useLayoutEffect(() => {
    model.position.set(0, 0, 0);
    model.rotation.set(0, 0, 0);
    model.scale.set(1, 1, 1);
    model.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(model);
    const center = new THREE.Vector3();
    const size = new THREE.Vector3();

    box.getCenter(center);
    box.getSize(size);

    model.position.sub(center);

    const maxAxis = Math.max(size.x, size.y, size.z) || 1;
    const normalizedScale = 4.4 / maxAxis;
    model.scale.setScalar(normalizedScale);
    model.rotation.set(...modelRotation);

    model.traverse((child) => {
      if (!child.isMesh) {
        return;
      }

      child.castShadow = true;
      child.receiveShadow = true;

      const materials = Array.isArray(child.material) ? child.material : [child.material];
      materials.forEach((material) => {
        if ('roughness' in material) {
          material.roughness = Math.max(material.roughness ?? 0.8, 0.76);
        }
        if ('metalness' in material) {
          material.metalness = Math.min(material.metalness ?? 0.18, 0.24);
        }
      });
    });
  }, [model, modelRotation]);

  return <primitive object={model} />;
}

export function UAVModel({ assetPath = null, isMiltechMode = true, modelRotation = [0, Math.PI, 0] }) {
  const fallback = <ProceduralUAV isMiltechMode={isMiltechMode} />;

  if (!assetPath) {
    return fallback;
  }

  return (
    <ModelBoundary assetPath={assetPath} fallback={fallback}>
      <Suspense fallback={fallback}>
        <NormalizedGLTFModel assetPath={assetPath} modelRotation={modelRotation} />
      </Suspense>
    </ModelBoundary>
  );
}
