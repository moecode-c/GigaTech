import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function AboutPreview() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="section-shell overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-brand-soft/95 to-brand/95 text-brand-foreground">
        <div className="grid lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="p-8 sm:p-10 lg:p-12" delay={40}>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">About Giga Technology</p>
            <h2 className="mt-3 font-sans text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Extraordinary Teams Building Inspiring Projects
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-muted">
              We deliver high-impact projects that improve operations, support growth, and enable practical long-term
              development across industrial and infrastructure environments.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-brand-muted">
              Our teams are trusted to solve complex engineering challenges with clear execution, strong quality, and
              dependable delivery.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 text-lg font-semibold text-brand-foreground transition-colors hover:text-brand-accent"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
                <ArrowRight className="h-6 w-6" aria-hidden />
              </span>
              Our Vision, Values and Commitments
            </Link>
          </Reveal>

          <Reveal className="relative min-h-[420px] lg:min-h-full" delay={120}>
            <Image
              src="/gigatech.png"
              alt="Giga Technology preview image"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-brand/10 to-brand/45" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
