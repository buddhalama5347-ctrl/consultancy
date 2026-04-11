import { Header } from "@/components/header-3";
import {
  CheckCircle,
  Users,
  Award,
  Globe,
  Target,
  BookOpen,
  Zap,
} from "lucide-react";

export default function WhyChooseUsPage() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Expert Guidance",
      description:
        "Our team of experienced education consultants provides personalized guidance tailored to your unique needs and aspirations.",
    },
    {
      icon: Users,
      title: "Proven Track Record",
      description:
        "With thousands of successful student placements in top universities worldwide, we have a proven history of excellence.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "We maintain the highest standards in education consulting, ensuring reliable and accurate information for all our services.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Our extensive partnerships with universities and institutions across the globe give you access to the best opportunities.",
    },
  ];

  return (
    <>
      <main className="min-h-screen pt-16">
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20 pt-40">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="max-w-3xl">
              <p className="text-primary text-sm uppercase tracking-widest font-medium mb-6">
                About Us
              </p>
              <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6 leading-tight">
                Why Choose EduPath?
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                Discover what sets us apart and why thousands of students trust
                us with their international education journey.
              </p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-6 sm:px-8  ">
          {/* Key Benefits */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {reasons.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title}>
                      <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-8 md:p-12 my-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Commitment to Excellence
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We are committed to providing exceptional service and support
                throughout your entire journey, from initial consultation to
                successful admission.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  5000+
                </div>
                <p className="text-muted-foreground">Students Placed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Partner Universities</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
