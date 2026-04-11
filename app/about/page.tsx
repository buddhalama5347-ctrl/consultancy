import {
  GraduationCap,
  Globe,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Quote,
  Plane,
  FileCheck,
  BookOpen,
  DollarSign,
} from "lucide-react";

const stats = [
  { number: "15,000+", label: "Students Placed", icon: GraduationCap },
  { number: "50+", label: "Partner Universities", icon: Award },
  { number: "25+", label: "Countries Covered", icon: Globe },
  { number: "12+", label: "Years of Excellence", icon: Users },
];

const services = [
  {
    icon: Users,
    title: "Student-First Approach",
    description:
      "Every recommendation we make is rooted in what's best for the student's academic and personal growth.",
    bg: "bg-blue-500",
  },
  {
    icon: Award,
    title: "Transparency & Trust",
    description:
      "We believe in honest guidance — no hidden fees, no false promises. Just genuine support for your journey.",
    bg: "bg-emerald-500",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Our partnerships with top universities across 25+ countries ensure you get access to the best opportunities worldwide.",
    bg: "bg-purple-500",
  },
  {
    icon: ArrowRight,
    title: "End-to-End Support",
    description:
      "From university selection to visa processing to pre-departure briefings — we're with you every step of the way.",
    bg: "bg-orange-500",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 pt-40">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="max-w-3xl">
              <p className="text-primary text-sm uppercase tracking-widest font-medium mb-6">
                {" "}
                About Our Consultancy
              </p>
              <h2 className="text-5xl font-light text-foreground mb-6 leading-tight">
                One Student at a Time
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                For over a decade, we have been the trusted bridge between
                ambitious students and world-class education destinations.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-primary">
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-white mx-auto mb-4" />
                <p className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/60 mt-2 text-sm tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="py-0  py-28  px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-gold tracking-[0.3em] uppercase text-sm font-semibold mb-5">
                  Our Story
                </p>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05]">
                  Built on a Vision of{" "}
                  <span className="italic font-normal text-muted-foreground">
                    Accessible Education
                  </span>
                </h2>
              </div>
              <div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Founded in 2013, our consultancy began with a simple belief:
                  every student deserves access to quality education, regardless
                  of where they come from. What started as a small office with a
                  team of three passionate counselors has grown into one of the
                  most trusted names in international education consulting.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mt-8">
                  Today, we work with over 50 partner universities across the
                  UK, USA, Canada, Australia, and Europe, helping thousands of
                  students realize their dreams of studying abroad each year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-gold tracking-[0.3em] uppercase text-sm font-semibold mb-5">
                What Drives Us
              </p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Our Core Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="group">
                    <div
                      className={`mb-6 inline-flex p-4 rounded-xl ${service.bg} 
  group-hover:scale-110 transition-all duration-300 shadow-md`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-base">
                      {service.description}
                    </p>
                    <div className="mt-6 h-0.5 w-12 bg-gradient-to-r from-accent to-accent/0 group-hover:w-full transition-all duration-300" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
