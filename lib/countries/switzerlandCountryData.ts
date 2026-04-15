import { CountryData } from '../types/countryData';

export const switzerlandCountryData: CountryData = {
  id: 'switzerland',
  name: 'Switzerland',
  slug: 'switzerland',
  image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1633&auto=format&fit=crop',
  description: 'World-class education with strong research and innovation focus',
  overview: 'Switzerland is known for its high-quality education system, especially in hospitality, business, engineering, and science. It offers globally ranked universities and strong industry connections.',
  highlights: ['Zurich', 'Geneva', 'Lausanne', 'Bern', 'Basel'],
  universityCount: 12,
  color: 'from-red-600 to-red-400',
  region: 'Europe',

  visa: {
    title: 'Student Residence Permit (Type D Visa)',
    types: [
      {
        name: 'Long Stay Student Visa (Type D)',
        duration: 'Duration of study program',
        description: 'Required for non-EU international students studying in Switzerland',
        requirements: [
          'Acceptance letter from Swiss university',
          'Proof of sufficient financial means (~CHF 21,000 per year)',
          'Valid passport',
          'Accommodation proof in Switzerland',
          'Motivation letter',
          'Health insurance coverage',
        ],
      },
      {
        name: 'Post-Study Work Options',
        duration: '6–12 months (job search permit)',
        description: 'Allows graduates to stay and find employment in Switzerland',
        requirements: [
          'Completed Swiss degree',
          'Valid residence permit',
          'Proof of financial support',
          'Job search documentation',
        ],
      },
    ],
  },

  process: {
    title: 'Application Process',
    steps: [
      {
        number: 1,
        title: 'Choose Program',
        description: 'Select a Swiss university or hospitality/business school program',
        duration: '2-4 weeks',
      },
      {
        number: 2,
        title: 'Apply to University',
        description: 'Submit academic documents, SOP, and language proof',
        duration: '4-8 weeks',
      },
      {
        number: 3,
        title: 'Receive Admission',
        description: 'Get acceptance letter from institution',
        duration: '2-6 weeks',
      },
      {
        number: 4,
        title: 'Visa Application',
        description: 'Apply for Swiss Type D visa through embassy',
        duration: '1-3 months',
      },
      {
        number: 5,
        title: 'Travel to Switzerland',
        description: 'Receive visa approval and start studies',
        duration: '2 weeks',
      },
    ],
  },

  costs: {
    tuitionRange: 'CHF 1,000 - CHF 25,000 per year',
    livingCost: 'CHF 18,000 - CHF 30,000 per year',
    totalEstimate: 'CHF 20,000 - CHF 55,000 per year',
    scholarships: 'Swiss Government Excellence Scholarships and university-specific funding available',
  },

  countryHighlights: [
    {
      title: 'Top Global Education System',
      description: 'Swiss universities are consistently ranked among the best in the world.',
      icon: '🎓',
    },
    {
      title: 'Hospitality & Business Leader',
      description: 'World-renowned for hospitality management and business education.',
      icon: '🏨',
    },
    {
      title: 'High Quality of Life',
      description: 'One of the safest, cleanest, and most developed countries.',
      icon: '🌍',
    },
    {
      title: 'Strong Career Opportunities',
      description: 'Excellent job prospects in finance, engineering, and hospitality sectors.',
      icon: '💼',
    },
  ],

  intakes: [
    {
      name: 'Fall Intake',
      period: 'Sep - Dec',
      months: 'September - December',
      type: 'Major intake',
    },
    {
      name: 'Spring Intake',
      period: 'Feb - Jun',
      months: 'February - June',
      type: 'Minor intake',
    },
  ],

  costBreakdown: [
    {
      category: 'Tuition Fee',
      range: 'CHF 1,000 - CHF 25,000 per year',
      icon: 'tuition',
    },
    {
      category: 'Living Cost',
      range: 'CHF 18,000 - CHF 30,000 per year',
      icon: 'living',
    },
  ],

  costCurrency: 'CHF',
  costNote: 'Zurich and Geneva are the most expensive cities in Switzerland.',
  totalEstimate: 'CHF 20,000 - CHF 55,000 per year',

  detailedCosts: [
    {
      item: 'Bachelor Degree Tuition (Per Year)',
      minAmount: 'CHF 1,000',
      maxAmount: 'CHF 10,000',
      average: 'CHF 5,000',
      notes: 'Public universities are highly subsidized',
    },
    {
      item: 'Master Degree Tuition (Per Year)',
      minAmount: 'CHF 2,000',
      maxAmount: 'CHF 25,000',
      average: 'CHF 12,000',
      notes: 'Private hospitality schools are more expensive',
    },
    {
      item: 'Living Expenses (Per Year)',
      minAmount: 'CHF 18,000',
      maxAmount: 'CHF 30,000',
      average: 'CHF 24,000',
      notes: 'Includes accommodation, food, transport, and personal expenses',
    },
    {
      item: 'Accommodation (Monthly)',
      minAmount: 'CHF 700',
      maxAmount: 'CHF 1,800',
      average: 'CHF 1,200',
      notes: 'High demand in major cities',
    },
    {
      item: 'Food & Groceries (Monthly)',
      minAmount: 'CHF 300',
      maxAmount: 'CHF 600',
      average: 'CHF 450',
      notes: 'Cooking at home is significantly cheaper',
    },
    {
      item: 'Transportation (Monthly)',
      minAmount: 'CHF 70',
      maxAmount: 'CHF 150',
      average: 'CHF 110',
      notes: 'Excellent public transport system',
    },
    {
      item: 'Books & Materials (Per Year)',
      minAmount: 'CHF 300',
      maxAmount: 'CHF 1,000',
      average: 'CHF 650',
      notes: 'Digital resources help reduce costs',
    },
  ],

  faqs: [
    {
      question: 'Is Switzerland expensive for students?',
      answer: 'Yes, Switzerland is one of the most expensive countries, especially for living costs, but tuition at public universities is relatively low.',
    },
    {
      question: 'Do I need IELTS for Switzerland?',
      answer: 'Yes, most programs require IELTS 6.0–7.0 or equivalent depending on the university.',
    },
    {
      question: 'Can students work in Switzerland?',
      answer: 'Yes, international students can work up to 15–20 hours per week during studies.',
    },
    {
      question: 'Is Switzerland good for hospitality studies?',
      answer: 'Yes, Switzerland is considered the global leader in hospitality and hotel management education.',
    },
    {
      question: 'Can I stay after graduation?',
      answer: 'Yes, graduates can apply for a short-term residence permit (6–12 months) to find a job.',
    },
  ],

  requirements: [
    'Academic Requirements',
    'English Language Proficiency (IELTS 6.0–7.0 or equivalent)',
    'Valid passport',
    'University acceptance letter',
    'Proof of financial means (~CHF 21,000 per year)',
    'Statement of Purpose (SOP)',
    'Health insurance',
  ],
};