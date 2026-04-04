import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand px-4 py-20 text-brand-foreground sm:px-6 lg:px-8">
      <div className="section-shell">
        <h1 className="font-technical text-4xl text-white sm:text-5xl">About Giga Technology</h1>
        <p className="mt-4 max-w-3xl text-lg text-brand-muted">
          This is a placeholder About page. You can replace this content with your final company story, values,
          capabilities, and milestones.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border border-white/35 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-white/70"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
