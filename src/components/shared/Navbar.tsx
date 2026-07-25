"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
            <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
                <Link href="/" className="text-xl font-bold text-slate-900">
                    Abdur Rahim
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    <NavLinks />
                </div>

                <div className="hidden md:block">
                    <a
                        href="/resume/resume.pdf"
                        className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
                    >
                        Resume
                    </a>
                </div>

                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden"
                    aria-label="Open menu"
                >
                    <Menu size={28} />
                </button>

                <MobileMenu open={open} onClose={() => setOpen(false)} />
            </nav>
        </header>
    );
};

export default Navbar;