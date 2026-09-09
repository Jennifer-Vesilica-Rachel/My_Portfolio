import { CertificateItem, ExperienceItem, ProjectItem, WayfindingDestination } from '../types';
import jenniferPortraitImg from '../assets/images/image.jpg';

export const PORTFOLIO_IMAGES = {
  workspaceBanner: jenniferPortraitImg,
  jenniferPortrait: jenniferPortraitImg,
  aravindCertThumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtPZw0cmo0KSZfjZ7I7RLp5kLV0jEikHXyuNz-8ZWGxbHKJdgnal6QVfVit8R73Yb8ZSxYOv-CiOonkHObjGbaHzUCY1zd4jrYh19mpGp437QfKQBcvxhsWFpDtHlx8kQaEVvtotG3-1B8t5bUzaB5bkwVcBV4CsmUixuplqXH3Cix6Hju2zUU5mnR9AOsnDMUlxcyiHImnMFDy7jEH5r6LBsMl7nhKWvT012SzRN_QevNuqd1fW48yiaXSEb9iHWIQg",
  aravindCertHighRes: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWqGXCkMJw_4A7Iewnhe--D9L83FZcvgC_iFNCPj-APJkoO-cU5uAW0X90ltWmsVBs3vXcXvEhUmRt2tJagDplcRTFY-gnsPsDprWsdcB6Oj-XFi9NZGejuZ-v-FGu9gbIE8eb_7sWL9CbZ40MrQb5qYVBQophUXSxxnY9fHY9QvsXCSqj52ewCbOKBWf2G3cJNET4xolKSoH6e0BeaOymQrNoKXe3_wV9Yh3JpUM-sae6vFJ3k1yLLZ0vD9CD6iQuQQ",
  aravindCertDetail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAj1Q8cRMw_ZW2VotJ6UuzTILbnMVqIarpR3bxraBBmy0CkkZ2aIglYUW4N-8W4rT65EcXaVpQU3ydXS9V0x1RuSNfjAiI1jo9x3raZC34TrScTK7kK-MV1YS5BlQ6vDW9vJFFHySH06fN6xxBgj__sKXc0fbpyhQByojLxWKLbbYQEt9_GFs4PjsNDYxFmFOFMZHNVqF61mbm3uSo4YBHtpskxUew3rsdVXxQlCHAAJl3DbYAZVJX5evA9Ehry8e1bPg",
  upturneCertThumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM6IglmqeWIp6-pxDvIh4LEGyZ1iq0fRVID-6BNi3BJS8k5YJ7DernHEWfOTW0tO2bjsfZiu04aNJAaPc2IZAHQ-y2p4YbL1SYZm04v9WVxw4yPEIN45HqovnCYBCnuv1h70gMmOXlsV3pDj-a3Kg4tsD_eC5CJsA3BwO5mTBG_luAqclEsn4HF734pkvhB-ric3N1i8Pi8yrXDRUhuGzGVUjQaGe88g2zGwGQ9WGW-BW6eNzoor0oGW99Raz_5qzicA",
  upturneCertHighRes: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIDTRuUNzsFO_cWpKCW_BBVKgj2wXNckK6_g0I2DpjBGKUlLo0kCOabpsLLBN2aUx4WZdcjt_MWm_xFITkfntb4hnzFpuid9ZIfkOuG309ts7o-oggBr0RIv2bHGXgt5JjySt-nRKsC-u_UPgZozGTYKic4SVnFT2Kb9y6q9-w9f-uZmXaX5PzCeJgBJ-auNv_h0WqucrnfOHcUDEQHpmi8vZM87vWumm51picuY5pNnPp3Hof0j79E6zrTFyYNNO0lA",
  upturneCertDetail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDofdaZWTdAq5e3PiLRgQALNqZ1WLkX-RveaDHF8nPjhKtEQ2Zq-BFBuLLcbzoE8kF_Zzuy2Aq1fp4HqgDUz4D2d3rImPuucZj_C3-uqWAxKpdzPe-vKFFTL_5pZ6JqikA9ugbhyAa3ckYzg-IwDHRKBXJMxEQiKn3e_-sd_ul2DUkm8Do6Gy1Nt4XJ01I9888p-UEzaAyCLHWqzmuXfuOL9CjaD6veKJV6HFlEkCYWRY6piP5Z-_JGAjaz9lxy5iUnwg",
  aravindHospitalExterior: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzajF87HSuCtrsTsHbB-x58FadtpxEW6cAKRf1k8i0y-nscCirUvSwm1YFvMAkdT-3Ycte2q-jLXyEWarfkLgIC7dhew0PCp4CuWsfwCEfPVw96U8-YNr8MrfglnPEVNkmqsRDx48QfnF8E0qxQPenwsN97ia7yhZDwy3r7Wr4DmHJZ6ZigbJoTzcX_qZMLmlcpYX-eUzvco3rv49W3heiZOljfEv2K6z-9QfFEDq9yG2DvakhKjmh",
  pulsebayWorkspace: "https://lh3.googleusercontent.com/aida-public/AB6AXuAr4rNJXOVLNKKQOdrExigGa_wxMX-Rwhls7FFbMOY4YkswihFvuYmERTUlcBgdaGH99AtJ9z6kR_0mN2hk9yNjU4S1V6Tc-aZAe8Yq5HNAnrBNgHADqJGInnlomSJE1MbIGRnLV46WSnwWg2HHAZ3RMAUYZub_i4yefaTebp9XwrDziyldQbI9CAOr0i7oQAkGS_XD6k9zBCZu_WPgLHzPJMEz6arA7f5BibI6TENGrOVcgTDRWga_",
  hospitalNavMockup: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLYEsXWsx5DrNK6XVeX4BgBMAN-SA4CO5OCOpSEB2pmjcwVOQoVckvfGHsbQCBSRXnTC-5VYuHvGtX4J_b8thK5Vz2c-C5ZaJE7p7eEmXN5oy45js2dkgNC7-HNWDeTNgNNlSV3K06CHg223hoH0HJJvYSJO4ZL_xNo0DjvQfrT6QXH7QFM3_hxUEXIFU9vyYj5QzNpIeWDOEBlxKnSEsAAJJpXRBXHJrAv1hsDNA-RCCaHEDKWdBM",
  hallwayLandmark: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeVHBptVMiQhy3JWtql19Ok8k4SIZfqEN8j-m1qx4uHuVbF_HgSdr4DXrWRVVlVVpi_1RZQl7grSUHuMfCef-Du2EJBAjER36JN4FoPuQJpRcHNXMldObFt6YgBvDM91jSK190srI87Dgjt8KXwvMWZ1VWumKYlKHmB_F8c6bRL8u6tp0P-FDrDhCxNH8QsfnI5ertuWz5BlxRvwd81nPszKKtIXR-YJSTQ_bm8x2ITaWXwBqGlTkX"
};

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'aravind-cert',
    refNo: 'Ref No. AEH-INT-2025',
    issuer: 'Aravind Eye Hospital & Postgraduate Institute of Ophthalmology',
    subLocation: 'Postgraduate Institute of Ophthalmology • Pondicherry, India',
    date: '15.07.2025',
    title: 'Internship Completion Certificate',
    subtitle: 'Clinical Tech Internship & Smart Systems Project Lead',
    capstoneLabel: 'Key Research Capstone',
    capstoneTitle: '“Enhancing Patient Experience through QR based Smart Navigation & Support Analysis”',
    description: 'Observed clinical and administrative operations across multiple departments, designed React-based wayfinding, analyzed call center peak bottlenecks, and engineered fixes for Medical Record location integrity.',
    signatory: 'Dr. R. Venkatesh, Chief Medical Officer, D.O, DNB. Governed by Govel Trust & Affiliated to National Board of Examinations in Medical Sciences.',
    verificationBadge: 'Govel Trust Verified',
    thumbnailUrl: PORTFOLIO_IMAGES.aravindCertThumb,
    highResUrl: PORTFOLIO_IMAGES.aravindCertHighRes
  },
  {
    id: 'upturne-cert',
    refNo: 'Ref No. UPT-INT-2026-0714',
    issuer: 'Upturne Software & Services',
    subLocation: 'Pulsebay Coworking, 3rd Floor, South Boulevard, Puducherry',
    date: '14-07-2026',
    title: 'Internship Completion Certificate',
    subtitle: 'Web Development & AI Automation Intern',
    capstoneLabel: 'Official Internship Domain',
    capstoneTitle: 'Web Development & AI Automation Intern',
    description: 'Hands-on exposure to web application development, AI automations, real-world software practices, live production projects, and time-bound hackathon innovation at Pulsebay Coworking, Puducherry.',
    signatory: 'Sophas Samuel S, Founder & CEO, Upturne Software & Services • Phone: +91 - 6374125104 • Email: contact@upturne.com',
    verificationBadge: 'Verified • 14-07-2026',
    thumbnailUrl: PORTFOLIO_IMAGES.upturneCertThumb,
    highResUrl: PORTFOLIO_IMAGES.upturneCertHighRes
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'aravind-role',
    role: 'Tech Intern',
    organization: 'Aravind Eye Hospital, Puducherry',
    organizationType: 'Healthcare Technology Internship',
    period: '06/2025 – 07/2025',
    location: 'Puducherry, India',
    focusScope: 'Worked closely with hospital IT and medical records teams to understand workflows and apply practical, user-friendly solutions. Built a QR-code indoor navigation system using React.js and Tailwind CSS to help patients find locations easily and reduce staff interruptions. Analyzed medical record location changes, found common errors, and suggested fixes to improve file tracking and reduce manual mistakes.',
    issuedBy: 'Dr. R. Venkatesh',
    issuerRole: 'Chief Medical Officer, CMO',
    quote: '"During the internship period, she observed various clinical and administrative functions across multiple departments and gained insights into the hospital\'s operations. Her performance was commendable. We found her to be sincere, attentive, and eager to learn."',
    quoteAuthor: 'Dr. R. Venkatesh, Chief Medical Officer (Aravind Eye Hospital, Pondicherry)',
    deliverables: [
      'Worked closely with hospital IT and medical records teams to understand workflows and apply practical, user-friendly solutions.',
      'Built a QR-code indoor navigation system using React.js and Tailwind CSS to help patients find locations easily and reduce staff interruptions.',
      'Analyzed medical record location changes, found common errors, and suggested fixes to improve file tracking and reduce manual mistakes.'
    ],
    techStack: ['React.js', 'Tailwind CSS', 'QR Navigation', 'Medical Records', 'Workflow Optimization'],
    hasCertificate: true,
    certModalId: 'aravind-cert',
    badgeType: 'Hospital Tech Intern'
  },
  {
    id: 'upturne-role',
    role: 'Web Development & AI Automation Intern',
    organization: 'Upturne Software & Services',
    organizationType: 'Software Development & AI Practices',
    period: '06/2026 – 07/2026',
    location: 'Puducherry, India',
    focusScope: 'Gained hands-on exposure to web application development, AI automation, and real-world software development practices. Worked on live projects, gaining practical knowledge of development workflows and industry practices. Collaborated with the team to understand and contribute to real-world software development processes.',
    issuedBy: 'Sophas Samuel S',
    issuerRole: 'Founder & CEO, Upturne',
    quote: '"Throughout the internship period, she demonstrated a willingness to learn and gain practical experience. We appreciate your participation, efforts, and contributions during the internship."',
    quoteAuthor: 'Sophas Samuel S, Founder & CEO (Upturne Software & Services)',
    deliverables: [
      'Gained hands-on exposure to web application development, AI automation, and real-world software development practices.',
      'Worked on live projects, gaining practical knowledge of development workflows and industry practices.',
      'Collaborated with the team to understand and contribute to real-world software development processes.',
      'Received guidance and support in hackathon activities, developing skills in problem-solving, innovation, teamwork, and time-bound solution development.',
      'Strengthened practical knowledge through exposure to web technologies, AI automation, project collaboration, and software development workflows.'
    ],
    techStack: ['Web Technologies', 'AI Automation', 'Software Workflows', 'Live Projects', 'Hackathons'],
    hasCertificate: true,
    certModalId: 'upturne-cert',
    badgeType: 'Software Intern'
  },
  {
    id: 'zoho-role',
    role: 'Zoho Creator Student Trainee (Young Creators Program)',
    organization: 'Zoho Corporation',
    organizationType: 'Young Creators Program Partnership',
    period: '11/2023',
    location: 'Puducherry, India',
    focusScope: 'Completed hands-on training in Zoho Creator to build low-code applications. Gained practical experience in form creation, workflow automation, and custom dashboards. Participated under the Young Creators Program at Women\'s Engineering College, Puducherry.',
    issuedBy: 'Young Creators Program',
    issuerRole: 'Zoho Corporation',
    quote: '"Completed hands-on training in Zoho Creator to build low-code applications with workflow automation and custom dashboards."',
    quoteAuthor: 'Zoho Young Creators Program Mentors',
    deliverables: [
      'Completed hands-on training in Zoho Creator to build low-code applications.',
      'Gained practical experience in form creation, workflow automation, and custom dashboards.',
      'Participated under the Young Creators Program at Women\'s Engineering College, Puducherry.'
    ],
    techStack: ['Zoho Creator', 'Workflow Automation', 'Custom Dashboards', 'Low-Code Applications'],
    hasCertificate: false,
    badgeType: 'Student Trainee'
  }
];

