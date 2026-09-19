import {
  ArrowRight,
  Building2,
  Camera,
  ClipboardCheck,
  Map as MapIcon,
  Recycle,
  Route as RouteIcon,
  Sparkles,
  Truck,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { AnimatedAiDetection } from "@/components/landing/AnimatedAiDetection";

const FEATURES = [
  { icon: <Camera className="size-5" />, title: "Citizen Reporting", desc: "Snap a photo, auto-capture GPS, drop a pin — under 2 minutes on any device." },
  { icon: <Sparkles className="size-5" />, title: "AI Classification", desc: "11 waste categories classified by computer vision with transparent confidence scores." },
  { icon: <MapIcon className="size-5" />, title: "Live Severity Map", desc: "Color-coded markers, clustering and heatmaps across both civic zones." },
  { icon: <Truck className="size-5" />, title: "Smart Collection", desc: "OSRM-optimized routes dispatched straight to collection crews in the field." },
  { icon: <ShieldCheck className="size-5" />, title: "Verified Closure", desc: "Crews upload proof photos; operators verify every report before it's closed." },
  { icon: <Recycle className="size-5" />, title: "Civic Analytics", desc: "Ward-level MTTR, hotspots and composition trends for budget decisions." },
];

const STEPS = [
  { id: "01", label: "Spot", icon: <Recycle className="size-4" /> },
  { id: "02", label: "Snap", icon: <Camera className="size-4" /> },
  { id: "03", label: "Analyze", icon: <Sparkles className="size-4" /> },
  { id: "04", label: "Classify", icon: <ClipboardCheck className="size-4" /> },
  { id: "05", label: "Locate", icon: <MapIcon className="size-4" /> },
  { id: "06", label: "Prioritize", icon: <Zap className="size-4" /> },
  { id: "07", label: "Dispatch", icon: <RouteIcon className="size-4" /> },
  { id: "08", label: "Improve", icon: <ShieldCheck className="size-4" /> },
];

const ZONES = [
  {
    icon: <Building2 className="size-5" />,
    name: "Kolkata Urban (KMC)",
    desc: "High-density packaging waste, blocked drains and overflowing compactor stations across Park Street, Salt Lake, Esplanade and Gariahat.",
    coord: "22.5726° N, 88.3639° E",
    accent: "text-forest-400 bg-forest-500/15 ring-forest-500/30",
  },
  {
    icon: <MapIcon className="size-5" />,
    name: "Rajarhat Gram Panchayat",
    desc: "Illegal dumping along canal (khal) embankments, pond (pukur) pollution and village road litter served by local e-rickshaw crews.",
    coord: "22.6105° N, 88.5122° E",
    accent: "text-amber-400 bg-amber-500/15 ring-amber-500/30",
  },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-dvh overflow-x-clip bg-surface-950 text-[#ecf8f1]">
      <div className="aurora" aria-hidden />

      {/* nav */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-primary font-display text-lg font-black text-white shadow-glow-forest">
            B
            <span className="absolute inset-0 bg-[radial-gradient(80%_80%_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">binit</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/signin"
            className="rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-forest-100 ring-1 ring-white/15 transition hover:bg-white/10"
          >
            Sign in
          </Link>
          <Link
            href="/signin"
            className="hidden items-center gap-1.5 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-white shadow-glow-forest transition hover:brightness-110 sm:inline-flex"
          >
            Report waste <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </header>

      <main className="relative z-[1] mx-auto max-w-6xl px-5 sm:px-6">
        {/* hero */}
        <section className="flex flex-col items-center pb-14 pt-14 text-center sm:pt-20">
          <p className="mb-5 inline-flex animate-fade-up items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-forest-300">
            <Sparkles className="size-3.5 text-amber-400" />
            AI-powered civic waste intelligence
          </p>
          <h1 className="max-w-4xl animate-fade-up font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl" style={{ animationDelay: "60ms" }}>
            Spot it. Snap it.
            <br />
            <span className="gradient-text text-glow">Solve it.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-forest-100/60 sm:text-lg" style={{ animationDelay: "120ms" }}>
            Binit turns citizen photos into structured environmental intelligence — classifying waste,
            scoring severity, routing collectors and closing the loop from Kolkata&apos;s streets to
            Rajarhat&apos;s village ponds.
          </p>
          <div className="mt-9 flex animate-fade-up flex-wrap items-center justify-center gap-3" style={{ animationDelay: "180ms" }}>
            <Link
              href="/signin"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-7 py-3.5 font-bold text-white shadow-glow-forest transition hover:brightness-110 active:translate-y-px"
            >
              Report waste now <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/signin"
              className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 font-semibold text-forest-100 transition hover:bg-white/10"
            >
              Explore demo roles
            </Link>
          </div>

          {/* AI detection preview */}
          <AnimatedAiDetection />

          {/* stats strip */}
          <div className="mt-14 grid w-full max-w-3xl animate-fade-up grid-cols-2 gap-3 sm:grid-cols-4" style={{ animationDelay: "240ms" }}>
            {[
              { k: "11", v: "waste categories", icon: <Recycle className="size-4 text-forest-400" /> },
              { k: "8-step", v: "resolution loop", icon: <Zap className="size-4 text-amber-400" /> },
              { k: "2", v: "civic zones", icon: <MapIcon className="size-4 text-sky-400" /> },
              { k: "100%", v: "proof-verified", icon: <ShieldCheck className="size-4 text-emerald-400" /> },
            ].map((s) => (
              <div key={s.k} className="glass rounded-2xl p-4 text-left">
                <div className="mb-1">{s.icon}</div>
                <p className="font-display text-2xl font-bold text-white">{s.k}</p>
                <p className="text-[11px] text-forest-100/50">{s.v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* features */}
        <section className="py-12">
          <div className="mb-8 text-center">
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-forest-400/80">Capabilities</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything a clean city needs</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="group glass rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-forest-500/40 hover:shadow-lift"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-forest-500/15 text-forest-400 ring-1 ring-forest-500/25 transition-transform duration-300 group-hover:scale-110">
                  {f.icon}
                </div>
                <h3 className="font-display text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-forest-100/55">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* zones */}
        <section className="py-12">
          <div className="mb-8 text-center">
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-forest-400/80">Coverage</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">From metropolises to villages</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {ZONES.map((z) => (
              <div
                key={z.name}
                className="relative overflow-hidden glass rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="absolute -right-10 -top-10 size-40 rounded-full bg-forest-500/10 blur-3xl" />
                <div className={`mb-4 inline-flex size-11 items-center justify-center rounded-xl ring-1 ${z.accent}`}>
                  {z.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white">{z.name}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-forest-100/60">{z.desc}</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 font-mono text-[11px] text-forest-100/50 ring-1 ring-white/10">
                  <MapIcon className="size-3" /> {z.coord}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 8-step loop */}
        <section className="py-12">
          <div className="glass-strong rounded-3xl p-7 text-center sm:p-10">
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-forest-400/80">How it works</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white">The resolution loop</h2>
            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
              {STEPS.map((s, i) => (
                <div key={s.label} className="group relative rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/8 transition-all duration-300 hover:bg-forest-500/10 hover:ring-forest-500/40">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-white/10 transition group-hover:text-forest-500/40">
                      {s.id}
                    </span>
                    <span className="text-forest-400 transition group-hover:scale-125">{s.icon}</span>
                  </div>
                  <p className="text-sm font-semibold text-forest-100/85">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 pt-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d2119] via-[#0e2c1d] to-[#07140f] p-8 text-center ring-1 ring-forest-500/25 sm:p-12">
            <div className="pointer-events-none absolute -left-16 -top-16 size-56 rounded-full bg-forest-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 size-56 rounded-full bg-teal-500/15 blur-3xl" />
            <h2 className="relative font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A cleaner city starts with one photo.
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-sm leading-relaxed text-forest-100/60 sm:text-base">
              Sign in with a demo role — citizen, operator, crew or administrator — and experience the full loop.
            </p>
            <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/signin"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-7 py-3.5 font-bold text-white shadow-glow-forest transition hover:brightness-110"
              >
                Enter the demo <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-[1] border-t border-white/8 py-8 text-center text-sm text-forest-100/40">
        <p>
          Binit · <span className="gradient-text font-semibold">Smarter Waste. Cleaner Tomorrow.</span>
        </p>
      </footer>
    </div>
  );
}