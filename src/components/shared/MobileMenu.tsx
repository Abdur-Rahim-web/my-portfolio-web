"use client";

import { X } from "lucide-react";
import NavLinks from "./NavLinks";

type MobileMenuProps = {
    open: boolean;
    onClose: () => void;
};

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
    if (!open) return null;

    return (
        <div className="absolute left-0 top-full w-full border-b border-slate-200 bg-white shadow-lg md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6">
                <div className="flex justify-end">
                    <button onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <div className="flex flex-col gap-5">
                    <NavLinks onClick={onClose} />

                    <a
                        href="/resume/resume.pdf"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-center text-white transition hover:bg-blue-700"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;