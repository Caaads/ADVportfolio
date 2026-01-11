

export interface Project {
  title: string;
  description: string;
  images: string[];
  problem: string;
  solution: string;
  features: string[];
  role: string;
  live: string;
  github: string;
  tech: string[];
}

export const projects: Project[] = [
  // HIDE FOR NOW BASIN MAKITA NI SIR OWEN
  // {
  //   title: "Locker Management System",
  //   description:
  //     "A web-based system for managing student locker rentals with admin control and audit logs. (Currently in development and Unsafe website for demo purposes)",
  //   live: "https://locker-system.infinityfreeapp.com/",
  //   github: "https://github.com/Caaads/lockerosa.git",
  // },
  {
    title: "HCDC OSA PARTNERSHIP PORTAL (UNFINISHED)",
    description:
      "Our WS101 project. A web-based Monitoring system for student partnerships and internships with role-based access.",
    images: [],
    problem:
      "The current manual process of managing student partnerships and internships at Holy Cross of Davao College's Office of Student Affairs (OSA) is inefficient, error-prone, and lacks real-time tracking capabilities.",
    solution:
      "Develop a web-based Monitoring System that automates the management of student partnerships and internships, providing role-based access for OSA staff, partners, and students.",
    features: [
      "Role-Based Access Control: Different access levels for OSA staff, partners, and students.",
    ],
    role: "Full-Stack Developer",
    live: "",
    github: "https://github.com/Caaads/WS",
    tech: ["React","Django", "Python", "HTML", "CSS", "Javascript"],
  },
  {
    title: "ShapeLift",
    description:
      "Our ADV101 project. A shopee inspired e-commerce platform that allows users to buy gym related products. (Current source code not found)",
    images: [
      "shapelift.png",
      "shapelift2.png",
      "shapelift3.png",
      "shapelift4.png",
      "shapelift5.png",
    ],
    problem:
      "Non-existent online platform for purchasing gym-related products, limiting accessibility and convenience for fitness enthusiasts.",
    solution:
      "Develop a user-friendly e-commerce website that offers a wide range of gym-related products, secure payment options, and efficient delivery services.",
    features: [
      "Product Catalog: Browse and search for gym-related products with detailed descriptions and images.",
      "User Accounts: Create and manage user profiles, order history, and wishlists.",
      "Shopping Cart: Add products to cart, modify quantities, and proceed to checkout seamlessly.",
      "Add to favorites: Users can add products to their favorites for easy access later.",
    ],
    role: "Full-Stack Developer",    
    live: "https://shapelift.vercel.app",
    github: "https://github.com/Caaads",
    tech: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "ShapeLift Mobile with Cloud Firestore Database",
    description:
      "A react native app that allows users to buy gym related products. Our ADV102 project.",
    images: [],
    problem:
      "Non-existent mobile platform for purchasing gym-related products, limiting accessibility and convenience for fitness enthusiasts on mobile devices.",
    solution:
      "Develop a mobile application that offers a wide range of gym-related products, secure payment options, and efficient delivery services.",
    features: [
      "Product Catalog: Browse and search for gym-related products with detailed descriptions and images.",
      "User Accounts: Create and manage user profiles, order history, and wishlists.",
      "Shopping Cart: Add products to cart, modify quantities, and proceed to checkout seamlessly.",
      "Add to favorites: Users can add products to their favorites for easy access later.",
    ],
    role: "Full-Stack Developer",
    live: "",
    github: "https://github.com/Caaads/ADV-SHAPELIFT.git",
    tech: ["ReactNative", "Firebase", "Typescript", "Javascript"],
  },
]
export const certificates = [
  {
    src: "IMCODECHUM.png",
    alt: "IMCODECHUM Certificate",
    title: "IMCODECHUM Training Completion",
    issuer: "CODECHUM",
    date: "May 16, 2025",
    description: "Completed training on CODECHUM platform covering SQL fundamentals and best practices.",
  },
  {
    src: "JAVASCRIPT.png",
    alt: "JavaScript Certificate",
    title: "JavaScript Programming Certificate",
    issuer: "BitDegree",
    date: "Dec. 1, 2023",
    description: "Certified in JavaScript fundamentals and advanced concepts including DOM manipulation and ES6+ features.",
  },
  {
    src: "TARSIER.jpg",
    alt: "TARSIER Certificate",
    title: "TARSIER 117",
    issuer: "TARSIER 117",
    date: "Nov. 15, 2025",
    description: "Completed seminar at T.A.R.S.I.E.R. 117, focusing on disaster preparedness and first aid.",
  },
  {
    src: "WATT.jpg",
    alt: "WATT Certificate",
    title: "WATT Tech Training",
    issuer: "WATT Technologies",
    date: "Nov. 15, 2025",
    description: "Completed technical training on IoT sensors and energy-efficient devices.",
  },
  {
    src: "pythoncert.png",
    alt: "Python Certificate",
    title: "Python Programming Certificate",
    issuer: "Cisco Networking Academy",
    date: "Jan. 2, 2026",
    description: "Certified in Python programming, covering data structures, and OOP concepts.",
  },
  {
    src: "msexcelcert.png",
    alt: "MS Excel Certificate",
    title: "Microsoft Excel Basics",
    issuer: "Coursera",
    date: "Jan. 2, 2026",
    description: "Basic fundamentals of Microsoft Excel including formulas, functions, and data visualization.",
  },
  {
    src: "IoTcert.png",
    alt: "IoT Certificate",
    title: "Internet of Things Fundamentals",
    issuer: "Coursera",
    date: "Jan. 2, 2026",
    description: "Learned core IoT concepts, networking, and device management.",
  },
  {
    src: "comnetworkingcert.png",
    alt: "Computer Networking Certificate",
    title: "Computer Networking Essentials",
    issuer: "Cisco Networking Academy",
    date: "Jan. 2, 2026",
    description: "Covered networking protocols, IP addressing, and configuration of network devices.",
  },
  {
    src: "reactjscert.png",
    alt: "ReactJS Certificate",
    title: "ReactJS Frontend Development",
    issuer: "SimpliLearn Skillup",
    date: "Jan. 3, 2026",
    description: "Completed ReactJS course, including hooks, state management, and component design.",
  },
  {
    src: "introtohtmlcert.png",
    alt: "HTML Certificate",
    title: "HTML5 Fundamentals",
    issuer: "SimpliLearn Skillup",
    date: "Jan. 10, 2026",
    description: "Certified in HTML5, semantic tags, forms, and basic web page structure.",
  },
  {
    src: "angularbasicscert.png",
    alt: "Angular Basics Certificate",
    title: "Angular Basics",
    issuer: "SimpliLearn Skillup",
    date: "Jan 10, 2026",
    description: "Introduction to Angular framework including components, modules, and services.",
  },
];


