import {
  BookOpen,
  Clock,
  Award,
  Users,
  CheckCircle,
  ChevronRight,
  Star,
  Target,
  Monitor,
  Zap,
  Headphones,
  PenTool,
  Eye,
  MessageSquare,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQPage from "@/components/faq";

const testModules = [
  {
    section: "Speaking & Writing",
    duration: "54–67 min",
    icon: MessageSquare,
    tasks: [
      "Personal Introduction (unscored, 1 min)",
      "Read Aloud — read a text passage fluently",
      "Repeat Sentence — listen and repeat exactly",
      "Describe Image — explain charts, graphs, or images",
      "Re-tell Lecture — summarise an academic lecture",
      "Respond to a Situation — contextual speaking",
      "Answer Short Questions — quick factual responses",
      "Summarize Written Text — condense a passage into one sentence",
      "Write Essay — 200–300 word argumentative essay",
    ],
    tips: [
      "Speak clearly and at a natural pace — the AI scores pronunciation and oral fluency separately",
      "For Read Aloud, preview the text during the countdown and note tricky words",
      "In Describe Image, use a structured template: introduction → key trends → conclusion",
    ],
  },
  {
    section: "Reading",
    duration: "29–30 min",
    icon: Eye,
    tasks: [
      "Multiple Choice — Single Answer",
      "Multiple Choice — Multiple Answers",
      "Re-order Paragraphs — arrange sentences logically",
      "Fill in the Blanks — drag words into gaps",
      "Fill in the Blanks (Reading & Writing) — choose from dropdowns",
    ],
    tips: [
      "For Re-order Paragraphs, find the topic sentence first (it introduces a new idea without referencing prior text)",
      "In Multiple Choice – Multiple Answers, wrong selections lose marks — only choose answers you're confident about",
      "Skim passages for structure before answering detailed questions",
    ],
  },
  {
    section: "Listening",
    duration: "30–43 min",
    icon: Headphones,
    tasks: [
      "Summarize Spoken Text — write a 50–70 word summary",
      "Multiple Choice Questions — based on recordings",
      "Fill in the Blanks — complete transcript gaps",
      "Highlight Correct Summary — identify the right summary",
      "Select Missing Word — choose the final missing word",
      "Highlight Incorrect Words — spot errors in a transcript",
      "Write from Dictation — type exactly what you hear",
    ],
    tips: [
      "Write from Dictation is heavily weighted — focus on getting every word right",
      "For Summarize Spoken Text, take notes on key points during the audio",
      "Highlight Incorrect Words: follow along with the transcript and click words that differ from what you hear",
    ],
  },
];

const pteVsIelts = [
  {
    feature: "Test Format",
    pte: "100% Computer-based, AI-scored",
    ielts: "Paper or computer; Speaking is face-to-face",
  },
  { feature: "Duration", pte: "~2 hours", ielts: "~2 hours 45 minutes" },
  {
    feature: "Results",
    pte: "Typically 1–5 business days",
    ielts: "3–13 calendar days",
  },
  { feature: "Score Range", pte: "10–90 points", ielts: "Band 0–9" },
  {
    feature: "Score Sending",
    pte: "Unlimited, free",
    ielts: "5 free, then paid",
  },
  {
    feature: "Test Availability",
    pte: "Nearly every day",
    ielts: "4 times/month (paper)",
  },
  { feature: "Retake Wait", pte: "5 days", ielts: "No minimum" },
];

const whyKIEC = [
  {
    icon: Award,
    title: "Expert PTE Trainers",
    desc: "Instructors certified in Pearson's PTE methodology with proven score-improvement track records",
  },
  {
    icon: Monitor,
    title: "Computer Lab Practice",
    desc: "Practice on actual computer setups that mirror the PTE test environment",
  },
  {
    icon: Target,
    title: "Unlimited Mock Tests",
    desc: "Take as many scored practice tests as you need with AI-powered performance analytics",
  },
  {
    icon: Zap,
    title: "Quick Score Improvement",
    desc: "Our focused 6-week programme is designed for rapid, measurable score gains",
  },
  {
    icon: Users,
    title: "Small Batch Sizes",
    desc: "Maximum 15 students per batch for personalised attention and targeted feedback",
  },
  {
    icon: Star,
    title: "Score Guarantee Support",
    desc: "If you don't hit your target, get additional coaching sessions at no extra cost",
  },
];

const faqs = [
  {
    question: "How long should I prepare for PTE?",
    answer:
      "Preparation time depends on your current English level. If you're at an intermediate level and targeting a high score (e.g., 65–79), expect 6–10 weeks of focused study. Students already near their target may need only 3–5 weeks. At Exact Education, we assess your level on Day 1 and create a personalised study plan.",
  },
  {
    question: "What is PTE Academic and who is it for?",
    answer:
      "PTE Academic is a computer-based English proficiency test used for university admissions, visa applications, and professional registration. It evaluates Speaking & Writing, Reading, and Listening through integrated tasks. It is widely accepted in countries like Australia, the UK, Canada, and New Zealand.",
  },
  {
    question: "How is PTE scored?",
    answer:
      "PTE is scored on a scale from 10 to 90. Your overall score reflects your performance across all sections: Speaking, Writing, Reading, and Listening. The test uses AI-based scoring to ensure fast and unbiased results.",
  },
  {
    question: "How much does the PTE test cost in Nepal?",
    answer:
      "The PTE Academic test typically costs around NPR 30,000–35,000 in Nepal. Prices may vary slightly depending on the test center and date, so it's best to check the latest fees before booking.",
  },
  {
    question: "When will I get my PTE results?",
    answer:
      "PTE results are usually available within 24 to 48 hours after your test. In some cases, it may take up to 5 days. You can access your results online through your PTE account.",
  },
  {
    question: "Can I retake the PTE test?",
    answer:
      "Yes, you can retake the PTE test as many times as you want. However, you must wait to receive your previous test score before booking a new test. There is no mandatory waiting period after receiving your result.",
  },
];

const pteFaqItems = faqs.map((faq, index) => ({
  id: `pte-faq-${index + 1}`,
  question: faq.question,
  answer: faq.answer,
}));
const PTE = () => {
  return (
    <div className="bg-white    ">
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20 pt-40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-primary text-sm uppercase tracking-widest font-medium mb-6">
              PTE
            </p>
            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6 leading-tight">
              Master the PTE Academic Test
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              PTE Academic is a computer-based English test by Pearson, accepted
              by thousands of universities, colleges, and governments worldwide
              — including Australia, New Zealand, the UK, Canada, and the USA.
              Get results in just 1–5 days with unlimited free score sending.
            </p>
          </div>
        </div>
      </section>

      {/* Test Structure */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          PTE Academic Test Structure
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          The PTE Academic is completed in a single 2-hour computer-based
          session. It begins with a 1-minute unscored personal introduction,
          followed by three main sections.
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-primary text-primary-foreground text-sm font-semibold">
              <div className="p-3">Section</div>
              <div className="p-3 text-center">Time</div>
              <div className="p-3 text-right">Tasks</div>
            </div>
            {[
              { section: "Personal Introduction", time: "1 min", tasks: "1" },
              {
                section: "Speaking & Writing",
                time: "54–67 min",
                tasks: "9 task types",
              },
              { section: "Reading", time: "29–30 min", tasks: "5 task types" },
              { section: "Optional Break", time: "10 min", tasks: "—" },
              {
                section: "Listening",
                time: "30–43 min",
                tasks: "7 task types",
              },
            ].map((row, i) => (
              <div
                key={row.section}
                className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-background" : "bg-gray-100"}`}
              >
                <div className="p-3 font-medium text-foreground">
                  {row.section}
                </div>
                <div className="p-3 text-center text-muted-foreground">
                  {row.time}
                </div>
                <div className="p-3 text-right text-muted-foreground">
                  {row.tasks}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Modules */}
      <section id="modules" className="bg-background py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            PTE Test Modules — Detailed Breakdown
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Understanding every task type is the key to a high PTE score. Here's
            what you'll face in each section, along with expert tips.
          </p>
          <div className="space-y-6">
            {testModules.map((mod) => (
              <Card
                key={mod.section}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                    <span className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <mod.icon className="w-5 h-5 text-primary" />
                      </div>
                      {mod.section}
                    </span>
                    <span className="text-sm font-normal text-muted-foreground bg-[#F1F5F9] px-3 py-1 rounded-full">
                      {mod.duration}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Task Types
                      </p>
                      <ul className="space-y-2">
                        {mod.tasks.map((task, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-muted-foreground"
                          >
                            <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg bg-[#F1F5F9] p-4">
                      <p className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Expert Tips
                      </p>
                      <ul className="space-y-2">
                        {mod.tips.map((tip, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PTE vs IELTS */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          PTE vs IELTS — Quick Comparison
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Choosing between PTE and IELTS? Here's a side-by-side comparison to
          help you decide.
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-primary text-primary-foreground text-sm font-semibold">
              <div className="p-3">Feature</div>
              <div className="p-3 text-center">PTE Academic</div>
              <div className="p-3 text-center">IELTS</div>
            </div>
            {pteVsIelts.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-background" : "bg-[#F1F5F9]"}`}
              >
                <div className="p-3 font-medium text-foreground">
                  {row.feature}
                </div>
                <div className="p-3 text-center text-muted-foreground">
                  {row.pte}
                </div>
                <div className="p-3 text-center text-muted-foreground">
                  {row.ielts}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why KIEC */}
      <section className="bg-background py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Why Choose Exact Education for PTE Preparation?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyKIEC.map((item) => (
              <Card
                key={item.title}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="container max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          PTE Course & Test Fees
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="border-primary/30">
            <CardHeader className="text-center pb-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Preparation Course</p>
              <CardTitle className="text-3xl text-primary">NPR 11,000</CardTitle>
              <p className="text-sm text-muted-foreground">per session</p>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              {[
                "Complete 6-week intensive programme",
                "Free practice materials & Pearson resources",
                "Full teaching support & strategy sessions",
                "Unlimited computer-based mock tests",
                "AI-scored practice with detailed analytics",
                "Flexible morning & evening batches",
              ].map((f) => (
                <div key={f} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  {f}
                </div>
              ))}
              <a href="/#application-form" className="block pt-4">
                <Button className="w-full" size="lg">Enroll Now</Button>
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center pb-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Test Registration Fee</p>
              <CardTitle className="text-lg text-foreground">PTE Test Cost in Nepal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              {[
                { test: "PTE Academic & PTE Core", price: "NPR 26,000" },
              ].map((item) => (
                <div key={item.test} className="flex justify-between items-center text-sm border-b border-border pb-2 last:border-0">
                  <span className="text-muted-foreground">{item.test}</span>
                  <span className="font-semibold text-foreground whitespace-nowrap ml-4">{item.price}</span>
                </div>
              ))}
              <p className="text-xs text-muted-foreground pt-2">* Date booking price. Prices may vary — contact us for the latest fees.</p>
              <div className="pt-4 space-y-3">
                <h4 className="font-semibold text-foreground text-sm">PTE Score to IELTS Equivalence</h4>
                {[
                  { pte: "85–90", ielts: "Band 9" },
                  { pte: "79–84", ielts: "Band 8–8.5" },
                  { pte: "65–78", ielts: "Band 7–7.5" },
                  { pte: "50–64", ielts: "Band 6–6.5" },
                  { pte: "36–49", ielts: "Band 5–5.5" },
                ].map((row) => (
                  <div key={row.pte} className="flex justify-between text-sm border-b border-border pb-2 last:border-0">
                    <span className="text-muted-foreground">PTE {row.pte}</span>
                    <span className="font-medium text-foreground">{row.ielts}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      <div className="mt-28">
        <FAQPage
          title="PTE Frequently Asked Questions"
          description="Answers to common PTE preparation, scoring, and test-day questions."
          items={pteFaqItems}
        />
      </div>

      <div className=" max-w-7xl lg:container mx-auto bg-blue-500  mb-20 rounded-lg relative overflow-hidden [@media(max-width:500px)]:rounded-none mt-28">
        <div className="relative ">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-2xl flex items-center justify-center absolute right-[-90] top-[-220]" />
          <img
            src="circle_top_right.png"
            className="absolute right-[110] top-[-50] [@media(max-width:1000px)]:hidden"
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
            Ready to Conquer PTE Academic?
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Join our PTE preparation programme and get the score you need for
            your dream university or visa application.
          </p>
          <Button size="lg"  className="gap-2 max-w-xs mt-6 bg-primary" >
            Start Your Journey <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PTE;
