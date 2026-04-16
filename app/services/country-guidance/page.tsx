import { Globe, CheckCircle, MapPin } from "lucide-react";
import Link from "next/link";
import { seoMetadata } from '@/lib/seo';

export const metadata = seoMetadata({
  pageTitle: 'Country Guidance',
  description:
    'Get expert country guidance for study abroad: academics, finance, lifestyle, career, and pre-departure support from Exact Education.',
  path: '/services/country-guidance',
});

export default function CountryGuidancePage() {
  const services = [
    {
      title: "Country Selection",
      description:
        "Comprehensive guide to choosing the right study destination based on your preferences",
    },
    {
      title: "Cost of Living Analysis",
      description:
        "Detailed breakdown of expenses, scholarships, and financial planning",
    },
    {
      title: "Work & Internship Opportunities",
      description:
        "Information on part-time work, internships, and career prospects",
    },
    {
      title: "Accommodation Guidance",
      description:
        "Support in finding and securing suitable accommodation",
    },
    {
      title: "Pre-Departure Orientation",
      description:
        "Comprehensive briefings on culture, lifestyle, and settling in",
    },
    {
      title: "Weather & Climate Information",
      description:
        "Practical information about climate and what to pack",
    },
  ];

  const countries = [
    { name: "USA", highlights: "Diverse universities, strong job market" },
    { name: "UK", highlights: "Prestigious institutions, rich culture" },
    { name: "Canada", highlights: "Quality education, welcoming policies" },
    { name: "Australia", highlights: "Modern cities, high living standards" },
    { name: "Germany", highlights: "Affordable tuition, excellent quality" },
    {
      name: "New Zealand",
      highlights: "Safe, beautiful, quality education",
    },
    { name: "Japan", highlights: "Advanced technology, unique culture" },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-800 py-16 md:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-4 mb-6">
            <Globe size={40} />
            <h1 className="text-4xl font-bold md:text-5xl">
              Country Guidance
            </h1>
          </div>
          <p className="max-w-2xl text-lg text-orange-100">
            Explore study destinations globally with comprehensive information
            about lifestyle, costs, opportunities, and culture.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Our Guidance Services:
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-lg border border-gray-200 bg-white p-6"
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-orange-600" />
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

          {/* Countries Covered */}
          <div className="mb-12">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Countries We Cover:
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {countries.map((country, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-orange-200 bg-orange-50 p-6 hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin size={20} className="text-orange-600 flex-shrink-0 mt-1" />
                    <h3 className="font-bold text-gray-900 text-lg">{country.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{country.highlights}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Information Provided */}
          <div className="mb-12">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Information We Provide for Each Country:
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Academics",
                  items: [
                    "University rankings",
                    "Program specializations",
                    "Academic requirements",
                    "Course structures",
                  ],
                },
                {
                  title: "Finance",
                  items: [
                    "Tuition fees",
                    "Living costs breakdown",
                    "Scholarships available",
                    "Financial aid options",
                  ],
                },
                {
                  title: "Lifestyle",
                  items: [
                    "Climate & weather",
                    "Culture & social life",
                    "Transportation",
                    "Food & dining",
                  ],
                },
                {
                  title: "Career",
                  items: [
                    "Job market outlook",
                    "Work visa opportunities",
                    "Internship availability",
                    "Post-study options",
                  ],
                },
              ].map((section, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white p-6">
                  <h3 className="mb-4 font-bold text-gray-900">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-center gap-2 text-gray-600">
                        <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-lg bg-orange-50 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Ready to Explore Your Ideal Study Destination?
            </h3>
            <p className="mb-6 text-gray-600">
              Get personalized country guidance and make an informed decision
              about your study abroad journey.
            </p>
            <Link
              href="/countries"
              className="inline-block rounded-lg bg-orange-600 px-8 py-3 font-semibold text-white hover:bg-orange-700 transition"
            >
              Explore Countries
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