export const gallery = [
  { src: "gallery1.jpg", alt: "Airport before flight to Cebu" },
  { src: "gallery2.jpg", alt: "Arrival at SM city Cebu" },
  { src: "gallery3.jpg", alt: "Floating Restaurant" },
  { src: "gallery4.jpg", alt: "Panglao Vista Suites" },
  { src: "gallery5.jpg", alt: "SOMAC Korean Restaurant" },
  { src: "gallery6.jpg", alt: "SOMAC Korean Restaurant" },
  { src: "gallery7.jpg", alt: "HAHAHAHAHAHA" },
  { src: "gallery8.jpg", alt: "Mata Technologies" },
  { src: "gallery9.jpg", alt: "Airport before flight to Cebu 2" },
  { src: "gallery10.jpg", alt: "Airport before flight to Cebu 3" },
  { src: "gallery11.jpg", alt: "BAI hotel Celebration of Subrio's Birthday" },
  { src: "gallery12.jpg", alt: "Lapulapu Statue Mactan Island" },
  { src: "gallery13.jpg", alt: "Sto. Nino, Cebu" },
  { src: "gallery15.jpg", alt: "HAHAHAHAHAHAHA sleepwell" },
  { src: "gallery16.jpg", alt: "Dinner at TOPS with these fine gents" },
  { src: "gallery17.jpg", alt: "TOPS" },
  { src: "gallery18.jpg", alt: "Sto. Nino, Cebu" },
  { src: "gallery19.jpg", alt: "Office of the vice mayor" },
  { src: "gallery20.jpg", alt: "Art Museum in BAI Hotel" },
  { src: "gallery21.jpg", alt: "Art Museum in BAI Hotel" },
  { src: "gallery22.jpg", alt: "Art Museum in BAI Hotel" },
  { src: "gallery23.jpg", alt: "Cafe BAI Hotel, with these fine gents" },
];

