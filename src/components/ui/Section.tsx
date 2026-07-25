import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/shared/Container";

interface SectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
}

const Section = ({
    id,
    children,
    className,
}: SectionProps) => {
    return (
        <section
            id={id}
            className={cn("py-20", className)}
        >
            <Container>
                {children}
            </Container>
        </section>
    );
};

export default Section;