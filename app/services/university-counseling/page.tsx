import { GraduationCap, CheckCircle, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function UniversityCounselingPage() {
  const services = [
    {
      title: "Profile Assessment",
      description:
        "Comprehensive evaluation of your academic records, test scores, and career aspirations",
    },
    {
      title: "University Matching",
      description:
        "Personalized identification of universities that align with your profile and goals",
    },
    {
      title: "Application Strategy",
      description:
        "Strategic planning for your applications to maximize admission chances",
    },
    {
      title: "Essay & SOP Guidance",
      description:
        "Expert assistance in crafting compelling personal statements and statements of purpose",
    },
    {
      title: "LOR Support",
      description:
        "Guidance in selecting referees and preparing strong letters of recommendation",
    },
    {
      title: "Interview Preparation",
      description:
        "Mock interviews and coaching to excel in university interviews",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap size={40} />
            <h1 className="text-4xl font-bold md:text-5xl">
              University Counseling
            </h1>
          </div>
          <p className="max-w-2xl text-lg text-blue-100">
            Personalized guidance to help you select and gain admission to the
            perfect university for your academic and career goals.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Our Comprehensive Services Include:
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-lg border border-gray-200 bg-white p-6"
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-blue-600" />
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

          {/* Process */}
          <div className="mb-12">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Our Process
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Initial Consultation",
                  description:
                    "We understand your background, goals, and preferences",
                },
                {
                  step: 2,
                  title: "Profile Analysis",
                  description:
                    "Comprehensive review of your academic and test scores",
                },
                {
                  step: 3,
                  title: "University Shortlist",
                  description:
                    "Curated list of suitable universities across different tiers",
                },
                {
                  step: 4,
                  title: "Application Support",
                  description:
                    "Guidance through the entire application process",
                },
                {
                  step: 5,
                  title: "Admission Follow-up",
                  description:
                    "Assistance with offers and final enrollment decisions",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                    {item.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-lg bg-blue-50 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Ready to Start Your University Journey?
            </h3>
            <p className="mb-6 text-gray-600">
              Let our experts help you find and get admitted to your dream university.
            </p>
            <Link
              href="/interview-preparation"
              className="inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 transition"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
