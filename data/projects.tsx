import { FaExternalLinkAlt, FaGithub, FaServer } from "react-icons/fa";
import { LuFigma } from "react-icons/lu";

export const projects = [
  {
    name: "TRAFALGAR - Online Medical Service",
    isBest: false,
    description:
      "Trafalgar is a landing page for an online medical service that provides a range of health services, including online consultations, appointments, and medical advice. The landing page is designed to be user-friendly, informative, and visually appealing, with a focus on accessibility and ease of use.",
    techStack: ["HTML", "CSS", "Javascript", "Figma"],
    banner: "/images/projects/trafalgar.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/trafalfar",
        icon: <FaGithub className="text-[#0d7ded] dark:hover:text-white" />,
      },
      {
        name: "Preview",
        href: "https://md-rejoyan-islam.github.io/trafalfar",
        icon: (
          <FaExternalLinkAlt className="text-button dark:hover:text-white" />
        ),
      },
      {
        name: "Figma",
        href: "https://www.figma.com/design/zbgBIoTtfJgaTn5ljw9Uk8/Trafalgar-Landing-Page?node-id=0-1&node-type=canvas",
        icon: <LuFigma className="text-button" />,
      },
    ],
  },
  {
    name: "POSITIVUS - Digital Marketing Agency",
    isBest: false,
    description:
      "Positivus is a landing page for a digital marketing agency that offers a range of services, including social media marketing, content creation, and search engine optimization. The landing page is designed to be visually appealing, informative, and user-friendly, with a focus on showcasing the agency's services",
    techStack: ["HTML", "CSS", "Javascript", "Figma"],
    banner: "/images/projects/positivus.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/positivus",
        icon: <FaGithub className="text-button" />,
      },
      {
        name: "Preview",
        href: "https://md-rejoyan-islam.github.io/positivus",
        icon: <FaExternalLinkAlt className="text-button" />,
      },
      {
        name: "Figma",
        href: "https://www.figma.com/design/XfusUxB41cF8pclYknAlvP/Positivus-Landing-Page-Design",
        icon: <LuFigma className="text-button" />,
      },
    ],
  },
  {
    name: "Bizpro - Business Promotion Solution",
    isBest: false,
    description:
      "Bizpro is a landing page for a business promotion solution that offers a range of srvices, including social media marketing, content creation, and search engine optimization. The landing page is designed to be visually appealing, informative, and user-friendly, with a focus on showcasing the solution's services.",
    techStack: ["HTML", "CSS", "Javascript", "Figma"],
    banner: "/images/projects/bizpro.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/bizpro",
        icon: <FaGithub className="text-button" />,
      },
      {
        name: "Preview",
        href: "https://md-rejoyan-islam.github.io/bizpro",
        icon: <FaExternalLinkAlt className="text-button" />,
      },
      {
        name: "Figma",
        href: "https://www.figma.com/design/27PECBAoJw6P4iRKSzqisb/Bizpro---A-Business-Promotion-Solution-Landing-Page",
        icon: <LuFigma className="text-button" />,
      },
    ],
  },
  {
    name: "Tasty Food 🍔🍕🍣",
    isBest: false,
    description:
      "Delicious Food offers high-quality, tasty burgers with premium ingredients, top-notch services, and a streamlined order and delivery process.",
    techStack: ["HTML", "CSS", "Javascript"],
    banner: "/images/projects/taste.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/tasty-food",
        icon: <FaGithub className="text-button" />,
      },
      {
        name: "Preview",
        href: "https://md-rejoyan-islam.github.io/tasty-food",
        icon: <FaExternalLinkAlt className="text-button" />,
      },
    ],
  },
  {
    name: "React Tic-Tac-Toe Game",
    isBest: false,
    description:
      "Welcome to the classic game of Tic-Tac-Toe, built with React! Challenge a friend and see who can claim three squares in a row first!",
    techStack: ["REACT", "TailwindCSS", "Vite"],
    banner: "/images/projects/trafalgar.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/react-Tic-Tac-Toe-game",
        icon: <FaGithub className="text-button" />,
      },
      {
        name: "Preview",
        href: "https://react-tic-tac-toe-game-rejoyan.netlify.app",
        icon: <FaExternalLinkAlt className="text-button" />,
      },
    ],
  },
  {
    name: "Blood Finder App",
    isBest: false,
    description:
      "The Blood Finder App is a web application designed to find blood donors with those in need of blood donations. It allows an organization to find blood donar which are willing to donate blood.",
    techStack: ["REACT", "TailwindCSS", "Vite"],
    banner: "/images/projects/trafalgar.png",
    links: [],
  },
  {
    name: "Messenger",
    description: "I am currently working here.",
    techStack: ["REACT", "TailwindCSS", "Vite"],
    banner: "/images/projects/trafalgar.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/messenger.git",
        icon: <FaGithub className="text-button" />,
      },
      {
        name: "Preview",
        href: "https://messenger-live-chat.netlify.app",
        icon: <FaExternalLinkAlt className="text-button" />,
      },
    ],
  },
  {
    name: "Random Name Picker",
    isBest: false,
    description:
      "Welcome to the Random Name Picker project! This simple web application allows you to randomly select names from a list. Whether you're organizing a raffle, choosing a winner, or just having fun, this tool has got you covered.",
    techStack: ["REACT", "TailwindCSS", "TypeScript"],
    banner: "/images/projects/trafalgar.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/random-name-picker",
        icon: <FaGithub className="text-button" />,
      },
      {
        name: "Preview",
        href: "https://reactjs-random-name-picker.netlify.app",
        icon: <FaExternalLinkAlt className="text-button" />,
      },
    ],
  },
  {
    name: "Doctor Portal",
    isBest: true,
    description:
      "This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.",
    techStack: ["REACT", "TailwindCSS", "Express", "Redux"],
    banner: "/images/projects/doctor-portal.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/doctor-portal.git",
        icon: <FaGithub className="text-button dark:hover:text-white" />,
      },
      {
        name: "Preview",
        href: "https://doctors-portal-f127f.web.app",
        icon: (
          <FaExternalLinkAlt className="text-button dark:hover:text-white" />
        ),
      },
      {
        name: "Server",
        href: "https://github.com/md-rejoyan-islam/doctor-portal-server.git",
        icon: <FaServer className="text-button  dark:hover:text-white" />,
      },
    ],
  },
  {
    name: "Tasker",
    isBest: false,
    description:
      "Tasker is a web application that allows users to easily add, remove, update, and search tasks. The application is built using React and Tailwind CSS.",
    techStack: ["REACT", "TailwindCSS", "Redux"],
    banner: "/images/projects/tasker.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/tasker.git",
        icon: <FaGithub className="text-button" />,
      },
      {
        name: "Preview",
        href: "https://easy-tasker-app.netlify.app",
        icon: <FaExternalLinkAlt className="text-button" />,
      },
    ],
  },
  {
    name: "MOVIX",
    isBest: true,
    description:
      "Tasker is a web application that allows users to easily add, remove, update, and search tasks. The application is built using React and Tailwind CSS.",
    techStack: ["REACT", "TailwindCSS", "Redux"],
    banner: "/images/projects/trafalgar.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/movix-client.git",
        icon: <FaGithub className="text-button" />,
      },
      {
        name: "Preview",
        href: "https://movix-plex.netlify.app",
        icon: <FaExternalLinkAlt className="text-button" />,
      },
    ],
  },
  {
    name: "Donate Now",
    isBest: false,
    description:
      "This website is designed to facilitate online donations for charitable causes. It provides a secure and user-friendly platform for donors to contribute to their chosen cause.",
    techStack: ["REACT", "TailwindCSS", "Redux"],
    banner: "/images/projects/trafalgar.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/donate-now.git",
        icon: <FaGithub className="text-button" />,
      },
      {
        name: "Preview",
        href: "https://md-rejoyan-islam.github.io/donate-now",
        icon: <FaExternalLinkAlt className="text-button" />,
      },
    ],
  },
  {
    name: "Job Box",
    isBest: true,
    description:
      "Job Box is a server-side application that helps job seekers organize and manage their job search process. It provides features such as tracking job applications, saving job listings, and setting reminders for interviews and follow-ups.",
    techStack: ["REACT", "TailwindCSS", "Redux"],
    banner: "/images/projects/trafalgar.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/job-box-client.git",
        icon: <FaGithub className="text-button" />,
      },
      {
        name: "Server",
        href: "https://github.com/md-rejoyan-islam/job-box-server.git",
        icon: <FaServer className="text-button" />,
      },
    ],
  },
  {
    name: "Quranul Karim Multi-Languages",
    isBest: true,
    description:
      "Quranul Karim Multi-Languages is a simple and easy-to-use application that helps you to read the Holy Quran in multiple languages. It supports multiple languages such as Arabic, English, French, Russian, Chinese and Urdu. You can easily switch between languages and read the Quran in your preferred language.The application provides a clean and user-friendly interface that makes it easy to navigate and read the Quran.",
    techStack: ["REACT", "TailwindCSS", "Redux", "Next.JS"],
    banner: "/images/projects/quranul-karim.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/quranul-karim",
        icon: <FaGithub className="text-button" />,
      },
      {
        name: "Preview",
        href: "https://quranul-karim-multi-languages.vercel.app",
        icon: <FaExternalLinkAlt className="text-button" />,
      },
    ],
  },
  {
    name: "KIN DASHBOARD",
    isBest: true,
    description:
      "This is a dashboard for the KIN project. It is a web application that allows users to view and interact with the data from the KIN project. The dashboard is built using the JavaScript framework in React. The data is stored in a MySQL database.",
    techStack: ["REACT", "TailwindCSS", "Redux"],
    banner: "/images/projects/trafalgar.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/kinsust-dashboard.git",
        icon: <FaGithub className="text-button" />,
      },
      {
        name: "Preview",
        href: "https://dashboard-kin.netlify.app/",
        icon: <FaExternalLinkAlt className="text-button" />,
      },
      {
        name: "Server",
        href: "https://github.com/md-rejoyan-islam/kinsust_backend",
        icon: <FaServer className="text-button" />,
      },
    ],
  },
  {
    name: "KINSUST A VOLUNTARY ORGANIZATION",
    isBest: true,
    description:
      "This is a website for a voluntary organization called KINSUST. The website is built with NextJs, Redux Tookit Query, Tailwind CSS, Shadcn/ui, and Framer Motion. The website is a simple website that displays information about the organization, its mission, and vision.",
    techStack: ["REACT", "TailwindCSS", "Redux", "Next.JS"],
    banner: "/images/projects/kin.png",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/md-rejoyan-islam/kinsust-nextjs.git",
        icon: <FaGithub className="text-button" />,
      },
      {
        name: "Preview",
        href: "https://kinsust.vercel.app",
        icon: <FaExternalLinkAlt className="text-button" />,
      },
      {
        name: "Server",
        href: "https://github.com/md-rejoyan-islam/kinsust_backend",
        icon: <FaServer className="text-button" />,
      },
    ],
  },
];

export const filterKeys = [
  {
    name: "All",
  },
  {
    name: "Redux",
  },
  {
    name: "Next.Js",
  },
  {
    name: "React",
  },
];
