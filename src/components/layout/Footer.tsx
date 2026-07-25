"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { SOCIAL_LINKS } from "@/data/socialLinks";

const Footer = () => {
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Education", href: "#education" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="mt-20 border-t border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 py-12">
                <div className="flex flex-col items-center gap-8">
                    {/* Profile */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-slate-900">
                            {profile.name}
                        </h2>

                        <p className="mt-2 text-lg text-slate-600">
                            {profile.designation}
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-600"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {SOCIAL_LINKS.map((social) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="rounded-full border border-slate-300 p-3 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>

                    {/* Career Message */}
                    <div className="w-full max-w-2xl border-t border-slate-200 pt-8 text-center">
                        <p className="text-lg font-semibold text-slate-800">
                            Open to Remote Full Stack Developer Opportunities
                        </p>

                        <p className="mt-2 text-slate-600">
                            Let&apos;s build scalable, user-focused web applications together.
                        </p>
                    </div>

                    {/* Back to Top */}
                    <button
                        onClick={handleBackToTop}
                        className="rounded-lg px-5 py-2 text-sm font-medium text-blue-600 transition-all duration-300 hover:bg-blue-50"
                    >
                        ↑ Back to Top
                    </button>

                    {/* Copyright */}
                    <p className="text-center text-sm text-slate-500">
                        © {new Date().getFullYear()} {profile.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;