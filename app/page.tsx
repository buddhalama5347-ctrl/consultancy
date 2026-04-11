import Testimonials from "@/components/demo";

import { ContentSectionVariant2 } from "@/components/ui/content-section";

import { Services } from "@/components/services";
import { Header } from "@/components/header-3";
import AboutDemo from "@/components/aboutdemo";
import VidMed from "@/components/vidmed";

import FloatingServices from "@/components/popular";
import Banner from "@/components/banner";
import FAQPage from "@/components/faq";
import { Destinations } from "@/components/destination";
import { BookOpen, DollarSign, FileCheck, MapPin, Plane, Users } from "lucide-react";
import { Contact } from "@/components/contact";
import { ContentSectionVariant1 } from "@/components/ui/content-section2";
import Footer from "@/components/footer";



export default function Home() {
  return (
    <>
      <VidMed />
      <FloatingServices />
      <div className=" [@media(max-width:500px)]:px-3 bg-white">
         <Banner />
        </div>
     
      <section className="mt-20">
        <section className="container mx-auto">
          <section className="py-0">
            <div className="mx-auto px-6 py-0  [@media(max-width:500px)]:px-0">
              <ContentSectionVariant2
                image="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Trusted Education Consultancy in Nepal for Study Abroad Success"
                reverse
                number="01"
              >
                <p>
                  As a leading education consultancy in Nepal, we help students
                  turn their dreams of studying abroad into reality. Our expert
                  counselors provide personalized guidance to match you with the
                  right universities, courses, and destinations.
                </p>
                <p>
                  From application preparation to visa processing, we ensure a
                  smooth, transparent, and stress-free experience—so you can
                  focus on building a successful global future.
                </p>
              </ContentSectionVariant2>
            </div>
          </section>

          <section>
            <div className="mx-auto px-6 pb-24 [@media(max-width:500px)]:px-0">
              <ContentSectionVariant2
                image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Personalized Guidance & Smart Planning"
                number="02"
              >
                <p>
                  Make informed decisions about your future with expert guidance
                  tailored to your academic goals, budget, and career
                  aspirations. We help you choose the right country, university,
                  and program with clarity and confidence.
                </p>
                <p>
                  From shortlisting universities to preparing strong
                  applications, our structured approach ensures you stay ahead
                  at every step of your study abroad journey.
                </p>
              </ContentSectionVariant2>
            </div>
          </section>
        </section>
      </section>

      <Services />
      {/* Variant 1: Layered Card Design */}
      <section className="border-b border-border/50">
        <div className="container mx-auto px-6 py-24">
          <ContentSectionVariant1
            image="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=811&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Your Global Education Journey Starts Here"
          >
            <p>
              We guide ambitious students in achieving their dreams of studying
              abroad by providing personalized support at every step. From
              selecting the right university to navigating complex application
              processes, we ensure a smooth and confident journey.
            </p>
            <p>
              With expert counseling, up-to-date insights, and a student-first
              approach, we help you unlock global opportunities and build a
              future without boundaries.
            </p>
          </ContentSectionVariant1>
        </div>
      </section>
      <Destinations />

      <FAQPage />

      <Testimonials />

      <Contact />

      <main className="min-h-screen bg-white mb-20">
        {/* Header */}
        <div className="bg-white container mx-auto">
          <div className="mx-auto  px-6 py-8">
            <div className="flex items-center gap-3">
              <MapPin className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-slate-900">
                Our Location
              </h1>
            </div>
            <p className="mt-2 text-slate-600">Visit us at our office</p>
          </div>
        </div>

        <div className="w-full h-[80vh] container mx-auto">
          {" "}
          {/* 80% of viewport height */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d904914.6121614472!2d84.4683838!3d27.6300072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb097e4cd654ed%3A0xf37f9e8e26ccbdf8!2sKBA%20Global%20Immigration%20And%20migration!5e0!3m2!1sen!2snp!4v1774951074829!5m2!1sen!2snp"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </main>
      <Footer />

    
    </>
  );
}
