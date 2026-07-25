import Image from "next/image";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { SOCIAL_LINKS } from "@/data/socialLinks";

const Hero = () => {
    return (
        <Section
            id="home"
            className="min-h-[calc(100vh-72px)] flex items-center"
        >
            <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Left Content */}
                <div>
                    <p className="text-lg font-medium text-blue-600">
                        Hello, I&apos;m
                    </p>

                    <h1 className="mt-3 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
                        {profile.name}
                    </h1>

                    <h2 className="mt-4 text-2xl font-semibold text-slate-700">
                        {profile.designation}
                    </h2>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                        {profile.tagline}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button>
                            Download Resume
                        </Button>

                        <Button variant="outline">
                            Contact Me
                        </Button>
                    </div>

                    <div className="mt-8 flex items-center gap-5">
                        {SOCIAL_LINKS.map((item) => {
                            const Icon = item.icon;

                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.name}
                                    className="text-2xl text-slate-600 transition hover:text-blue-600"
                                >
                                    <Icon />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex justify-center">
                    <Image
                        src={profile.image}
                        alt={profile.name}
                        width={450}
                        height={450}
                        priority
                        className="rounded-full border-8 border-slate-100 object-cover shadow-xl"
                    />
                </div>
            </div>
        </Section>
    );
};

export default Hero;