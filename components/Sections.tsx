import Reveal from "@/components/Reveal";
import { 
  CheckCircle2, 
  Cpu, 
  Store, 
  LifeBuoy, 
  SlidersHorizontal, 
  Network, 
  LayoutDashboard,
  ArrowRight
} from "lucide-react";

const services = [
  { 
    title: "CP Solutions", 
    desc: "Advanced engineering tailored for robust precision and reliable control.", 
    icon: Cpu 
  },
  { 
    title: "Retail Integration", 
    desc: "Seamless physical and digital implementation for modern retail ecosystems.", 
    icon: Store 
  },
  { 
    title: "Operational Support", 
    desc: "24/7 dedicated assistance to maximize your infrastructure uptime.", 
    icon: LifeBuoy 
  },
];

const products = [
  { 
    title: "Control Panels", 
    desc: "Custom-built electrical systems with unified management interfaces.", 
    icon: SlidersHorizontal 
  },
  { 
    title: "Automation Modules", 
    desc: "Scalable automated networks designed for the most demanding industries.", 
    icon: Network 
  },
  { 
    title: "Monitoring Dashboards", 
    desc: "Actionable real-time insights securely accessible from anywhere.", 
    icon: LayoutDashboard 
  },
];

const approachItems = [
  "Simple architecture and clear implementation plans.",
  "Strong execution from kickoff to support.",
  "Design choices aligned to real operational needs.",
];

export default function Sections() {
  return (
    <>
      <section id="about" className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-5">
          <Reveal delay={50} className="lg:col-span-3">
            <article className="surface-card group relative flex h-full flex-col justify-center overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-12">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-accent/10 blur-3xl transition-opacity duration-500 group-hover:bg-brand-accent/20" />
              
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">About Us</p>
                <h2 className="mt-5 font-technical text-4xl font-medium tracking-wide text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                  Clear systems,<br />
                  practical outcomes.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-muted sm:text-xl">
                  We design and deliver electromechanical integrated solutions focused on reliability, visibility, and long-term operational value. We transform complex engineering challenges into streamlined frameworks.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={110} className="lg:col-span-2">
            <article className="surface-card group relative h-full overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-10">
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-accent/10 blur-3xl transition-opacity duration-500 group-hover:bg-brand-accent/20" />
              
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">Approach</p>
                <div className="mt-8 flex flex-col gap-5">
                  {approachItems.map((item, i) => (
                    <div key={i} className="group/item relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/[0.06]">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <p className="font-medium text-brand-muted transition-colors group-hover/item:text-brand-foreground">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section id="services" className="px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="section-shell">
          <Reveal className="mb-10 text-center sm:mb-12" delay={60}>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-accent">Services</p>
            <h2 className="mt-3 font-technical text-4xl text-white sm:text-5xl">What we deliver</h2>
          </Reveal>
          
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={100 + index * 60}>
                  <article className="surface-card group relative overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 opacity-0 transition-opacity duration-500 group-hover:from-white/5 group-hover:to-transparent group-hover:opacity-100" />
                    
                    <div className="relative z-10 flex flex-col">
                      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 shadow-inner transition-transform duration-500 group-hover:-translate-y-1 group-hover:bg-brand-accent/20">
                        <Icon className="h-8 w-8 text-brand-accent" />
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-white">{item.title}</h3>
                      <p className="mt-4 leading-relaxed text-brand-muted">{item.desc}</p>
                      
                      <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-accent opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100">
                        Explore <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="products" className="px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="section-shell">
          <Reveal className="mb-10 text-center sm:mb-12" delay={60}>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-accent">Products</p>
            <h2 className="mt-3 font-technical text-4xl text-white sm:text-5xl">Core offerings</h2>
          </Reveal>
          
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={100 + index * 60}>
                  <article className="surface-card group relative overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/0 to-brand-accent/0 opacity-0 transition-opacity duration-500 group-hover:from-brand-accent/5 group-hover:to-transparent group-hover:opacity-100" />
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 shadow-inner transition-colors duration-500 group-hover:bg-white/10">
                        <Icon className="h-8 w-8 text-white transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-white">{item.title}</h3>
                      <p className="mt-4 leading-relaxed text-brand-muted">{item.desc}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}