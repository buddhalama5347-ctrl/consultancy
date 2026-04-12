import {
  GraduationCap,
  Globe,
  Users,
  Award,
  Plane,
  FileCheck,
  BookOpen,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const mainServices = [
  {
    icon: GraduationCap,
    title: "University Counseling",
    description:
      "Expert guidance in selecting the right university and program tailored to your career goals and academic profile.",
    href: "/services/university-counseling",
    bg: "bg-blue-500",
  },
  {
    icon: Plane,
    title: "Visa Assistance",
    description:
      "Complete support through the visa application process with expert documentation and interview preparation.",
    href: "/services/visa-assistance",
    bg: "bg-emerald-500",
  },
  {
    icon: BookOpen,
    title: "Interview Coaching",
    description:
      "Personalized coaching to excel in university entrance interviews and assessments.",
    href: "/services/interview-coaching",
    bg: "bg-purple-500",
  },
  {
    icon: Globe,
    title: "Country Guidance",
    description:
      "Comprehensive information about study destinations, cost of living, culture, and lifestyle.",
    href: "/services/country-guidance",
    bg: "bg-orange-500",
  },
  {
    icon: FileCheck,
    title: "Document Verification",
    description:
      "Professional assistance in preparing, verifying, and submitting all required academic documents.",
    href: "/services/university-counseling",
    bg: "bg-red-500",
  },
  {
    icon: Users,
    title: "Pre-Departure Support",
    description:
      "Orientation and guidance for your new journey including accommodation, settlement, and integration.",
    href: "/services/country-guidance",
    bg: "bg-indigo-500",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Our Comprehensive Services
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            From university selection to visa approval and beyond, we provide
            end-to-end support for your international education journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  href={service.href}
                  className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-8 transition-all hover:border-transparent hover:shadow-xl"
                >
                  <div
                    className={`absolute inset-0 ${service.bg} opacity-0 transition-opacity group-hover:opacity-5`}
                  ></div>
                  <div className="relative">
                    <div
                      className={`${service.bg} mb-4 inline-block rounded-lg p-3 text-white`}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-gray-600">{service.description}</p>
                    <div className="flex items-center text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Our Services Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Why Choose Our Services?
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                number: "100%",
                label: "Success Rate",
                icon: Award,
              },
              {
                number: "15,000+",
                label: "Students Placed",
                icon: GraduationCap,
              },
              {
                number: "50+",
                label: "Partner Universities",
                icon: Award,
              },
              {
                number: "25+",
                label: "Countries Covered",
                icon: Globe,
              },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mb-4 inline-block rounded-full bg-blue-100 p-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-3xl font-bold text-gray-900">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
