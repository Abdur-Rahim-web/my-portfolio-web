import Link from "next/link";
import { NAVIGATION_LINKS } from "@/constants/navigation";

type NavLinksProps = {
    onClick?: () => void;
};

const NavLinks = ({ onClick }: NavLinksProps) => {
    return (
        <>
            {NAVIGATION_LINKS.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClick}
                    className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                >
                    {item.label}
                </Link>
            ))}
        </>
    );
};

export default NavLinks;