interface SkillCardProps {
    title: string;
    skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-5 text-xl font-semibold text-slate-900">
                {title}
            </h3>

            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-300 hover:bg-blue-600 hover:text-white"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;