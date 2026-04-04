import Image from "next/image";
import Link from "next/link";
import FloatingNetwork from "@/components/FloatingNetwork";

export default function Hero() {
  return (
    <section id="home" className="hero-banner relative min-h-[100svh] overflow-hidden">
      <Image
        src="/gigatech.png"
        alt="Giga Technology hero banner"
        fill
        priority
        className="object-cover object-center"
      />


      <FloatingNetwork
        className="pointer-events-auto absolute -right-12 top-4 z-10 h-72 w-72 opacity-95 sm:-right-20 sm:top-0 sm:h-[28rem] sm:w-[28rem] lg:-right-24 lg:-top-4 lg:h-[34rem] lg:w-[34rem]"
        nodeColor="#e9f4ff"
        lineColor="#5caeff"
        nodeCount={44}
        anchor="top-right"
        interactionStrength={0.24}
        lineOpacity={0.54}
      />

      <FloatingNetwork
        className="pointer-events-auto absolute -bottom-[4.5rem] -left-[4.5rem] z-10 h-80 w-80 opacity-95 sm:-bottom-24 sm:-left-24 sm:h-[32rem] sm:w-[32rem] lg:-bottom-32 lg:-left-[7.5rem] lg:h-[40rem] lg:w-[40rem]"
        nodeColor="#eff7ff"
        lineColor="#4f9dff"
        nodeCount={46}
        anchor="bottom-left"
        interactionStrength={0.26}
        lineOpacity={0.58}
      />

      <div className="relative z-20 flex min-h-[100svh] items-end justify-center px-4 pb-16 sm:pb-20">
        <div className="section-shell flex justify-center">
          <Link
            href="#services"
            className="rounded-2xl border border-[#2f4f83] bg-white px-7 py-3 text-xl font-bold tracking-[0.01em] text-[#1c3f78] shadow-[0_10px_28px_rgba(5,16,41,0.35)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            explore giga
          </Link>
        </div>
      </div>
    </section>
  );
}