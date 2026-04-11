import { PROJECT_KEYWORD } from "@/lib/types";

export const projects: {
  id: number;
  name: string;
  description: string;
  isBest: boolean;
  links: {
    href: string;
    name: string;
  }[];
  banner: string;
  techStack: string[];
}[] = [
  {
    id: 36,
    name: "SUST EEE Website",
    description:
      "The official website of the Department of Electrical and Electronic Engineering at Shahjalal University of Science and Technology. It showcases department details and faculty members, and provides integrated tools for student attendance monitoring, class performance tracking, course registration, and per-class reporting for teachers.",
    isBest: true,
    techStack: [
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.NEXTJS,
      PROJECT_KEYWORD.TYPESCRIPT,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.SHADCN_UI,
      PROJECT_KEYWORD.REDUX_TOOLKIT_QUERY,
      PROJECT_KEYWORD.NODE,
      PROJECT_KEYWORD.EXPRESSJS,
      PROJECT_KEYWORD.MONGODB,
      PROJECT_KEYWORD.ZOD,
    ],
    banner: "/images/projects/sust-eee.webp",
    links: [
      {
        name: "Preview",
        href: "https://eee.sust.edu",
      },
    ],
  },
  {
    id: 2,
    name: "AI Social Media Reply Automation",
    description:
      "An intelligent n8n workflow that automates conversational interactions across Facebook, Instagram, TikTok, and WhatsApp. It fetches user comments and messages, generates context-aware smart replies using AI, seamlessly posts the response, and logs all interaction data into Google Sheets.",
    isBest: false,
    techStack: [
      PROJECT_KEYWORD.N8N,
      "OpenAI API",
      "Facebook API",
      "Instagram API",
      "TikTok API",
      "WhatsApp API",
      "Google Sheets API",
    ],
    banner: "/images/projects/social-n8n.webp",
    links: [],
  },
  {
    id: 1,
    name: "SUST Fitness Club",
    description:
      "The official fitness platform for Shahjalal University of Science and Technology. It manages community events, weekly sessions, outdoor activities, and comprehensive university memberships. Built with a scalable Node.js/Prisma backend and a responsive React frontend dashboard.",
    isBest: true,
    techStack: [
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.VITE,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.SHADCN_UI,
      PROJECT_KEYWORD.REDUX_TOOLKIT,
      PROJECT_KEYWORD.NODE,
      PROJECT_KEYWORD.EXPRESSJS,
      PROJECT_KEYWORD.PRISMA,
      PROJECT_KEYWORD.MYSQL,
      PROJECT_KEYWORD.SWAGGER,
      PROJECT_KEYWORD.ZOD,
    ],
    banner: "/images/projects/sust-fitness-club.webp",
    links: [
      {
        name: "Preview",
        href: "https://www.sustfitnessclub.org",
      },
    ],
  },
  {
    id: 3,
    name: "Tilbod - API",
    description:
      "The robust backend API service powering the Tilbod ecosystem. It securely handles complex business logic, user authentication, precise database operations, file storage with GCP, and payment integrations.",
    isBest: false,
    techStack: [
      PROJECT_KEYWORD.NODE,
      PROJECT_KEYWORD.EXPRESSJS,
      PROJECT_KEYWORD.MONGODB,
      PROJECT_KEYWORD.TYPESCRIPT,
      PROJECT_KEYWORD.ZOD,
      PROJECT_KEYWORD.SWAGGER,
    ],
    banner: "/images/projects/api.webp",
    links: [
      {
        name: "Preview",
        href: "https://api.tilbod.is/",
      },
    ],
  },
  {
    id: 4,
    name: "Tilbod - Admin Dashboard",
    description:
      "A modern, multi-theme React application serving as the administrative dashboard for Tilbod companies. It features comprehensive data management, dynamic color themes, and a responsive mobile-first design.",
    isBest: false,
    techStack: [
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.VITE,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.SHADCN_UI,
      PROJECT_KEYWORD.TYPESCRIPT,
      PROJECT_KEYWORD.REDUX_TOOLKIT,
    ],
    banner: "/images/projects/tilbod-admin.webp",
    links: [
      {
        name: "Preview",
        href: "https://app.tilbod.is",
      },
    ],
  },
  {
    id: 5,
    name: "Tilbod - Public Website",
    description:
      "The official public-facing website for Tilbod. Built with Next.js, it features robust i18n support, server-side performance optimizations, and a modern responsive interface to engage visitors.",
    isBest: false,
    techStack: [
      PROJECT_KEYWORD.NEXTJS,
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.TYPESCRIPT,
      PROJECT_KEYWORD.REDUX_TOOLKIT_QUERY,
    ],
    banner: "/images/projects/tilbod-public.webp",
    links: [
      {
        name: "Preview",
        href: "https://tilbod.is/is",
      },
    ],
  },
  {
    id: 6,
    name: "Bturkish Store - Shopify Automation",
    description:
      "An automated n8n workflow that scrapes product data, intelligently parses it using OpenAI, and directly lists products on Shopify. Features include Telegram progress tracking and structured Google Sheets logging.",
    isBest: true,
    techStack: [
      PROJECT_KEYWORD.N8N,
      "OpenAI API",
      "Shopify API",
      "Telegram API",
      "Google Sheets API",
    ],
    banner: "/images/projects/shopify-n8n.webp",
    links: [
      {
        name: "Preview",
        href: "https://bturkishstore.app.n8n.cloud/",
      },
    ],
  },
  {
    id: 7,
    name: "Elevation Homes AI Automation",
    description:
      "An automated n8n pipeline for intelligent real estate lead engagement. It leverages Retell AI for phone calls and Twilio for SMS follow-ups, logging all interactions and outcomes directly to Google Sheets.",
    isBest: false,
    techStack: [
      PROJECT_KEYWORD.N8N,
      "JavaScript",
      "Retell AI",
      "Twilio API",
      "Google Sheets API",
    ],
    banner: "/images/projects/elevation-home.webp",
    links: [],
  },
  {
    id: 8,
    name: "Bulk-SMS",
    description:
      "An Enterprise Blockchain Communication platform introducing a crypto credit-based ecosystem. It features robust contact submission, massive bulk messaging capabilities, and reliable file storage using MinIO.",
    isBest: true,
    techStack: [
      PROJECT_KEYWORD.REACT,
      "React Router",
      PROJECT_KEYWORD.NODE,
      PROJECT_KEYWORD.EXPRESSJS,
      PROJECT_KEYWORD.MONGODB,
      PROJECT_KEYWORD.DOCKER,
      PROJECT_KEYWORD.MINIO,
    ],
    banner: "/images/projects/bulk-sms.webp",
    links: [
      {
        name: "Preview",
        href: "https://bulk-sms.net/",
      },
    ],
  },
  {
    id: 9,
    name: "Sora HK",
    description:
      "An advanced AI video generation SaaS platform built for the Hong Kong market. Features include text-to-video capabilities, secure payment integrations, dynamic watermark management, WebSocket-based progress tracking, and multi-channel notifications.",
    isBest: true,
    techStack: [
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.VITE,
      PROJECT_KEYWORD.NODE,
      PROJECT_KEYWORD.MONGODB,
      PROJECT_KEYWORD.DOCKER,
      PROJECT_KEYWORD.NEXTJS,
      PROJECT_KEYWORD.TYPESCRIPT,
      PROJECT_KEYWORD.REDIS,
      PROJECT_KEYWORD.WEB_SOCKET,
    ],
    banner: "/images/projects/sora-hk.webp",
    links: [
      {
        name: "Preview",
        href: "https://sorahk.site/",
      },
    ],
  },
  {
    id: 10,
    name: "RedPro",
    description:
      "A comprehensive multi-tenant real estate project management platform. Designed with dynamic organization hierarchies, it tracks project lifecycles, monitors budgets, and integrates securely with S3 for robust document management.",
    isBest: false,
    techStack: [
      PROJECT_KEYWORD.NEXTJS,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.SHADCN_UI,
      PROJECT_KEYWORD.REDUX_TOOLKIT_QUERY,
      PROJECT_KEYWORD.TYPESCRIPT,
      PROJECT_KEYWORD.MONGODB,
      PROJECT_KEYWORD.NODE,
      PROJECT_KEYWORD.DOCKER,
      "NestJS",
      "Redis",
    ],
    banner: "/images/projects/redpro.webp",
    links: [
      {
        name: "Preview",
        href: "https://redpro.ai",
      },
    ],
  },
  {
    id: 11,
    name: "KB Fitness Key Biscayne",
    description:
      "A dynamic front-end platform for a premier fitness gym in Key Biscayne, Miami. It showcases modern HIIT classes, personalized training programs, and structured group workouts with a highly engaging and robust user interface.",
    isBest: false,
    techStack: [
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.VITE,
      PROJECT_KEYWORD.HTML,
      PROJECT_KEYWORD.CSS,
      PROJECT_KEYWORD.JAVASCRIPT,
      PROJECT_KEYWORD.LOVABLE,
    ],
    banner: "/images/projects/kbfitness.webp",
    links: [
      {
        name: "Preview",
        href: "https://kbfitnessfl.com",
      },
    ],
  },
  {
    id: 12,
    name: "Neuronomous",
    isBest: true,
    description:
      "This project is SUST EEE IoT Hub, a real-time IoT device management platform. It empowers users with remote control, scheduling, monitoring, and seamless MQTT-based communication, ensuring efficient and scalable smart device management.",
    techStack: [
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.NEXTJS,
      PROJECT_KEYWORD.TYPESCRIPT,
      PROJECT_KEYWORD.MONGODB,
      PROJECT_KEYWORD.REDUX_TOOLKIT_QUERY,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.ZOD,
      PROJECT_KEYWORD.SHADCN_UI,
      PROJECT_KEYWORD.FRAMER_MOTION,
    ],
    banner: "/images/projects/neuronomous.webp",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/SUST_EEE_IOT_CLIENT",
      },
      {
        name: "Preview",
        href: "https://neuronomous.net",
      },
    ],
  },
  {
    id: 13,
    name: "Quiz Master",
    isBest: true,
    description:
      "This project is QuizMaster, an interactive online quiz platform. It empowers students with expert-crafted questions across subjects, AI-powered learning, timed challenges, and progress tracking, helping them achieve educational goals.",
    techStack: [
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.NEXTJS,
      PROJECT_KEYWORD.TYPESCRIPT,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.ZOD,
      PROJECT_KEYWORD.SHADCN_UI,
      PROJECT_KEYWORD.FRAMER_MOTION,
    ],
    banner: "/images/projects/quiz-master.webp",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/Quiz-Master-Client",
      },
    ],
  },
  {
    id: 14,
    name: "Quiz Master API",
    isBest: true,
    description:
      "This API streamlines quiz app development by providing a secure, ready-made backend. It manages user authentication, quizzes, questions, and result tracking, letting developers focus on the frontend experience.",
    techStack: [
      PROJECT_KEYWORD.REST_API,
      PROJECT_KEYWORD.EXPRESSJS,
      PROJECT_KEYWORD.TYPESCRIPT,
      PROJECT_KEYWORD.SWAGGER,
      PROJECT_KEYWORD.POSTGRESQL,
      PROJECT_KEYWORD.PRISMA,
      PROJECT_KEYWORD.ZOD,
    ],
    banner: "/images/projects/api.webp",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/Quiz-Master-API",
      },
    ],
  },
  {
    id: 15,
    name: "MOVIX",
    isBest: true,
    description:
      "The Movix website is a modern web application designed for movie and TV show enthusiasts. It likely features a sleek interface allowing users to explore trending movies and shows, access detailed information such as ratings and trailers, and search an extensive database, providing a seamless experience for cinema lovers.",
    techStack: [
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.NEXTJS,
      PROJECT_KEYWORD.TYPESCRIPT,
      PROJECT_KEYWORD.REDUX_TOOLKIT_QUERY,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.FRAMER_MOTION,
    ],
    banner: "/images/projects/movix.webp",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/movix-client.git",
      },
    ],
  },
  {
    id: 16,
    name: "KVirus-19",
    isBest: true,
    description:
      "KVirus-19 is a web application that provides information about the COVID-19 pandemic. It includes features such as tracking the number of cases, deaths, and recoveries, as well as providing information about prevention and treatment. The application is built using React, Tailwind CSS, and Redux.",
    techStack: [
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.NEXTJS,
      PROJECT_KEYWORD.TYPESCRIPT,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.FRAMER_MOTION,
    ],
    banner: "/images/projects/kvirus-19.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/covid-19",
      },
    ],
  },
  {
    id: 17,
    name: "Quranul Karim Multi-Languages",
    isBest: true,
    description:
      "Quranul Karim Multi-Languages is an easy-to-use application that helps to read the Holy Quran in multiple languages. It supports languages such as Arabic, English, French, Russian, Chinese and Urdu. User can easily read the Quran in his preferred language. The application provides an user-friendly interface .",
    techStack: [
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.NEXTJS,
      PROJECT_KEYWORD.TYPESCRIPT,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.FRAMER_MOTION,
    ],
    banner: "/images/projects/quranul-karim.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/quranul-karim",
      },
    ],
  },
  {
    id: 18,
    name: "Event Explorer",
    isBest: false,
    description:
      "The website is a dynamic event discovery platform, designed to help users find, track, or manage events effortlessly. Built with modern web tools, it offers features like event listings, detailed information, and an intuitive interface, catering to users seeking a seamless experience.",
    techStack: [
      PROJECT_KEYWORD.APOLLO_CLIENT,
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.NEXTJS,
      PROJECT_KEYWORD.TYPESCRIPT,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.FRAMER_MOTION,
    ],
    banner: "/images/projects/event-explorer.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/event_explorer_client",
      },
    ],
  },
  {
    id: 19,
    name: "Event Explorer API",
    isBest: false,
    description:
      "The Event Explorer API is a robust backend solution for the Event Explorer project, providing essential features like user authentication, event scheduling, and data management. It offers secure API endpoints for seamless integration with the front-end application, ensuring efficient functionality and data management.",
    techStack: [
      PROJECT_KEYWORD.GRAPHQL_API,
      PROJECT_KEYWORD.EXPRESSJS,
      PROJECT_KEYWORD.MONGODB,
      PROJECT_KEYWORD.PRISMA,
      PROJECT_KEYWORD.APOLLO_SERVER,
    ],
    banner: "/images/projects/api.jpg",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/event_explorer_api",
      },
    ],
  },
  {
    id: 20,
    name: "Job Box",
    isBest: false,
    description:
      "Job Box is a client-side application that helps job seekers organize and manage their job search process. It provides features such as tracking job applications, saving job listings, and setting reminders for interviews and follow-ups.",
    techStack: [
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.REDUX_TOOLKIT,
      PROJECT_KEYWORD.VITE,
    ],
    banner: "/images/projects/job-box.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/job-box-client.git",
      },
    ],
  },
  {
    id: 21,
    name: "Job Box API",
    isBest: false,
    description:
      "The Job Box API is a backend solution for the Job Box project, providing essential features like user authentication, job tracking, and data management. It offers secure API endpoints for seamless integration with the front-end application, ensuring efficient functionality and data management.",
    techStack: [
      PROJECT_KEYWORD.EXPRESSJS,
      PROJECT_KEYWORD.MONGODB,
      PROJECT_KEYWORD.REST_API,
      PROJECT_KEYWORD.EXPRESS_VALIDATOR,
      PROJECT_KEYWORD.WINSTON_LOGGER,
    ],
    banner: "/images/projects/api.jpg",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/job-box-server",
      },
    ],
  },
  {
    id: 22,
    name: "Stay-Swift - Hotel Booking",
    isBest: true,
    description:
      "Stay-Swift is a web application that allows users to search for hotels, view hotel details, and book rooms. User can book rooms for a specific date range, view the total cost, and make a payment. This application is easy to use and provides a seamless experience for booking hotels. In this application, user can also view the booking history.",
    techStack: [
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.NEXTJS,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.AUTHJS,
      PROJECT_KEYWORD.TYPESCRIPT,
      PROJECT_KEYWORD.MONGODB,
    ],
    banner: "/images/projects/stay-swift.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/stay-swift-hotel",
      },
    ],
  },
  {
    id: 23,
    name: "KINSUST A VOLUNTARY ORGANIZATION",
    isBest: true,
    description:
      "This is a website for a voluntary organization called KINSUST. The website is built with NextJs, Redux Tookit Query, Tailwind CSS, Shadcn/ui, and Framer Motion. The website is a simple website that displays information about the organization, its mission, and vision.",
    techStack: [
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.NEXTJS,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.FRAMER_MOTION,
      PROJECT_KEYWORD.REDUX_TOOLKIT_QUERY,
    ],
    banner: "/images/projects/kin.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/kinsust-nextjs.git",
      },
    ],
  },
  {
    id: 24,
    name: "TRAFALGAR - Online Medical Service",
    isBest: false,
    description:
      "Trafalgar is a landing page for an online medical service that provides a range of health services, including online consultations, appointments, and medical advice. The landing page is designed to be user-friendly, informative, and visually appealing, with a focus on accessibility and ease of use.",
    techStack: [
      PROJECT_KEYWORD.HTML,
      PROJECT_KEYWORD.CSS,
      PROJECT_KEYWORD.JAVASCRIPT,
      PROJECT_KEYWORD.FIGMA,
    ],
    banner: "/images/projects/trafalgar.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/trafalfar",
      },
    ],
  },
  {
    id: 25,
    name: "POSITIVUS - Digital Marketing Agency",
    isBest: false,
    description:
      "Positivus is a landing page for a digital marketing agency that offers a range of services, including social media marketing, content creation, and search engine optimization. The landing page is designed to be visually appealing, informative, and user-friendly, with a focus on showcasing the agency's services",
    techStack: [
      PROJECT_KEYWORD.HTML,
      PROJECT_KEYWORD.CSS,
      PROJECT_KEYWORD.JAVASCRIPT,
      PROJECT_KEYWORD.FIGMA,
    ],
    banner: "/images/projects/positivus.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/positivus",
      },
    ],
  },
  {
    id: 26,
    name: "Bizpro - Business Promotion Solution",
    isBest: false,
    description:
      "Bizpro is a landing page for a business promotion solution that offers a range of srvices, including social media marketing, content creation, and search engine optimization. The landing page is designed to be visually appealing, informative, and user-friendly, with a focus on showcasing the solution's services.",
    techStack: [
      PROJECT_KEYWORD.HTML,
      PROJECT_KEYWORD.CSS,
      PROJECT_KEYWORD.JAVASCRIPT,
      PROJECT_KEYWORD.FIGMA,
    ],
    banner: "/images/projects/bizpro.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/bizpro",
      },
    ],
  },
  {
    id: 27,
    name: "Tasty Food 🍔🍕🍣",
    isBest: false,
    description:
      'The "Tasty Food" project is a responsive web application that features an interactive burger menu, a seamless order system, and a user-friendly interface. Built with HTML, CSS, and JavaScript, it demonstrates front-end development skills, providing a smooth and efficient food ordering experience for users.',
    techStack: [
      PROJECT_KEYWORD.HTML,
      PROJECT_KEYWORD.CSS,
      PROJECT_KEYWORD.JAVASCRIPT,
    ],
    banner: "/images/projects/taste.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/tasty-food",
      },
    ],
  },
  {
    id: 28,
    name: "React Tic-Tac-Toe Game",
    isBest: false,
    description:
      "The Tic-Tac-Toe game is a classic, interactive two-player game built using TypeScript. It allows players to take turns marking spaces on a 3x3 grid, aiming to get three of their marks in a row. The project highlights TypeScript skills and real-time user interaction.",
    techStack: [
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.VITE,
      PROJECT_KEYWORD.TYPESCRIPT,
      PROJECT_KEYWORD.FRAMER_MOTION,
    ],
    banner: "/images/projects/trafalgar.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/react-Tic-Tac-Toe-game",
      },
    ],
  },
  {
    id: 29,
    name: "Blood Finder App",
    isBest: false,
    description:
      "The Blood Finder App is a web application that helps organizations locate blood donors willing to donate blood. It allows organizations to search for potential donors based on blood type and location, streamlining the process of finding and coordinating donations for those in need.",
    techStack: [
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.VITE,
      PROJECT_KEYWORD.REDUX_TOOLKIT,
      PROJECT_KEYWORD.PRIMER_REACT,
    ],
    banner: "/images/projects/blood-finder.png",
    links: [],
  },
  {
    id: 30,
    name: "Doctor Portal",
    isBest: true,
    description:
      "The Doctors Portal is a web application designed to facilitate medical appointments. It allows users to view available doctors, book appointments, and manage their schedules efficiently. The platform aims to provide an easy and streamlined experience for both patients and healthcare providers.",
    techStack: ["REACT", "TailwindCSS", "Daisyui", "Redux Toolkit", "Firebase"],
    banner: "/images/projects/doctor-portal.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/doctor-portal.git",
      },
    ],
  },
  {
    id: 31,
    name: "Doctor's Portal - Backend",
    isBest: false,
    description:
      " The doctor-portal-server is a robust backend solution for the Doctor's Portal project, providing essential features like user authentication, appointment scheduling, and patient data management. It offers secure API endpoints for seamless integration with the front-end application, ensuring efficient functionality and data management.",
    banner: "/images/projects/api.jpg",
    techStack: [
      PROJECT_KEYWORD.NODE,
      PROJECT_KEYWORD.EXPRESSJS,
      PROJECT_KEYWORD.MONGODB,
      PROJECT_KEYWORD.REST_API,
      PROJECT_KEYWORD.WINSTON_LOGGER,
      PROJECT_KEYWORD.CLOUDINARY,
    ],
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/doctor-portal-server",
      },
    ],
  },
  {
    id: 32,
    name: "Tasker",
    isBest: false,
    description:
      "Easy Tasker is a streamlined task management tool featuring task creation and tracking, priority or due date settings, and task completion marking. Its simple, minimalistic interface ensures ease of use, making it a practical solution for organizing tasks efficiently.",
    techStack: [
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.REDUCER,
      PROJECT_KEYWORD.REACT_CONTEXT,
      PROJECT_KEYWORD.VITE,
    ],
    banner: "/images/projects/tasker.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/tasker.git",
      },
    ],
  },
  {
    id: 33,
    name: "Donate Now",
    isBest: false,
    description:
      "The website is a simple, single-page donation platform designed to collect contributions for a cause. It likely features a clean interface with a form to input donation amounts, payment options, and a call-to-action button, built using basic HTML, CSS, and JavaScript, hosted on GitHub Pages for easy deployment.",
    techStack: [
      PROJECT_KEYWORD.HTML,
      PROJECT_KEYWORD.CSS,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.GITHUB_PAGES,
    ],
    banner: "/images/projects/donate-now.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/donate-now.git",
      },
    ],
  },
  {
    id: 34,
    name: "KIN DASHBOARD",
    isBest: false,
    description:
      "This is a dashboard for the KIN project. It is a web application that allows users to view and interact with the data from the KIN project. The dashboard is built using the JavaScript framework in React. The data is stored in a MySQL database.",
    techStack: [
      PROJECT_KEYWORD.REACT,
      PROJECT_KEYWORD.TAILWINDCSS,
      PROJECT_KEYWORD.REDUX_TOOLKIT,
      PROJECT_KEYWORD.FLOWBITE,
    ],
    banner: "/images/projects/dashboard.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/kinsust-dashboard.git",
      },
    ],
  },
  {
    id: 35,
    name: "E-Commerce API",
    description:
      "This an e-commerce API built for managing online store operations. It likely includes features like product listing, cart management, order processing, and user authentication, designed with modern web technologies for scalability and efficiency, serving as a backend solution for e-commerce applications.",
    isBest: false,
    techStack: [
      PROJECT_KEYWORD.NODE,
      PROJECT_KEYWORD.EXPRESSJS,
      PROJECT_KEYWORD.MONGODB,
      PROJECT_KEYWORD.REST_API,
      PROJECT_KEYWORD.REDUX_TOOLKIT,
      PROJECT_KEYWORD.EXPRESS_VALIDATOR,
      PROJECT_KEYWORD.WINSTON_LOGGER,
    ],
    banner: "/images/projects/api.jpg",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/ecommerce-api",
      },
    ],
  },
];

export const filterKeys = [
  {
    name: "ALL",
  },
  {
    name: "REDUX",
  },
  {
    name: "NEXT.JS",
  },
  {
    name: "REACT",
  },
  {
    name: "API",
  },
  {
    name: "N8N",
  },
];
