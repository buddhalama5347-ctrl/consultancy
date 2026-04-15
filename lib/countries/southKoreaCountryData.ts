import { CountryData } from '../types/countryData';

export const southKoreaCountryData: CountryData = {
  id: 'south-korea',
  name: 'South Korea',
  slug: 'south-korea',
  image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1632&auto=format&fit=crop',
  description: 'High-tech education in a culturally rich and modern society',
  overview: 'South Korea offers world-class education with cutting-edge technology and innovation. Known for its strong focus on research, engineering, and IT, it provides affordable tuition and generous scholarships for international students.',
  highlights: ['Seoul', 'Busan', 'KAIST', 'Seoul National University', 'Yonsei University'],
  universityCount: 200,
  color: 'from-blue-600 to-red-500',
  region: 'Asia',

  visa: {
    title: 'Student Visa (D-2)',
    types: [
      {
        name: 'D-2 Student Visa',
        duration: 'Course duration',
        description: 'Main visa for international students enrolled in degree programs',
        requirements: [
          'Admission letter from Korean university',
          'Proof of financial support',
          'Academic transcripts',
          'Valid passport',
          'Visa application form',
        ],
      },
      {
        name: 'D-10 Job Seeker Visa',
        duration: 'Up to 6 months (extendable)',
        description: 'Allows graduates to stay and search for jobs in Korea',
        requirements: [
          'Degree completion certificate',
          'Valid D-2 visa before switching',
          'Proof of job-seeking activities',
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
        description: 'Select course and university in South Korea',
        duration: '2-4 weeks',
      },
      {
        number: 2,
        title: 'Apply to Universities',
        description: 'Submit application with required documents',
        duration: '1-2 months',
      },
      {
        number: 3,
        title: 'Receive Admission',
        description: 'Get acceptance letter from university',
        duration: '2-4 weeks',
      },
      {
        number: 4,
        title: 'Apply for Visa',
        description: 'Apply for D-2 visa at Korean embassy',
        duration: '2-6 weeks',
      },
      {
        number: 5,
        title: 'Arrival & Registration',
        description: 'Arrive in Korea and register with immigration',
        duration: '1 week',
      },
    ],
  },

  costs: {
    tuitionRange: 'KRW 3,000,000 - 8,000,000 per year',
    livingCost: 'KRW 6,000,000 - 12,000,000 per year',
    totalEstimate: 'KRW 9,000,000 - 20,000,000 per year',
    scholarships: 'Global Korea Scholarship (GKS) and university scholarships available',
  },

  

  faqs: [
    {
      question: 'Do I need to know Korean language?',
      answer: 'Not always. Many programs are offered in English, but knowing Korean helps in daily life and job opportunities.',
    },
    {
      question: 'Can I work while studying in South Korea?',
      answer: 'Yes, students can work part-time with permission from the university and immigration office.',
    },
  ],

  countryHighlights: [
    {
      title: 'Advanced Technology',
      description: 'South Korea is a global leader in technology, innovation, and research.',
      icon: '💻',
    },
    {
      title: 'Affordable Education',
      description: 'Lower tuition fees compared to many Western countries with high-quality education.',
      icon: '💰',
    },
    {
      title: 'Scholarships',
      description: 'Government-funded Global Korea Scholarship (GKS) covers tuition, living, and airfare.',
      icon: '🏆',
    },
    {
      title: 'Cultural Experience',
      description: 'Experience K-culture, food, and modern city life alongside traditional heritage.',
      icon: '🌏',
    },
  ],

  intakes: [
    {
      name: 'Spring Intake',
      period: 'Mar - Jun',
      months: 'March - June',
      type: 'Main intake',
    },
    {
      name: 'Fall Intake',
      period: 'Sep - Dec',
      months: 'September - December',
      type: 'Major intake',
    },
  ],

  costBreakdown: [
    {
      category: 'Tuition Fee',
      range: 'KRW 3,000,000 - KRW 8,000,000 per year',
      icon: 'tuition',
    },
    {
      category: 'Living Cost',
      range: 'KRW 6,000,000 - KRW 12,000,000 per year',
      icon: 'living',
    },
    {
      category: 'Health Insurance',
      range: 'KRW 500,000 - KRW 1,000,000 per year',
      icon: 'health',
    },
  ],

  detailedCosts: [
    {
      item: 'Tuition (Per Year)',
      minAmount: 'KRW 3,000,000',
      maxAmount: 'KRW 8,000,000',
      average: 'KRW 5,500,000',
      notes: 'Engineering and medical programs cost more',
    },
    {
      item: 'Rent (Monthly)',
      minAmount: 'KRW 300,000',
      maxAmount: 'KRW 800,000',
      average: 'KRW 500,000',
      notes: 'Dormitories are cheaper than private housing',
    },
    {
      item: 'Food (Monthly)',
      minAmount: 'KRW 200,000',
      maxAmount: 'KRW 400,000',
      average: 'KRW 300,000',
      notes: 'University cafeterias are affordable',
    },
    {
      item: 'Transportation (Monthly)',
      minAmount: 'KRW 50,000',
      maxAmount: 'KRW 100,000',
      average: 'KRW 70,000',
      notes: 'Efficient and affordable public transport system',
    },
    {
      item: 'Books & Materials (Per Year)',
      minAmount: 'KRW 300,000',
      maxAmount: 'KRW 800,000',
      average: 'KRW 500,000',
      notes: 'Digital materials can reduce costs',
    },
  ],

  costCurrency: 'KRW',
  costNote: 'South Korea provides high-quality education at relatively affordable costs with strong scholarship support.',
  totalEstimate: 'KRW 9,000,000 - KRW 20,000,000 per year',

  requirements: [
    'High school diploma or equivalent',
    'Academic transcripts',
    'English proficiency (IELTS/TOEFL) or Korean (TOPIK)',
    'Valid passport',
    'Financial proof',
  ],

  documentChecklist: [
    'Valid passport',
    'Admission letter from Korean university',
    'Academic transcripts',
    'Proof of financial support',
    'Language test results (IELTS/TOEFL or TOPIK)',
    'Passport-size photographs',
    'Visa application form',
  ],
};