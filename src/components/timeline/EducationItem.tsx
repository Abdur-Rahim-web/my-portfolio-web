interface EducationItemProps {
    degree: string;
    institution: string;
    result: string;
    duration: string;
}

const EducationItem = ({
    degree,
    institution,
    result,
    duration,
}: EducationItemProps) => {
    return (
        <div className="relative pl-10 pb-10">
            {/* Timeline Line */}
            <div className="absolute left-3 top-0 h-full w-0.5 bg-slate-300" />

            {/* Timeline Dot */}
            <div className="absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-blue-600 bg-white" />

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">
                    {degree}
                </h3>

                <p className="mt-2 text-slate-600">
                    {institution}
                </p>

                <p className="mt-2 font-medium text-blue-600">
                    {result}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                    {duration}
                </p>
            </div>
        </div>
    );
};

export default EducationItem;