export const journal = [
  {
    day: "Day 1",
    company: "UP BUSINESS INCUBATOR FOR IT",
    date: "NOVEMBER 12, 2025",
    text: "Arrived in Cebu, visited Magellan's Cross, Lapu - Lapu Statue in Mactan, and other landmarks, after that we went to Vikings for Luxury lunch buffet. Then we went to University of the Philippines (UP) Cebu Technology Business Incubator (TBI) has a key role in fostering IT innovation in Cebu by providing support, resources, and a space for tech startups",
    images: [
      "UP INIT CEBU.jpg",
      "UP INIT CEBU 2.jpg",
    ],
  },
  {
    day: "Day 2",
    company: "DYNATA PHILIPINES INC.",
    date: "NOVEMBER 13, 2025",
    text: "Stayed the night and had our first breakfast in BAI hotel, then headed to Dynata Philippines Inc. then had a lunch at Buffet 101 international cuisine. Then headed to our next company. Dynata Philippines, Inc. is the Philippine branch of global data provider Dynata, a leading source of first-party data for market research, marketing, and advertising",
    images: [
      "dynata.png",
      "dynatagrouppic.jpg",
    ],
  },
  {
    day: "Day 3",
    company: "RIVAN IT CEBU",
    date: "NOVEMBER 13, 2025",
    text: "After the lunch buffet, we went to RIVANIT CEBU and had a tour and visited some landmarks while on our way back. a leading IT training provider in the Philippines, established in 1999. The company specializes in hands-on, job-ready courses for various IT certifications and skills.",
    images: [
      "rivanit.jpg",
      "RIVANIT DAY 3(2).jpg",
    ],
  },
    {
    day: "Day 4",
    company: "MATA TECHNOLOGIES, INC.",
    date: "NOVEMBER 14, 2025",
    text: "Last breakfast buffet and day at BAI hotel, prepared our things for our next hotel in panglao vista suites. But before we went to panglao we visited Mata Technologies, Inc., Mata Technologies Inc. is a homegrown provider of virtual tours for real estate in the Philippines. It is also the virtual reality map provider of tourist destinations in the country. Deriving its name from the Filipino word “mata,” which means eyes, Mata Tech aims to give you a 360° preview of real estate properties and notable destinations.",
    images: [
      "mata.jpg",
      "matagrouppic.jpg",
    ],
  },
    {
    day: "Day 5",
    company: "T.A.R.S.I.E.R. 117",
    date: "NOVEMBER 15, 2025",
    text: "Breakfast buffet at Vista Suites then check-out, after that we went to T.A.R.S.I.E.R. 117 and had a lunch fiesta buffet at floating restaurants while cruising loboc river w/ Harana. TARSIER 117 (Telephone and Radio System Integrated Emergency Response) is the official emergency rescue and response force for the province of Bohol, Philippines, operating under the Bohol Provincial Disaster Risk Reduction and Management Office (PDRRMO). It offers immediate help for medical, police, and fire crises. ",
    images: [
      "TARSIERlogo.jpg",
      "tarsiergrouppic.jpg",
    ],
  },
];
export const education = [
  {
    level: "Elementary",
    school: "Our Lady of Fatima Academy of Davao Inc.",
    year: "2013 – 2017",
    logo: "/OLFA.png",
  },
  {
    level: "High School",
    school: "Our Lady of Fatima Academy of Davao Inc.",
    year: "2017 – 2021",
    logo: "/OLFA.png",
  },
  {
    level: "Senior High School",
    school: "Our Lady of Fatima Academy of Davao Inc.",
    year: "2021 – 2023",
    strand: "STEM",
    logo: "/OLFA.png",
  },
  {
    level: "College",
    school: "Holy Cross of Davao College",
    year: "2023 – Present",
    logo: "/hcdc_logo.png",
    current: true,
  },
];
export const scannedDocs = [
  { src: "UP INNIT DAY 1.jpg", alt: "Scanned Journal UP INIT" },
  { src: "DYNATA DAY 2.jpg", alt: "Scanned Journal DYNATA" },
  { src: "RIVANIT DAY 3.jpg", alt: "Scanned Journal RIVANIT" },
  { src: "MATA DAY 4.jpg", alt: "Scanned Journal MATA" },
  { src: "TARSIER DAY 5.jpg", alt: "Scanned Journal TARSIER" },
];