export const WAYFINDING_DESTINATIONS: Record<string, WayfindingDestination> = {
  glaucoma: {
    id: 'glaucoma',
    name: 'Glaucoma Wing',
    title: 'Wing B: Glaucoma Clinic',
    instruction: 'Take Corridor 2, elevator to 1st Floor',
    estimate: '65m • 1.5 mins',
    path: 'M 40 140 L 40 100 L 160 100 L 160 50',
    icon: 'pin_drop',
    desc: 'Passing through Corridor 2: Turn right immediately after the central water cooler and optical counter.',
    landmarkImg: PORTFOLIO_IMAGES.hallwayLandmark
  },
  pharmacy: {
    id: 'pharmacy',
    name: 'Main Pharmacy',
    title: 'Central Outpatient Pharmacy',
    instruction: 'Ground Level, follow amber path to Desk 4',
    estimate: '25m • 0.5 mins',
    path: 'M 40 140 L 40 100 L 90 100',
    icon: 'local_pharmacy',
    desc: 'Direct Ground Concourse: Follow the amber directional floor bands directly to dispensing kiosk #4.',
    landmarkImg: PORTFOLIO_IMAGES.hallwayLandmark
  },
  refraction: {
    id: 'refraction',
    name: 'Refraction Lab',
    title: 'Refraction & Diagnostics Lab',
    instruction: 'Corridor 1 East, adjoining Room 108',
    estimate: '110m • 2.5 mins',
    path: 'M 40 140 L 40 100 L 260 100 L 260 140',
    icon: 'visibility',
    desc: 'Pass through the main atrium, proceed beyond the pediatric eye ward to Room 108 reception.',
    landmarkImg: PORTFOLIO_IMAGES.hallwayLandmark
  }
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'shopify-store',
    title: 'Shopify E-Commerce Website',
    period: '06/2026 – 07/2026',
    organizationTag: 'E-Commerce Development',
    description: 'Designed and developed a responsive Shopify e-commerce website with customized store layout, product collections, and navigation, optimized for mobile responsiveness and user experience.',
    tags: ['Shopify', 'Liquid', 'E-Commerce', 'Mobile Responsive', 'Product Catalog', 'UX Design'],
    category: 'fullstack',
    metricHighlight: 'Mobile-Optimized Storefront',
    bullets: [
      'Designed and developed a responsive Shopify e-commerce website.',
      'Customized the store layout, product collections, and navigation.',
      'Implemented user-friendly shopping and product browsing features.',
      'Optimized the website for mobile responsiveness and improved user experience.'
    ]
  },
  {
    id: 'indoor-nav',
    title: 'Smart Indoor Navigation System',
    period: '06/2025 – 07/2025',
    organizationTag: 'Aravind Eye Hospital • Clinical Tech',
    description: 'Created a QR code-based website to help hospital visitors easily find their way using indoor maps, featuring clickable map pins, real-time photos, and printed QR posters at entry points.',
    tags: ['React.js', 'Tailwind CSS', 'QR Code Indoor Maps', 'Netlify', 'Bolt', 'Mobile Responsive'],
    category: 'healthcare',
    metricHighlight: '100% Client-Side QR Navigation',
    bullets: [
      'Created a QR code-based website to help hospital visitors easily find their way using indoor maps.',
      'Used React.js and Tailwind CSS to build a user-friendly and mobile-responsive site.',
      'Added clickable map pins and real-time photos of hospital areas for better visual guidance.',
      'Generated QR codes for different locations and placed posters at key hospital entry points.',
      'Collected feedback from staff and improved the design and features based on suggestions.',
      'Deployed the site using Netlify and Bolt, and documented ideas for future improvements.'
    ]
  },
  {
    id: 'call-center',
    title: 'Hospital Call Center Analytics Engine',
    period: '06/2025',
    organizationTag: 'Aravind Eye Hospital • Operations Analysis',
    description: 'Exploratory data analysis across inpatient and outpatient appointment helpline records. Isolated recurring midday call spike bottlenecks and proposed staffing reallocation models that curtailed unanswered inquiries.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Power BI', 'Google Sheets'],
    category: 'analytics',
    metricHighlight: '-28% Missed Calls',
    bullets: [
      'Analyzed hourly helpline telephony call logs to uncover peak patient inquiry surges.',
      'Identified repetitive midday waiting intervals and formulated staffing reallocation models.',
      'Produced executive visualization dashboards showing call trends and resolution times.'
    ]
  },
  {
    id: 'mr-audit',
    title: 'Medical Record (MR) Tracking & Audit Pipeline',
    period: '07/2025',
    organizationTag: 'Hospital Systems & Informatics',
    description: 'Analyzed medical record location changes, identified common errors, and proposed automated barcoding checkpoints to improve file tracking and reduce manual mistakes.',
    tags: ['SQL', 'Data Audit', 'Python', 'Process Control'],
    category: 'healthcare',
    metricHighlight: '99.4% Verified Traceability',
    bullets: [
      'Analyzed medical record location changes across clinical departments.',
      'Found common routing errors and misplaced physical chart pathways.',
      'Suggested fixes to improve file tracking and reduce manual mistakes.'
    ]
  },
  {
    id: 'zoho-dashboard',
    title: 'Custom Low-Code Operations Dashboard',
    period: '11/2023',
    organizationTag: 'Zoho Young Creators Program',
    description: 'Completed hands-on training in Zoho Creator to build low-code applications with interactive forms, workflow automation, and custom reporting dashboards.',
    tags: ['Zoho Creator', 'Workflow Automation', 'Custom Dashboards', 'Low-Code'],
    category: 'fullstack',
    metricHighlight: 'Automated Triggers',
    bullets: [
      'Completed hands-on training in Zoho Creator to build low-code applications.',
      'Gained practical experience in form creation, workflow automation, and custom dashboards.',
      'Participated under the Young Creators Program at Women\'s Engineering College, Puducherry.'
    ]
  }
];

