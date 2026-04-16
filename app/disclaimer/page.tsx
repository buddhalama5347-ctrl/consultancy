import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata({
  pageTitle: "Disclaimer",
  description:
    "General disclaimer for information provided on the Exact Education website.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Disclaimer</h1>

        <p className="text-slate-700 mb-4">
          Information on this website is provided for general guidance only and
          may be updated from time to time.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          No guaranteed outcomes
        </h2>
        <p className="text-slate-700 mb-4">
          Study abroad admissions, scholarship decisions, and visa approvals are
          subject to the relevant authorities. We cannot guarantee outcomes.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Contact us
        </h2>
        <p className="text-slate-700">
          For guidance specific to your profile, please contact us using the
          form on our website.
        </p>
      </div>
    </main>
  );
}

