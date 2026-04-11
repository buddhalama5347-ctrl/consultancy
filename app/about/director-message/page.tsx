import { AboutHero } from "@/components/about-hero";
import { Quote, Award, BookOpen, Globe } from "lucide-react";
import { Header } from "@/components/header-3";
const achievements = [
  { icon: Award, label: "MBA from London Business School" },
  { icon: Globe, label: "Studied in 3 countries" },
  { icon: BookOpen, label: "Published author on education policy" },
];

export default function DirectorMessagePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
   <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 pt-40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-primary text-sm uppercase tracking-widest font-medium mb-6">  About Our Consultancy</p>
            <h2 className="text-5xl font-light text-foreground mb-6 leading-tight">
            Messagge from our Managing Director
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
A personal note from our founder on why we do what we do.
            </p>
          
          </div>
        </div>
      </section>

    {/* Director Profile Section */}
    <section className="py-28 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* Photo & Info */}
          <div
            
            className="md:col-span-2"
          >
            <div className="relative sticky top-10">
              <div className="absolute -inset-6 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl" />
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlyZWN0b3J8ZW58MHx8MHx8fDA%3D"
                alt="Mr. Rajesh Sharma - Managing Director"
                className="relative w-full rounded-2xl object-cover aspect-[4/5] shadow-2xl"
                loading="lazy"
                width={640}
                height={800}
              />
              <div className="mt-8 text-center">
                <h3 className="font-display text-3xl font-bold text-foreground">Mr. Rajesh Sharma</h3>
                <p className="text-gold text-lg font-semibold mt-2">Managing Director & Founder</p>
              </div>

              {/* Achievements */}
              <div className="mt-8 space-y-4">
                {achievements.map((a) => (
                  <div key={a.label} className="flex items-center gap-4 p-4 rounded-2xl bg-[#E1E9F0] border border-border">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 bg-[#184982] text-white">
                      <a.icon className="w-5 h-5 text-gold" />
                    </div>
                    <p className="text-foreground text-base font-medium">{a.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Message */}
          <div
            
            className="md:col-span-3"
          >
            <Quote className="w-20 h-20 text-gold/20 mb-8" />

            <div className="space-y-4 mb-12">
              <p className="text-muted-foreground text-lg">Dear,</p>
              <p className="font-display text-3xl font-bold text-foreground">Students and Parents</p>
            </div>

            <blockquote className="space-y-8">
              <p className="font-display text-3xl md:text-4xl text-foreground leading-snug italic font-light">
                "Education has the extraordinary power to transform not just individuals, but entire communities
                and nations."
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Your decision to study abroad is a good one, provided your application to your chosen destination
                country is backed by your profile, background, preference and experience. Studying abroad provides
                a fantastic opportunity to pursue your future career path.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                You may want to study abroad for a combination of reasons such as academic prowess, career and
                employment opportunities or something as simple as personal enrichment. For this, you may need
                detailed information on the required qualifications and what the educational framework of each
                destination country is like.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                When I founded this consultancy over 12 years ago, I had witnessed firsthand how studying abroad
                changed the trajectory of my own life. Coming from a modest background, the opportunity to study
                at a world-renowned institution opened doors I never knew existed.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                That experience ignited a passion in me — a passion to ensure that talented, driven students
                from our region would never miss out on life-changing educational opportunities simply due to
                lack of guidance or support.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                While choosing your academic counselor, seek these attributes: one who gives value for money,
                provides honest and transparent guidance, has proven experience with your destination country,
                and most importantly — genuinely cares about your success.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Over the years, we have placed over 15,000 students in prestigious universities across the globe.
                Each success story fuels our commitment to do better, reach further, and serve more.
              </p>

              <div className="pt-6 border-t border-border">
                <p className="text-foreground text-xl leading-relaxed font-semibold">
                  Your dream is our mission. Let us walk this journey together.
                </p>
              </div>
            </blockquote>

            <div className="mt-12 flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlyZWN0b3J8ZW58MHx8MHx8fDA%3D"
                alt="Rajesh Sharma"
                className="w-12 h-12 rounded-full object-cover border-2 border-gold"
              />
             
              <div>
                <p className="text-lg text-foreground font-bold">Rajesh Sharma</p>
                <p className="text-muted-foreground text-base">Managing Director & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   
  </div>
    </>
  );
}