import Link from "next/link";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaWhatsappSquare,
} from "react-icons/fa";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { contact } from "@/data/contact";
import { SOCIAL_LINKS } from "@/data/socialLinks";

const Contact = () => {
    return (
        <Section id="contact">
            <SectionHeading
                title="Get In Touch"
                subtitle="I'm always open to discussing remote opportunities, freelance work, and exciting projects."
            />

            <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-lg lg:p-12">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Left Side */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                            Let&apos;s Connect
                        </h3>

                        <p className="mt-4 leading-7 text-slate-600">
                            Whether you have a project in mind, a remote opportunity,
                            or simply want to connect, I&apos;d love to hear from you.
                        </p>

                        <div className="mt-8 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                                    <FaEnvelope size={20} />
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">
                                        Email
                                    </h4>

                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="text-slate-600 transition hover:text-blue-600"
                                    >
                                        {contact.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                                    <FaPhoneAlt size={18} />
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">
                                        Phone
                                    </h4>

                                    <a
                                        href={`tel:${contact.phone}`}
                                        className="text-slate-600 transition hover:text-blue-600"
                                    >
                                        {contact.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                                    <FaWhatsappSquare  size={18} />
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">
                                        WhatsApp
                                    </h4>

                                    <a
                                        href={`https://wa.me/${contact.whatsapp}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-600 transition hover:text-blue-600"
                                    >
                                        {contact.whatsapp}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                                    <FaMapMarkerAlt size={20} />
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">
                                        Location
                                    </h4>

                                    <p className="text-slate-600">
                                        {contact.location}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-10 flex gap-4">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <Link
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        className="rounded-full border border-slate-300 p-3 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg"
                                    >
                                        <Icon size={22} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col justify-center rounded-2xl bg-slate-50 p-8">
                        <span className="w-fit rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
                            Available for Remote Work
                        </span>

                        <h3 className="mt-6 text-3xl font-bold text-slate-900">
                            Looking for a Full Stack Developer?
                        </h3>

                        <p className="mt-4 leading-7 text-slate-600">
                            I&apos;m passionate about building modern, scalable, and
                            user-friendly web applications. If you&apos;re looking for a
                            dedicated developer to join your team or collaborate on
                            your next project, let&apos;s connect.
                        </p>

                        <a
                            href={`mailto:${contact.email}`}
                            className="mt-8 inline-flex w-fit items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
                        >
                            Email Me
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;