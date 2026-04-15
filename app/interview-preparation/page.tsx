'use client';

import Link from 'next/link';

import { interviewData } from '@/lib/interview-data';
import { ArrowRight, BookOpen, Target, Users, Zap } from 'lucide-react';
import {  CheckCircle } from 'lucide-react';

export default function InterviewPreparationPage() {
  const countries = Object.entries(interviewData);

  return (
    <main className="min-h-screen bg-white">
   


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 pt-40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-primary text-sm uppercase tracking-widest font-medium mb-6">Master the Art of Interviewing</p>
            <h2 className="text-5xl font-light text-foreground mb-6 leading-tight">
              Ace Your University Interview
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              Comprehensive guides, tips, and strategies to prepare for university interviews around the world. Learn what interviewers are looking for and how to present your best self.
            </p>
          
          </div>
        </div>
      </section>

        <section className="py-20 border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-foreground mb-8">Why Interview Preparation Matters</h3>
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              Your visa interview is a critical step in your study abroad journey. It is an important stage prior to the final confirmation of your student visa approval for most countries including Australia, Canada, the United States, United Kingdom, Germany, and many others. Your interview performance could accelerate or delay your visa processing significantly.
            </p>
            <p>
              The visa officer is a trained professional who will ask you multiple questions—not to annoy you, but to understand your real interests, motivations, and intentions. They want to assess whether your case is genuine and whether your intentions align with what is written in your application form. If you are well-prepared, you can actually enjoy this process and view it as a conversation with someone who has the power to open the door to your future.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="font-semibold text-foreground mb-2">Key Point:</p>
              <p>A well-prepared interview can significantly improve your chances of visa approval and may even accelerate your processing timeline.</p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Key Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h3 className="text-3xl font-bold text-foreground mb-12">What You will Learn</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Interview Strategies',
                description: 'Proven tactics for different interview styles and formats'
              },
              {
                icon: BookOpen,
                title: 'Sample Questions',
                description: 'Common questions with detailed answers and reasoning'
              },
              {
                icon: Users,
                title: 'Soft Skills',
                description: 'Communication, confidence, and personal presentation tips'
              },
              {
                icon: Zap,
                title: 'Quick Preparation',
                description: 'Timeline-based preparation plans for any schedule'
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title}>
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Country Guides */}
      <section id="country-guides" className="py-16 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h3 className="text-3xl font-bold text-foreground mb-12">Country-Specific Guides</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map(([slug, data]) => (
              <Link key={slug} href={`/interview-preparation/${slug}`}>
                <div className="group bg-white border border-foreground/10 rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer h-full">
                  {/* Header with background */}
                  <div 
                    className="h-32 bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url('${data.backgroundImage}')` }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h4 className="text-white text-2xl font-bold text-center">{data.country}</h4>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-3">
                      {data.overview}
                    </p>
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                      View Guide
                      <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* General Tips Section */}
      <section className="py-16 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h3 className="text-3xl font-bold text-foreground mb-12">Universal Interview Tips</h3>
          <div className=" space-y-8">
            {[
              {
                title: 'Research the Institution',
                description: 'Every interviewer can tell if you\'ve done your homework. Spend time understanding their programs, values, faculty, and recent achievements. This research will help you ask thoughtful questions and explain your genuine interest.'
              },
              {
                title: 'Develop Your Personal Narrative',
                description: 'Create a compelling story about who you are, what drives you, and why you want to study at their university. This narrative should be authentic and flexible enough to apply to different institutions while showing genuine interest.'
              },
              {
                title: 'Practice, But Stay Natural',
                description: 'Rehearse your answers to common questions, but don\'t memorize responses word-for-word. Interviews are conversations, not recitations. Practice until you\'re confident but can still be spontaneous.'
              },
              {
                title: 'Listen Actively',
                description: 'The best interview candidates ask follow-up questions based on what the interviewer says. Show genuine interest by engaging with their questions rather than just delivering prepared answers.'
              },
              {
                title: 'Manage Your Nerves',
                description: 'Some nervousness is normal and shows you care. Use breathing techniques, arrive early, and remember that interviewers want you to succeed. They\'re assessing fit, not trying to trick you.'
              },
              {
                title: 'Follow Up Professionally',
                description: 'Send a thank you email within 24 hours, referencing specific points from your conversation. This reinforces your interest and professionalism.'
              },
            ].map((tip, idx) => (
              <div key={idx} className="border-l-4 border-primary pl-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">{tip.title}</h4>
                <p className="text-foreground/70 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        <section className="py-20 border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-foreground mb-12">Visa Interview Checklist</h3>
          <div className="space-y-3">
            {[
              'Prepare for interview questions in advance with a professional coach',
              'Get copies of all your original documents and organize them properly',
              'Dress appropriately - formal business attire is essential',
              'Be on time for your appointment (arrive 15-20 minutes early)',
              'Be courteous, friendly, and polite throughout the interview',
              'Be confident about your decisions and speak clearly',
              'Give brief and clear answers - if unsure, ask to repeat the question',
              'Be thoughtful and genuine in your responses',
              'Go through your university website and handbook carefully',
              'Know your course contents thoroughly (duration, fees, start/end dates, credit points)',
              'Be clear about your future plans after completing the course',
              'Be ready for unexpected questions - don\'t get nervous',
              'Remember interviews usually take 20-40 minutes',
              'Enjoy the process - view it as a conversation with your gateway to success',
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="py-20 border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-foreground mb-12">Essential Interview Tips</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Preparation', items: ['Know your university details', 'Practice common questions', 'Understand your course curriculum', 'Review financial documents'] },
              { title: 'Presentation', items: ['Dress formally', 'Maintain eye contact', 'Speak clearly and confidently', 'Use proper body language'] },
              { title: 'Conduct', items: ['Be polite and respectful', 'Listen carefully to questions', 'Ask for clarification if needed', 'Give thoughtful answers'] },
              { title: 'Mindset', items: ['Be confident in your decisions', 'Show genuine enthusiasm', 'Demonstrate sincere intentions', 'Stay calm and composed'] },
            ].map((section, idx) => (
              <div key={idx} className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <h4 className="font-bold text-foreground mb-4 text-lg">{section.title}</h4>
                <ul className="space-y-3">
                  {section.items.map((item, iidx) => (
                    <li key={iidx} className="flex gap-2 items-start text-foreground/80 text-sm">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

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