export const RESUME_DATA = {
  header: {
    name: 'JENNIFER VESILICA RACHEL S',
    email: 'jennifersagaidasse@gmail.com',
    phone: '+91 8248092194',
    location: 'Puducherry, India',
    linkedin: 'Jennifer Vesilica Rachel S',
    linkedinUrl: 'https://www.linkedin.com',
    github: 'Jennifer-Vesilica-Rachel',
    githubUrl: 'https://github.com/Jennifer-Vesilica-Rachel'
  },
  profile: 'Currently pursuing a Bachelor of Technology in Information Science and Engineering, with strong interests in software development, data analytics, and intelligent systems. Eager to apply technical skills and hands-on project experience to real-world problems, while continuously learning and contributing to innovative, technology-driven solutions.',
  experience: [
    {
      period: '06/2025 – 07/2025',
      location: 'Puducherry, India',
      title: 'ARAVIND EYE HOSPITAL, PUDUCHERRY, Tech Intern',
      bullets: [
        'Worked closely with hospital IT and medical records teams to understand workflows and apply practical, user-friendly solutions.',
        'Built a QR-code indoor navigation system using React.js and Tailwind CSS to help patients find locations easily and reduce staff interruptions.',
        'Analyzed medical record location changes, found common errors, and suggested fixes to improve file tracking and reduce manual mistakes.'
      ]
    },
    {
      period: '06/2026 – 07/2026',
      location: 'Puducherry, India',
      title: 'UPTURNE SOFTWARE & SERVICES',
      bullets: [
        'Gained hands-on exposure to web application development, AI automation, and real-world software development practices.',
        'Worked on live projects, gaining practical knowledge of development workflows and industry practices.',
        'Collaborated with the team to understand and contribute to real-world software development processes.',
        'Received guidance and support in hackathon activities, developing skills in problem-solving, innovation, teamwork, and time-bound solution development.',
        'Strengthened practical knowledge through exposure to web technologies, AI automation, project collaboration, and software development workflows.'
      ]
    },
    {
      period: '11/2023',
      location: 'Puducherry, India',
      title: 'Zoho Corporation, Zoho Creator Student Trainee (Young Creators Program)',
      bullets: [
        'Completed hands-on training in Zoho Creator to build low-code applications.',
        'Gained practical experience in form creation, workflow automation, and custom dashboards.',
        'Participated under the Young Creators Program at Women\'s Engineering College, Puducherry.'
      ]
    }
  ],
  projects: [
    {
      period: '06/2026 – 07/2026',
      title: 'Shopify E-Commerce Website',
      bullets: [
        'Designed and developed a responsive Shopify e-commerce website.',
        'Customized the store layout, product collections, and navigation.',
        'Implemented user-friendly shopping and product browsing features.',
        'Optimized the website for mobile responsiveness and improved user experience.'
      ]
    },
    {
      period: '06/2025 – 07/2025',
      title: 'Smart Indoor Navigation System',
      bullets: [
        'Created a QR code-based website to help hospital visitors easily find their way using indoor maps.',
        'Used React.js and Tailwind CSS to build a user-friendly and mobile-responsive site.',
        'Added clickable map pins and real-time photos of hospital areas for better visual guidance.',
        'Generated QR codes for different locations and placed posters at key hospital entry points.',
        'Collected feedback from staff and improved the design and features based on suggestions.',
        'Deployed the site using Netlify and Bolt, and documented ideas for future improvements.'
      ]
    }
  ],
  education: {
    period: '2023 – 2027',
    location: 'Puducherry, India',
    degree: "B.Tech in Information Science and Engineering, WOMEN'S ENGINEERING COLLEGE",
    institutionSub: '(Constituent College of Puducherry Technological University)',
    details: 'Focused on programming, data structures, databases, machine learning, artificial intelligence, cloud computing, and full-stack development, with hands-on experience through labs, projects, and internships.'
  }
};
