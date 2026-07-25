import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: 1,
        slug: "nestora",
        title: "Nestora",
        description:
            "A full-stack property rental and booking platform with role-based dashboards and secure Stripe payments.",

        image: "/images/projects/nestora.png",

        technologies: [
            "Next.js",
            "TypeScript",
            "MongoDB",
            "Stripe",
            "JWT",
        ],

        liveUrl: "https://my-rental-client.vercel.app",

        clientRepo:
            "https://github.com/Abdur-Rahim-web/my-rental-client",

        serverRepo:
            "https://github.com/Abdur-Rahim-web/my-rental-server",

        challenges:
            "Built role-based authentication, booking workflow, and Stripe payment integration while maintaining a secure user experience.",

        futurePlans:
            "Add real-time notifications, interactive maps, and advanced analytics.",
    },
    {
        id: 2,
        slug: "edupath-ai",

        title: "EduPath AI",

        description:
            "An AI-powered learning platform that helps users explore courses, manage learning resources, and receive intelligent assistance through modern AI features.",

        image: "/images/projects/edupath-ai.png",

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "MongoDB",
            "Express.js",
            "JWT",
            "Gemini AI",
        ],

        liveUrl: "https://edupath-ai-gilt.vercel.app/",

        clientRepo:
            "https://github.com/Abdur-Rahim-web/edupath-ai",

        challenges:
            "Integrating AI services, handling API limitations, implementing secure authentication, and designing a scalable learning platform.",

        futurePlans:
            "Add personalized learning recommendations, AI-generated quizzes, progress tracking, and instructor dashboards.",
    },
    {
        id: 3,
        slug: "studyspot",

        title: "StudySpot",

        description:
            "A full-stack study room booking platform that enables users to discover, reserve, and manage study spaces through a secure and responsive interface.",

        image: "/images/projects/studyspot.png",

        technologies: [
            "Next.js",
            "Tailwind CSS",
            "Node.js",
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
            "Implemented booking conflict prevention, role-based permissions, secure authentication, and real-time booking validation.",

        futurePlans:
            "Add calendar synchronization, email notifications, online payments, and advanced booking analytics.",
    },
];