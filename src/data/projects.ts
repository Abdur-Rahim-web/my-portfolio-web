import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: 1,
        slug: "nestora",

        title: "Nestora",

        category: "Property Rental Platform",

        description:
            "A full-stack property rental and booking platform that enables property owners to list and manage rental properties while allowing tenants to search, book, and securely pay reservation fees through a modern and responsive interface.",

        image: "/images/projects/nestora.png",

        technologies: [
            "Next.js",
            "JavaScript",
            "Tailwind CSS",
            "Express.js",
            "MongoDB",
            "JWT",
            "Stripe",
        ],

        liveUrl: "https://my-rental-client.vercel.app",

        clientRepo:
            "https://github.com/Abdur-Rahim-web/my-rental-client",

        serverRepo:
            "https://github.com/Abdur-Rahim-web/my-rental-server",

        challenges:
            "Implemented role-based authentication, secure booking workflows, Stripe payment integration, and property management while maintaining a scalable and responsive user experience.",

        futurePlans:
            "Add real-time notifications, interactive maps, property sharing, email notifications, and advanced analytics for property owners.",
    },

    {
        id: 2,
        slug: "edupath-ai",

        title: "EduPath AI",

        category: "AI Learning Platform",

        description:
            "An AI-powered learning platform that helps users discover courses, manage learning resources, and receive intelligent assistance through Gemini AI in a modern and responsive interface.",

        image: "/images/projects/edupath-ai.png",

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "MongoDB",
            "JWT",
            "Gemini AI",
        ],

        liveUrl: "https://edupath-ai-gilt.vercel.app/",

        clientRepo:
            "https://github.com/Abdur-Rahim-web/edupath-ai",

        serverRepo: "",

        challenges:
            "Integrated AI-powered features, implemented secure authentication, protected routes, and handled AI API limitations while ensuring a smooth learning experience.",

        futurePlans:
            "Add AI-generated quizzes, personalized learning recommendations, instructor dashboards, progress tracking, and certificate generation.",
    },

    {
        id: 3,
        slug: "studyspot",

        title: "StudySpot",

        category: "Study Room Booking Platform",

        description:
            "A full-stack study room booking platform that enables users to discover, reserve, and manage study spaces with secure authentication, role-based access control, and real-time booking validation.",

        image: "/images/projects/studyspot.png",

        technologies: [
            "Next.js",
            "JavaScript",
            "Tailwind CSS",
            "Express.js",
            "MongoDB",
            "JWT",
            "Google OAuth",
        ],

        liveUrl: "https://studyspot-client.vercel.app/",

        clientRepo:
            "https://github.com/Abdur-Rahim-web/studyspot-client",

        serverRepo:
            "https://github.com/Abdur-Rahim-web/studyspot-server",

        challenges:
            "Implemented booking conflict prevention, secure authentication, role-based permissions, and real-time time-slot validation while delivering a responsive user experience.",

        futurePlans:
            "Add calendar synchronization, online payments, email notifications, booking analytics, and smart room recommendations.",
    },
];