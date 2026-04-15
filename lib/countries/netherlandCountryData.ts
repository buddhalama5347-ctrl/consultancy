import { CountryData } from '../types/countryData';

export const netherlandsCountryData: CountryData = {
  id: 'netherlands',
  name: 'Netherlands',
  slug: 'netherlands',
  image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0',
  description: 'Innovative education with world-class research universities',
  overview: 'The Netherlands is one of the most popular study destinations in Europe, offering high-quality education, affordable tuition compared to other Western countries, and a wide range of English-taught programs across disciplines.',
  highlights: ['Amsterdam', 'Rotterdam', 'Delft', 'Utrecht', 'Leiden'],
  universityCount: 13,
  color: 'from-red-500 to-orange-500',
  region: 'Europe',

  visa: {
    title: 'Student Visa (MVV + Residence Permit)',
    types: [
      {
        name: 'MVV + Residence Permit (Student Visa)',
        duration: 'Duration of study program',
        description: 'Required for non-EU international students studying in the Netherlands',
        requirements: [
          'Acceptance letter from Dutch university',
          'Proof of sufficient financial means (~€11,000–€13,000 per year)',
          'Valid passport',
          'English proficiency (IELTS 6.0+ or equivalent)',
          'Tuberculosis test (for some countries)',
          'Health insurance coverage',
        ],
      },
      {
        name: 'Orientation Year Visa (Zoekjaar)',
        duration: '1 year',
        description: 'Post-study visa allowing graduates to search for work in the Netherlands',
        requirements: [
          'Completed degree from recognized Dutch institution',
          'Application within 3 years of graduation',
          'Valid passport',
          'No sponsorship required',
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
        description: 'Select an English-taught program from a Dutch university',
        duration: '2-4 weeks',
      },
      {
        number: 2,
        title: 'Apply to University',
        description: 'Submit application with transcripts, SOP, and English test scores',
        duration: '4-8 weeks',
      },
      {
        number: 3,
        title: 'Receive Admission Offer',
        description: 'Get conditional or unconditional admission letter',
        duration: '2-6 weeks',
      },
      {
        number: 4,
        title: 'Visa Application',
        description: 'University applies for MVV and residence permit on your behalf',
        duration: '1-3 months',
      },
      {
        number: 5,
        title: 'Travel to Netherlands',
        description: 'Receive visa and travel to begin your studies',
        duration: '2 weeks',
      },
    ],
  },

  costs: {
    tuitionRange: '€6,000 - €20,000 per year',
    livingCost: '€10,000 - €15,000 per year',
    totalEstimate: '€16,000 - €35,000 per year',
    scholarships: 'Holland Scholarship, Erasmus+ and university-specific scholarships available',
  },

  countryHighlights: [
    {
      title: 'English-Taught Programs',
      description: 'Over 2,000 programs taught entirely in English across Dutch universities.',
      icon: '🎓',
    },
    {
      title: 'Affordable Education',
      description: 'Lower tuition fees compared to UK and USA with high-quality education.',
      icon: '💰',
    },
    {
      title: 'Strong Job Market',
      description: 'Excellent post-study work opportunities in engineering, tech, and business.',
      icon: '💼',
    },
    {
      title: 'International Environment',
      description: 'One of the highest English-speaking populations in Europe.',
      icon: '🌍',
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
      name: 'February Intake',
      period: 'Feb - Jun',
      months: 'February - June',
      type: 'Minor intake',
    },
  ],

  costBreakdown: [
    {
      category: 'Tuition Fee',
      range: '€6,000 - €20,000 per year',
      icon: 'tuition',
    },
    {
      category: 'Living Cost',
      range: '€10,000 - €15,000 per year',
      icon: 'living',
    },
  ],

  costCurrency: 'EUR',
  costNote: 'Living costs are higher in Amsterdam compared to other cities like Groningen or Eindhoven.',
  totalEstimate: '€16,000 - €35,000 per year',

  detailedCosts: [
    {
      item: 'Bachelor Degree Tuition (Per Year)',
      minAmount: '€6,000',
      maxAmount: '€15,000',
      average: '€10,500',
      notes: 'EU students pay lower fees than non-EU students',
    },
    {
      item: 'Master Degree Tuition (Per Year)',
      minAmount: '€8,000',
      maxAmount: '€20,000',
      average: '€14,000',
      notes: 'Technical programs may cost more',
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
      maxAmount: '€900',
      average: '€650',
      notes: 'Student housing is competitive in major cities',
    },
    {
      item: 'Food & Groceries (Monthly)',
      minAmount: '€200',
      maxAmount: '€400',
      average: '€300',
      notes: 'Cooking at home is more affordable',
    },
    {
      item: 'Transportation (Monthly)',
      minAmount: '€50',
      maxAmount: '€120',
      average: '€85',
      notes: 'Cycling is very common and cost-effective',
    },
    {
      item: 'Books & Materials (Per Year)',
      minAmount: '€400',
      maxAmount: '€1,000',
      average: '€700',
      notes: 'Digital resources reduce costs',
    },
  ],

  requirements: [
    'Academic Requirements',
    'English Language Proficiency (IELTS 6.0–6.5 or equivalent)',
    'Valid passport',
    'Acceptance letter from university',
    'Statement of Purpose (SOP)',
    'Financial proof (~€11,000+ per year)',
    'Health insurance',
  ],
  faqs: [
  {
    question: 'Are programs taught in English?',
    answer: 'Yes, the Netherlands offers a wide range of English-taught bachelor’s and master’s programs.',
  },
  {
    question: 'Can I work while studying?',
    answer: 'Yes, international students can work up to 16 hours per week during studies or full-time in summer.',
  },
],
};