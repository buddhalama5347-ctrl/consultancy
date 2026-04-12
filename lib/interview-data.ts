export type InterviewCountry = 'usa' | 'uk' | 'australia' | 'japan';

export interface InterviewTip {
  title: string;
  description: string;
  tips: string[];
}

export interface CommonQuestion {
  question: string;
  why: string;
  howToAnswer: string;
  example: string;
}

export interface InterviewGuide {
  country: string;
  slug: string;
  backgroundImage: string;
  overview: string;
  interviewFormat: {
    type: string;
    duration: string;
    description: string;
  };
  prepSteps: {
    title: string;
    description: string;
    timeline: string;
  }[];
  commonQuestions: CommonQuestion[];
  technicalTips: InterviewTip[];
  softSkillsTips: InterviewTip[];
  culturalTips: InterviewTip[];
  documentChecklist: string[];
}

export const interviewData: Record<InterviewCountry, InterviewGuide> = {
  usa: {
    country: 'United States',
    slug: 'usa',
    backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    overview: 'US university interviews focus on understanding your motivations, personality, and fit for the institution. They are often conversational and less formal, emphasizing your experiences and aspirations.',
    interviewFormat: {
      type: 'Informational & Behavioral',
      duration: '30-60 minutes',
      description: 'Most US interviews are conducted by admissions officers or alumni. They aim to assess your communication skills, curiosity, and genuine interest in the university.',
    },
    prepSteps: [
      {
        title: 'Research the University',
        description: 'Go deep into the university\'s programs, clubs, campus culture, and values. Know specific reasons why you want to attend.',
        timeline: '2-3 weeks before',
      },
      {
        title: 'Prepare Your Story',
        description: 'Develop a compelling personal narrative that connects your past experiences to your future goals.',
        timeline: '2 weeks before',
      },
      {
        title: 'Practice Common Questions',
        description: 'Rehearse answers to standard interview questions with friends or mentors.',
        timeline: '1-2 weeks before',
      },
      {
        title: 'Mock Interviews',
        description: 'Conduct practice interviews with counselors or experienced mentors to refine your responses.',
        timeline: '1 week before',
      },
      {
        title: 'Technical Setup Check',
        description: 'If virtual, test your camera, microphone, lighting, and internet connection.',
        timeline: 'Day before',
      },
    ],
    commonQuestions: [
      {
        question: 'Tell me about yourself.',
        why: 'Interviewers want to understand who you are beyond your resume. They\'re looking for authenticity and how you present yourself.',
        howToAnswer: 'Keep it concise (2-3 minutes), start with your background, mention key achievements, and explain your current goals. End by connecting to why you\'re interested in their university.',
        example: 'I grew up in a multicultural city which shaped my curiosity about global perspectives. I\'ve been passionate about environmental science since my school project on climate change. I\'ve led my school\'s sustainability club and completed internships at environmental NGOs. I\'m looking for a university where I can combine my technical skills with real-world impact, and your environmental engineering program aligns perfectly with my goals.',
      },
      {
        question: 'Why do you want to attend our university?',
        why: 'This reveals whether you\'ve done your research and if the fit is genuine. Universities want students who are genuinely interested, not applying to a list of similar schools.',
        howToAnswer: 'Mention specific programs, professors, clubs, research opportunities, or campus culture. Explain how these align with your goals. Avoid generic reasons.',
        example: 'Your university\'s approach to interdisciplinary research appeals to me greatly. I\'m particularly interested in Professor Smith\'s work on renewable energy systems. Additionally, your commitment to community engagement through the service learning program aligns with my values. The strong tech clubs and startup incubator would help me explore entrepreneurship while studying.',
      },
      {
        question: 'What are your academic strengths and weaknesses?',
        why: 'This tests self-awareness, honesty, and growth mindset. They want to see if you\'re realistic about yourself.',
        howToAnswer: 'Be honest about strengths with evidence. For weaknesses, mention something real but show how you\'re working to improve it. Avoid mentioning things critical to your intended field.',
        example: 'I\'m strongest in mathematics and problem-solving, which is reflected in my strong performance in calculus and physics. I\'m naturally curious and enjoy diving deep into concepts. For weaknesses, I initially struggled with public speaking, but I joined Toastmasters last year and now I regularly present in class. I\'ve learned that consistent effort can overcome challenges.',
      },
      {
        question: 'How do you spend your free time?',
        why: 'This reveals your interests, how you manage time, and what you\'re passionate about beyond academics.',
        howToAnswer: 'Mention activities that show your personality, interests, and involvement. Be specific and show genuine enthusiasm.',
        example: 'I spend significant time on the school debate team, where I\'ve developed research and argumentation skills. I\'m also a passionate photographer and maintain an Instagram account featuring local street photography. On weekends, I volunteer at a community center teaching English to immigrant families. These activities keep me balanced and engaged.',
      },
    ],
    technicalTips: [
      {
        title: 'Test Your Technical Setup',
        description: 'For virtual interviews, ensure everything is working properly.',
        tips: [
          'Test video and audio quality on the platform you\'ll use',
          'Check internet speed with a speed test tool',
          'Ensure adequate lighting (avoid backlighting)',
          'Clear clutter from your background or use a virtual background',
          'Close unnecessary browser tabs and applications',
          'Have phone numbers or contact info ready in case of connection issues',
        ],
      },
      {
        title: 'Professional Setup',
        description: 'Create a professional environment for your interview.',
        tips: [
          'Wear business casual or formal attire (even if sitting)',
          'Ensure you\'re in a quiet space with minimal distractions',
          'Have a glass of water nearby',
          'Place your resume and notes within view but not obvious to the interviewer',
          'Position camera at eye level for natural conversation',
          'Use headphones if you\'re in a shared space',
        ],
      },
    ],
    softSkillsTips: [
      {
        title: 'Communication Skills',
        description: 'How you communicate matters as much as what you say.',
        tips: [
          'Speak clearly and at a moderate pace',
          'Avoid filler words like "um," "uh," "like," and "basically"',
          'Use active listening - let the interviewer finish their questions',
          'Make eye contact (or look at camera for virtual interviews)',
          'Show enthusiasm through tone and body language',
          'Ask thoughtful follow-up questions about their program',
        ],
      },
      {
        title: 'Emotional Intelligence',
        description: 'Demonstrate self-awareness and ability to understand others.',
        tips: [
          'Show genuine interest in the interviewer and their role',
          'Acknowledge the interviewer\'s questions and comments',
          'Be authentic and don\'t try to present a fake version of yourself',
          'Show appropriate emotion when discussing topics you care about',
          'Handle difficult questions with grace and honesty',
          'Thank them for their time and questions',
        ],
      },
      {
        title: 'Confidence Without Arrogance',
        description: 'Balance confidence with humility.',
        tips: [
          'Speak confidently about your achievements without exaggerating',
          'Acknowledge areas where you\'re still learning',
          'Show enthusiasm for challenges and growth opportunities',
          'Avoid being defensive if questioned about your weaknesses',
          'Use examples to support your claims',
          'Ask meaningful questions about the university and program',
        ],
      },
    ],
    culturalTips: [
      {
        title: 'American College Culture',
        description: 'Understand what US universities value.',
        tips: [
          'Emphasize your independence and initiative',
          'Show involvement in extracurricular activities (not just academics)',
          'Highlight your ability to contribute to campus community',
          'Demonstrate leadership or making a difference',
          'Show balance between personal ambition and collaborative spirit',
          'Discuss how you adapt to diverse perspectives',
        ],
      },
      {
        title: 'Diversity and Inclusion',
        description: 'US universities highly value diversity.',
        tips: [
          'Be ready to discuss your background and unique perspective',
          'Explain how your experiences shape your worldview',
          'Show respect and interest in different cultures and viewpoints',
          'Discuss any relevant volunteer work or community engagement',
          'Be authentic about your identity without stereotyping',
          'Highlight experiences that showcase global awareness',
        ],
      },
    ],
    documentChecklist: [
      'Valid passport',
      'I-20 form from university',
      'Admission letter',
      'Bank statements (minimum 6 months)',
      'Sponsorship letter (if applicable)',
      'Financial affidavit or certificate',
      'Tax returns of sponsors (last 2 years)',
      'Evidence of property/assets',
      'Academic transcripts',
      'Test scores (TOEFL, GRE, etc.)',
      'Employment letter of sponsor',
      'Birth certificate',
      'Marriage certificate (if applicable)',
      'Medical examination (Form I-693)',
      'Vaccination records'
    ],
  },
  uk: {
    country: 'United Kingdom',
    slug: 'uk',
    backgroundImage: 'https://images.unsplash.com/photo-1486299219397-fd02e16de0fb?w=1200&h=600&fit=crop',
    overview: 'UK university interviews, especially at Oxford and Cambridge, are highly academic and challenging. They assess your depth of knowledge, analytical thinking, and ability to engage in intellectual debate.',
    interviewFormat: {
      type: 'Academic & Tutorial Style',
      duration: '20-30 minutes per interview (often multiple)',
      description: 'UK interviews are typically conducted by academics (often your potential tutors). They dig deep into your subject knowledge and how you think, with little small talk.',
    },
    prepSteps: [
      {
        title: 'Master Your Subject',
        description: 'Go beyond the curriculum. Read widely and deeply in your chosen field. Be prepared to discuss complex concepts.',
        timeline: '2-3 months before',
      },
      {
        title: 'Study Past Interview Questions',
        description: 'Many UK universities publish past interview questions. Practice working through them systematically.',
        timeline: '6 weeks before',
      },
      {
        title: 'Develop Critical Thinking',
        description: 'Practice analyzing problems from multiple angles. Be prepared to explain your reasoning clearly.',
        timeline: '4 weeks before',
      },
      {
        title: 'Practice Whiteboarding/Problem Solving',
        description: 'Work through problems verbally, showing your thought process step by step.',
        timeline: '2 weeks before',
      },
      {
        title: 'Subject-Specific Preparation',
        description: 'Prepare for your specific discipline with relevant examples and knowledge.',
        timeline: '1 week before',
      },
    ],
    commonQuestions: [
      {
        question: 'Why do you want to study this subject?',
        why: 'UK academics want to understand your genuine intellectual interest and passion for the subject.',
        howToAnswer: 'Provide specific examples of what sparks your curiosity. Reference books, ideas, or experiences that influenced your interest. Show depth of thinking.',
        example: 'I\'ve been fascinated by the intersection of mathematics and art since reading about the Golden Ratio. This led me to study fractals and chaos theory, which fundamentally changed how I see mathematical beauty. I\'m particularly interested in your university\'s computational geometry program because Professor Johnson\'s research on algorithmic design combines both my passions.',
      },
      {
        question: 'Tell me about a book/paper you\'ve read recently that interested you.',
        why: 'This tests whether you actively engage with your subject beyond the classroom.',
        howToAnswer: 'Choose something genuinely interesting to you, not what you think they want to hear. Be ready to discuss it in depth and connect it to your studies.',
        example: 'I recently read "The Elegant Universe" by Brian Greene, which explores string theory. What fascinated me was the idea that multiple dimensions could exist beyond our perception. It made me question how we define reality and led me to explore quantum mechanics more deeply. It\'s raised questions I want to explore further during my degree.',
      },
      {
        question: 'How would you approach solving [specific problem]?',
        why: 'This assesses your problem-solving methodology and ability to think on your feet.',
        howToAnswer: 'Talk through your approach aloud. Don\'t rush to an answer. Show your working and reasoning. It\'s okay to make mistakes - they want to see how you think.',
        example: 'I\'d start by breaking this into smaller components... Let me think about the variables involved... Could we approach this from this angle? What if we considered... I\'m not immediately certain, but here\'s my reasoning...',
      },
      {
        question: 'What\'s a misconception about your subject?',
        why: 'This shows you have deeper understanding beyond surface-level knowledge.',
        howToAnswer: 'Pick something genuinely misunderstood. Explain why it\'s misconceived and what the reality is. Show nuanced thinking.',
        example: 'Many people think evolution is about "survival of the fittest" leading to constant improvement. Actually, it\'s about adaptation to environment. Species aren\'t getting "better" - they\'re getting more suited to their context. Some ancient organisms are still around unchanged because they\'re already perfectly adapted.',
      },
    ],
    technicalTips: [
      {
        title: 'Whiteboard Skills',
        description: 'For STEM subjects, you may need to work through problems on a board or screen share.',
        tips: [
          'Practice solving problems while explaining your thinking aloud',
          'Write clearly and label your work',
          'Talk through your reasoning step by step',
          'Don\'t erase or rush - show your working',
          'It\'s okay to make mistakes and self-correct',
          'Engage with the interviewer\'s hints and corrections',
        ],
      },
      {
        title: 'Virtual Interview Setup',
        description: 'For remote interviews, professional setup is essential.',
        tips: [
          'Ensure strong internet connection (wired is better than WiFi)',
          'Have good lighting and clear background',
          'Test the video platform beforehand',
          'Have pen and paper ready for notes',
          'Minimize background noise',
          'Dress formally (business attire or robes if specified)',
        ],
      },
    ],
    softSkillsTips: [
      {
        title: 'Intellectual Engagement',
        description: 'Show genuine enthusiasm for learning and intellectual curiosity.',
        tips: [
          'Engage with the interviewer\'s points and questions',
          'Don\'t pretend to know things you don\'t',
          'Say "I don\'t know but here\'s how I\'d approach it"',
          'Show willingness to learn and be corrected',
          'Ask follow-up questions to clarify your understanding',
          'Demonstrate passion for your subject',
        ],
      },
      {
        title: 'Confidence with Humility',
        description: 'Balance academic confidence with intellectual humility.',
        tips: [
          'Be confident in explaining your ideas clearly',
          'Acknowledge the limits of your knowledge',
          'Be open to different perspectives and ideas',
          'Don\'t be defensive if challenged',
          'Show enthusiasm for exploring new concepts',
          'Use appropriate academic language without sounding pretentious',
        ],
      },
      {
        title: 'Communication of Complex Ideas',
        description: 'UK academics value clear articulation of sophisticated concepts.',
        tips: [
          'Explain complex ideas simply without dumbing down',
          'Use specific examples and evidence',
          'Structure your thoughts logically',
          'Pause to organize your thoughts if needed',
          'Use appropriate subject terminology',
          'Listen actively to follow the interviewer\'s line of questioning',
        ],
      },
    ],
    culturalTips: [
      {
        title: 'Academic Culture',
        description: 'UK universities, especially Oxford and Cambridge, have strong academic traditions.',
        tips: [
          'Emphasize your intellectual curiosity over career prospects',
          'Show genuine passion for learning the subject for its own sake',
          'Familiarize yourself with the tutorial system and expectations',
          'Be prepared for challenging questions - it\'s not personal',
          'Understand the college/university structure',
          'Show respect for academic traditions while being yourself',
        ],
      },
      {
        title: 'Formality Balanced with Authenticity',
        description: 'UK interviews are formal but expect genuine engagement.',
        tips: [
          'Dress formally and present yourself professionally',
          'Use formal language but be authentic and personable',
          'Show interest in your interviewer\'s work and the university',
          'Don\'t try too hard to impress - let your knowledge speak',
          'Be prepared for tangents and unexpected questions',
          'Show that you\'ve thought carefully about your choice of university',
        ],
      },
    ],
    documentChecklist: [
      'Valid passport',
      'Visa sponsorship letter from university (CAS)',
      'Admission letter',
      'Proof of funds',
      'Academic transcripts',
      'English language test results (IELTS/TOEFL)',
      'Birth certificate',
      'Character reference',
      'Medical records (if required)',
      'Tuberculosis (TB) test results (if applicable)',
      'Previous visa history',
      'Employment verification',
      'Proof of accommodation arrangements',
      'Travel insurance',
      'Academic qualifications certificates'
    ],
  },
  australia: {
    country: 'Australia',
    slug: 'australia',
    backgroundImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=600&fit=crop',
    overview: 'Australian university interviews are less formal than UK but more structured than US. They assess your fit for the program, communication skills, and practical understanding of your field. The tone is friendly but professional.',
    interviewFormat: {
      type: 'Program-Focused & Conversational',
      duration: '20-45 minutes',
      description: 'Usually with program coordinators or staff. They\'re friendly but want to understand your preparation, motivation, and readiness for the program.',
    },
    prepSteps: [
      {
        title: 'Research the Program Deeply',
        description: 'Understand the specific program structure, specializations, and unique offerings of the university.',
        timeline: '4 weeks before',
      },
      {
        title: 'Understand Australian Education System',
        description: 'Familiarize yourself with how Australian universities operate and what they value.',
        timeline: '3 weeks before',
      },
      {
        title: 'Prepare Program-Specific Examples',
        description: 'Develop examples of how your interests align with the program.',
        timeline: '2 weeks before',
      },
      {
        title: 'Practice Interview Skills',
        description: 'Work on clear communication and handling questions about your background.',
        timeline: '1-2 weeks before',
      },
      {
        title: 'Prepare Questions',
        description: 'Develop thoughtful questions about the program and campus life.',
        timeline: '1 week before',
      },
    ],
    commonQuestions: [
      {
        question: 'What attracts you to this program specifically?',
        why: 'Australian universities want to understand if you\'ve researched them and if you\'re genuinely interested.',
        howToAnswer: 'Reference specific units, research areas, or facilities. Explain how they align with your goals.',
        example: 'Your engineering program\'s focus on sustainability and the industry partnerships with renewable energy companies really appeal to me. I\'ve seen the capstone project outcomes, and the real-world application excites me. Combined with Melbourne\'s tech industry ecosystem, I believe this is where I can develop practical skills.',
      },
      {
        question: 'How will this qualification help you achieve your goals?',
        why: 'They want to see you\'ve thought about your future and your degree is purposeful.',
        howToAnswer: 'Connect your background, the program, and your career aspirations logically.',
        example: 'My goal is to work in environmental consulting. This program gives me the technical foundation in environmental science, but what\'s unique is the professional practice unit where I\'ll do actual consulting projects. After graduation, I plan to work at a firm for a few years before potentially starting my own consultancy.',
      },
      {
        question: 'Why are you moving to Australia to study?',
        why: 'International students need to show serious commitment to the move and studies.',
        howToAnswer: 'Explain genuinely why Australia specifically (not just any English-speaking country). Research the university\'s strengths.',
        example: 'Australia is leading in areas like sustainable development and innovation in my field. Your university specifically has a partnership with [organization] and facilities I wouldn\'t have access to at home. Additionally, the lifestyle and multicultural environment appeal to me as I want exposure to diverse perspectives.',
      },
      {
        question: 'Tell us about your academic performance.',
        why: 'They need to assess if you\'re academically prepared for the program.',
        howToAnswer: 'Be honest about grades. If they\'re not perfect, explain why and show you\'ve improved or have strengths in other areas.',
        example: 'I have consistently strong grades, particularly in math and sciences which are core to this program. My year 12 results show an average of 85%, with particular strength in physics (92%). I\'ve taken additional courses online to strengthen my chemistry background.',
      },
    ],
    technicalTips: [
      {
        title: 'Virtual Interview Best Practices',
        description: 'Most Australian university interviews for international students are virtual.',
        tips: [
          'Test video conferencing platform (Zoom, Teams, etc.) well beforehand',
          'Ensure reliable internet (test speed if possible)',
          'Choose a quiet, clean background',
          'Have good natural or artificial lighting',
          'Wear smart casual or business attire',
          'Have water and any notes nearby but discreetly',
        ],
      },
    ],
    softSkillsTips: [
      {
        title: 'Australian Communication Style',
        description: 'Australians value friendly, straightforward communication without formality.',
        tips: [
          'Be relaxed but professional',
          'Use natural language (not overly formal)',
          'Show personality and humor if appropriate',
          'Be genuine and down-to-earth',
          'Don\'t be afraid to ask for clarification',
          'Show enthusiasm without being over-the-top',
        ],
      },
      {
        title: 'Practical Thinking',
        description: 'Australian education values practical application alongside theory.',
        tips: [
          'Show understanding of real-world applications of your field',
          'Discuss internships, work experience, or projects',
          'Demonstrate problem-solving ability',
          'Be ready to discuss how you\'ll engage with practical components',
          'Show independence and initiative',
          'Discuss how you handle challenges pragmatically',
        ],
      },
      {
        title: 'Cultural Integration',
        description: 'Show you understand and respect Australian culture.',
        tips: [
          'Research Australian values and education culture',
          'Show genuine interest in the university community',
          'Discuss how you\'ll engage with student life',
          'Be open about cultural differences and learning',
          'Show respect for diversity',
          'Demonstrate you\'ve thought about living in Australia',
        ],
      },
    ],
    culturalTips: [
      {
        title: 'Australian Education Values',
        description: 'Understand what Australian universities prioritize.',
        tips: [
          'Practical skills and real-world application are highly valued',
          'Collaboration and teamwork are emphasized',
          'Innovation and problem-solving matter as much as theory',
          'Work-life balance is important to the culture',
          'Community engagement is encouraged',
          'Individuality and diverse thinking are respected',
        ],
      },
      {
        title: 'International Student Perspective',
        description: 'Show you\'re prepared for the student experience in Australia.',
        tips: [
          'Discuss how you\'ll adapt to a new environment',
          'Show interest in campus facilities and student clubs',
          'Be aware of the time zone and communication differences',
          'Show you\'ve researched costs and are financially prepared',
          'Discuss your support network and well-being plans',
          'Be enthusiastic about the Australian experience',
        ],
      },
    ],
    documentChecklist: [
      'Valid passport',
      'Confirmation of Enrollment (CoE)',
    
      'Proof of financial capacity',
      'Academic doucuments',
      'English language test results (IELTS/TOEFL/PTE)',
      'Birth certificate',
      'Police clearance certificate',
      'Health examination (if required)',
      'Vaccination records',
    
      'Proof of accommodation',
      'Travel insurance documentation(OSHC)',
      'Previous visa history',
  
    ],
  },
  japan: {
    country: 'Japan',
    slug: 'japan',
    backgroundImage: 'https://images.unsplash.com/photo-1540959375944-7049f642e9f1?w=1200&h=600&fit=crop',
    overview: 'Japanese university interviews emphasize respect, clarity, and genuine interest in both the institution and Japanese culture. They often include practical skills assessment and value students who show commitment to understanding Japan.',
    interviewFormat: {
      type: 'Formal & Structured',
      duration: '30-60 minutes',
      description: 'Conducted professionally, often with faculty members. May include language proficiency assessment and questions about your understanding of Japanese culture and commitment to studies in Japan.',
    },
    prepSteps: [
      {
        title: 'Learn Basic Japanese',
        description: 'Even if studying in English, showing effort in learning Japanese demonstrates respect and commitment.',
        timeline: '3-4 months before',
      },
      {
        title: 'Understand Japanese Culture and Values',
        description: 'Research Japanese education culture, respect for hierarchy, and group harmony (wa).',
        timeline: '2-3 months before',
      },
      {
        title: 'Master University Details',
        description: 'Know specific details about the university, research groups, and why you chose Japan.',
        timeline: '4 weeks before',
      },
      {
        title: 'Prepare for Language Assessment',
        description: 'Be ready to demonstrate your Japanese language level if required.',
        timeline: '2 weeks before',
      },
      {
        title: 'Practice Formal Interview Skills',
        description: 'Focus on proper etiquette, clear communication, and thoughtful responses.',
        timeline: '1-2 weeks before',
      },
    ],
    commonQuestions: [
      {
        question: 'Why do you want to study in Japan?',
        why: 'Japanese universities want to ensure you\'re genuinely interested in Japan, not just looking for any university abroad.',
        howToAnswer: 'Provide specific reasons related to Japanese education, culture, or field of study. Show you\'ve researched.',
        example: 'Japan is at the forefront of robotics and automation engineering. Your university\'s research in humanoid robotics aligns with my passion. Additionally, I want to understand Japanese engineering philosophy and culture. I\'ve been learning Japanese for two years and am committed to integrating into the academic community here.',
      },
      {
        question: 'How will you adapt to studying in Japan?',
        why: 'They want to see you\'ve thoughtfully considered the challenges and have realistic expectations.',
        howToAnswer: 'Acknowledge differences honestly. Show flexibility and genuine enthusiasm for the experience.',
        example: 'I understand the academic pace and rigor in Japan is demanding. I\'ve prepared by building strong fundamentals and improving my Japanese language skills. I recognize the importance of group work and consensus in Japanese culture, which contrasts with my home education but I value collaborative learning. I\'m prepared for the cultural adjustment and excited about it.',
      },
      {
        question: 'Tell us about your interest in your field of study.',
        why: 'They want to assess your academic motivation and depth of interest.',
        howToAnswer: 'Connect your background, experiences, and future goals to your field clearly.',
        example: 'I\'ve been fascinated by sustainable manufacturing since my school project on zero-waste production. I interned at a manufacturing company and saw firsthand the challenges of implementing sustainability. Japan\'s leadership in efficient manufacturing and environmental consciousness makes it the perfect place to deepen my expertise. I\'m particularly interested in your program\'s focus on eco-design.',
      },
      {
        question: 'What do you know about Japanese culture and society?',
        why: 'They want to ensure you\'re not just coming for the education but are interested in Japan as a place.',
        howToAnswer: 'Show genuine knowledge and respect. Avoid stereotypes. Be honest about what you\'re still learning.',
        example: 'I\'ve been studying Japanese culture through films, literature, and language learning. I understand concepts like \"wa\" (harmony) and \"omotenashi\" (wholehearted hospitality) which reflect Japanese values. I respect the hierarchical respect system but also understand how modern Japan is evolving. I\'m excited to experience and understand these nuances firsthand.',
      },
    ],
    technicalTips: [
      {
        title: 'Language Assessment Preparation',
        description: 'If your interview involves Japanese language, prepare thoroughly.',
        tips: [
          'Practice formal Japanese (keigo) if possible',
          'Be able to introduce yourself and background in Japanese',
          'Understand common academic vocabulary in Japanese',
          'Practice listening to native speakers',
          'Be honest about your level - don\'t overstate',
          'Show enthusiasm for learning even if your level is basic',
        ],
      },
      {
        title: 'Virtual Interview Setup',
        description: 'Professional presentation is important in Japanese culture.',
        tips: [
          'Ensure professional background',
          'Dress in business attire (jacket and dress pants/skirt recommended)',
          'Have clear lighting and camera placement',
          'Test technology thoroughly (internet, camera, microphone)',
          'Have time zone calculator ready (time difference management)',
          'Keep interview location quiet and professional',
        ],
      },
    ],
    softSkillsTips: [
      {
        title: 'Respect and Politeness',
        description: 'Japanese culture values respect and proper etiquette highly.',
        tips: [
          'Use respectful language and formal tone',
          'Show genuine respect for the interviewer and institution',
          'Listen attentively and don\'t interrupt',
          'Maintain proper posture and eye contact',
          'Express gratitude clearly and genuinely',
          'Show patience and willingness to follow cultural norms',
        ],
      },
      {
        title: 'Group Harmony (Wa)',
        description: 'Demonstrate you understand and value collaborative learning.',
        tips: [
          'Discuss experiences working collaboratively',
          'Show understanding of how individual goals serve group goals',
          'Avoid appearing overly individualistic or self-centered',
          'Express interest in contributing to the university community',
          'Show respect for different perspectives',
          'Emphasize team achievements as well as personal ones',
        ],
      },
      {
        title: 'Humility and Learning Mindset',
        description: 'Japanese culture values humility and continuous improvement (kaizen).',
        tips: [
          'Acknowledge areas where you\'re still learning',
          'Show commitment to self-improvement',
          'Don\'t overstate your achievements',
          'Ask thoughtful questions showing you want to learn',
          'Express gratitude for feedback and opportunities',
          'Show long-term thinking about your development',
        ],
      },
    ],
    culturalTips: [
      {
        title: 'Understanding Japanese Education',
        description: 'Know what to expect from Japanese higher education.',
        tips: [
          'Research the concept of "shugaku" (dedicated study)',
          'Understand the importance of mentorship (senpai-kohai relationships)',
          'Be aware of the group-oriented approach to learning',
          'Respect for academic hierarchy is important',
          'Participation and attendance are highly valued',
          'Academic integrity is paramount',
        ],
      },
      {
        title: 'Preparation for Student Life',
        description: 'Show you understand what student life in Japan entails.',
        tips: [
          'Learn about university clubs and circles (clubs)',
          'Understand the accommodation system',
          'Show awareness of living costs in Japan',
          'Research public transportation system',
          'Learn about campus culture and traditions',
          'Show genuine enthusiasm for experiencing Japanese daily life',
        ],
      },
    ],
    documentChecklist: [
      'Valid passport',
      'Certificate of Eligibility (CoE)',
      'Admission letter from university',
      'Proof of financial support',
      'Academic transcripts with certifications',
      'Japanese language test results (JLPT - if required)',
      'Birth certificate',
      'Medical examination results',
      'Vaccination records',
      'Police clearance certificate',
      'Sponsorship documentation (if applicable)',
      'Employment verification letter',
      'Family registry (Koseki Tohon)',
      'Proof of accommodation arrangements',
      'University acceptance and enrollment confirmation'
    ],
  },
};

export type DestinationKey = keyof typeof interviewData;
