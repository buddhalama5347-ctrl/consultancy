import { BookOpen, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function InterviewCoachingPage() {
  const services = [
    {
      title: "Profile-Based Interview Training",
      description:
        "Customized coaching based on your specific university and program",
    },
    {
      title: "Mock Interviews",
      description:
        "Realistic practice interviews with expert feedback and scoring",
    },
    {
      title: "Academic Discussion Support",
      description:
        "Help articulating your academic interests and research goals",
    },
    {
      title: "Communication Skills",
      description:
        "Develop confidence in English and professional communication",
    },
    {
      title: "Visa Interview Preparation",
      description:
        "Specific coaching for student visa interview questions",
    },
    {
      title: "Group Sessions",
      description:
        "Peer learning sessions to build confidence through group practice",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-800 py-16 md:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-4 mb-6">
            <BookOpen size={40} />
            <h1 className="text-4xl font-bold md:text-5xl">
              Interview Coaching
            </h1>
          </div>
          <p className="max-w-2xl text-lg text-purple-100">
            Master the art of interviews with personalized coaching from
            experienced professionals. Excel in university and visa interviews.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Interview Types We Cover:
            </h2>
            <div className="grid gap-4 md:grid-cols-2 mb-8">
              {[
                "University Admission Interviews",
                "Scholarship Interviews",
                "Visa/Immigration Interviews",
                "Group Discussions",
                "Online/Video Interviews",
                "MBA Program Interviews",
              ].map((type, index) => (
                <div key={index} className="rounded-lg border border-purple-200 bg-purple-50 p-4">
                  <p className="font-semibold text-gray-900">{type}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Our Coaching Services:
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-lg border border-gray-200 bg-white p-6"
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-purple-600" />
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

          {/* Success Stories */}
          <div className="mb-12">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              What Our Coaching Covers
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Technical Knowledge",
                  points: [
                    "Subject expertise questions",
                    "Project discussion",
                    "Research interests",
                    "Problem-solving approach",
                  ],
                },
                {
                  title: "Soft Skills",
                  points: [
                    "Confidence building",
                    "Body language",
                    "Eye contact",
                    "Professional etiquette",
                  ],
                },
                {
                  title: "Strategic Preparation",
                  points: [
                    "Common question patterns",
                    "Answer structuring",
                    "Story crafting",
                    "Quick thinking exercises",
                  ],
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6"
                >
                  <h3 className="mb-4 font-bold text-gray-900">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle size={16} className="text-purple-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-lg bg-purple-50 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Excel in Your Next Interview
            </h3>
            <p className="mb-6 text-gray-600">
              Start your personalized interview coaching today and ace your
              university or visa interview.
            </p>
            <Link
              href="/interview-preparation"
              className="inline-block rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white hover:bg-purple-700 transition"
            >
              Start Interview Coaching
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
