import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Building2,
  Handshake,
  Home,
  Info,
  Mail,
  Package,
  Users,
  Users2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const footerLinks: FooterLink[] = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: Info },
  { label: "Team", href: "#team", icon: Users },
  { label: "Sectors", href: "#sectors", icon: Building2 },
  { label: "Services", href: "#services", icon: BriefcaseBusiness },
  { label: "Partners", href: "#partners", icon: Handshake },
  { label: "Clients", href: "#clients", icon: Users2 },
  { label: "Products", href: "#products", icon: Package },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/15 bg-brand-soft/80 px-4 py-10 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 p-3">
            <Image
              src="/gigatech.png"
              alt="Giga Technology logo"
              width={180}
              height={80}
              className="h-14 w-auto rounded-md object-cover"
            />
          </div>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-brand-muted">
            Giga Technology delivers electromechanical integrated solutions for modern operations with practical design,
            reliable deployment, and long-term support.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">Quick Links</p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {footerLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.06em] text-brand-muted transition-colors hover:border-white/35 hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="section-shell mt-8 border-t border-white/15 pt-5 text-center text-xs text-brand-muted sm:text-left">
        © 2026 Giga Technology. All rights reserved.
      </div>
    </footer>
  );
}