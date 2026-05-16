export const personalInfo = {
  name: "Mohanarao Gorle",
  firstName: "Mohanarao",
  lastName: "Gorle",
  title: "Full Stack Developer",
  subtitle: "MERN Stack Engineer",
  location: "Hyderabad, India",
  tagline: "Crafting clean, scalable, and modern web experiences.",
  email: "gorlemohanarao2002@gmail.com",
  phone: "+91-9133505178",
  links: {
    linkedin: "https://linkedin.com/in/ADD_YOUR_LINKEDIN",
    github: "https://github.com/ADD_YOUR_GITHUB",
    leetcode: "https://leetcode.com/ADD_YOUR_LEETCODE",
    portfolio: "#",
  },
  summary:
    "Enthusiastic and detail-oriented software developer with strong expertise in MERN stack development, REST APIs, and scalable full-stack applications. Passionate about building clean user experiences and performant web products.",
};

export const skills = [
  { name: "JavaScript", category: "Language", level: 90 },
  { name: "TypeScript", category: "Language", level: 82 },
  { name: "React.js", category: "Frontend", level: 90 },
  { name: "Next.js", category: "Frontend", level: 80 },
  { name: "Node.js", category: "Backend", level: 85 },
  { name: "Express.js", category: "Backend", level: 83 },
  { name: "MongoDB", category: "Database", level: 80 },
  { name: "MySQL", category: "Database", level: 72 },
  { name: "Tailwind CSS", category: "Styling", level: 90 },
  { name: "Redux", category: "State", level: 78 },
  { name: "Git & GitHub", category: "Tools", level: 85 },
  { name: "REST APIs", category: "Backend", level: 88 },
];

export const experience = [
  {
    role: "Software Development Engineer Intern",
    type: "Full Stack",
    company: "Revature",
    location: "Remote",
    period: "Oct 2024 – Mar 2025",
    achievements: [
      "Designed, developed, and deployed 2 full-stack MERN applications to production, accelerating feature delivery speed by 30% through modular architecture.",
      "Built responsive, cross-browser UIs using React.js and Tailwind CSS, achieving a 40% increase in testing-phase user satisfaction scores.",
      "Optimized MongoDB queries and Express.js middleware, reducing average API response times and improving application scalability.",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
  },
];

export const projects = [
  {
    title: "Prescripto",
    subtitle: "Doctor Appointment Booking System",
    description:
      "A scalable healthcare platform with real-time appointment scheduling, role-based access control, and secure payment processing for patients, doctors, and admins.",
    tech: ["MERN", "JWT", "Razorpay", "Tailwind CSS"],
    features: [
      "Real-time appointment scheduling",
      "Multi-role dashboards (Patient, Doctor, Admin)",
      "Secure JWT authentication",
      "Razorpay payment integration",
    ],
    github: "https://github.com/ADD_YOUR_GITHUB",
    demo: "#",
    gradient: "from-blue-500/10 to-indigo-500/10",
    accentColor: "#0071e3",
  },
  {
    title: "Forever",
    subtitle: "Full Stack E-Commerce Platform",
    description:
      "An end-to-end e-commerce platform with product browsing, cart management, multi-modal checkout, and global state management via Redux.",
    tech: ["MERN", "Redux", "Stripe", "Razorpay"],
    features: [
      "Product browsing & filtering",
      "Cart & wishlist management",
      "Stripe & Razorpay + COD checkout",
      "Fully responsive UI",
    ],
    github: "https://github.com/ADD_YOUR_GITHUB",
    demo: "#",
    gradient: "from-purple-500/10 to-pink-500/10",
    accentColor: "#5e5ce6",
  },
  {
    title: "WeatherNow",
    subtitle: "Real-Time Weather Application",
    description:
      "A responsive weather app fetching real-time global data including temperature, humidity, and wind speed via OpenWeatherMap API.",
    tech: ["HTML5", "CSS3", "JavaScript", "OpenWeatherMap API"],
    features: [
      "Real-time global weather data",
      "Async API integration",
      "Temperature, humidity, wind speed",
      "Seamless cross-device rendering",
    ],
    github: "https://github.com/ADD_YOUR_GITHUB",
    demo: "#",
    gradient: "from-cyan-500/10 to-teal-500/10",
    accentColor: "#30d158",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Lendi Institute of Engineering and Technology",
    period: "2020 – 2024",
    score: "CGPA: 7.52 / 10",
    highlight: true,
  },
  {
    degree: "Intermediate – MPC",
    institution: "Sri Chaitanya Junior College",
    period: "2018 – 2020",
    score: "CGPA: 9.75 / 10",
    highlight: false,
  },
  {
    degree: "Secondary Education (SSC)",
    institution: "Sri Narayana School",
    period: "2018",
    score: "GPA: 9.7 / 10",
    highlight: false,
  },
];

export const certifications = [
  {
    name: "Full Stack Web Development Bootcamp",
    issuer: "Udemy",
    icon: "🎓",
  },
];
