import { startTransition, useEffect, useState } from 'react';

const DRONE_IDS = ['DRONE-01', 'DRONE-02', 'DRONE-03', 'DRONE-04', 'DRONE-05', 'DRONE-06'];
const STATUS_SET = ['ACTIVE', 'ACTIVE', 'ACTIVE', 'RETURNING', 'LINK LOST'];
const LOG_LEVELS = [
  ['INFO', 'MAVLINK LINK ESTABLISHED'],
  ['WARN', 'SIGNAL DEGRADED'],
  ['INFO', 'FORMATION SYNC OK'],
  ['CMD', 'WAYPOINT UPDATED'],
  ['INFO', 'PATH CORRECTION APPLIED'],
  ['WARN', 'RSSI FLUCTUATION DETECTED'],
  ['CMD', 'LEADER HANDOVER CHECK'],
];

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function randInt(min, max) {
  return Math.round(rand(min, max));
}

function createBlips(count = 4) {
  return Array.from({ length: count }, (_, index) => ({
    id: `blip-${index}-${Date.now()}`,
    x: rand(18, 82),
    y: rand(18, 82),
    size: rand(6, 12),
  }));
}

function createLog() {
  const [level, message] = LOG_LEVELS[randInt(0, LOG_LEVELS.length - 1)];
  return `[${level}] ${message}`;
}

function buildInitialTrail() {
  return Array.from({ length: 14 }, (_, index) => ({
    x: 22 + index * 3.8,
    y: 50 + Math.sin(index / 2.2) * 12,
  }));
}

const initialState = {
  telemetry: {
    alt: 184,
    spd: 28,
    hdg: 72,
    bat: 91,
  },
  map: {
    position: { x: 76, y: 47 },
    trail: buildInitialTrail(),
    coords: { lat: 49.8234, lon: 24.0431 },
  },
  swarm: DRONE_IDS.map((id, index) => ({
    id,
    status: index < 4 ? 'ACTIVE' : 'RETURNING',
  })),
  signalBars: [92, 82, 74, 58, 38],
  blips: createBlips(),
  logs: [
    '[INFO] MAVLINK LINK ESTABLISHED',
    '[INFO] FORMATION SYNC OK',
    '[CMD] WAYPOINT UPDATED',
    '[WARN] SIGNAL DEGRADED',
  ],
};

export function useMissionControlData() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let active = true;
    let timeoutId;

    const tickTelemetry = () => {
      if (!active) {
        return;
      }

      timeoutId = window.setTimeout(() => {
        startTransition(() => {
          setState((prev) => {
            const alt = clamp(prev.telemetry.alt + randInt(-24, 24), 120, 350);
            const spd = clamp(prev.telemetry.spd + randInt(-4, 4), 15, 45);
            const hdg = (prev.telemetry.hdg + randInt(-18, 18) + 360) % 360;
            const bat = clamp(prev.telemetry.bat + rand(-1.1, 0.35), 65, 100);
            const nextX = clamp(prev.map.position.x + rand(-5.5, 5.5), 8, 92);
            const nextY = clamp(prev.map.position.y + rand(-5.5, 5.5), 10, 90);
            const trail = [...prev.map.trail, { x: nextX, y: nextY }].slice(-18);
            const coords = {
              lat: 49.8234 + (nextY - 50) * 0.0027,
              lon: 24.0431 + (nextX - 50) * 0.0033,
            };

            return {
              ...prev,
              telemetry: {
                alt,
                spd,
                hdg,
                bat: Number(bat.toFixed(1)),
              },
              map: {
                position: { x: nextX, y: nextY },
                trail,
                coords,
              },
              signalBars: prev.signalBars.map((bar, index) =>
                clamp(bar + randInt(-14 + index, 10), 16, 100),
              ),
              blips: createBlips(randInt(3, 6)),
            };
          });
        });

        tickTelemetry();
      }, randInt(300, 800));
    };

    tickTelemetry();

    const swarmInterval = window.setInterval(() => {
      startTransition(() => {
        setState((prev) => ({
          ...prev,
          swarm: prev.swarm.map((drone) => ({
            ...drone,
            status: Math.random() > 0.65 ? STATUS_SET[randInt(0, STATUS_SET.length - 1)] : drone.status,
          })),
        }));
      });
    }, 3400);

    const logInterval = window.setInterval(() => {
      startTransition(() => {
        setState((prev) => ({
          ...prev,
          logs: [createLog(), ...prev.logs].slice(0, 9),
        }));
      });
    }, 1800);

    return () => {
      active = false;
      window.clearTimeout(timeoutId);
      window.clearInterval(swarmInterval);
      window.clearInterval(logInterval);
    };
  }, []);

  return state;
}
