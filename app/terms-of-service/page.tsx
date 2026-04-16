import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata({
  pageTitle: "Terms of Service",
  description:
    "General terms for using the Exact Education website and services.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Terms of Service
        </h1>

        <p className="text-slate-700 mb-4">
          These are general terms that apply to your use of this website and
          any requests you submit to Exact Education.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Website use
        </h2>
        <p className="text-slate-700 mb-4">
          By using this website, you agree to use it responsibly and not
          interfere with its operation.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Service requests
        </h2>
        <p className="text-slate-700 mb-4">
          When you submit forms or contact us, we may process your request
          to provide study abroad and related support.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Updates
        </h2>
        <p className="text-slate-700">
          We may update these terms from time to time. Please review the
          latest version on this page.
        </p>
      </div>
    </main>
  );
}

