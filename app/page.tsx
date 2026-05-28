// app/page.tsx

import { ArrowRight, Play, Users, Video, GraduationCap, BarChart3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-100px] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-slate-900/70">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center px-6 py-4 md:grid-cols-3">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Homi Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </Link>
          </div>

          <nav className="whitespace-nowrap hidden md:flex justify-center gap-8 text-sm text-white/60 font-bold">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>
            <a href="#how" className="hover:text-white transition">
              How It Works
            </a>
            <a href="#outcomes" className="hover:text-white transition">
              Outcomes
            </a>
          </nav>

          <div className="flex justify-end">
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3bQf75Ddauut0ZcbDfwAq2WDuQmFlwUiMN0ehx61YcXl2f96aqOSzXV29XNuXeKcl_zRndfH7i"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-full px-5 py-2 text-sm font-bold border border-white/10 bg-white/5 transition hover:bg-white/10"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-16 pt-8 sm:pt-16 lg:flex-row lg:gap-16">
        {/* Left */}
        <div className="max-w-2xl flex-1">
          <div className="mb-6 inline-flex items-center rounded-full border border-indigo-300/20 bg-indigo-300/10 px-4 py-2 text-sm text-indigo-300">
            Informed decisions before May 1
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Turn authentic campus voices into enrollment yield.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
            Homi helps colleges collect and share video responses from faculty, staff, students, and alumni, helping prospective students feel connected before they apply.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3bQf75Ddauut0ZcbDfwAq2WDuQmFlwUiMN0ehx61YcXl2f96aqOSzXV29XNuXeKcl_zRndfH7i"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center rounded-full bg-indigo-500 px-6 py-4 text-sm font-bold transition hover:bg-indigo-400"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </a>

            {/* <button className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-bold transition hover:bg-white/10">
              <Play className="mr-2 h-4 w-4" />
              See How It Works
            </button> */}
          </div>
        </div>

        {/* Mockup */}
        <div className="mt-10 flex-1 lg:mt-0">
          <div className="relative mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            {/* Top Bar */}
            <div className="mb-6 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            {/* Media with overlay text + play button */}
            <div className="relative overflow-hidden rounded-2xl">

              <Image
                src="/crop.jpg"
                alt="Mockup Thumbnail"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute top-4 right-4 rounded-full bg-white/10 text-white border border-white/10 px-3 py-1 text-sm backdrop-blur-md">
                03:48
              </div>

              {/* Play button */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                  <Play className="h-6 w-6" />
                </div>
              </div> */}

              {/* Bottom text */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg text-white/60">Prof. Emily Cruz</p>

                <p className="text-2xl sm:text-3xl font-bold">
                  What makes your program unique?
                </p>
              </div>

            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <StatCard value="12.4k" label="Story Views" />
              <StatCard value="+2.8 pp" label="Yield Impact" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section>

        <p className="px-6 text-center text-sm uppercase tracking-widest text-white/60">
          Powered by alumni and faculty voices from leading institutions
        </p>

        {/* Full bleed marquee */}
        <div className="mt-6 w-screen overflow-hidden">

          {/* Marquee track */}
          <div className="flex w-max animate-marquee will-change-transform">

            {/* Set 1 */}
            <div className="flex shrink-0 items-center">
              <LogoCard src="/logos/berkeley.svg" alt="Berkeley" />
              <LogoCard src="/logos/carleton.svg" alt="Carlton" />
              <LogoCard src="/logos/columbia.svg" alt="Columbia" />
              <LogoCard src="/logos/harvard-edit.svg" alt="Harvard" />
              <LogoCard src="/logos/stthomas.svg" alt="St. Thomas" />
              <LogoCard src="/logos/umn.svg" alt="UMN" />
              <LogoCard src="/logos/upenn-edit.svg" alt="UPenn" />
              <LogoCard src="/logos/usc.svg" alt="USC" />
            </div>

            {/* Duplicate for seamless loop */}
            <div className="flex shrink-0 items-center" aria-hidden="true">
              <LogoCard src="/logos/berkeley.svg" alt="Berkeley" />
              <LogoCard src="/logos/carleton.svg" alt="Carlton" />
              <LogoCard src="/logos/columbia.svg" alt="Columbia" />
              <LogoCard src="/logos/harvard-edit.svg" alt="Harvard" />
              <LogoCard src="/logos/stthomas.svg" alt="St. Thomas" />
              <LogoCard src="/logos/umn.svg" alt="UMN" />
              <LogoCard src="/logos/upenn-edit.svg" alt="UPenn" />
              <LogoCard src="/logos/usc.svg" alt="USC" />
            </div>

          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-t border-white/10 bg-black/20 py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">
            Why Homi
          </p>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Students trust people more than marketing.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Traditional admissions content feels polished but impersonal. Prospective students want real answers from faculty, alumni, and students about campus life, academics, and outcomes.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-6 py-28"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">
            Features
          </p>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Built for modern enrollment teams.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Video className="h-6 w-6" />}
            title="Easy Recording"
            description="Faculty, staff, students, and alumni record directly from any device."
          />

          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Question Prompts"
            description="Guide contributors with structured prompts that surface authentic stories."
          />

          <FeatureCard
            icon={<GraduationCap className="h-6 w-6" />}
            title="Story Galleries"
            description="Curate authentic campus stories for prospective students to explore."
          />

          <FeatureCard
            icon={<BarChart3 className="h-6 w-6" />}
            title="Engagement Analytics"
            description="Track views, engagement, and prospective student interaction."
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how"
        className="border-t border-white/10 bg-black/20 py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto text-center max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">
              How It Works
            </p>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Collect campus stories at scale.
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <StepCard
              number="01"
              title="Capture Authentic Stories"
              description="We provide proven prompts that help contributors share meaningful campus experiences."
            />

            <StepCard
              number="02"
              title="Match Stories to Students"
              description="Deliver relevant alumni, faculty, and student perspectives throughout the admissions cycle."
            />

            <StepCard
              number="03"
              title="Share & Measure"
              description="Publish Homi stories across admissions channels and track student engagement."
            />
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section
        id="outcomes"
        className="mx-auto max-w-7xl px-6 py-28"
      >
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">
              Outcomes
            </p>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Help students feel at home before they enroll.
            </h2>

            <div className="mt-10 space-y-6">
              <Outcome>
                Increase engagement with authentic campus stories.
              </Outcome>

              <Outcome>
                Scale storytelling across departments and contributors.
              </Outcome>

              <Outcome>
                Build trust before enrollment decisions.
              </Outcome>

              <Outcome>
                Drive enrollment and yield outcomes.
              </Outcome>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl mx-auto max-w-xl">
            <div className="mb-6 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="grid gap-4 grid-cols-2">
              <StatCard value="+38%" label="Student Engagement" />
              <StatCard value="76%" label="Video Completion Rate" />
              <StatCard value="12.4k" label="Story Views" />
              <StatCard value="24/7" label="On Demand" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-black/30 py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold md:text-6xl">
            Show prospective students the people behind your institution.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Build trust and connection before enrollment decisions are made.
          </p>

          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3bQf75Ddauut0ZcbDfwAq2WDuQmFlwUiMN0ehx61YcXl2f96aqOSzXV29XNuXeKcl_zRndfH7i"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center rounded-full bg-indigo-500 px-8 py-4 font-bold transition hover:bg-indigo-400"
          >
            Schedule Demo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/60 md:flex-row">
          <p>© 2026 Homi Inc.</p>

          <div className="flex gap-6">
            <a href="privacy" className="hover:text-white transition">Privacy</a>
            <a href="terms" className="hover:text-white transition">Terms</a>
            <a href="mailto:team@homi.io" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="border border-white/10 flex h-24 w-64 shrink-0 items-center justify-center rounded-2xl mr-8 mb-32 shadow-2xl">
      <img
        src={src}
        alt={alt}
        className="max-h-8 w-auto object-contain brightness-0 invert"
      />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 p-8 shadow-2xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-white/60">
        {description}
      </p>
    </div>
  )
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 p-8 shadow-2xl">
      <p className="text-sm font-bold text-indigo-300">
        {number}
      </p>

      <h3 className="mt-4 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-white/60">
        {description}
      </p>
    </div>
  )
}

function Outcome({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-2 h-3 w-3 rounded-full bg-indigo-300" />

      <p className="text-lg text-white/60">
        {children}
      </p>
    </div>
  )
}

function StatCard({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm text-white/60">
        {label}
      </div>

      <div className="mt-2 text-2xl sm:text-3xl font-bold">
        {value}
      </div>
    </div>
  )
}