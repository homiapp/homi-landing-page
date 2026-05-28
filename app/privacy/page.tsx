import Image from "next/image"
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">

        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Homi Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </Link>

        <div className="mt-12 space-y-10 text-white/80">
          <section>
            <h1 className="text-5xl font-bold text-white">
              Privacy Policy
            </h1>

            <p className="mt-2 leading-7">
              Last updated: May 2026
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Overview
            </h2>

            <p className="mt-2 leading-7">
              Homi helps institutions collect and share authentic video
              stories from students, alumni, faculty, and staff. This
              Privacy Policy explains how we collect, use, and protect
              information shared through our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Information We Collect
            </h2>

            <p className="mt-2 leading-7">
              We may collect information including names, email addresses,
              video submissions, usage analytics, and communications sent
              through the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              How We Use Information
            </h2>

            <p className="mt-2 leading-7">
              We use collected information to operate the platform,
              improve the user experience, support institutions, analyze
              engagement, and communicate with users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Video Content
            </h2>

            <p className="mt-2 leading-7">
              Video submissions may be published by participating
              institutions through Homi galleries, admissions content,
              outreach campaigns, and related channels.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Data Security
            </h2>

            <p className="mt-2 leading-7">
              We take reasonable measures to protect information and
              platform data. However, no method of electronic storage or
              transmission is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Third-Party Services
            </h2>

            <p className="mt-2 leading-7">
              Homi may use third-party services for analytics, hosting,
              scheduling, and communications functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Contact
            </h2>

            <p className="mt-2 leading-7">
              For questions regarding this Privacy Policy, contact: <a href="mailto:team@homi.io">team@homi.io</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}