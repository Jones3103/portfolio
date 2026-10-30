from django.core.management.base import BaseCommand
from api.models import Project, Skill, Education, Achievement

class Command(BaseCommand):
    help = "Seeds database with Jones Malaravan's portfolio projects, skills, and academic history."

    def handle(self, *args, **options):
        self.stdout.write("Seeding portfolio data...")

        # 1. Projects
        Project.objects.all().delete()
        projects_data = [
            {
                'title': 'Smart Campus Mobility System (EV Cart)',
                'slug': 'smart-campus-mobility-system-ev-cart',
                'category': 'Autonomous & Electric Mobility',
                'short_desc': 'A smart electric campus transportation concept integrating an EV cart with RFID-based access, GPS tracking, battery monitoring, and a mobile application.',
                'full_desc': 'An end-to-end intelligent electric campus mobility solution designed to provide green, auditable, and automated transit across collegiate facilities. Integrates embedded sensors, wireless tracking, security authentication, and an operator mobile dashboard.',
                'features': [
                    'RFID-based student and faculty card authentication for authorized access control.',
                    'Real-time GPS geolocation streaming for route tracking and geofenced speed control.',
                    'Battery Management System (BMS) telemetry with live voltage, temperature, and range estimates.',
                    'Companion mobile application interface for live location viewing, hailing, and battery diagnostic logs.',
                    'Low-latency micro-controller firmware for fail-safe throttle management.'
                ],
                'tech_tags': ['RFID', 'GPS', 'Battery Monitoring', 'Mobile App', 'IoT', 'ESP32'],
                'image_url': 'assets/images/projects/smart-ev-cart.svg',
                'github_url': 'https://github.com/jones3103/smart-campus-ev-mobility',
                'order': 1,
                'featured': True
            },
            {
                'title': 'VR Campus Tour',
                'slug': 'vr-campus-tour',
                'category': 'Virtual Reality & Spatial Web',
                'short_desc': 'An immersive virtual campus experience using 360-degree panoramic views and interactive hotspots to help students and visitors explore college locations.',
                'full_desc': 'An immersive web-accessible virtual reality experience engineered using high-resolution 360-degree panoramic captures and interactive spatial hotspots. Designed to orient incoming freshmen, remote scholars, and international visitors across college labs, auditoriums, and facilities.',
                'features': [
                    'Full 360° spherical projection compatible with mobile gyro, desktop browsers, and VR headsets.',
                    'Interactive spatial beacon hotspots revealing departmental equipment, syllabi, and audio guides.',
                    'Optimized multi-resolution asset streaming ensuring instantaneous tile rendering even on 4G networks.',
                    'Intuitive spatial compass, mini-map, and audio ambient soundscapes for high immersion.'
                ],
                'tech_tags': ['VR', '360° Panorama', 'Interactive Hotspots', 'WebVR'],
                'image_url': 'assets/images/projects/vr-campus-tour.svg',
                'github_url': 'https://github.com/jones3103/vr-campus-tour-360',
                'order': 2,
                'featured': True
            },
            {
                'title': 'Smart Agriculture Projects',
                'slug': 'smart-agriculture-projects',
                'category': 'AgriTech & Sensor Automation',
                'short_desc': 'Sensor- and embedded-system-based agricultural solutions focused on field monitoring and supporting smarter, technology-enabled farming.',
                'full_desc': 'An array of sensor- and embedded-system-driven agricultural automation units designed for precision farming. Focuses on continuous field monitoring, microclimate data collection, and automated drip irrigation actuation to optimize water usage.',
                'features': [
                    'Multi-depth capacitive soil moisture and pH sensor arrays communicating via low-power protocol.',
                    'Ambient temperature and relative humidity tracking for pest and disease risk forecasting.',
                    'Automated solenoid valve irrigation trigger algorithms responding dynamically to weather trends.',
                    'Solar-powered autonomous node design with deep sleep cycles for extended field deployment.'
                ],
                'tech_tags': ['Sensors', 'Embedded Systems', 'IoT', 'Agriculture'],
                'image_url': 'assets/images/projects/smart-agriculture.svg',
                'github_url': 'https://github.com/jones3103/smart-agriculture-embedded-iot',
                'order': 3,
                'featured': True
            }
        ]

        for p in projects_data:
            Project.objects.create(**p)
        self.stdout.write(f"[OK] Created {len(projects_data)} projects")

        # 2. Skills
        Skill.objects.all().delete()
        skills_data = [
            # Programming
            ('Programming', 'Python', 'AI, Scripting & Data', 1),
            ('Programming', 'C', 'Firmware & Embedded Systems', 2),
            ('Programming', 'SQL', 'Relational Database Queries', 3),
            # Embedded & Robotics
            ('Embedded & Robotics', 'Jetson Nano', 'Edge Computing & AI Acceleration', 1),
            ('Embedded & Robotics', 'ESP32', 'Wireless IoT Telemetry & Microcontroller', 2),
            ('Embedded & Robotics', 'PCA9685 Servo Driver', '16-Channel PWM Actuator Control', 3),
            ('Embedded & Robotics', 'IMU Sensor Integration', 'Orientation & Motion Telemetry', 4),
            # AI Development Tools
            ('AI Development Tools', 'Google Antigravity', 'Advanced Agentic Engineering', 1),
            ('AI Development Tools', 'Claude', 'Code Synthesis & Architectural Reasoning', 2),
            # Areas of Interest
            ('Interests', 'Robotics', 'Kinematics & Autonomous Motion', 1),
            ('Interests', 'Artificial Intelligence', 'Intelligent Agent Workflows', 2),
            ('Interests', 'Machine Learning', 'Applied Data Models', 3),
            ('Interests', 'Web Development', 'Full-Stack Modern Interfaces', 4),
            ('Interests', 'App Development', 'Mobile Applications & IoT Dashboards', 5),
        ]

        for cat, name, meta, ord_num in skills_data:
            Skill.objects.create(category=cat, name=name, meta=meta, order=ord_num)
        self.stdout.write(f"[OK] Created {len(skills_data)} skills")

        # 3. Education
        Education.objects.all().delete()
        edu_data = [
            {
                'degree': 'B.E. – Mechanical Engineering',
                'institution': 'Indra Ganesan College of Engineering',
                'period': '2025–2029 (Ongoing)',
                'grade': 'Undergraduate',
                'description': 'Pursuing comprehensive studies in core mechanical principles, thermodynamics, kinematics, computer-aided engineering, and exploring embedded systems, mechatronics, and autonomous robotics architectures.',
                'tags': ['Mechanical Engineering', 'Robotics & Mechatronics', 'Embedded Computing', 'CAD Modeling'],
                'order': 1
            },
            {
                'degree': 'Higher Secondary – Computer Science Group',
                'institution': 'Sacred Heart Higher Secondary School',
                'period': '2023–2025',
                'grade': '70% Aggregate',
                'description': 'Completed secondary education with focused coursework in Computer Science, algorithmic foundations, Mathematics, and Physics, establishing a strong base in programming logic and numerical problem-solving.',
                'tags': ['Computer Science', 'Mathematics', 'Physics', 'Logic & Algorithms'],
                'order': 2
            }
        ]
        for e in edu_data:
            Education.objects.create(**e)
        self.stdout.write(f"[OK] Created {len(edu_data)} education entries")

        # 4. Achievements
        Achievement.objects.all().delete()
        achieve_data = [
            {
                'title': 'Nano Technology Workshop',
                'subtitle': 'Certificate of Participation',
                'category': 'Technical Workshop',
                'description': 'Participated in an intensive hands-on technical workshop on advanced Nano Technology, nano-materials, and their emerging applications in high-efficiency electromechanical engineering.',
                'verified': True,
                'order': 1
            },
            {
                'title': '100% Attendance',
                'subtitle': 'Attendance Recognition',
                'category': 'Excellence & Discipline',
                'description': 'Awarded special formal recognition for maintaining an unbroken 100% attendance record, reflecting strong punctuality, steadfast consistency, and rigorous academic discipline.',
                'verified': True,
                'order': 2
            },
            {
                'title': '1st Prize Winner',
                'subtitle': 'Non-Technical Event',
                'category': 'Competition Winner',
                'description': 'Clinched the First Prize among multi-college participants in a competitive non-technical institutional event, highlighting creative agility, team collaboration, and communication skills.',
                'verified': True,
                'order': 3
            }
        ]
        for a in achieve_data:
            Achievement.objects.create(**a)
        self.stdout.write(f"[OK] Created {len(achieve_data)} achievements")

        self.stdout.write("All portfolio data successfully populated!")
