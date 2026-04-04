import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const contactCards = [
  {
    title: "Email",
    value: "contact@gigatechnology.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+20 100 000 0000",
    icon: PhoneCall,
  },
  {
    title: "Office",
    value: "Cairo, Egypt - Smart Village",
    icon: MapPin,
  },
  {
    title: "Working Hours",
    value: "Sun-Thu, 9:00 AM - 6:00 PM",
    icon: Clock3,
  },
];

export default function HomeContact() {
  return (
    <section id="contact" className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-12">
      <div className="section-shell">
        <Reveal delay={70}>
          <article className="surface-card rounded-3xl p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-accent">Contact Us</p>
                <h2 className="mt-3 font-technical text-3xl text-white sm:text-4xl">Let us support your next project</h2>
                <p className="mt-4 max-w-xl text-brand-muted">
                  This is dummy data for now. Share your requirements and our team will provide a focused proposal,
                  estimated timeline, and implementation plan.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="mailto:contact@gigatechnology.com"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-brand transition-colors hover:bg-brand-muted"
                  >
                    Send Email
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                  <a
                    href="tel:+201000000000"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white/70"
                  >
                    Call Now
                    <PhoneCall className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {contactCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div key={card.title} className="rounded-2xl border border-white/20 bg-white/5 p-4">
                      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                        <Icon className="h-4 w-4" aria-hidden />
                        {card.title}
                      </p>
                      <p className="mt-2 text-sm font-medium text-brand-foreground">{card.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 border-t border-white/20 pt-5">
              <Link
                href="#home"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand-muted transition-colors hover:text-white"
              >
                Back to top
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
