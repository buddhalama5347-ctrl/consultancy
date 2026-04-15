const teamMembers = [
  {
    name: "Aarav Sharma",
    role: "Director & Founder",
    image:
      "/team1.JPG",
  },
  {
    name: "Laxmi Gurung",
    role: "Admin Officer",
    image:
        "/team2.JPG",
    },
  {
    name: "Mina Pant",
    role: "Education Counsellor",
    image:
      "/team3.JPG",
  },
  {
    name: "Suvekshya Phuyal",
    role: "Admission Officer",
    image:
      "/team4.JPG",
  },
  {
    name: "Rohan Adhikari",
    role: "Application Process Lead",
    image:
      "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Anisha Bhandari",
    role: "Scholarship Advisor",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Kabir Thapa",
    role: "Exam Preparation Mentor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Nisha Koirala",
    role: "Student Relations Coordinator",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f8] pt-32 pb-20 px-6">
      <section className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground leading-tight">
            We bring a wealth of skills and experience from a wide range of
            backgrounds.
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground">
            Our philosophy is simple: hire great people and give them the
            resources and support to do their best work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group bg-white border border-[#ececef] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[3/3.4] bg-[#f0f1f3]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-4 py-4 border-t border-[#ececef] bg-white">
                <h2 className="text-lg font-semibold text-foreground leading-tight">
                  {member.name}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}