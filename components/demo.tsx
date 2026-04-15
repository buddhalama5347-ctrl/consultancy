"use client"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

import { motion } from "motion/react";

const testimonials = [
  {
    text: "The entire process from university selection to visa approval was smooth and stress-free. Highly professional team.",
    image: "/bipul.JPG",
    name: "Bipul Gurung",
    role: "Student – Australia",
  },
  {
    text: "They guided me step by step and helped me secure admission in the UK. Everything was clearly explained.",
    image: "/sosal.JPG",
    name: "Sosal Basnet",
    role: "Student – UK",
  },
  {
    text: "Ramro xha , visa pani easily approve bhayo. Ma ekdam satisfied chu uniharuko service sanga.",
    image: "/dewasis.JPG",
    name: "Dewasis Shrestha",
    role: "Student – Canada",
  },

  {
    text: "Australia jana ko process ali confusing thiyo, tara uniharu le ramrari guide gare. Aile ma padhdai chu.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Aayush Adhikari",
    role: "Student – USA",
  },
  {
    text: "Very supportive team. Documentation dekhi visa samma sabai ma help gare. Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Sita Thapa",
    role: "Student – Australia",
  },
  {
    text: "Application dekhi visa samma sab process smooth bhayo. Ma ekdam satisfied chu.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Nisha Karki",
    role: "Student – Canada",
  },
  {
    text: "They helped me shortlist universities based on my budget and profile. Ekdam ramro experience thiyo.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Rajan Shrestha",
    role: "Student – UK",
  },
  {
    text: "Counselors haru ekdam friendly thiyo. Sabai step ma support gare, I never felt confused.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Pratima Rai",
    role: "Student – USA",
  },
  {
    text: "First attempt mai visa approve bhayo. Proper guidance le ekdam help garyo.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Sanjay Bista",
    role: "Student – Australia",
  },
];;

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


export default function Testimonials(){
 return (
    <section className="bg-background my-20 relative px-5">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[840px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            What Our Students Say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our students have to say about us and their experiences  .
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
 
