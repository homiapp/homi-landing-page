import Image from "next/image"
import Link from "next/link";

export default function TermsPage() {
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
            <h2 className="text-5xl font-bold text-white">
              Terms of Service
            </h2>

            <p className="mt-2 leading-7">
              Last updated: May 2026
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Overview
            </h2>

            <p className="mt-2 leading-7">
              These Terms of Service govern access to and use of the Homi
              platform. By accessing or using Homi, you agree to these
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Platform Use
            </h2>

            <p className="mt-2 leading-7">
              Homi provides tools for collecting, organizing, and sharing
              authentic video stories from students, alumni, faculty,
              staff, and related communities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              User Content
            </h2>

            <p className="mt-2 leading-7">
              Users retain ownership of submitted content. By submitting
              content through Homi, you grant permission for participating
              institutions and Homi to host, display, distribute, and
              share submitted materials in connection with the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Acceptable Use
            </h2>

            <p className="mt-2 leading-7">
              Users may not submit unlawful, harmful, infringing, or
              misleading content or misuse the platform in ways that
              disrupt services or violate applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Availability
            </h2>

            <p className="mt-2 leading-7">
              Homi may modify, suspend, or discontinue portions of the
              platform at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Limitation of Liability
            </h2>

            <p className="mt-2 leading-7">
              Homi is provided on an “as is” basis without warranties of
              any kind. To the fullest extent permitted by law, Homi is
              not liable for indirect, incidental, or consequential
              damages arising from use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Changes to Terms
            </h2>

            <p className="mt-2 leading-7">
              We may update these terms periodically. Continued use of the
              platform after updates constitutes acceptance of the revised
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Contact
            </h2>

            <p className="mt-2 leading-7">
              For questions regarding these Terms of Service, contact: <a href="mailto:team@homi.io">team@homi.io</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}