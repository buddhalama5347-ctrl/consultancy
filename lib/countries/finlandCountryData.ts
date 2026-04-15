import { CountryData } from '../types/countryData';

export const finlandCountryData: CountryData = {
  id: 'finland',
  name: 'Finland',
  slug: 'finland',
  image: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=1633&auto=format&fit=crop',
  description: 'High-quality education with innovation-driven learning environment',
  overview: 'Finland offers world-class education focused on research, innovation, and student-centered learning. It is known for high living standards, safety, and strong support for international students.',
  highlights: ['Helsinki', 'Espoo', 'Tampere', 'Turku', 'Oulu'],
  universityCount: 13,
  color: 'from-blue-500 to-indigo-600',
  region: 'Europe',

  visa: {
    title: 'Residence Permit for Studies',
    types: [
      {
        name: 'Student Residence Permit',
        duration: 'Duration of study program',
        description: 'Required for non-EU/EEA students studying in Finland',
        requirements: [
          'Acceptance letter from Finnish university',
          'Proof of sufficient funds (~€560/month or €6,720/year minimum)',
          'Valid passport',
          'Health insurance covering medical expenses',
          'Tuition fee payment receipt (if applicable)',
        ],
      },
      {
        name: 'Post-Study Residence Permit',
        duration: 'Up to 2 years',
        description: 'Allows graduates to stay in Finland to search for work or start a business',
        requirements: [
          'Completed degree in Finland',
          'Valid residence permit',
          'Proof of funds for stay',
          'No criminal record issues',
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
        description: 'Select a degree program offered by Finnish universities',
        duration: '2-4 weeks',
      },
      {
        number: 2,
        title: 'Submit Application',
        description: 'Apply online via Studyinfo.fi with required documents',
        duration: '3-6 weeks',
      },
      {
        number: 3,
        title: 'Receive Admission Offer',
        description: 'Get acceptance letter from the university',
        duration: '2-6 weeks',
      },
      {
        number: 4,
        title: 'Apply for Residence Permit',
        description: 'Submit online application to Finnish Immigration Service (Migri)',
        duration: '1-3 months',
      },
      {
        number: 5,
        title: 'Travel to Finland',
        description: 'Receive permit decision and prepare for travel',
        duration: '2 weeks',
      },
    ],
  },

  costs: {
    tuitionRange: '€6,000 - €18,000 per year',
    livingCost: '€10,000 - €15,000 per year',
    totalEstimate: '€16,000 - €33,000 per year',
    scholarships: 'Finnish government scholarships and university-based tuition waivers available',
  },

  countryHighlights: [
    {
      title: 'World-Class Education System',
      description: 'Finland is consistently ranked among the best education systems globally.',
      icon: '🎓',
    },
    {
      title: 'Safe & Clean Country',
      description: 'One of the safest countries with excellent quality of life.',
      icon: '🛡️',
    },
    {
      title: 'Innovation & Research Focus',
      description: 'Strong emphasis on technology, engineering, and research-driven education.',
      icon: '💡',
    },
    {
      title: 'Work Opportunities',
      description: 'Post-study residence permit allows graduates to seek employment or start a business.',
      icon: '💼',
    },
  ],

  intakes: [
    {
      name: 'Autumn Intake',
      period: 'Aug - Dec',
      months: 'August - December',
      type: 'Major intake',
    },
    {
      name: 'Spring Intake',
      period: 'Jan - May',
      months: 'January - May',
      type: 'Minor intake',
    },
  ],

  costBreakdown: [
    {
      category: 'Tuition Fee',
      range: '€6,000 - €18,000 per year',
      icon: 'tuition',
    },
    {
      category: 'Living Cost',
      range: '€10,000 - €15,000 per year',
      icon: 'living',
    },
  ],

  costCurrency: 'EUR',
  costNote: 'Living costs are higher in Helsinki compared to smaller cities like Tampere or Oulu.',
  totalEstimate: '€16,000 - €33,000 per year',

  detailedCosts: [
    {
      item: 'Bachelor Degree Tuition (Per Year)',
      minAmount: '€6,000',
      maxAmount: '€12,000',
      average: '€9,000',
      notes: 'Non-EU students pay tuition fees',
    },
    {
      item: 'Master Degree Tuition (Per Year)',
      minAmount: '€8,000',
      maxAmount: '€18,000',
      average: '€13,000',
      notes: 'STEM programs may cost higher',
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
      minAmount: '€350',
      maxAmount: '€800',
      average: '€550',
      notes: 'Student housing is more affordable than private rentals',
    },
    {
      item: 'Food & Groceries (Monthly)',
      minAmount: '€200',
      maxAmount: '€400',
      average: '€300',
      notes: 'Cooking at home significantly reduces costs',
    },
    {
      item: 'Transportation (Monthly)',
      minAmount: '€40',
      maxAmount: '€100',
      average: '€70',
      notes: 'Student discounts available for public transport',
    },
    {
      item: 'Books & Materials (Per Year)',
      minAmount: '€300',
      maxAmount: '€800',
      average: '€550',
      notes: 'Libraries and digital materials help reduce costs',
    },
  ],

  requirements: [
    'Academic Requirements',
    'English Language Proficiency (IELTS 6.0+ or equivalent)',
    'Valid passport',
    'University acceptance letter',
    'Proof of sufficient funds (~€6,720+ per year minimum)',
    'Health insurance',
    'Statement of Purpose (SOP)',
  ],
  faqs: [
  {
    question: 'What IELTS score is required for Finland?',
    answer: 'Most universities require an IELTS score of 6.0–6.5 overall, depending on the program. Some programs may accept equivalent English tests like TOEFL or PTE.',
  },
  {
    question: 'Can international students work in Finland?',
    answer: 'Yes, international students can work up to 30 hours per week during studies and full-time during holidays.',
  },
  {
    question: 'Is education free in Finland for international students?',
    answer: 'No, tuition fees apply for non-EU/EEA students, typically ranging from €6,000 to €18,000 per year.',
  },
  {
    question: 'What is the cost of living in Finland?',
    answer: 'The average cost of living is around €10,000–€15,000 per year, depending on the city and lifestyle. Helsinki is the most expensive.',
  },
  {
    question: 'Can I stay in Finland after graduation?',
    answer: 'Yes, graduates can apply for a post-study residence permit of up to 2 years to search for work or start a business.',
  },
],
};