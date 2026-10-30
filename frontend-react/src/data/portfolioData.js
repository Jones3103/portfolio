export const portfolioData = {
  profile: {
    name: 'Jones Malaravan A',
    roles: [
      'Mechanical Engineering Student',
      'Robotics Enthusiast',
      'Embedded Systems Explorer',
      'AI & ML Learner'
    ],
    tagline: 'Building practical projects that connect hardware, software, and intelligent systems.',
    college: 'Indra Ganesan College of Engineering',
    period: '2025–2029',
    school: 'Sacred Heart Higher Secondary School (2023–2025)',
    email: 'jonesmalaravan31@gmail.com',
    phone: '8015910534',
    github: 'https://github.com/jones3103',
    linkedin: 'https://www.linkedin.com/in/jones-malaravan-a-387161448',
    stats: [
      { number: '3+', title: 'Engineered Projects', desc: 'Smart EV Mobility Cart, VR Campus Experience & Smart Agriculture IoT' },
      { number: '3', title: 'Programming Languages', desc: 'Python (AI & Scripting), C (Embedded Performance), SQL (Relational Data)' },
      { number: '2', title: 'Embedded Platforms', desc: 'NVIDIA Jetson Nano (Edge AI Processing) & ESP32 (Wireless IoT Telemetry)' }
    ]
  },
  skills: [
    {
      category: 'Programming Languages',
      icon: 'code',
      desc: 'Core languages used for systems programming, data processing, and robotic logic.',
      items: [
        { name: 'Python', meta: 'Data, AI & Automation' },
        { name: 'C', meta: 'Firmware & Embedded' },
        { name: 'SQL', meta: 'Data Architecture' }
      ]
    },
    {
      category: 'Embedded & Robotics',
      icon: 'cpu',
      desc: 'Hardware controllers, motion actuators, and kinematic sensor interfacing.',
      items: [
        { name: 'Jetson Nano', meta: 'Edge Computing' },
        { name: 'ESP32', meta: 'Wi-Fi & Bluetooth IoT' },
        { name: 'PCA9685 Servo Driver', meta: '16-Ch PWM Motion' },
        { name: 'IMU Sensor Integration', meta: 'Telemetry & Gyro' }
      ]
    },
    {
      category: 'AI Development Tools',
      icon: 'bot',
      desc: 'Cutting-edge agentic workflows and LLM toolchains powering rapid development.',
      items: [
        { name: 'Google Antigravity', meta: 'Agentic Engineering' },
        { name: 'Claude', meta: 'Code & Architecture Synthesis' }
      ]
    },
    {
      category: 'Areas of Interest',
      icon: 'compass',
      desc: 'Interdisciplinary fields driving future innovations and career objectives.',
      items: [
        { name: 'Robotics', meta: 'Mechatronics & Control' },
        { name: 'Artificial Intelligence', meta: 'Perception & Models' },
        { name: 'Machine Learning', meta: 'Applied Intelligence' },
        { name: 'Web Development', meta: 'Modern Full-Stack' },
        { name: 'App Development', meta: 'Mobile UI & IoT Apps' }
      ]
    }
  ],
  projects: [
    {
      id: 'ev-cart',
      title: 'Smart Campus Mobility System (EV Cart)',
      category: 'Autonomous & Electric Mobility',
      image: '/assets/images/projects/smart-ev-cart.svg',
      shortDesc: 'A smart electric campus transportation concept integrating an EV cart with RFID-based access, GPS tracking, battery monitoring, and a mobile application.',
      fullDesc: 'An end-to-end intelligent electric campus mobility solution designed to provide green, auditable, and automated transit across collegiate facilities. Integrates embedded sensors, wireless tracking, security authentication, and an operator mobile dashboard.',
      features: [
        'RFID-based student and faculty card authentication for authorized access control.',
        'Real-time GPS geolocation streaming for route tracking and geofenced speed control.',
        'Battery Management System (BMS) telemetry with live voltage, temperature, and range estimates.',
        'Companion mobile application interface for live location viewing, hailing, and battery diagnostic logs.',
        'Low-latency micro-controller firmware for fail-safe throttle management.'
      ],
      tags: ['RFID', 'GPS', 'Battery Monitoring', 'Mobile App', 'IoT'],
      github: 'https://github.com/jones3103/smart-campus-ev-mobility'
    },
    {
      id: 'vr-tour',
      title: 'VR Campus Tour',
      category: 'Virtual Reality & Spatial Web',
      image: '/assets/images/projects/vr-campus-tour.svg',
      shortDesc: 'An immersive virtual campus experience using 360-degree panoramic views and interactive hotspots to help students and visitors explore college locations.',
      fullDesc: 'An immersive web-accessible virtual reality experience engineered using high-resolution 360-degree panoramic captures and interactive spatial hotspots. Designed to orient incoming freshmen, remote scholars, and international visitors across college labs, auditoriums, and facilities.',
      features: [
        'Full 360° spherical projection compatible with mobile gyro, desktop browsers, and VR headsets.',
        'Interactive spatial beacon hotspots revealing departmental equipment, syllabi, and audio guides.',
        'Optimized multi-resolution asset streaming ensuring instantaneous tile rendering even on 4G networks.',
        'Intuitive spatial compass, mini-map, and audio ambient soundscapes for high immersion.'
      ],
      tags: ['VR', '360° Panorama', 'Interactive Hotspots'],
      github: 'https://github.com/jones3103/vr-campus-tour-360'
    },
    {
      id: 'smart-agriculture',
      title: 'Smart Agriculture Projects',
      category: 'AgriTech & Sensor Automation',
      image: '/assets/images/projects/smart-agriculture.svg',
      shortDesc: 'Sensor- and embedded-system-based agricultural solutions focused on field monitoring and supporting smarter, technology-enabled farming.',
      fullDesc: 'An array of sensor- and embedded-system-driven agricultural automation units designed for precision farming. Focuses on continuous field monitoring, microclimate data collection, and automated drip irrigation actuation to optimize water usage.',
      features: [
        'Multi-depth capacitive soil moisture and pH sensor arrays communicating via low-power protocol.',
        'Ambient temperature and relative humidity tracking for pest and disease risk forecasting.',
        'Automated solenoid valve irrigation trigger algorithms responding dynamically to weather trends.',
        'Solar-powered autonomous node design with deep sleep cycles for extended field deployment.'
      ],
      tags: ['Sensors', 'Embedded Systems', 'IoT', 'Agriculture'],
      github: 'https://github.com/jones3103/smart-agriculture-embedded-iot'
    }
  ],
  education: [
    {
      degree: 'B.E. – Mechanical Engineering',
      institution: 'Indra Ganesan College of Engineering',
      period: '2025–2029 (Ongoing)',
      badge: 'Undergraduate',
      desc: 'Pursuing comprehensive studies in core mechanical principles, thermodynamics, kinematics, computer-aided engineering, and exploring embedded systems, mechatronics, and autonomous robotics architectures.',
      tags: ['Mechanical Engineering', 'Robotics & Mechatronics', 'Embedded Computing', 'CAD Modeling']
    },
    {
      degree: 'Higher Secondary – Computer Science Group',
      institution: 'Sacred Heart Higher Secondary School',
      period: '2023–2025',
      badge: '70% Aggregate',
      desc: 'Completed secondary education with focused coursework in Computer Science, algorithmic foundations, Mathematics, and Physics, establishing a strong base in programming logic and numerical problem-solving.',
      tags: ['Computer Science', 'Mathematics', 'Physics', 'Logic & Algorithms']
    }
  ],
  achievements: [
    {
      title: 'Nano Technology Workshop',
      subtitle: 'Certificate of Participation',
      pill: 'Technical Workshop',
      color: 'cyan',
      desc: 'Participated in an intensive hands-on technical workshop on advanced Nano Technology, nano-materials, and their emerging applications in high-efficiency electromechanical engineering.'
    },
    {
      title: '100% Attendance',
      subtitle: 'Attendance Recognition',
      pill: 'Excellence & Discipline',
      color: 'green',
      desc: 'Awarded special formal recognition for maintaining an unbroken 100% attendance record, reflecting strong punctuality, steadfast consistency, and rigorous academic discipline.'
    },
    {
      title: '1st Prize Winner',
      subtitle: 'Non-Technical Event',
      pill: 'Competition Winner',
      color: 'amber',
      desc: 'Clinched the First Prize among multi-college participants in a competitive non-technical institutional event, highlighting creative agility, team collaboration, and communication skills.'
    }
  ]
};

