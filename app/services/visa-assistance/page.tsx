import { Plane, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function VisaAssistancePage() {
  const services = [
    {
      title: "Document Preparation",
      description:
        "Complete guidance on preparing all required visa documentation",
    },
    {
      title: "Application Filing",
      description:
        "Expert assistance in filling out visa application forms accurately",
    },
    {
      title: "Financial Documentation",
      description:
        "Help with preparing proof of funds and financial documents",
    },
    {
      title: "Medical Examinations",
      description:
        "Coordination and guidance for required medical check-ups",
    },
    {
      title: "Interview Coaching",
      description:
        "Practice and confidence building for visa interviews",
    },
    {
      title: "Tracking & Support",
      description:
        "Real-time tracking and support throughout the visa process",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-800 py-16 md:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-4 mb-6">
            <Plane size={40} />
            <h1 className="text-4xl font-bold md:text-5xl">
              Visa Assistance
            </h1>
          </div>
          <p className="max-w-2xl text-lg text-emerald-100">
            Navigate the visa process with confidence. Our experts handle every
            detail to ensure your smooth approval.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Complete Visa Support for Popular Destinations:
            </h2>
            <div className="grid gap-4 md:grid-cols-2 mb-8">
              {["USA", "UK", "Canada", "Australia", "Germany", "New Zealand"].map(
                (country, index) => (
                  <div key={index} className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                    <p className="font-semibold text-gray-900">{country} Visa</p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Our Services Include:
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-lg border border-gray-200 bg-white p-6"
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-emerald-600" />
                  <div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-12">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Typical Visa Process Timeline
            </h2>
            <div className="space-y-4">
              {[
                {
                  phase: "Document Collection",
                  duration: "2-4 weeks",
                  description: "Gather all required documents and certifications",
                },
                {
                  phase: "Application Submission",
                  duration: "1 week",
                  description: "Submit complete and accurate application",
                },
                {
                  phase: "Processing",
                  duration: "4-8 weeks",
                  description: "Application under review by immigration authorities",
                },
                {
                  phase: "Interview/Decision",
                  duration: "1-2 weeks",
                  description: "Attend interview if required and receive decision",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1 rounded-lg border border-gray-200 bg-white p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900">{item.phase}</h3>
                      <span className="text-sm text-emerald-600 font-semibold">{item.duration}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-lg bg-emerald-50 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Start Your Visa Application Today
            </h3>
            <p className="mb-6 text-gray-600">
              Get expert guidance at every step of your visa journey.
            </p>
            <Link
              href="/interview-preparation"
              className="inline-block rounded-lg bg-emerald-600 px-8 py-3 font-semibold text-white hover:bg-emerald-700 transition"
            >
              Begin Visa Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
