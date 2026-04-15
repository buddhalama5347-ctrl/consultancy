export {}
import { CountryData } from '../types/countryData';

export const franceCountryData: CountryData = {
  id: 'france',
  name: 'France',
  slug: 'france',
  image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1633&auto=format&fit=crop',
  description: 'World-class education with rich culture and academic excellence',
  overview: 'France is one of the top study destinations in Europe, known for prestigious universities, affordable tuition fees at public institutions, and strong programs in business, engineering, fashion, and arts.',
  highlights: ['Paris', 'Lyon', 'Toulouse', 'Nice', 'Bordeaux'],
  universityCount: 70,
  color: 'from-blue-600 to-red-500',
  region: 'Europe',

  visa: {
    title: 'Student Visa (VLS-TS)',
    types: [
      {
        name: 'Long Stay Student Visa (VLS-TS)',
        duration: 'Duration of study program (up to 1 year renewable)',
        description: 'Main visa for international students studying in France',
        requirements: [
          'Acceptance letter from French institution',
          'Proof of financial means (~€615 per month minimum)',
          'Valid passport',
          'Proof of accommodation in France',
          'Health insurance coverage',
          'Campus France approval (for many countries)',
        ],
      },
      {
        name: 'APS (Post-Study Work Visa)',
        duration: '12–24 months',
        description: 'Allows graduates to stay and work in France after studies',
        requirements: [
          'French higher education degree',
          'Valid residence permit',
          'Proof of job search or employment plan',
          'Sufficient financial support',
        ],
      },
    ],
  },

  process: {
    title: 'Application Process',
    steps: [
      {
        number: 1,
        title: 'Choose Your Program',
        description: 'Select a program from a recognized French institution',
        duration: '2-4 weeks',
      },
      {
        number: 2,
        title: 'Apply via Campus France',
        description: 'Submit application through Campus France platform (for most countries)',
        duration: '4-8 weeks',
      },
      {
        number: 3,
        title: 'Receive Admission Offer',
        description: 'Get acceptance letter from the university',
        duration: '2-6 weeks',
      },
      {
        number: 4,
        title: 'Apply for Student Visa',
        description: 'Submit visa application at French embassy/consulate',
        duration: '1-3 months',
      },
      {
        number: 5,
        title: 'Travel to France',
        description: 'Receive visa and begin your studies',
        duration: '2 weeks',
      },
    ],
  },

  costs: {
    tuitionRange: '€2,000 - €20,000 per year',
    livingCost: '€10,000 - €15,000 per year',
    totalEstimate: '€12,000 - €35,000 per year',
    scholarships: 'Eiffel Excellence Scholarship, Erasmus+, and university scholarships available',
  },

  countryHighlights: [
    {
      title: 'Affordable Public Universities',
      description: 'Low tuition fees at public universities compared to other Western countries.',
      icon: '🎓',
    },
    {
      title: 'Global Fashion & Business Hub',
      description: 'Paris is a world center for fashion, luxury brands, and business education.',
      icon: '🌍',
    },
    {
      title: 'Strong Post-Study Options',
      description: 'Graduates can apply for APS visa to stay and work in France.',
      icon: '💼',
    },
    {
      title: 'Rich Cultural Experience',
      description: 'Historic cities, museums, and vibrant student life across France.',
      icon: '🏛️',
    },
  ],

  intakes: [
    {
      name: 'September Intake',
      period: 'Sep - Jan',
      months: 'September - January',
      type: 'Major intake',
    },
    {
      name: 'January Intake',
      period: 'Jan - Jun',
      months: 'January - June',
      type: 'Minor intake',
    },
  ],

  costBreakdown: [
    {
      category: 'Tuition Fee',
      range: '€2,000 - €20,000 per year',
      icon: 'tuition',
    },
    {
      category: 'Living Cost',
      range: '€10,000 - €15,000 per year',
      icon: 'living',
    },
  ],

  costCurrency: 'EUR',
  costNote: 'Paris is significantly more expensive than smaller cities like Lyon or Toulouse.',
  totalEstimate: '€12,000 - €35,000 per year',

  detailedCosts: [
    {
      item: 'Bachelor Degree Tuition (Per Year)',
      minAmount: '€2,500',
      maxAmount: '€10,000',
      average: '€4,000',
      notes: 'Public universities are highly subsidized',
    },
    {
      item: 'Master Degree Tuition (Per Year)',
      minAmount: '€3,000',
      maxAmount: '€20,000',
      average: '€7,000',
      notes: 'Private schools (Grandes Écoles) are more expensive',
    },
    {
      item: 'Living Expenses (Per Year)',
      minAmount: '€10,000',
      maxAmount: '€15,000',
      average: '€12,500',
      notes: 'Includes accommodation, food, transport, and personal expenses',
    },
    {
      item: 'Accommodation (Monthly)',
      minAmount: '€400',
      maxAmount: '€1,000',
      average: '€700',
      notes: 'Paris is the most expensive city',
    },
    {
      item: 'Food & Groceries (Monthly)',
      minAmount: '€200',
      maxAmount: '€400',
      average: '€300',
      notes: 'Student cafeterias offer affordable meals',
    },
    {
      item: 'Transportation (Monthly)',
      minAmount: '€30',
      maxAmount: '€80',
      average: '€55',
      notes: 'Student discounts available on public transport',
    },
    {
      item: 'Books & Materials (Per Year)',
      minAmount: '€300',
      maxAmount: '€800',
      average: '€500',
      notes: 'Libraries and digital resources reduce costs',
    },
  ],

  faqs: [
    {
      question: 'Do I need French language to study in France?',
      answer: 'Not always. Many programs are offered in English, especially at master’s level, but knowing French is highly beneficial.',
    },
    {
      question: 'Can I work while studying in France?',
      answer: 'Yes, international students can work up to 964 hours per year (about 20 hours per week).',
    },
    {
      question: 'Is France expensive for students?',
      answer: 'Tuition at public universities is affordable, but living costs in cities like Paris can be high.',
    },
    {
      question: 'What is Campus France?',
      answer: 'It is the official platform for applying to French universities and managing student visa procedures in many countries.',
    },
    {
      question: 'Can I stay in France after graduation?',
      answer: 'Yes, you can apply for the APS visa, which allows you to stay for 12–24 months to find work.',
    },
  ],

  requirements: [
    'Academic Requirements',
    'English or French Language Proficiency (IELTS 6.0+ or DELF/DALF)',
    'Valid passport',
    'University acceptance letter',
    'Financial proof (~€615/month minimum)',
    'Statement of Purpose (SOP)',
    'Accommodation proof',
  ],
};