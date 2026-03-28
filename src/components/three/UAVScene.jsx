import { AdaptiveDpr, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { memo, Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useMouseRotation } from '../../hooks/useMouseRotation';
import { useScrollRotation } from '../../hooks/useScrollRotation';
import { UAVModel } from './UAVModel';

function SceneRig({ scrollRotationRef, mouseRotationRef, isMiltechMode, assetPath }) {
  const rigRef = useRef(null);
  const { viewport } = useThree();
  const glowColor = isMiltechMode ? '#445123' : '#355267';

  useFrame((state, delta) => {
    if (!rigRef.current) {
      return;
    }

    const scroll = scrollRotationRef.current;
    const mouse = mouseRotationRef.current;
    const idle = Math.sin(state.clock.elapsedTime * 2) * 0.012;
    const continuousSpin = state.clock.elapsedTime * -0.045;

    const targetRotationY = -0.74 + scroll * Math.PI + mouse.x * 0.5 + continuousSpin;
    const targetRotationX = 0.08 + scroll * 0.18 + mouse.y * 0.3 + idle;
    const targetRotationZ = -0.035 + mouse.x * 0.1 - mouse.y * 0.04;
    const targetPositionX = (viewport.width < 8 ? 0.92 : 2.45) + mouse.x * 0.14;
    const targetPositionY = (viewport.width < 8 ? -0.32 : 0.28) + mouse.y * 0.08;

    rigRef.current.rotation.x = THREE.MathUtils.damp(rigRef.current.rotation.x, targetRotationX, 4.8, delta);
    rigRef.current.rotation.y = THREE.MathUtils.damp(rigRef.current.rotation.y, targetRotationY, 4.2, delta);
    rigRef.current.rotation.z = THREE.MathUtils.damp(rigRef.current.rotation.z, targetRotationZ, 4.6, delta);
    rigRef.current.position.x = THREE.MathUtils.damp(rigRef.current.position.x, targetPositionX, 4.4, delta);
    rigRef.current.position.y = THREE.MathUtils.damp(rigRef.current.position.y, targetPositionY, 4.4, delta);
  });

  const scenePosition = viewport.width < 8 ? [0.92, -0.32, 0] : [2.45, 0.28, 0];
  const sceneScale = viewport.width < 8 ? 0.72 : 0.98;

  return (
    <group ref={rigRef} position={scenePosition} scale={sceneScale}>
      <mesh position={[0.1, 0.12, -2.8]}>
        <planeGeometry args={[8.6, 5.6]} />
        <meshBasicMaterial color={glowColor} transparent opacity={0.05} />
      </mesh>
      <UAVModel assetPath={assetPath} isMiltechMode={isMiltechMode} />
    </group>
  );
}

export const UAVScene = memo(function UAVScene({ isMiltechMode = true, assetPath = null }) {
  const scrollRotationRef = useScrollRotation();
  const mouseRotationRef = useMouseRotation();
  const shadowColor = useMemo(() => (isMiltechMode ? '#5e6f32' : '#52718a'), [isMiltechMode]);

  return (
    <div className="uav-scene-layer" aria-hidden="true">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0.45, 7.4], fov: 34 }}
      >
        <AdaptiveDpr pixelated />
        <PerspectiveCamera makeDefault position={[0, 0.45, 7.4]} fov={34} />
        <fog attach="fog" args={['#0a0a0a', 7.2, 16]} />
        <ambientLight intensity={0.16} color={isMiltechMode ? '#7f875d' : '#7b90a0'} />
        <directionalLight
          castShadow
          position={[4, 4.5, 6]}
          intensity={1}
          color="#d8ddca"
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.00008}
        />
        <directionalLight position={[-3, -1, 3]} intensity={0.26} color={shadowColor} />
        <Suspense fallback={null}>
          <SceneRig
            scrollRotationRef={scrollRotationRef}
            mouseRotationRef={mouseRotationRef}
            isMiltechMode={isMiltechMode}
            assetPath={assetPath}
          />
        </Suspense>
      </Canvas>
    </div>
  );
});
