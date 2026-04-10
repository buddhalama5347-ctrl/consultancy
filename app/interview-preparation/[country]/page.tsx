'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { interviewData, InterviewCountry } from '@/lib/interview-data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronDown, ChevronUp, Clock, FileText, Users, Zap } from 'lucide-react';
import { useState } from 'react';

export default function InterviewCountryPage() {
  const params = useParams();
  const country = params.country as string;
  const data = interviewData[country as InterviewCountry];
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  if (!data) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-24">
          <h1 className="text-4xl font-bold text-primary mb-4">Guide Not Found</h1>
          <p className="text-foreground/70 mb-8">We couldn&apos;t find the interview guide for this country.</p>
          <Link href="/interview-preparation">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Interview Guides
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      {/* <div className="sticky top-0 z-40 bg-white border-b border-foreground/5">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link href="/interview-preparation">
              <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-foreground">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-lg font-semibold text-foreground">{data.country} Interview Guide</h1>
          </div>
        </div>
      </div> */}

      {/* Hero with background image */}
      <section 
        className="relative min-h-96 flex items-end pb-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${data.backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
          <div className="max-w-3xl">
            <h2 className="text-6xl font-light text-white mb-6 leading-tight">{data.country}</h2>
            <p className="text-xl text-white/90 leading-relaxed">{data.overview}</p>
          </div>
        </div>
      </section>

      {/* Interview Format Card */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <FileText className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <p className="text-primary font-semibold text-sm uppercase mb-1">Interview Type</p>
                <p className="text-foreground font-medium">{data.interviewFormat.type}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <p className="text-primary font-semibold text-sm uppercase mb-1">Duration</p>
                <p className="text-foreground font-medium">{data.interviewFormat.duration}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <p className="text-primary font-semibold text-sm uppercase mb-1">Key Focus</p>
                <p className="text-foreground font-medium">Academic & Personal Fit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 space-y-24">
        {/* Interview Format Description */}
        <section>
          <h3 className="text-3xl font-bold text-foreground mb-6">Understanding the Interview Format</h3>
          <div className="bg-white border border-foreground/10 rounded-lg p-8">
            <p className="text-lg text-foreground/80 leading-relaxed">{data.interviewFormat.description}</p>
          </div>
        </section>

       
        {/* Common Questions */}
        <section>
          <h3 className="text-3xl font-bold text-foreground mb-12">Common Interview Questions</h3>
          <div className="space-y-6">
            {data.commonQuestions.map((q, idx) => (
              <div key={idx} className="border-l-4 border-primary pl-6 pb-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">{q.question}</h4>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-primary font-semibold text-sm uppercase mb-2">Why They Ask This</p>
                    <p className="text-foreground/70">{q.why}</p>
                  </div>
                  
                  <div>
                    <p className="text-primary font-semibold text-sm uppercase mb-2">How to Answer</p>
                    <p className="text-foreground/70">{q.howToAnswer}</p>
                  </div>
                  
                  <div>
                    <p className="text-primary font-semibold text-sm uppercase mb-2">Example Response</p>
                    <div className="bg-foreground/5 rounded-lg p-4 text-foreground/80 italic">
                      {q.example}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Tips */}
        <section>
          <h3 className="text-3xl font-bold text-foreground mb-12">Technical Tips</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {data.technicalTips.map((tip, idx) => (
              <div key={idx}>
                <h4 className="text-xl font-bold text-foreground mb-6">{tip.title}</h4>
                <p className="text-foreground/70 mb-6">{tip.description}</p>
                <ul className="space-y-3">
                  {tip.tips.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/70">
                      <span className="text-primary font-bold flex-shrink-0 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section>
          <h3 className="text-3xl font-bold text-foreground mb-12">Soft Skills & Presentation</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {data.softSkillsTips.map((tip, idx) => (
              <div key={idx} className="bg-white border border-foreground/10 rounded-lg p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">{tip.title}</h4>
                <p className="text-foreground/70 mb-6">{tip.description}</p>
                <ul className="space-y-3">
                  {tip.tips.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/70 text-sm">
                      <span className="text-primary font-bold flex-shrink-0 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Cultural Tips */}
        <section>
          <h3 className="text-3xl font-bold text-foreground mb-12">Cultural Context & Expectations</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {data.culturalTips.map((tip, idx) => (
              <div key={idx}>
                <h4 className="text-xl font-bold text-foreground mb-6">{tip.title}</h4>
                <p className="text-foreground/70 mb-6">{tip.description}</p>
                <ul className="space-y-3">
                  {tip.tips.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/70">
                      <span className="text-primary font-bold flex-shrink-0 mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 border-b border-foreground/10">
        <div className="max-w-[1280px] mx-auto px-4">
          <h3 className="text-3xl font-bold text-foreground mb-12">Required Documents Checklist</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {data.documentChecklist.map((doc, idx) => (
              <div key={idx} className="flex gap-3 items-start p-4 rounded-lg border border-foreground/5 hover:border-primary/20 transition-colors">
                <input type="checkbox" className="w-5 h-5 rounded border-foreground/30 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80 text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      

     

    
      </div>
       <div className="bg-white pt-20">
          <div className="container mx-auto bg-blue-500  mb-20 rounded-lg relative overflow-hidden py-15">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-2xl flex items-center justify-center absolute right-[-90] top-[-220]" />
            <img
              src="/circle_top_right.png"
              className="absolute right-[160] top-[-50]"
              alt="circle decoration"
            />
            <img
              src="/top_left.png"
              className="absolute left-[-40] top-[-50]"
              alt="top left decoration"
            />
            <img
              src="/top_left_2.png"
              className="absolute left-[-100] top-[-50]"
              alt="top left decoration 2"
            />

            <div className="mx-auto max-w-2xl px-6 text-center">
              <h2 className="text-2xl font-semibold text-white">
                Still have questions?
              </h2>
              <p className="mt-3 text-white">
                Can&apos;t find the answer you&apos;re looking for? Our support
                team is here to help.
              </p>
              <button className="mt-6 rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90">
                Contact Support
              </button>
            </div>
          </div>
        </div>
    </main>
  );
}
