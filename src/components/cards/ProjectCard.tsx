import Image from "next/image";
import Link from "next/link";
import {
    FaArrowRight,
    FaExternalLinkAlt,
    FaGithub,
} from "react-icons/fa";

import Button from "@/components/ui/Button";
import { Project } from "@/types/project";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                {/* Category */}
                <span className="mb-4 inline-flex w-fit rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700">
                    {project.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-1 text-slate-600 line-clamp-3">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                        >
                            {tech}
                        </span>
                    ))}

                    {project.technologies.length > 5 && (
                        <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                            +{project.technologies.length - 5}
                        </span>
                    )}
                </div>

                {/* Buttons */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <Button className="flex w-full items-center justify-center gap-2">
                            <FaExternalLinkAlt size={14} />
                            <span>Live</span>
                        </Button>
                    </a>

                    <a
                        href={project.clientRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <Button
                            variant="outline"
                            className="flex w-full items-center justify-center gap-2"
                        >
                            <FaGithub size={12} />
                            <span>GitHub</span>
                        </Button>
                    </a>

                    <Link
                        href={`/projects/${project.slug}`}
                        className="w-full"
                    >
                        <Button
                            variant="secondary"
                            className="flex w-full items-center justify-center gap-2"
                        >
                            <span>Details</span>
                            <FaArrowRight size={13} />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;