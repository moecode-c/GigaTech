import Reveal from "@/components/Reveal";

const services = [
  "CP Solutions",
  "Retail Integration",
  "Operational Support",
];

const products = ["Control Panels", "Automation Modules", "Monitoring Dashboards"];

export default function Sections() {
  return (
    <>
      <section id="about" className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="section-shell grid gap-4 md:grid-cols-2">
          <Reveal delay={50}>
            <article className="surface-card rounded-2xl p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-accent">About Us</p>
              <h2 className="mt-3 font-technical text-3xl text-white sm:text-4xl">Clear systems, practical outcomes</h2>
              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                We design and deliver electromechanical integrated solutions focused on reliability, visibility, and
                long-term operational value.
              </p>
            </article>
          </Reveal>

          <Reveal delay={110}>
            <article className="surface-card rounded-2xl p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-accent">Approach</p>
              <div className="mt-4 space-y-3 text-brand-muted">
                <p className="rounded-xl border border-white/20 bg-white/5 px-4 py-3">Simple architecture and clear implementation plans.</p>
                <p className="rounded-xl border border-white/20 bg-white/5 px-4 py-3">Strong execution from kickoff to support.</p>
                <p className="rounded-xl border border-white/20 bg-white/5 px-4 py-3">Design choices aligned to real operational needs.</p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section id="services" className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="section-shell">
          <Reveal className="mb-5" delay={60}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-accent">Services</p>
            <h2 className="mt-2 font-technical text-3xl text-white sm:text-4xl">What we deliver</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((item, index) => (
              <Reveal key={item} delay={100 + index * 60}>
                <article className="surface-card rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white">{item}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="section-shell">
          <Reveal className="mb-5" delay={60}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-accent">Products</p>
            <h2 className="mt-2 font-technical text-3xl text-white sm:text-4xl">Core offerings</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {products.map((item, index) => (
              <Reveal key={item} delay={100 + index * 60}>
                <article className="surface-card rounded-2xl p-6 text-brand-muted">{item}</article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}