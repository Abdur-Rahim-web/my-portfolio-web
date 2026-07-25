import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
}

const variants = {
    primary:
        "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
        "bg-slate-900 text-white hover:bg-slate-800",

    outline:
        "border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100",
};

const Button = ({
    children,
    variant = "primary",
    className,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-60",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;