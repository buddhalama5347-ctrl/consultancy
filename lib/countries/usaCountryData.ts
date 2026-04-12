import { CountryData } from '../types/countryData';

export const usaCountryData: CountryData = {
  id: 'united-states',
  name: 'United States',
  slug: 'united-states',
  image: 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?q=80&w=886&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds',
  description: 'Home to the world\'s top universities and innovation hubs',
  overview: 'The United States offers unparalleled educational opportunities with over 4,000 accredited universities and colleges. From Ivy League institutions to cutting-edge research universities, the US provides diverse academic programs and research opportunities.',
  highlights: ['Harvard', 'MIT', 'Stanford', 'Yale', 'Princeton'],
  universityCount: 4000,
  color: 'from-blue-600 to-red-500',
  region: 'English Speaking',

  visa: {
    title: 'F-1 Student Visa',
    types: [
      {
        name: 'F-1 Student Visa',
        duration: 'Duration of study + 60 days',
        description: 'Primary visa for international students pursuing academic studies',
        requirements: [
          'Acceptance from SEVIS-approved institution',
          'Proof of financial support',
          'English proficiency (TOEFL/IELTS/PTE)',
          'Medical examination',
          'Valid passport',
        ],
      },
      {
        name: 'F-1 OPT',
        duration: 'Up to 36 months',
        description: 'Optional Practical Training for work experience',
        requirements: [
          'Completed degree program',
          'Recommendation from DSO',
          'Training plan approval',
        ],
      },
    ],
  },

  process: {
    title: 'Application Process',
    steps: [
      {
        number: 1,
        title: 'Research & Choose',
        description: 'Select universities and programs that match your goals',
        duration: '4-8 weeks',
      },
      {
        number: 2,
        title: 'Standardized Tests',
        description: 'Take required tests (TOEFL, GRE, GMAT, etc.)',
        duration: '2-3 months',
      },
      {
        number: 3,
        title: 'Submit Applications',
        description: 'Apply to universities with all required documents',
        duration: '1-2 months',
      },
      {
        number: 4,
        title: 'Receive Decisions',
        description: 'Wait for admission decisions and financial aid offers',
        duration: '2-4 months',
      },
      {
        number: 5,
        title: 'Visa Application',
        description: 'Apply for F-1 visa at US embassy/consulate',
        duration: '1-2 months',
      },
    ],
  },

  costs: {
    tuitionRange: 'USD $20,000 - $60,000 per year',
    livingCost: 'USD $10,000 - $15,000 per year',
    totalEstimate: 'USD $30,000 - $75,000 per year',
    scholarships: 'Merit-based, need-based, and athletic scholarships available',
  },

  universities: [
    {
      name: 'Harvard University',
      ranking: '#5 Worldwide',
      specialization: 'Law, Business, Medicine',
    },
    {
      name: 'Massachusetts Institute of Technology',
      ranking: '#1 Worldwide',
      specialization: 'Engineering, Science, Technology',
    },
    {
      name: 'Stanford University',
      ranking: '#4 Worldwide',
      specialization: 'Engineering, Business, Law',
    },
    {
      name: 'University of California, Berkeley',
      ranking: '#10 Worldwide',
      specialization: 'Engineering, Business, Law',
    },
    {
      name: 'Yale University',
      ranking: '#18 Worldwide',
      specialization: 'Law, Arts, Sciences',
    },
  ],

  faqs: [
    {
      question: 'What tests are required for US universities?',
      answer: 'TOEFL ,PTE OR IELTS for English proficiency, SAT/ACT for undergraduate, GRE/GMAT for graduate programs.',
    },
    {
      question: 'Can I work while studying in the US?',
      answer: 'Yes, F-1 students can work on-campus up to 20 hours per week and off-campus with CPT/OPT authorization.',
    },
  ],

  countryHighlights: [
    {
      title: 'World-Renowned Universities',
      description: 'Home to Harvard, MIT, Stanford, and 8 of the top 10 universities globally offering exceptional education.',
      icon: '🎓',
    },
    {
      title: 'Post-Study Work Visa (OPT)',
      description: 'Up to 36 months Optional Practical Training to gain US work experience after graduation.',
      icon: '💼',
    },
    {
      title: 'High Quality of Life',
      description: 'Diverse culture, advanced infrastructure, strong economy, and excellent campus facilities.',
      icon: '🌍',
    },
    {
      title: 'Generous Scholarships',
      description: 'Significant financial aid available from universities and government agencies for international students.',
      icon: '🏆',
    },
  ],

  intakes: [
    {
      name: 'Fall Semester',
      period: 'Aug - Dec',
      months: 'August - December',
      type: 'Main intake',
    },
    {
      name: 'Spring Semester',
      period: 'Jan - May',
      months: 'January - May',
      type: 'Major intake',
    },
    {
      name: 'Summer',
      period: 'Jun - Jul- Aug',
      months: 'June - July - August',
      type: 'Minor intake',
    },
  ],

  costBreakdown: [
    {
      category: 'Tuition Fee',
      range: 'USD 15,000 - USD 55,000 per year',
      icon: 'tuition',
    },
    {
      category: 'Living Cost',
      range: 'USD 12,000 - USD 25,000 per year',
      icon: 'living',
    },
    {
      category: 'Healthcare & Insurance',
      range: 'USD 1,500 - USD 3,000 per year',
      icon: 'health',
    },
  ],

  detailedCosts: [
    {
      item: 'Tuition (Per Year)',
      minAmount: 'USD 15,000',
      maxAmount: 'USD 55,000',
      average: 'USD 25,000',
      notes: 'Public universities cheaper than private; costs vary by state and program',
    },
    {
      item: 'Accommodation (Monthly)',
      minAmount: 'USD 500',
      maxAmount: 'USD 1,500',
      average: 'USD 1,000',
      notes: 'On-campus housing often cheaper; varies by city',
    },
    {
      item: 'Food (Monthly)',
      minAmount: 'USD 300',
      maxAmount: 'USD 600',
      average: 'USD 450',
      notes: 'Campus meal plans available; cooking saves money',
    },
    {
      item: 'Transportation (Monthly)',
      minAmount: 'USD 30',
      maxAmount: 'USD 200',
      average: 'USD 100',
      notes: 'Public transit and student discounts available',
    },
    {
      item: 'Books & Supplies (Per Year)',
      minAmount: 'USD 500',
      maxAmount: 'USD 1,500',
      average: 'USD 1,000',
      notes: 'Used books and rentals reduce costs',
    },
  ],

  costCurrency: 'USD',
  costNote: 'US offers the most generous financial aid to international students. Costs vary significantly by university and location.',
  totalEstimate: 'USD 27,000 - USD 80,000 per year',

  requirements: [
    'High school diploma or equivalent',
    'Academic transcripts',
    'English language proficiency (TOEFL/IELTS/PTE)',
    'Standardized test scores (SAT/ACT/GRE/GMAT)',
    'Letters of recommendation',
    'Personal statement/essay',
    'Medical examination',
    'Financial proof',
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
    'Vaccination records',
  ],
};
