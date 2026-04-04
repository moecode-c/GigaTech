"use client";

import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Handshake,
  Home,
  Info,
  Layers3,
  Mail,
  Menu,
  Package,
  Users,
  Users2,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const primaryNavItems: NavItem[] = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: Info },
  { label: "Contact", href: "#contact", icon: Mail },
];

const bundledNavItems: NavItem[] = [
  { label: "Team", href: "#team", icon: Users },
  { label: "Sectors", href: "#sectors", icon: Building2 },
  { label: "Services", href: "#services", icon: BriefcaseBusiness },
  { label: "Partners", href: "#partners", icon: Handshake },
  { label: "Clients", href: "#clients", icon: Users2 },
  { label: "Products", href: "#products", icon: Package },
];

const desktopLinkClass =
  "inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.08] px-5 py-2.5 text-[1rem] font-semibold uppercase tracking-[0.08em] text-white/92 transition-colors hover:border-white/45 hover:bg-white/[0.12]";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopBundleOpen, setDesktopBundleOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const desktopBundleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!desktopBundleRef.current) {
        return;
      }

      if (!desktopBundleRef.current.contains(event.target as Node)) {
        setDesktopBundleOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDesktopBundleOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-white/20 bg-brand-soft/90 backdrop-blur-sm" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="relative flex w-full items-center justify-between py-4 pl-3 pr-3 sm:pl-5 sm:pr-5 lg:pl-6 lg:pr-7 xl:justify-start">
        <Link
          href="#home"
          className="font-display text-[2.1rem] font-semibold tracking-[0.11em] text-white sm:text-[2.35rem]"
          onClick={() => {
            setMobileOpen(false);
            setDesktopBundleOpen(false);
          }}
        >
          GIGA{" "}
          <span className="font-technical text-lg tracking-[0.12em] text-white/85 sm:text-xl">TECHNOLOGY</span>
        </Link>

        <nav className="hidden items-center gap-3 xl:ml-10 xl:flex">
          {primaryNavItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link key={item.label} href={item.href} className={desktopLinkClass}>
                <Icon className="h-5 w-5" aria-hidden />
                {item.label}
              </Link>
            );
          })}

          <div className="relative" ref={desktopBundleRef}>
            <button
              type="button"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.08] px-5 py-2.5 text-[1rem] font-semibold uppercase tracking-[0.08em] text-white/92 transition-colors hover:border-white/45 hover:bg-white/[0.12]"
              aria-expanded={desktopBundleOpen}
              aria-haspopup="menu"
              onClick={() => setDesktopBundleOpen((open) => !open)}
            >
              <Layers3 className="h-5 w-5" aria-hidden />
              Ecosystem
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-200 ${desktopBundleOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>

            {desktopBundleOpen && (
              <div className="absolute left-0 top-[calc(100%+0.45rem)] w-[22rem] max-w-[calc(100vw-1.5rem)] rounded-2xl border border-white/25 bg-brand/95 p-3 shadow-[0_18px_36px_rgba(4,20,50,0.35)] backdrop-blur-sm">
                <p className="px-2 pb-2 text-xs font-bold uppercase tracking-[0.12em] text-white/75">Ecosystem Pages</p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {bundledNavItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="inline-flex min-w-0 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.08] px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.04em] text-white/92 transition-colors hover:border-white/45 hover:bg-white/[0.15] sm:text-[0.95rem]"
                        onClick={() => setDesktopBundleOpen(false)}
                      >
                        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/[0.16] text-white sm:h-7 sm:w-7">
                          <Icon className="h-4 w-4" style={{ strokeWidth: 2.3 }} aria-hidden />
                        </span>
                        <span className="truncate">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        <button
          type="button"
          className="rounded-md border border-white/35 bg-white/10 p-3 text-brand-foreground transition-colors hover:border-white/65 xl:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>

        {mobileOpen && (
          <div className="absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-2xl border border-white/20 bg-brand/95 p-4 shadow-[0_16px_30px_rgba(6,23,54,0.3)] xl:hidden">
            <div className="grid grid-cols-2 gap-2">
              {primaryNavItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="inline-flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/[0.08] px-3.5 py-3 text-base font-semibold uppercase tracking-[0.08em] text-white/92 transition-colors hover:border-white/45 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-3 rounded-xl border border-white/20 bg-white/[0.07] p-3">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/75">Ecosystem</p>
              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {bundledNavItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="inline-flex min-w-0 items-center gap-2 rounded-lg border border-white/20 bg-white/[0.1] px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.05em] text-white/92 transition-colors hover:border-white/45 hover:text-white sm:text-[0.95rem]"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/[0.16] text-white sm:h-7 sm:w-7">
                        <Icon className="h-4 w-4" style={{ strokeWidth: 2.3 }} aria-hidden />
                      </span>
                      <span className="truncate">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}