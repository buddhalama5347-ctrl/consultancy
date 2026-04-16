import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata({
  pageTitle: "Privacy Policy",
  description:
    "How Exact Education collects and handles information you share with us.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          Privacy Policy
        </h1>

        <p className="text-slate-700 mb-4">
          This is a general overview of how Exact Education handles information
          you provide when using our website or contacting us through forms.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Information we collect
        </h2>
        <p className="text-slate-700 mb-4">
          We may collect details you submit (such as your name, email, phone,
          and message) to respond to your enquiries and provide support.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          How we use it
        </h2>
        <p className="text-slate-700 mb-4">
          We use submitted information to communicate with you, answer
          questions, and help with study-abroad applications and related
          services.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Contact
        </h2>
        <p className="text-slate-700">
          If you have questions about privacy, please use the contact form on
          our website.
        </p>
      </div>
    </main>
  );
}

