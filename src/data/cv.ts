// Single source of truth for the site. To update the CV, edit this file and
// replace public/cv_Edoardo_Gennaretti.pdf.

export interface Link {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail' | 'file';
}

export interface Entry {
  org: string;
  role: string;
  period: string;
  location?: string;
  href?: string;
  tags?: string[];
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const profile = {
  name: 'Edoardo Gennaretti',
  tagline: 'MS Computer Science @ UIC & PoliMi · Security research',
  location: 'Chicago, USA',
  bio: [
    'I’m a Computer Science master’s student in the UIC–Politecnico di Milano double degree, working on systems and AI security.',
    'I fuzz EV-charging protocols at the Systems and Internet Security Lab, study how malicious skills can hijack AI agents for my thesis, and spend the rest of my time playing, building and organizing CTFs.',
  ],
  description:
    'Edoardo Gennaretti — MS Computer Science student at UIC and Politecnico di Milano working on systems and AI security, fuzzing and CTFs.',
};

export const links: Link[] = [
  { label: 'GitHub', href: 'https://github.com/edogenna', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/edoardogennaretti', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:edo.gennaretti@gmail.com', icon: 'mail' },
  { label: 'CV (PDF)', href: '/cv_Edoardo_Gennaretti.pdf', icon: 'file' },
];

export const research: Entry[] = [
  {
    org: 'Master’s Thesis — Security of AI Agents',
    role: 'UIC & Politecnico di Milano',
    period: 'In progress',
    tags: ['Python', 'MCP', 'OpenClaw'],
    bullets: [
      'Investigating security risks in AI agent frameworks, focusing on OpenClaw and MCP skills.',
      'Analyzing how malicious skills can exploit and manipulate AI agents, and developing access controls to mitigate these risks.',
    ],
  },
  {
    org: 'Discovery Partners Institute (DPI)',
    role: 'Graduate Student Researcher · Systems and Internet Security Lab',
    period: 'Nov 2025 – Present',
    location: 'Chicago, USA',
    tags: ['Python', 'Fuzzing', 'OCPP'],
    bullets: [
      'Contributing to OCPPStorm, a security testing framework developed at SISL.',
      'Extending its fuzzing support to additional EV-charging protocols.',
    ],
  },
];

export const experience: Entry[] = [
  {
    org: 'UIC Capture the Flame',
    role: 'Organizer & Challenge Author',
    period: 'Oct 2025 – Apr 2026',
    location: 'Chicago, USA',
    href: 'https://github.com/edogenna/Capture-The-Flame/tree/main',
    bullets: [
      'Co-organized a city-wide CTF at UIC with 100+ participants and helped run its infrastructure.',
      'Designed and tested reverse engineering and cryptography challenges.',
    ],
  },
  {
    org: 'CyberChallenge.IT',
    role: 'CTF National Finalist',
    period: 'Jan 2025 – Jul 2025',
    location: 'Milan, Italy',
    href: 'https://cyberchallenge.it/',
    bullets: [
      'Selected from 250+ candidates as one of the top 6 students to represent PoliMi at the national final.',
      '12-week training program in cryptography, web, software and network security, and malware analysis.',
      'Competed in the national Attack/Defense final, focusing on binary exploitation and reverse engineering.',
    ],
  },
  {
    org: 'Atmosia (start-up)',
    role: 'Co-founder & Software Developer',
    period: 'Oct 2021 – Nov 2023',
    location: 'Milan, Italy',
    href: 'https://enhanceuniversity.eu/challenge-winners/#:~:text=2%2C%20Team%209-,Atmosia,-Atmosia%20provides%20a',
    bullets: [
      'Co-founded a ClimateTech start-up building a network of IoT sensors for air-pollution monitoring in Milan.',
      'Won a €35,000 grant and a one-year incubation in a competition run by Enhance, an alliance of European technical universities.',
      'Developed the C software for real-time data acquisition from multiple types of environmental sensors.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Capture the Flame — CTF Challenges',
    href: 'https://github.com/edogenna/Capture-The-Flame/tree/main',
    tags: ['C', 'Python', 'Reverse engineering', 'Crypto'],
    description:
      'Five challenges I wrote for UIC’s intercollegiate CTF: two C crackmes (a product-key checker with checksum and XOR constraints, and a flag check split across functions), an XOR-obfuscated “firewall” password, a Python payload hidden behind Fernet encryption, and a SHA-256 password-cracking task.',
  },
  {
    title: 'Artificial Neural Networks & Deep Learning',
    href: 'https://github.com/edogenna/Artificial-Neural-Network-and-Deep-Learning',
    tags: ['Python', 'TensorFlow', 'Keras'],
    description:
      'A blood-cell image classifier reaching 0.86 accuracy after iterating over 10+ architectures (ConvNeXtBase, Inception modules) with RandAug augmentation, plus a from-scratch transformer UNet for grayscale image segmentation at 0.70 mIoU.',
  },
  {
    title: 'My Shelfie',
    href: 'https://github.com/edogenna/My-Shelfie-progetto-ing-sw-22-23',
    tags: ['Java', 'RMI', 'Sockets', 'JUnit'],
    description:
      'A multiplayer Java version of the board game, built in a team of four: client and server over both RMI and sockets, CLI and GUI, save/load persistence and disconnection resilience on an MVC design.',
  },
  {
    title: 'Wordle in C',
    href: 'https://github.com/edogenna/Wordle-Game-Project-API-2022',
    tags: ['C11', 'Data structures', 'Valgrind'],
    description:
      'Wordle in C11, tuned to meet strict memory and speed benchmarks. A custom BST + linked-list structure filters thousands of admissible words in real time as constraints evolve; debugged with Valgrind, AddressSanitizer and GDB.',
  },
  {
    title: 'MasterZ Solana',
    href: 'https://github.com/edogenna/MasterZ-Solana',
    tags: ['TypeScript', 'Solana', 'web3.js', 'SPL Token'],
    description:
      'TypeScript scripts from the MasterZ Solana course that walk through the token lifecycle on devnet: generating a keypair, requesting an airdrop, creating an SPL token mint, minting to an associated token account and transferring tokens to a new wallet.',
  },
  {
    title: 'Digital Logic — VHDL Hardware Module',
    href: 'https://github.com/edogenna/Digital-Logic-Project-2023',
    tags: ['VHDL', 'Vivado', 'FSM'],
    description:
      'A hardware component, designed in a pair, that reads a memory address and an output channel from a 1-bit serial input and routes the word stored there to one of four 8-bit outputs. Verified with testbenches for corner cases, mid-run resets and stress runs; graded 30 / 30.',
  },
];

export const education: Entry[] = [
  {
    org: 'University of Illinois at Chicago (UIC)',
    role: 'M.S. in Computer Science',
    period: 'Feb 2025 – Exp. Sept 2027',
    location: 'Chicago, USA',
    bullets: [
      'Double degree program with Politecnico di Milano.',
      'Courses: Network Security, Computer Systems Security, Cryptography, Neural Networks, Intro to AI, Intro to ML.',
    ],
  },
  {
    org: 'Politecnico di Milano (PoliMi)',
    role: 'M.S. in Computer Science and Engineering',
    period: 'Mar 2024 – Exp. Sept 2027',
    location: 'Milan, Italy',
    bullets: [
      'Focus on cybersecurity and artificial intelligence. GPA 28.14 / 30.',
      'Courses: Computer Security, Offensive and Defensive Security, Digital Forensics, Advanced Algorithms and Parallel Programming.',
      'Merit-based scholarship as one of the top freshmen, plus annual tuition waivers for high academic standing.',
    ],
  },
  {
    org: 'Politecnico di Milano (PoliMi)',
    role: 'B.S. in Computer Science and Engineering',
    period: 'Sep 2020 – Mar 2024',
    location: 'Milan, Italy',
    bullets: [
      'Final grade 106 / 110, top 15% of the class.',
      'Athens program: a week-long intensive course on extreme value statistics at MINES ParisTech.',
    ],
  },
];

export const skills: SkillGroup[] = [
  { label: 'Security', items: ['Reverse engineering', 'Penetration testing', 'Vulnerability analysis', 'Fuzzing'] },
  { label: 'Programming', items: ['C', 'C++', 'Python', 'Java', 'Assembly'] },
  { label: 'Tools', items: ['Ghidra', 'IDA Pro', 'pwntools', 'GDB', 'Burp Suite', 'Wireshark', 'Docker', 'Git', 'Linux'] },
  { label: 'Languages', items: ['Italian (native)', 'English (C1)'] },
];
