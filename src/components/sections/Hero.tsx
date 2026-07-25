"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { SOCIAL_LINKS } from "@/data/socialLinks";

const Hero = () => {
    return (
        <Section
            id="home"
            className="py-20 lg:py-28 flex items-center"
        >
            <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                >
                    <p className="text-lg font-medium text-blue-600">
                        👋 Hello, I&apos;m
                    </p>

                    <h1 className="mt-3 text-4xl lg:text-5xl font-extrabold leading-tight bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent ">
                        {profile.name}
                    </h1>

                    <h2 className="mt-4 text-2xl font-semibold text-slate-700">
                        {profile.designation}
                    </h2>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                        {profile.tagline}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href={profile.resume}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button>
                                Download Resume
                            </Button>
                        </a>

                        <a href="#contact">
                            <Button variant="outline">
                                Contact Me
                            </Button>
                        </a>
                    </div>

                    <div className="mt-8 flex items-center gap-5">
                        {SOCIAL_LINKS.map((item) => {
                            const Icon = item.icon;

                            return (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.name}
                                    className="text-3xl text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:text-blue-600"
                                >
                                    <Icon />
                                </a>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                >
                    <Image
                        src={profile.image}
                        alt={profile.name}
                        width={450}
                        height={450}
                        priority
                        className=" rounded-full border-8 border-slate-100 object-cover shadow-2xl ring-4 ring-blue-100 transition-transform duration-300 hover:scale-105 "
                    />
                </motion.div>
            </div>
        </Section >
    );
};

export default Hero;