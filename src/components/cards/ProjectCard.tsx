import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Project } from "@/types/project";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Project Image */}
            <div className="relative aspect-video">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="space-y-5 p-6">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                        {project.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-slate-600">
                        {project.description}
                    </p>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
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
                            GitHub
                        </Button>
                    </a>

                    <Link href={`/projects/${project.slug}`}>
                        <Button variant="secondary">
                            Details
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;