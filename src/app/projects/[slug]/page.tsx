import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";
import Button from "@/components/ui/Button";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
    const { slug } = await params;

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-6xl px-4 py-16">
            <Link
                href="/#projects"
                className="mb-8 inline-block text-blue-600 hover:underline"
            >
                ← Back to Projects
            </Link>

            {/* Banner Image */}
            <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl border border-slate-200">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-slate-900">
                {project.title}
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-slate-600">
                {project.description}
            </p>

            {/* Technology */}
            <section className="mt-10">
                <h2 className="mb-4 text-2xl font-semibold">
                    Technology Stack
                </h2>

                <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* Links */}
            <section className="mt-10 flex flex-wrap gap-4">
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button>Live Demo</Button>
                </a>

                <a
                    href={project.clientRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant="outline">
                        Client Repository
                    </Button>
                </a>

                {project.serverRepo && (
                    <a
                        href={project.serverRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="secondary">
                            Server Repository
                        </Button>
                    </a>
                )}
            </section>

            {/* Challenges */}
            <section className="mt-14">
                <h2 className="mb-4 text-2xl font-semibold">
                    Challenges Faced
                </h2>

                <p className="leading-8 text-slate-600">
                    {project.challenges}
                </p>
            </section>

            {/* Future */}
            <section className="mt-14">
                <h2 className="mb-4 text-2xl font-semibold">
                    Future Improvements
                </h2>

                <p className="leading-8 text-slate-600">
                    {project.futurePlans}
                </p>
            </section>
        </main>
    );
};

export default ProjectPage;