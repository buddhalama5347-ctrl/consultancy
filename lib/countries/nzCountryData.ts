import { CountryData } from '../types/countryData';

export const nzCountryData: CountryData = {
  id: 'new-zealand',
  name: 'New Zealand',
  slug: 'new-zealand',
  image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'Stunning landscapes with excellent education opportunities',
  overview: 'New Zealand offers world-class education in a safe, welcoming environment with breathtaking natural beauty. The country is home to 8 universities and numerous institutes of technology.',
  highlights: ['Auckland', 'Wellington', 'University of Auckland', 'Victoria University', 'Otago'],
  universityCount: 8,
  color: 'from-green-600 to-blue-500',
  region: 'English Speaking',

  visa: {
    title: 'Student Visa',
    types: [
      {
        name: 'Student Visa',
        duration: 'Course duration + 1 year',
        description: 'Main visa for international students studying in New Zealand',
        requirements: [
          'Offer of place from a New Zealand education provider',
          'Proof of financial support (NZD $15,000 per year)',
          'English language proficiency (IELTS 6.0 or equivalent)',
          'Medical and character certificates',
          'Health insurance',
        ],
      },
    ],
  },

  process: {
    title: 'Application Process',
    steps: [
      {
        number: 1,
        title: 'Choose Your Course',
        description: 'Select from accredited institutions and courses',
        duration: '2-4 weeks',
      },
      {
        number: 2,
        title: 'Submit Application',
        description: 'Apply directly to the institution',
        duration: '2-4 weeks',
      },
      {
        number: 3,
        title: 'Receive Offer',
        description: 'Get conditional or unconditional offer letter',
        duration: '1-2 weeks',
      },
      {
        number: 4,
        title: 'Apply for Visa',
        description: 'Submit visa application with all documents',
        duration: '4-6 weeks',
      },
      {
        number: 5,
        title: 'Travel to NZ',
        description: 'Arrive and start your studies',
        duration: '1 week',
      },
    ],
  },

  costs: {
    tuitionRange: 'NZD $20,000 - $35,000 per year',
    livingCost: 'NZD $15,000 - $20,000 per year',
    totalEstimate: 'NZD $35,000 - $55,000 per year',
    scholarships: 'New Zealand government and university scholarships available',
  },

  universities: [
    {
      name: 'University of Auckland',
      ranking: '#=87 Worldwide',
      specialization: 'Engineering, Business, Medicine',
    },
    {
      name: 'University of Otago',
      ranking: '#=194 Worldwide',
      specialization: 'Health Sciences, Sciences, Humanities',
    },
    {
      name: 'Victoria University of Wellington',
      ranking: '#=275 Worldwide',
      specialization: 'Law, Business, Engineering',
    },
  ],

  faqs: [
    {
      question: 'What is the IELTS requirement for New Zealand universities?',
      answer: 'Most universities require IELTS 6.0-6.5 overall. Some programs may require higher scores.',
    },
    {
      question: 'Is New Zealand safe for international students?',
      answer: 'Yes, New Zealand is one of the safest countries in the world with low crime rates and welcoming communities.',
    },
  ],

  countryHighlights: [
    {
      title: 'Stunning Natural Beauty',
      description: 'Amazing landscapes, adventure activities, and outdoor lifestyle for students seeking life balance.',
      icon: '🏔️',
    },
    {
      title: 'Post-Study Work Visa',
      description: '3 years post-study work visa to gain experience and pathway to permanent residency.',
      icon: '💼',
    },
    {
      title: 'Safe & Welcoming',
      description: 'One of the lowest crime rates globally with strong international student support networks.',
      icon: '🌍',
    },
    {
      title: 'Affordable & Quality Education',
      description: 'Good value for money with world-class universities and reasonable living costs.',
      icon: '💰',
    },
  ],

  intakes: [
    {
      name: 'February (Semester 1)',
      period: 'Feb - Jun',
      months: 'February - June',
      type: 'Main intake',
    },
    {
      name: 'July (Semester 2)',
      period: 'Jul - Nov',
      months: 'July - November',
      type: 'Major intake',
    },
    {
      name: 'November (Trimester)',
      period: 'Nov - Feb',
      months: 'November - February',
      type: 'Minor intake',
    },
  ],

  costBreakdown: [
    {
      category: 'Tuition Fee',
      range: 'NZD 18,000 - NZD 35,000 per year',
      icon: 'tuition',
    },
    {
      category: 'Living Cost',
      range: 'NZD 12,000 - NZD 20,000 per year',
      icon: 'living',
    },
  ],

  detailedCosts: [
    {
      item: 'Tuition (Per Year)',
      minAmount: 'NZD 18,000',
      maxAmount: 'NZD 35,000',
      average: 'NZD 25,000',
      notes: 'Engineering and health programs most expensive; arts programs more affordable',
    },
    {
      item: 'Rent (Monthly)',
      minAmount: 'NZD 300',
      maxAmount: 'NZD 700',
      average: 'NZD 500',
      notes: 'Urban areas like Auckland more expensive; regional areas offer cheaper options',
    },
    {
      item: 'Food (Monthly)',
      minAmount: 'NZD 200',
      maxAmount: 'NZD 400',
      average: 'NZD 300',
      notes: 'Local produce in markets is affordable when cooking at home',
    },
    {
      item: 'Transportation (Monthly)',
      minAmount: 'NZD 40',
      maxAmount: 'NZD 100',
      average: 'NZD 70',
      notes: 'Student concession cards available; biking is popular in cities',
    },
    {
      item: 'Entertainment & Activities (Monthly)',
      minAmount: 'NZD 50',
      maxAmount: 'NZD 150',
      average: 'NZD 100',
      notes: 'Many free outdoor activities; adventure sports available',
    },
  ],

  costCurrency: 'NZD',
  costNote: 'New Zealand offers excellent value and quality of life. Living costs are reasonable compared to Australia.',
  totalEstimate: 'NZD 30,000 - NZD 55,000 per year',

  requirements: [
    'High school diploma or equivalent',
    'Academic transcripts',
    'English language proficiency (IELTS/TOEFL)',
    'Medical certificate',
    'Character certificate',
    'Health insurance',
  ],

  documentChecklist: [
    'Valid passport',
    'Visa sponsorship letter from university (CAS)',
    'Admission letter',
    'Proof of funds',
    'Academic transcripts',
    'English language test results (IELTS/TOEFL)',
    'Birth certificate',
  ],
};
