import { CountryData } from '../types/countryData';

export const swedenCountryData: CountryData = {
  id: 'sweden',
  name: 'Sweden',
  slug: 'sweden',
  image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1633&auto=format&fit=crop',
  description: 'Innovative, research-driven education with strong global reputation',
  overview: 'Sweden is known for its innovative education system, sustainability focus, and high-quality research-based learning. Many programs are taught in English and emphasize independent thinking and creativity.',
  highlights: ['Stockholm', 'Gothenburg', 'Lund', 'Uppsala'],
  universityCount: 39,
  color: 'from-blue-600 to-cyan-500',
  region: 'Europe',

  visa: {
    title: 'Student Residence Permit',
    types: [
      {
        name: 'Student Residence Permit',
        duration: 'Duration of study program',
        description: 'Required for non-EU/EEA students studying in Sweden',
        requirements: [
          'Acceptance letter from Swedish university',
          'Proof of financial means (~SEK 10,314 per month)',
          'Valid passport',
          'Health insurance (if stay is less than 1 year)',
          'Proof of tuition fee payment (if applicable)',
        ],
      },
      {
        name: 'Post-Study Residence Permit',
        duration: 'Up to 12 months',
        description: 'Allows graduates to stay in Sweden to search for work',
        requirements: [
          'Completed degree in Sweden',
          'Valid residence permit',
          'Proof of financial support',
          'Application before permit expires',
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
        description: 'Select an English-taught program in Sweden',
        duration: '2-4 weeks',
      },
      {
        number: 2,
        title: 'Apply to University',
        description: 'Submit online application via universityadmissions.se',
        duration: '4-8 weeks',
      },
      {
        number: 3,
        title: 'Receive Admission',
        description: 'Get acceptance letter from Swedish university',
        duration: '2-6 weeks',
      },
      {
        number: 4,
        title: 'Apply for Residence Permit',
        description: 'Submit application to Swedish Migration Agency',
        duration: '1-3 months',
      },
      {
        number: 5,
        title: 'Travel to Sweden',
        description: 'Receive approval and begin studies',
        duration: '2 weeks',
      },
    ],
  },

  costs: {
    tuitionRange: 'SEK 80,000 - SEK 295,000 per year',
    livingCost: 'SEK 100,000 - SEK 140,000 per year',
    totalEstimate: 'SEK 180,000 - SEK 435,000 per year',
    scholarships: 'Swedish Institute Scholarships and university-specific funding available',
  },

  countryHighlights: [
    {
      title: 'Innovation Leader',
      description: 'Home to global companies like IKEA, Spotify, and Ericsson.',
      icon: '💡',
    },
    {
      title: 'High-Quality Education',
      description: 'Focus on research, creativity, and independent learning.',
      icon: '🎓',
    },
    {
      title: 'Sustainable Society',
      description: 'One of the world’s leaders in sustainability and green living.',
      icon: '🌱',
    },
    {
      title: 'Strong Career Opportunities',
      description: 'Excellent job market in tech, engineering, and design.',
      icon: '💼',
    },
  ],

  intakes: [
    {
      name: 'Autumn Intake',
      period: 'Aug - Jan',
      months: 'August - January',
      type: 'Major intake',
    },
    {
      name: 'Spring Intake',
      period: 'Jan - Jun',
      months: 'January - June',
      type: 'Minor intake',
    },
  ],

  costBreakdown: [
    {
      category: 'Tuition Fee',
      range: 'SEK 80,000 - SEK 295,000 per year',
      icon: 'tuition',
    },
    {
      category: 'Living Cost',
      range: 'SEK 100,000 - SEK 140,000 per year',
      icon: 'living',
    },
  ],

  costCurrency: 'SEK',
  costNote: 'Stockholm is the most expensive city, while Lund and Uppsala are more affordable.',
  totalEstimate: 'SEK 180,000 - SEK 435,000 per year',

  detailedCosts: [
    {
      item: 'Bachelor Degree Tuition (Per Year)',
      minAmount: 'SEK 80,000',
      maxAmount: 'SEK 150,000',
      average: 'SEK 115,000',
      notes: 'EU/EEA students usually study tuition-free',
    },
    {
      item: 'Master Degree Tuition (Per Year)',
      minAmount: 'SEK 100,000',
      maxAmount: 'SEK 295,000',
      average: 'SEK 180,000',
      notes: 'Engineering and business programs cost more',
    },
    {
      item: 'Living Expenses (Per Year)',
      minAmount: 'SEK 100,000',
      maxAmount: 'SEK 140,000',
      average: 'SEK 120,000',
      notes: 'Includes accommodation, food, transport, and personal expenses',
    },
    {
      item: 'Accommodation (Monthly)',
      minAmount: 'SEK 4,000',
      maxAmount: 'SEK 9,000',
      average: 'SEK 6,500',
      notes: 'Student housing is cheaper than private rentals',
    },
    {
      item: 'Food & Groceries (Monthly)',
      minAmount: 'SEK 2,000',
      maxAmount: 'SEK 4,000',
      average: 'SEK 3,000',
      notes: 'Cooking at home is highly recommended',
    },
    {
      item: 'Transportation (Monthly)',
      minAmount: 'SEK 500',
      maxAmount: 'SEK 1,000',
      average: 'SEK 750',
      notes: 'Student discounts available on public transport',
    },
    {
      item: 'Books & Materials (Per Year)',
      minAmount: 'SEK 3,000',
      maxAmount: 'SEK 8,000',
      average: 'SEK 5,000',
      notes: 'Digital resources reduce costs significantly',
    },
  ],

  faqs: [
    {
      question: 'Do I need IELTS to study in Sweden?',
      answer: 'Yes, most universities require IELTS 6.0–6.5 or equivalent English proficiency tests.',
    },
    {
      question: 'Can international students work in Sweden?',
      answer: 'Yes, there is no official hour limit, but students must balance work with studies.',
    },
    {
      question: 'Is Sweden expensive for students?',
      answer: 'Yes, living costs are relatively high, especially in Stockholm.',
    },
    {
      question: 'Can I stay after graduation?',
      answer: 'Yes, graduates can apply for a 12-month residence permit to search for jobs.',
    },
    {
      question: 'Is Sweden good for tech careers?',
      answer: 'Yes, Sweden has strong opportunities in IT, engineering, and startups.',
    },
  ],

  requirements: [
    'Academic Requirements',
    'English Language Proficiency (IELTS 6.0–6.5 or equivalent)',
    'Valid passport',
    'University acceptance letter',
    'Proof of financial support (~SEK 10,314 per month)',
    'Statement of Purpose (SOP)',
    'Health insurance (if required)',
  ],
};