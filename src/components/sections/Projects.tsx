import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
    return (
        <Section id="projects">
            <SectionHeading
                title="Featured Projects"
                subtitle="A selection of full-stack applications that showcase my skills in modern web development."
            />

            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Projects;