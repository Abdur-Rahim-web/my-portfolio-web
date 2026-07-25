import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import EducationItem from "@/components/timeline/EducationItem";
import { educationData } from "@/data/education";

const Education = () => {
    return (
        <Section id="education">
            <SectionHeading
                title="Education"
                subtitle="My academic journey and qualifications."
            />

            <div className="mx-auto max-w-4xl">
                {educationData.map((item) => (
                    <EducationItem
                        key={item.degree}
                        degree={item.degree}
                        institution={item.institution}
                        result={item.result}
                        duration={item.duration}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Education;