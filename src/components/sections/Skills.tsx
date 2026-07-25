import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "@/components/cards/SkillCard";
import { skillCategories } from "@/data/skills";

const Skills = () => {
    return (
        <Section id="skills">
            <SectionHeading
                title="My Skills"
                subtitle="Technologies I use to build modern web applications."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {skillCategories.map((category) => (
                    <SkillCard
                        key={category.title}
                        title={category.title}
                        skills={category.skills}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Skills;