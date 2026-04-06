import AboutPreview from "@/components/AboutPreview";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import ProjectTimeline from "@/components/ProjectTimeline";
import Sections from "@/components/Sections";
import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness, Building2, Handshake, Users2 } from "lucide-react";
import Link from "next/link";

const kpiItems: Array<{ value: string; label: string; icon: LucideIcon }> = [
  { value: "250+", label: "Active Clients", icon: Users2 },
  { value: "420+", label: "Projects Delivered", icon: BriefcaseBusiness },
  { value: "18", label: "Years Experience", icon: Building2 },
  { value: "96%", label: "Client Satisfaction", icon: Handshake },
];

export default function GreyHome() {
  return (
    <div className="theme-grey theme-grey-bg min-h-screen overflow-x-clip text-brand-foreground">
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
      
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col sm:flex-row items-end sm:items-center gap-3 backdrop-blur-md bg-black/20 p-2 rounded-full border border-white/5">
        <Link href="/" className="rounded-full bg-[#0b162a] border border-neutral-700/50 px-5 py-3 text-sm font-bold text-neutral-400 hover:text-white hover:bg-neutral-800 shadow-xl transition-all">
          Original UI
        </Link>
        <div className="rounded-full bg-neutral-600 px-6 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(82,82,82,0.4)] border border-neutral-500">
          Grey Palette UI
        </div>
        <Link href="/demo-v2" className="rounded-full bg-[#0b162a] border border-neutral-700/50 px-5 py-3 text-sm font-bold text-neutral-400 hover:text-white hover:bg-neutral-800 shadow-xl transition-all">
          V2 Structure UI
        </Link>
      </div>
    </div>
  );
}
