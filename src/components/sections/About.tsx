import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { about } from "@/data/about";
import { profile } from "@/data/profile";

const About = () => {
    return (
        <Section id="about">
            <SectionHeading
                title={about.title}
                subtitle="Get to know more about me and my programming journey."
            />

            <div className="grid gap-10 lg:grid-cols-3">
                {/* Left Content */}
                <div className="space-y-8 lg:col-span-2">
                    <div>
                        <h3 className="mb-2 text-xl font-semibold text-slate-900">
                            Introduction
                        </h3>
                        <p className="leading-8 text-slate-600">
                            {about.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-xl font-semibold text-slate-900">
                            Programming Journey
                        </h3>
                        <p className="leading-8 text-slate-600">
                            {about.journey}
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-xl font-semibold text-slate-900">
                            Interests
                        </h3>
                        <p className="leading-8 text-slate-600">
                            {about.interests}
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-xl font-semibold text-slate-900">
                            Hobbies
                        </h3>
                        <p className="leading-8 text-slate-600">
                            {about.hobbies}
                        </p>
                    </div>
                </div>

                {/* Right Card */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-6 text-xl font-semibold">
                        Quick Info
                    </h3>

                    <div className="space-y-5">
                        <div>
                            <p className="text-sm text-slate-500">Name</p>
                            <p className="font-medium">{profile.name}</p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">Email</p>
                            <p className="font-medium">{profile.email}</p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">Location</p>
                            <p className="font-medium">
                                Rajshahi, Bangladesh
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">
                                Education
                            </p>
                            <p className="font-medium">
                                Diploma in Electrical Engineering
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">
                                Availability
                            </p>
                            <p className="font-medium text-green-600">
                                Open to Opportunities
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;