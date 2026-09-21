export const heroData = {
  name: 'Mark Koval',
  title: 'UAV Engineer / UAV Pilot / UAV Electronics',
  tagline: 'Autonomous Aerial Systems / Interceptor & Swarm UAVs / MAVLink Flight Control',
  classification: 'UNCLASSIFIED // ENGINEERING PROFILE',
  labels: [
    { key: 'STATUS', value: 'ACTIVE' },
    { key: 'LINK', value: 'STABLE' },
    { key: 'MODE', value: 'AUTONOMOUS' },
  ],
  currentRole: {
    label: 'CURRENT ASSIGNMENT',
    value: 'R&D Engineer @ Twist Robotics',
  },
};

export const heroStats = [
  { value: '3+', label: 'Years In Field' },
  { value: '6', label: 'UAV Programs' },
  { value: '5', label: 'Airframe Classes' },
  { value: '24/7', label: 'Operational Mode' },
];

export const summaryLines = [
  'Engineer with hands-on experience across the UAV spectrum — fixed-wing, interceptor, and quadcopter airframes, electric and internal-combustion.',
  'Specializes in assembling and configuring autopilots (ArduPilot, Matek, Pixhawk, Cube) and calibrating flight-control systems for stability under real load.',
  'Builds autonomous aerial systems through hardware integration, MAVLink command architecture, swarm coordination, and real-time telemetry pipelines.',
  'Background spans 3D modeling (Blender, Fusion 360), Python-based analysis tooling, and software development — bridging airframe engineering with mission software.',
];

export const skillGroups = [
  {
    title: 'Core Capabilities',
    items: [
      'Autonomous Flight Systems',
      'MAVLink Communication Architecture',
      'UAV Swarm Coordination',
      'Drone Piloting (Manual / Semi-Auto / Auto)',
      'Military Aircraft Systems',
      'Real-Time Telemetry Systems',
      'Flight Controller Integration',
      'SITL Simulation & Testing',
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
      'JavaScript / React (front-end tooling)',
      'SITL (Linux simulation)',
    ],
  },
  {
    title: 'Tools',
    items: ['customTkinter (control interfaces)', 'Blender (3D modeling)', 'Autodesk Fusion 360', 'RealFlight Evolution'],
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

export const experienceTimeline = [
  {
    role: 'R&D Engineer',
    org: 'Twist Robotics',
    period: 'Oct 2025 — Present',
    duration: 'Full-time',
    status: 'ACTIVE',
    points: [
      'Research and development role focused on UAV systems engineering.',
      'Applies flight-control, autopilot, and swarm-coordination background to production R&D work.',
    ],
  },
  {
    role: 'UAV Systems Engineer',
    org: 'Independent R&D',
    period: 'Full-Cycle Projects',
    duration: 'Ongoing',
    status: 'ACTIVE',
    points: [
      'Full-cycle UAV development from assembly and integration through deployment.',
      'Flight controller setup, calibration, and tuning across multiple FC platforms.',
      'MAVLink-based control and communication system development.',
      'SITL simulation workflows and test pipelines.',
      'Flight log analysis and performance optimization.',
    ],
  },
  {
    role: 'Freelance Web Developer',
    org: 'Fiverr',
    period: 'Mar 2022 — Jul 2023',
    duration: '1 yr 5 mos · Remote · Lviv, Ukraine',
    status: 'COMPLETED',
    points: [
      'Delivered custom portfolio, e-commerce, and order-management web builds for international clients.',
      'Front-end development in HTML5, JavaScript, and React.',
    ],
  },
];

export const education = {
  school: 'Lviv Polytechnic National University',
  note: 'Engineering education foundation supporting the hardware / software systems work above.',
};

export const operationalExperience = ['Manual control', 'Semi-autonomous flight', 'Fully autonomous missions'];

export const distinguishingFactors = [
  'Combines hardware and software engineering.',
  'Grounded in real flight work, not simulation-only development.',
  'Works at the protocol level with MAVLink and autopilot interfaces.',
  'Engineering-first approach focused on autonomy and swarm systems.',
];

export const contactItems = [
  { label: 'Email', value: 'marekmark22@gmail.com', href: 'mailto:marekmark22@gmail.com' },
  { label: 'LinkedIn', value: '/in/kovalmark', href: 'https://www.linkedin.com/in/kovalmark/' },
  { label: 'Telegram', value: '@kovalmarkk', href: 'https://t.me/kovalmarkk' },
  { label: 'Location', value: 'Lviv, Ukraine' },
];
