"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Award, Users, BookOpen } from "lucide-react";

export default function UniversitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20 pt-40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-primary text-sm uppercase tracking-widest font-medium mb-6">
              Explore Institutions
            </p>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6 leading-tight">
              Top Universities Worldwide
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              Discover world-class institutions across 25+ countries offering
              exceptional education and career opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Country Flag Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-foreground mb-12">
            Choose Your Study Destination
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "United States",
                slug: "united-states",
                flag: "https://plus.unsplash.com/premium_photo-1674591172747-2c1d461d7b68?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              
              {
                name: "United Kingdom",
                slug: "united-kingdom",
                flag: "https://plus.unsplash.com/premium_photo-1675865395876-1cf435b64e78?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Australia",
                slug: "australia",
                flag: "https://images.unsplash.com/photo-1680173764109-bfe1a34a1877?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "New Zealand",
                slug: "new-zealand",
                flag: "https://plus.unsplash.com/premium_photo-1675875487669-620e25fe92a3?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Canada",
                slug: "canada",
                flag: "https://plus.unsplash.com/premium_photo-1674591172352-0af9308f0dac?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Ireland",
                slug: "ireland",
                flag: "https://plus.unsplash.com/premium_photo-1675865394105-f4b090661646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXJlbGFuZCUyMGZsYWd8ZW58MHx8MHx8fDA%3D",
              },
              {
                name: "Japan",
                slug: "japan",
                flag: "https://plus.unsplash.com/premium_photo-1675865394925-8ccfb93e2dc8?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
               {
                name: "Korea",
                slug: "korea",
                flag: "https://plus.unsplash.com/premium_photo-1675865395547-87bc689a257a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29yZWElMjBmbGFnfGVufDB8fDB8fHww",
              },
               {
                name: "Germany",
                slug: "germany",
                flag: "https://plus.unsplash.com/premium_photo-1674590091046-18f2ad87f344?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "France",
                slug: "france",
                flag: "https://plus.unsplash.com/premium_photo-1674588218663-a0655e1be7db?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
               {
                name: "Hungary",
                slug: "hungary",
                flag: "https://images.unsplash.com/photo-1675855549259-f742a935267b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
               {
                name: "Spain",
                slug: "spain",
                flag: "https://plus.unsplash.com/premium_photo-1674588218567-120937a97b7e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
                {
                name: "Netherland",
                slug: "netherland",
                flag: "https://plus.unsplash.com/premium_photo-1675875487404-41f1f38fcc5f?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              
                {
                name: "Malta",
                slug: "malta",
                flag: "https://plus.unsplash.com/premium_photo-1670689707981-8cf095287c46?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((country) => (
              <Link key={country.slug} href={`/universities/${country.slug}`}>
                <div className="group cursor-pointer">
                  <div
                    className="relative h-32 md:h-40 rounded-lg overflow-hidden bg-cover bg-center mb-4 hover:shadow-lg transition-all"
                    style={{ backgroundImage: `url('${country.flag}')` }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                  </div>
                  <p className="text-foreground font-semibold text-center group-hover:text-primary transition-colors">
                    {country.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Why Study With Us
          </h3>
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              We represent and partner with some of the world's top universities
              across four major study destinations. Each country offers unique
              advantages, admission pathways, and career opportunities. Whether
              you're interested in cutting-edge technology, prestigious
              research, affordable quality education, or cultural immersion, we
              can guide you to the right university.
            </p>
            <p>
              Our university partners span from globally ranked institutions
              like Harvard, Oxford, and Melbourne to specialized programs in
              technology, engineering, business, and humanities. Click on any
              destination above to explore universities, admission requirements,
              scholarship opportunities, and what makes each country special for
              international students.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our University Partners */}
      <section className="py-20 border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-foreground mb-12">
            Why Our University Partners?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Recognition",
                desc: "All partner universities are internationally recognized and ranked globally for academic excellence",
              },
              {
                icon: Award,
                title: "Academic Excellence",
                desc: "World-class faculty, cutting-edge research facilities, and rigorous academic standards",
              },
              {
                icon: Users,
                title: "Diverse Community",
                desc: "Multicultural campuses with students from 190+ countries fostering global perspective",
              },
              {
                icon: BookOpen,
                title: "Strong Support",
                desc: "Dedicated international student services, mentoring, and career development programs",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx}>
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
