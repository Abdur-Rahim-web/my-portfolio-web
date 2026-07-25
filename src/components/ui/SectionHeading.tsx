import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
}

const SectionHeading = ({
    title,
    subtitle,
    align = "center",
}: SectionHeadingProps) => {
    return (
        <div
            className={cn(
                "mb-12",
                align === "center" ? "text-center" : "text-left"
            )}
        >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                {title}
            </h2>

            {subtitle && (
                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;