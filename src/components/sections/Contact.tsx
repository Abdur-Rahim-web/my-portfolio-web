import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { contact } from "@/data/contact";
import { SOCIAL_LINKS } from "@/data/socialLinks";

const Contact = () => {
    return (
        <Section id="contact">
            <SectionHeading
                title="Get In Touch"
                subtitle="Feel free to reach out for collaboration or opportunities."
            />

            <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="space-y-5">

                    <div>
                        <h3 className="font-semibold text-slate-900">
                            Email
                        </h3>

                        <p className="text-slate-600">
                            {contact.email}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900">
                            Phone
                        </h3>

                        <p className="text-slate-600">
                            {contact.phone}
                        </p>
                    </div>

                    {contact.whatsapp && (
                        <div>
                            <h3 className="font-semibold text-slate-900">
                                WhatsApp
                            </h3>

                            <p className="text-slate-600">
                                {contact.whatsapp}
                            </p>
                        </div>
                    )}

                    <div>
                        <h3 className="font-semibold text-slate-900">
                            Location
                        </h3>

                        <p className="text-slate-600">
                            {contact.location}
                        </p>
                    </div>

                </div>

                <div className="mt-8 flex gap-4">
                    {SOCIAL_LINKS.map((social) => {
                        const Icon = social.icon;

                        return (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-slate-300 p-3 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                            >
                                <Icon size={22} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default Contact;