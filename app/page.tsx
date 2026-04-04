import AboutPreview from "@/components/AboutPreview";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import ProjectTimeline from "@/components/ProjectTimeline";
import Sections from "@/components/Sections";
import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness, Building2, Handshake, Users2 } from "lucide-react";

const kpiItems: Array<{ value: string; label: string; icon: LucideIcon }> = [
  { value: "250+", label: "Active Clients", icon: Users2 },
  { value: "420+", label: "Projects Delivered", icon: BriefcaseBusiness },
  { value: "18", label: "Years Experience", icon: Building2 },
  { value: "96%", label: "Client Satisfaction", icon: Handshake },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-brand text-brand-foreground">
      <Header />
      <main>
        <Hero />

        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kpiItems.map((item) => {
              const Icon = item.icon;

              return (
              <article key={item.label} className="surface-card rounded-2xl p-5 text-center sm:p-6">
                <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-brand-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="font-technical text-3xl text-white sm:text-4xl">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.09em] text-brand-muted">{item.label}</p>
              </article>
              );
            })}
          </div>
        </section>

        <AboutPreview />
        <ProjectTimeline />
        <Sections />
        <HomeContact />
      </main>
      <Footer />
    </div>
  );
}
