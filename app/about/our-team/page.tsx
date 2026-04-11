import { Header } from "@/components/header-3";

const teamMembers = [
  {
    name: "John Doe",
    role: "Director & Founder",
    bio: "With over 15 years in international education consulting, John leads our team with vision and expertise.",
    image: "/team/john.jpg"
  },
  {
    name: "Sarah Johnson",
    role: "Senior Education Consultant",
    bio: "Sarah specializes in US and UK university admissions, helping students achieve their academic dreams.",
    image: "/team/sarah.jpg"
  },
  {
    name: "Michael Chen",
    role: "Visa & Immigration Specialist",
    bio: "Michael ensures smooth visa processes for students heading to universities worldwide.",
    image: "/team/michael.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "Student Success Manager",
    bio: "Emily provides ongoing support to students throughout their international education journey.",
    image: "/team/emily.jpg"
  }
];

export default function OurTeamPage() {
  return (
    <>
      {/* <Header />
      <main className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated professionals who make your international education dreams a reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals passionate about international education to join our growing team.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              View Career Opportunities
            </button>
          </div>
        </div>
      </main> */}
      <h1 className="font-lg bg-red-500 mt-20 h-[50vh]">later</h1>
    </>
  );
}