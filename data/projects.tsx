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
    id: 1,
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
      {
        name: "Preview",
        href: "https://quiz-master-client-app.vercel.app",
      },
    ],
  },
  {
    id: 2,
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
      {
        name: "Preview",
        href: "https://api-quiz-master.vercel.app",
      },
    ],
  },
  {
    id: 3,
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
      {
        name: "Preview",
        href: "https://movix-cinema.vercel.app/",
      },
    ],
  },
  {
    id: 4,
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
      {
        name: "Preview",
        href: "https://covid-19-nextjs.vercel.app/",
      },
    ],
  },
  {
    id: 5,
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
      {
        name: "Preview",
        href: "https://quranul-karim-multi-languages.vercel.app",
      },
    ],
  },
  {
    id: 6,
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
      {
        name: "Preview",
        href: "https://event-explorer.vercel.app",
      },
    ],
  },
  {
    id: 7,
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
      {
        name: "Preview",
        href: "https://ministerial-gabriel-rejoyan-cd2987cb.koyeb.app/graphql",
      },
    ],
  },
  {
    id: 8,
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
      {
        name: "Preview",
        href: "https://job-box-app.netlify.app/",
      },
    ],
  },
  {
    id: 9,
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
      {
        name: "Preview",
        href: "https://tinyurl.com/mr3r4sse",
      },
    ],
  },
  {
    id: 10,
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
      {
        name: "Preview",
        href: "https://stay-swift-hotel.vercel.app/",
      },
    ],
  },
  {
    id: 11,
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
      {
        name: "Preview",
        href: "https://kinsust.vercel.app",
      },
      {
        name: "Server",
        href: "https://github.com/md-rejoyan-islam/kinsust_backend",
      },
    ],
  },

  {
    id: 12,
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
      {
        name: "Preview",
        href: "https://md-rejoyan-islam.github.io/trafalfar",
      },
      {
        name: "Figma",
        href: "https://www.figma.com/design/zbgBIoTtfJgaTn5ljw9Uk8/Trafalgar-Landing-Page?node-id=0-1&node-type=canvas",
      },
    ],
  },
  {
    id: 13,
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
      {
        name: "Preview",
        href: "https://md-rejoyan-islam.github.io/positivus",
      },
      {
        name: "Figma",
        href: "https://www.figma.com/design/XfusUxB41cF8pclYknAlvP/Positivus-Landing-Page-Design",
      },
    ],
  },
  {
    id: 14,
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
      {
        name: "Preview",
        href: "https://md-rejoyan-islam.github.io/bizpro",
      },
      {
        name: "Figma",
        href: "https://www.figma.com/design/27PECBAoJw6P4iRKSzqisb/Bizpro---A-Business-Promotion-Solution-Landing-Page",
      },
    ],
  },
  {
    id: 15,
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
      {
        name: "Preview",
        href: "https://md-rejoyan-islam.github.io/tasty-food",
      },
    ],
  },
  {
    id: 16,
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
      {
        name: "Preview",
        href: "https://react-tic-tac-toe-game-rejoyan.netlify.app",
      },
    ],
  },
  {
    id: 17,
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
  // {
  //   name: "Messenger",
  //   description: "I am currently working here.",
  //   techStack: ["REACT", "TailwindCSS", "Vite"],
  //   banner: "/images/projects/trafalgar.png",
  //   links: [
  //     {
  //       name: "GitHub",
  //       href: "https://github.com/md-rejoyan-islam/messenger.git",

  //     },
  //     {
  //       name: "Preview",
  //       href: "https://messenger-live-chat.netlify.app",

  //     },
  //   ],
  // },
  // {
  //   name: "Random Name Picker",
  //   isBest: false,
  //   description:
  //     "Welcome to the Random Name Picker project! This simple web application allows you to randomly select names from a list. Whether you're organizing a raffle, choosing a winner, or just having fun, this tool has got you covered.",
  //   techStack: ["REACT", "TailwindCSS", "TypeScript"],
  //   banner: "/images/projects/trafalgar.png",
  //   links: [
  //     {
  //       name: "GitHub",
  //       href: "https://github.com/md-rejoyan-islam/random-name-picker",

  //     },
  //     {
  //       name: "Preview",
  //       href: "https://reactjs-random-name-picker.netlify.app",

  //     },
  //   ],
  // },
  {
    id: 18,
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
      {
        name: "Preview",
        href: "https://doctors-portal-f127f.web.app",
      },
      {
        name: "Server",
        href: "https://github.com/md-rejoyan-islam/doctor-portal-server.git",
      },
    ],
  },
  {
    id: 19,
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
      {
        name: "Preview",
        href: "tinyurl.com/33yacxun",
      },
    ],
  },
  {
    id: 20,
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
      {
        name: "Preview",
        href: "https://easy-tasker-app.netlify.app",
      },
    ],
  },
  {
    id: 21,
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
      {
        name: "Preview",
        href: "https://md-rejoyan-islam.github.io/donate-now",
      },
    ],
  },
  {
    id: 22,
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
      {
        name: "Preview",
        href: "https://dashboard-kin.netlify.app/",
      },
      {
        name: "Server",
        href: "https://github.com/md-rejoyan-islam/kinsust_backend",
      },
    ],
  },
  {
    id: 23,
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
      {
        name: "Preview",
        href: "tinyurl.com/k7tssj6c",
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
];
