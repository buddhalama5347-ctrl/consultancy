import { BookOpen, Clock, Award, Users, CheckCircle, ChevronRight, Star, Target, Headphones, PenTool, Eye, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FAQPage from "@/components/faq";
import { seoMetadata } from '@/lib/seo';

export const metadata = seoMetadata({
  pageTitle: 'IELTS Preparation',
  description:
    'Prepare for IELTS with Exact Education: expert coaching, strategies for each module, and IELTS FAQs for students preparing for study abroad.',
  path: '/ielts',
});


const bandScores = [
  { band: 9, level: "Expert User", description: "Complete command of English with full accuracy and fluency" },
  { band: 8, level: "Very Good User", description: "Occasional inaccuracies; handles complex arguments well" },
  { band: 7, level: "Good User", description: "Operational command with occasional errors in unfamiliar contexts" },
  { band: 6, level: "Competent User", description: "Generally effective despite some inaccuracies and misunderstandings" },
  { band: 5, level: "Modest User", description: "Partial command; copes with overall meaning in most situations" },
  { band: 4, level: "Limited User", description: "Basic competence limited to familiar situations" },
  { band: 3, level: "Extremely Limited", description: "Conveys and understands only general meaning" },
];

const modules = [
  {
    icon: Headphones,
    title: "Listening",
    duration: "30 minutes",
    questions: "40 questions",
    details: "4 recorded monologues and conversations. You hear each recording once. Question types include multiple choice, matching, plan/map labelling, form completion, and sentence completion.",
    tips: [
      "Practice with various English accents (British, Australian, American)",
      "Read questions before each recording begins",
      "Watch for synonyms — answers rarely use the exact words from the audio",
      "Transfer answers carefully within the 10-minute transfer time",
    ],
  },
  {
    icon: Eye,
    title: "Reading",
    duration: "60 minutes",
    questions: "40 questions",
    details: "3 long passages (Academic) or multiple shorter texts (General Training). Texts range from descriptive to analytical. Question types include True/False/Not Given, matching headings, summary completion, and short answers.",
    tips: [
      "Skim the passage first — don't read every word initially",
      "Identify keywords in questions, then scan for them in the text",
      "Manage time strictly: ~20 minutes per passage",
      "Practice distinguishing between 'False' and 'Not Given' answers",
    ],
  },
  {
    icon: PenTool,
    title: "Writing",
    duration: "60 minutes",
    questions: "2 tasks",
    details: "Task 1 (150+ words): Describe a graph, chart, table, or process (Academic) OR write a letter (General). Task 2 (250+ words): Write an essay responding to a point of view, argument, or problem.",
    tips: [
      "Spend 20 minutes on Task 1 and 40 minutes on Task 2",
      "Task 2 carries double the marks — prioritise it",
      "Use a clear paragraph structure: introduction, body, conclusion",
      "Vary vocabulary and sentence structures for higher band scores",
    ],
  },
  {
    icon: MessageSquare,
    title: "Speaking",
    duration: "11–14 minutes",
    questions: "3 parts",
    details: "Part 1: Introduction & general questions (4–5 min). Part 2: Individual long turn with a cue card (3–4 min). Part 3: Two-way discussion on abstract topics (4–5 min).",
    tips: [
      "Speak naturally — don't memorise scripted answers",
      "Extend your answers with reasons, examples, and comparisons",
      "Use linking words: however, moreover, on the other hand",
      "Don't panic if you don't understand a question — ask the examiner to rephrase",
    ],
  },
];

const whyKIEC = [
  { icon: Award, title: "20+ Years of Excellence", desc: "Two decades of proven track record in English test preparation across Nepal" },
  { icon: Users, title: "10,000+ Students Guided", desc: "Thousands of students successfully achieved their target IELTS band scores" },
  { icon: Star, title: "Certified IELTS Trainers", desc: "Expert instructors trained in Cambridge IELTS methodology and scoring criteria" },
  { icon: Target, title: "Weekly Mock Tests", desc: "Full-length practice tests under real exam conditions with detailed score analysis" },
  { icon: MessageSquare, title: "1-on-1 Speaking Sessions", desc: "Individual speaking practice with personalised feedback and improvement plans" },
  { icon: Clock, title: "Flexible Batches", desc: "Morning, day, and evening classes to fit your schedule — no compromise on quality" },
];

const faqs = [
  {
    question: "How long should I prepare for IELTS?",
    answer: "Preparation time depends on your current English level. If you're at Band 5 and targeting Band 7, expect 8–12 weeks of focused study. Students already near their target may need only 4–6 weeks. At KIEC, we assess your level on Day 1 and create a personalised study plan.",
  },
  {
    question: "What's the difference between IELTS Academic and General Training?",
    answer: "IELTS Academic is for university admissions and professional registration. It features academic reading passages and data-description writing tasks. General Training is for work experience, immigration, or secondary education. It uses workplace/social reading texts and letter-writing tasks. The Listening and Speaking modules are the same for both.",
  },
  {
    question: "How is IELTS scored?",
    answer: "Each module (Listening, Reading, Writing, Speaking) receives a band score from 0–9 in half-band increments. Your Overall Band Score is the average of all four, rounded to the nearest whole or half band. For example, if you score L:7.0, R:6.5, W:6.0, S:7.0, your overall is 6.5.",
  },
  {
    question: "How much does the IELTS test cost in Nepal?",
    answer: "The IELTS Paper-Based Test costs NPR 36,200 (Academic/General). The Computer-Delivered Test costs NPR 33,000. UKVI tests range from NPR 28,800 (CBT) to NPR 34,000 (PBT). IELTS Life Skills costs NPR 24,000. Prices may change — contact us for the latest fees.",
  },
  {
    question: "When will I get my IELTS results?",
    answer: "Results are available 13 calendar days after your test date for the paper-based test, and 3–5 days for the computer-delivered test. You can view results online through the official IELTS portal and receive one paper Test Report Form (TRF) by post.",
  },
  {
    question: "Can I retake the IELTS test?",
    answer: "Yes, there is no limit on how many times you can take IELTS. You can also use IELTS One Skill Retake to re-sit just one module (Listening, Reading, Writing, or Speaking) if you're close to your target. This saves time and money compared to retaking the full test.",
  },
];

const ieltsFaqItems = faqs.map((faq, index) => ({
  id: `ielts-faq-${index + 1}`,
  question: faq.question,
  answer: faq.answer,
}));

const IELTS= () => {
  return (
    <div className="min-h-screen bg-white ">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20 pt-40">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="max-w-3xl">
              <p className="text-primary text-sm uppercase tracking-widest font-medium mb-6">
                IELTS Preparation
              </p>
              <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6 leading-tight">
                Master the IELTS Exam 
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                    IELTS (International English Language Testing System) is the world's most trusted English proficiency test, accepted by 11,500+ organisations across 140 countries. Whether you're planning to study, work, or migrate — your IELTS score opens doors globally.
              </p>
            </div>
          </div>
        </section>

    

     

      {/* Types of IELTS */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          Types of IELTS Exam
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="border-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                IELTS Academic
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm leading-relaxed space-y-3">
              <p>Designed for students applying to universities and higher education institutions in English-speaking countries. Also required for professional registration (doctors, nurses, engineers).</p>
              <p className="font-medium text-foreground">Best for: University admissions, professional licensing</p>
              <p className="font-medium text-foreground">Accepted by: Universities in UK, Australia, Canada, NZ, USA & Europe</p>
            </CardContent>
          </Card>
          <Card className="border-accent/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                IELTS General Training
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm leading-relaxed space-y-3">
              <p>Intended for those migrating to English-speaking countries for work experience, training programmes, or secondary education. Also used for immigration to Australia, Canada, and the UK.</p>
              <p className="font-medium text-foreground">Best for: Immigration, work visas, vocational training</p>
              <p className="font-medium text-foreground">Required by: Immigration authorities in AU, CA, UK & NZ</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Test Modules */}
      <section id="modules" className="bg-background py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            IELTS Test Modules — What to Expect
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            The IELTS test evaluates four key English skills. Understanding each module's format and strategy is essential for achieving your target band score.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((mod) => (
              <Card key={mod.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <mod.icon className="w-5 h-5 text-primary" />
                      </div>
                      {mod.title}
                    </span>
                    <span className="text-sm font-normal text-muted-foreground">{mod.duration}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{mod.details}</p>
                  <div className="rounded-lg  p-4">
                    <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Pro Tips</p>
                    <ul className="space-y-2">
                      {mod.tips.map((tip, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Band Score Scale */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          IELTS Band Score Scale
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          IELTS uses a 9-band scoring system. Most universities require Band 6.0–7.0; immigration programmes typically require Band 6.0–7.5.
        </p>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="grid grid-cols-[60px_1fr_1fr] bg-primary text-primary-foreground text-sm font-semibold">
              <div className="p-3 text-center">Band</div>
              <div className="p-3">Level</div>
              <div className="p-3 hidden sm:block">Description</div>
            </div>
            {bandScores.map((row, i) => (
              <div
                key={row.band}
                className={`grid grid-cols-[60px_1fr_1fr] text-sm ${i % 2 === 0 ? "bg-background" : "bg-gray-100"}`}
              >
                <div className="p-3 text-center font-bold text-primary">{row.band}</div>
                <div className="p-3 font-medium text-foreground">{row.level}</div>
                <div className="p-3 text-muted-foreground hidden sm:block">{row.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why KIEC */}
      <section className="bg-background py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Why Choose KIEC for IELTS Preparation?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyKIEC.map((item) => (
              <Card key={item.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    

     
<div className="my-20">


      <FAQPage
        title="IELTS Frequently Asked Questions"
        description="Answers to common IELTS preparation, scoring, and test-day questions."
        items={ieltsFaqItems}
      />
      </div>

        <div className=" max-w-7xl lg:container mx-auto bg-blue-500  mb-20 rounded-lg relative overflow-hidden [@media(max-width:500px)]:rounded-none ">
        <div className="relative bg-red-500">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-2xl flex items-center justify-center absolute right-[-90] top-[-220]" />
          <img
            src="circle_top_right.png"
            className="absolute right-[80] top-[-50] [@media(max-width:1000px)]:hidden"
            alt="circle decoration"
          />
        </div>

        <img
          src="top_left.png"
          className="absolute left-[-40] top-[-50]"
          alt="top left decoration"
        />
        <img
          src="top_left_2.png"
          className="absolute left-[-100] top-[-50]"
          alt="top left decoration 2"
        />

        <div className="mx-auto max-w-2xl px-6 text-center py-15 ">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
           Ready to Ace Your IELTS?
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
            data-aos="fade-right"
            data-aos-delay="200"
          >
                        Join thousands of successful students. Start your IELTS preparation with Exact Education today and achieve your dream band score.
          </p>
           <Button size="lg"  className="gap-2 max-w-xs mt-6 bg-primary" >
              Start Your Journey <ChevronRight className="w-4 h-4" />
            </Button>
        </div>
      </div>

     
    </div>
  );
};

export default IELTS;
