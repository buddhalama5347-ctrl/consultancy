import { CountryData } from '../types/countryData';

export const japanCountryData: CountryData = {
  id: 'japan',
  name: 'Japan',
  slug: 'japan',
  image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'Advanced technology, innovation, and rich cultural heritage',
  overview: 'Japan is a global leader in technology and innovation, offering exceptional education in engineering, robotics, business, and sciences. With over 780 universities, Japan provides a unique blend of traditional culture and cutting-edge research opportunities.',
  highlights: ['Tokyo', 'Kyoto', 'Osaka', 'Nagoya', 'Fukuoka'],
  universityCount: 780,
  color: 'from-red-600 to-white',
  region: 'Asia',

  visa: {
    title: 'Student Visa',
    types: [
      {
        name: 'Student Visa',
        duration: 'Duration of course + 6 months',
        description: 'Primary visa for international students pursuing full-time studies at Japanese institutions',
        requirements: [
          'Acceptance letter from a Japanese university',
          'Proof of financial support (JPY 1,500,000-2,500,000 per year)',
          'Valid passport',
          'Certificate of Eligibility (COE) from Japanese immigration',
          'Health certificate',
          'No criminal record',
        ],
      },
      {
        name: 'Research Student Visa',
        duration: 'Up to 2 years',
        description: 'For students conducting research or preparing for degree programs',
        requirements: [
          'Research plan acceptance from Japanese university',
          'Financial proof',
          'COE from immigration',
        ],
      },
    ],
  },

  process: {
    title: 'Application Process',
    steps: [
      {
        number: 1,
        title: 'University Selection',
        description: 'Research universities and programs. Many require JLPT (Japanese Language Proficiency Test) or EJU (Examination for Japanese University Admission)',
        duration: '3-6 months',
      },
      {
        number: 2,
        title: 'Language Preparation',
        description: 'Learn Japanese language if required. Many programs offer courses in English, but JLPT N2 or higher is often needed',
        duration: '6-12 months',
      },
      {
        number: 3,
        title: 'Application & Admission',
        description: 'Submit applications directly to universities. Some use centralized systems for undergraduate admissions',
        duration: '2-4 months',
      },
      {
        number: 4,
        title: 'Certificate of Eligibility',
        description: 'Apply for COE through the university, then submit to Japanese embassy for visa',
        duration: '1-2 months',
      },
      {
        number: 5,
        title: 'Visa & Travel',
        description: 'Receive visa, arrange travel, and complete enrollment procedures',
        duration: '2 weeks',
      },
    ],
  },

  costs: {
    tuitionRange: 'JPY 500,000 - JPY 2,000,000 per year',
    livingCost: 'JPY 1,000,000 - JPY 1,500,000 per year',
    totalEstimate: 'JPY 1,500,000 - JPY 3,500,000 per year',
    scholarships: 'MEXT scholarships, university scholarships, and private foundations available',
  },

  universities: [
    {
      name: 'University of Tokyo',
      ranking: '#23 Worldwide',
      specialization: 'Engineering, Science, Medicine',
    },
    {
      name: 'Kyoto University',
      ranking: '#36 Worldwide',
      specialization: 'Science, Engineering, Humanities',
    },
    {
      name: 'Osaka University',
      ranking: '#58 Worldwide',
      specialization: 'Engineering, Medicine, Science',
    },
    {
      name: 'Tokyo Institute of Technology',
      ranking: '#52 Worldwide',
      specialization: 'Engineering, Technology',
    },
    {
      name: 'Nagoya University',
      ranking: '#75 Worldwide',
      specialization: 'Engineering, Science, Medicine',
    },
  ],

  faqs: [
    {
      question: 'Do I need to speak Japanese to study in Japan?',
      answer: 'Many universities offer programs in English, especially at graduate level. However, learning basic Japanese is highly recommended for daily life.',
    },
    {
      question: 'What is the MEXT scholarship?',
      answer: 'MEXT (Ministry of Education, Culture, Sports, Science and Technology) offers scholarships covering tuition, living expenses, and airfare for outstanding international students.',
    },
    {
      question: 'Can I work while studying in Japan?',
      answer: 'Yes, international students can work up to 28 hours per week during term time and full-time during holidays with proper authorization.',
    },
    {
      question: 'What is the cost of living in Japan?',
      answer: 'Average living costs are JPY 1,000,000-1,500,000 per year. Tokyo is more expensive than other cities.',
    },
    {
      question: 'Can I stay and work after graduation?',
      answer: 'Yes, you can apply for a job seeker visa or work visa. The Highly Skilled Foreign Professional visa offers long-term stay options.',
    },
  ],

  countryHighlights: [
    {
      title: 'Technological Innovation',
      description: 'World leader in robotics, automotive technology, and electronics with cutting-edge research facilities.',
      icon: '⚙️',
    },
    {
      title: 'Cultural Experience',
      description: 'Immerse yourself in rich Japanese culture, traditions, and modern lifestyle in a safe, orderly society.',
      icon: '🎌',
    },
    {
      title: 'Research Opportunities',
      description: 'Access to world-class laboratories and collaboration with industry leaders in technology and science.',
      icon: '🔬',
    },
    {
      title: 'Scholarship Support',
      description: 'Generous MEXT scholarships and university funding available for international students.',
      icon: '🎓',
    },
  ],

  intakes: [
    {
      name: 'April Intake',
      period: 'Apr - Sep',
      months: 'April - September',
      type: 'Major intake',
    },
    {
      name: 'September/October Intake',
      period: 'Sep/Oct - Mar',
      months: 'September/October - March',
      type: 'Major intake',
    },
  ],

  requirements: [
    'High school diploma or equivalent',
    'Academic transcripts',
    'Language proficiency (JLPT or TOEFL/IELTS)',
    'Entrance examination results',
    'Financial proof',
    'Health certificate',
  ],

  detailedCosts: [
    {
      item: 'Undergraduate Tuition (Per Year)',
      minAmount: 'JPY 500,000',
      maxAmount: 'JPY 1,500,000',
      average: 'JPY 1,000,000',
      notes: 'National universities are cheaper than private ones',
    },
    {
      item: 'Graduate Tuition (Per Year)',
      minAmount: 'JPY 500,000',
      maxAmount: 'JPY 2,000,000',
      average: 'JPY 1,200,000',
      notes: 'Research programs may have different structures',
    },
    {
      item: 'Accommodation (Monthly)',
      minAmount: 'JPY 30,000',
      maxAmount: 'JPY 80,000',
      average: 'JPY 50,000',
      notes: 'Dormitories are cheaper than private apartments',
    },
    {
      item: 'Food & Daily Expenses (Monthly)',
      minAmount: 'JPY 30,000',
      maxAmount: 'JPY 60,000',
      average: 'JPY 40,000',
      notes: 'Cooking at home saves money',
    },
    {
      item: 'Transportation (Monthly)',
      minAmount: 'JPY 5,000',
      maxAmount: 'JPY 15,000',
      average: 'JPY 8,000',
      notes: 'Excellent public transportation system',
    },
    {
      item: 'Health Insurance (Per Year)',
      minAmount: 'JPY 20,000',
      maxAmount: 'JPY 50,000',
      average: 'JPY 30,000',
      notes: 'National Health Insurance is mandatory',
    },
  ],

  costCurrency: 'JPY',
  costNote: 'Costs are higher in Tokyo and other major cities. Many universities offer scholarships to reduce expenses.',
  totalEstimate: 'JPY 1,500,000 - JPY 3,500,000 per year',

  documentChecklist: [
    'Valid passport',
    'Certificate of Eligibility (CoE)',
    'Admission letter from university',
    'Proof of financial support',
    'Academic transcripts with certifications',
    'Japanese language test results (JLPT - if required)',
    'Birth certificate',
  ],
};
  
