import { CountryData } from '../types/countryData';

export const denmarkCountryData: CountryData = {
  id: 'denmark',
  name: 'Denmark',
  slug: 'denmark',
  image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1633&auto=format&fit=crop',
  description: 'Innovative education system with strong focus on research and sustainability',
  overview: 'Denmark offers high-quality education with a strong emphasis on innovation, sustainability, and problem-solving learning methods. Many programs are taught in English and focus on real-world applications.',
  highlights: ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg'],
  universityCount: 8,
  color: 'from-red-500 to-pink-500',
  region: 'Europe',

  visa: {
    title: 'Student Residence Permit',
    types: [
      {
        name: 'Student Residence Permit',
        duration: 'Duration of study program',
        description: 'Required for non-EU/EEA students studying in Denmark',
        requirements: [
          'Acceptance letter from Danish university',
          'Proof of sufficient funds (~DKK 6,397 per month)',
          'Valid passport',
          'Proof of tuition payment (if required)',
          'Health insurance',
          'English proficiency (IELTS 6.0+ or equivalent)',
        ],
      },
      {
        name: 'Post-Study Job Search Permit',
        duration: '6 months',
        description: 'Allows graduates to stay in Denmark and search for employment',
        requirements: [
          'Completed degree in Denmark',
          'Valid residence permit',
          'Proof of financial means',
          'Application submitted before permit expiry',
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
        description: 'Select an English-taught program in Denmark',
        duration: '2-4 weeks',
      },
      {
        number: 2,
        title: 'Apply to University',
        description: 'Submit academic documents, SOP, and language test scores',
        duration: '4-8 weeks',
      },
      {
        number: 3,
        title: 'Receive Admission',
        description: 'Get acceptance letter from Danish institution',
        duration: '2-6 weeks',
      },
      {
        number: 4,
        title: 'Apply for Residence Permit',
        description: 'Submit application to Danish Immigration Service',
        duration: '1-3 months',
      },
      {
        number: 5,
        title: 'Travel to Denmark',
        description: 'Receive approval and start your studies',
        duration: '2 weeks',
      },
    ],
  },

  costs: {
    tuitionRange: '€6,000 - €16,000 per year',
    livingCost: '€10,000 - €15,000 per year',
    totalEstimate: '€16,000 - €31,000 per year',
    scholarships: 'Danish Government Scholarships and Erasmus+ funding available',
  },

  countryHighlights: [
    {
      title: 'Innovative Education System',
      description: 'Focus on creativity, critical thinking, and real-world problem solving.',
      icon: '🎓',
    },
    {
      title: 'High Quality of Life',
      description: 'Consistently ranked among the happiest countries in the world.',
      icon: '🌍',
    },
    {
      title: 'Strong English Proficiency',
      description: 'Most programs are taught in English with excellent communication environment.',
      icon: '💬',
    },
    {
      title: 'Work Opportunities',
      description: 'Students can work part-time and apply for post-study job search visa.',
      icon: '💼',
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
      range: '€6,000 - €16,000 per year',
      icon: 'tuition',
    },
    {
      category: 'Living Cost',
      range: '€10,000 - €15,000 per year',
      icon: 'living',
    },
  ],

  costCurrency: 'EUR',
  costNote: 'Copenhagen is more expensive compared to other Danish cities like Aarhus or Odense.',
  totalEstimate: '€16,000 - €31,000 per year',

  detailedCosts: [
    {
      item: 'Bachelor Degree Tuition (Per Year)',
      minAmount: '€6,000',
      maxAmount: '€13,000',
      average: '€9,500',
      notes: 'EU/EEA students often study tuition-free',
    },
    {
      item: 'Master Degree Tuition (Per Year)',
      minAmount: '€8,000',
      maxAmount: '€16,000',
      average: '€12,000',
      notes: 'STEM and business programs may cost more',
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
      notes: 'Student housing is limited in Copenhagen',
    },
    {
      item: 'Food & Groceries (Monthly)',
      minAmount: '€200',
      maxAmount: '€400',
      average: '€300',
      notes: 'Cooking at home reduces costs significantly',
    },
    {
      item: 'Transportation (Monthly)',
      minAmount: '€40',
      maxAmount: '€100',
      average: '€70',
      notes: 'Biking is very common and cost-effective',
    },
    {
      item: 'Books & Materials (Per Year)',
      minAmount: '€300',
      maxAmount: '€800',
      average: '€550',
      notes: 'Digital materials help reduce expenses',
    },
  ],

  faqs: [
    {
      question: 'Do I need IELTS to study in Denmark?',
      answer: 'Yes, most programs require IELTS 6.0–6.5 or equivalent English proficiency.',
    },
    {
      question: 'Can international students work in Denmark?',
      answer: 'Yes, students can work up to 20 hours per week during studies and full-time in summer.',
    },
    {
      question: 'Is Denmark expensive for students?',
      answer: 'Living costs are relatively high, especially in Copenhagen, but tuition is moderate compared to other countries.',
    },
    {
      question: 'Can I stay after graduation?',
      answer: 'Yes, graduates can apply for a 6-month job search residence permit.',
    },
    {
      question: 'Is education in Denmark good?',
      answer: 'Yes, Denmark is known for innovative teaching methods and high-quality universities.',
    },
  ],

  requirements: [
    'Academic Requirements',
    'English Language Proficiency (IELTS 6.0–6.5 or equivalent)',
    'Valid passport',
    'University acceptance letter',
    'Proof of financial support (~€10,000+ per year)',
    'Statement of Purpose (SOP)',
    'Health insurance',
  ],
};