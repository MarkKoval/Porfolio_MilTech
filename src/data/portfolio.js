export const heroData = {
  name: 'Mark Koval',
  title: 'UAV Systems Engineer / Autonomous Systems Developer',
  tagline: 'Autonomous Aerial Systems / Swarm Intelligence / MAVLink Control',
  classification: 'UNCLASSIFIED // ENGINEERING PROFILE',
  labels: [
    { key: 'STATUS', value: 'ACTIVE' },
    { key: 'LINK', value: 'STABLE' },
    { key: 'MODE', value: 'AUTONOMOUS' },
  ],
};

export const summaryLines = [
  'UAV systems engineer with 2+ years of hands-on work across full-cycle drone development.',
  'Builds reliable autonomous aerial systems through hardware integration, flight-control tuning, and real-time communication.',
  'Experienced with both electric and internal combustion UAV platforms, with emphasis on stability, fault tolerance, and field performance.',
  'Core domains include MAVLink control systems, swarm coordination, telemetry pipelines, and simulation environments.',
];

export const skillGroups = [
  {
    title: 'Core Capabilities',
    items: [
      'Autonomous Flight Systems',
      'MAVLink Communication Architecture',
      'UAV Swarm Coordination',
      'Real-Time Telemetry Systems',
      'Flight Controller Integration',
      'Hardware / Software Co-Design',
      'SITL Simulation & Testing',
      'Flight Data Analysis',
    ],
  },
  {
    title: 'Hardware',
    items: ['Matek (H743 Wing V3)', 'Pixhawk / Cube', 'Kakute / Holybro'],
  },
  {
    title: 'Software',
    items: [
      'ArduPilot (advanced configuration & tuning)',
      'MAVLink (low-level communication)',
      'Python (pymavlink, sklearn, matplotlib)',
      'SITL (Linux simulation)',
    ],
  },
  {
    title: 'Tools',
    items: ['customTkinter (control interfaces)', 'Blender (3D modeling)', 'Fusion 360', 'RealFlight Evolution'],
  },
];

export const projects = [
  {
    code: 'PROJECT 01',
    title: 'Swarm Drone System',
    type: 'Decentralized UAV Coordination',
    summary:
      'Distributed coordination architecture where each airframe computes trajectory locally and synchronizes through a low-latency comms layer.',
    details: [
      'Each drone computes trajectory independently',
      'MAVLink-based communication',
      'Wi-Fi network architecture',
      '100 ms update rate',
      'Leader drone + ground station model',
      'Focus: scalability and fault tolerance',
    ],
  },
  {
    code: 'PROJECT 02',
    title: 'UAV "Kvant"',
    type: 'Long-Range UAV Platform',
    summary:
      'Long-range internal-combustion platform developed from first principles around endurance, propulsion reliability, and airframe efficiency.',
    details: [
      'Range: up to 2000 km',
      'Engine: internal combustion (tractor configuration)',
      'Fully custom airframe design',
      'Developed from scratch',
    ],
  },
  {
    code: 'PROJECT 03',
    title: 'UAV Control Interface',
    type: 'Ground Control Software',
    summary:
      'Ground control interface built for actuator validation, manual override, and direct MAVLink-linked diagnostics during integration.',
    details: [
      'Python + customTkinter',
      'MAVLink integration',
      'PWM control (800-2200)',
      'Elevon testing sequences',
      'Real-time control interface',
    ],
  },
  {
    code: 'PROJECT 04',
    title: 'Flight Data Analysis System',
    type: 'Data Processing / Analytics',
    summary:
      'Python-based processing pipeline for extracting usable flight-performance metrics from logs and isolating meaningful operational data.',
    details: [
      'Python-based analysis pipeline',
      'Throttle filtering (>10%)',
      'Distance calculation from logs',
      'Visualization with matplotlib',
      'sklearn integration',
    ],
  },
];

export const missionControl = {
  statusLine: '[STATUS: ACTIVE] [LINK: STABLE] [MODE: AUTONOMOUS]',
  summary:
    'Ground-control layer designed for disciplined mission awareness, clean operator focus, and stable autonomous system supervision under real deployment constraints.',
  points: [
    'Mission logic centered on autonomous routing, link integrity, and controlled operator intervention.',
    'Interface architecture shaped for readable status flow instead of dashboard noise or ornamental chrome.',
    'Background UAV visualization remains passive and scroll-linked to preserve signal hierarchy in the foreground.',
  ],
  modules: [
    {
      title: 'Control Logic',
      lines: ['Autonomous route execution', 'MAVLink command supervision', 'Failsafe-oriented state handling'],
    },
    {
      title: 'Deployment Priorities',
      lines: ['Stable telemetry interpretation', 'Readable field-state transitions', 'Cross-platform responsive operation'],
    },
  ],
};

export const experience = {
  title: 'UAV Systems Engineer (Independent R&D)',
  points: [
    'Full-cycle UAV development from assembly and integration through deployment.',
    'Flight controller setup, calibration, and tuning across multiple FC platforms.',
    'MAVLink-based control and communication system development.',
    'SITL simulation workflows and test pipelines.',
    'Flight log analysis and performance optimization.',
  ],
  operational: ['Manual control', 'Semi-autonomous flight', 'Fully autonomous missions'],
  distinguishing: [
    'Combines hardware and software engineering.',
    'Grounded in real flight work, not simulation-only development.',
    'Works at the protocol level with MAVLink and autopilot interfaces.',
    'Engineering-first approach focused on autonomy and swarm systems.',
  ],
};

export const contactItems = [
  { label: 'Email', value: 'mark.mil.uav.tech@gmail.com', href: 'mailto:mark.mil.uav.tech@gmail.com' },
  { label: 'Telegram', value: '@kovalmarkk', href: 'https://t.me/kovalmarkk' },
  { label: 'Location', value: 'Lviv, Ukraine' },
];
