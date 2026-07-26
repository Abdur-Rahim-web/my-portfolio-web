import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://my-portfolio-web-kappa-sepia.vercel.app";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },

        {
            url: `${baseUrl}/#about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },

        {
            url: `${baseUrl}/#skills`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },

        {
            url: `${baseUrl}/#education`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },

        {
            url: `${baseUrl}/#projects`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },

        {
            url: `${baseUrl}/#contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },

        {
            url: `${baseUrl}/projects/nestora`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },

        {
            url: `${baseUrl}/projects/edupath-ai`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },

        {
            url: `${baseUrl}/projects/studyspot`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}