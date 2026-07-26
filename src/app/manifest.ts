import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Abdur Rahim | Full Stack Developer",

        short_name: "Abdur Rahim",

        description:
            "Portfolio of Abdur Rahim, a Full Stack Developer specializing in Next.js, TypeScript, React, Node.js, Express.js, and MongoDB.",

        start_url: "/",

        id: "/",

        display: "standalone",

        background_color: "#ffffff",

        theme_color: "#2563eb",

        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}