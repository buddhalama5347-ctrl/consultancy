import { CountryData } from '../types/countryData';

export const germanyCountryData: CountryData = {
  id: 'germany',
  name: 'Germany',
  slug: 'germany',
  image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'Engineering excellence and research-driven education',
  overview: 'Germany offers tuition-free or low-cost education with world-class technical universities and research facilities. The country is a global leader in engineering, sciences, and vocational education.',
  highlights: ['Berlin', 'Munich', 'Technical University of Munich', 'Heidelberg', 'RWTH Aachen'],
  universityCount: 400,
  color: 'from-black-600 to-red-500',
  region: 'Europe',

  visa: {
    title: 'Student Visa (Visum zu Studienzwecken)',
    types: [
      {
        name: 'Student Visa',
        duration: 'Course duration + 18 months',
        description: 'Visa for students enrolled in German institutions',
        requirements: [
          'Acceptance from German university',
          'Proof of financial support (€11,208 per year)',
          'Health insurance',
          'Accommodation proof',
          'Valid passport',
        ],
      },
      {
        name: 'Job Seeker Visa',
        duration: '6 months',
        description: 'Visa to search for employment after studies',
        requirements: [
          'Completed degree',
          'Valid residence permit',
          'Qualification recognition',
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
        description: 'Select from German universities and institutions',
        duration: '2-4 weeks',
      },
      {
        number: 2,
        title: 'Check Requirements',
        description: 'Review admission requirements and language tests',
        duration: '1-2 weeks',
      },
      {
        number: 3,
        title: 'Submit Application',
        description: 'Apply through uni-assist or directly to universities',
        duration: '1-2 months',
      },
      {
        number: 4,
        title: 'Receive Admission',
        description: 'Get acceptance letter and block account setup',
        duration: '2-4 weeks',
      },
      {
        number: 5,
        title: 'Visa Application',
        description: 'Apply for visa at German embassy',
        duration: '1-2 months',
      },
    ],
  },

  costs: {
    tuitionRange: '€0 - €500 per semester',
    livingCost: '€700 - €1,000 per month',
    totalEstimate: '€8,000 - €12,000 per year',
    scholarships: 'DAAD scholarships, Deutschlandstipendium, and university funding',
  },

  universities: [
    {
      name: 'Technical University of Munich',
      ranking: '#=37 Worldwide',
      specialization: 'Engineering, Technology, Sciences',
    },
    {
      name: 'Heidelberg University',
      ranking: '#=83 Worldwide',
      specialization: 'Medicine, Humanities, Sciences',
    },
    {
      name: 'RWTH Aachen University',
      ranking: '#=106 Worldwide',
      specialization: 'Engineering, Technology, Medicine',
    },
    {
      name: 'University of Freiburg',
      ranking: '#=108 Worldwide',
      specialization: 'Sciences, Humanities, Medicine',
    },
    {
      name: 'Humboldt University of Berlin',
      ranking: '#==117 Worldwide',
      specialization: 'Humanities, Social Sciences, Law',
    },
  ],

  faqs: [
    {
      question: 'Is education free in Germany?',
      answer: 'Public universities charge no or very low tuition fees. Only administrative fees apply.',
    },
    {
      question: 'What language are programs taught in?',
      answer: 'Many Master\'s programs are taught in English. Bachelor\'s programs are usually in German.',
    },
  ],

  countryHighlights: [
    {
      title: 'Tuition-Free Education',
      description: 'Most public universities charge no tuition fees, only semester contributions of €300-500.',
      icon: '💰',
    },
    {
      title: 'Engineering Excellence',
      description: 'World-renowned technical universities and strong industry connections for engineering students.',
      icon: '⚙️',
    },
    {
      title: 'Research Opportunities',
      description: 'Access to cutting-edge research facilities and collaboration with industry leaders.',
      icon: '🔬',
    },
    {
      title: 'Post-Study Work Options',
      description: '18-month job seeker visa after graduation to find employment in Germany.',
      icon: '💼',
    },
  ],

  intakes: [
    {
      name: 'Winter Semester',
      period: 'Oct - Mar',
      months: 'October - March',
      type: 'Main intake',
    },
    {
      name: 'Summer Semester',
      period: 'Apr - Sep',
      months: 'April - September',
      type: 'Secondary intake',
    },
  ],

  costBreakdown: [
    {
      category: 'Tuition Fee',
      range: '€0 - €500 per semester',
      icon: 'tuition',
    },
    {
      category: 'Living Cost',
      range: '€700 - €1,000 per month',
      icon: 'living',
    },
    {
      category: 'Health Insurance',
      range: '€80 - €120 per month',
      icon: 'health',
    },
  ],

  detailedCosts: [
    {
      item: 'Semester Contribution (Per Semester)',
      minAmount: '€300',
      maxAmount: '€500',
      average: '€400',
      notes: 'Administrative fees, student ID, and public transport ticket',
    },
    {
      item: 'Rent (Monthly)',
      minAmount: '€200',
      maxAmount: '€600',
      average: '€350',
      notes: 'Student dormitories cheaper than private apartments',
    },
    {
      item: 'Food (Monthly)',
      minAmount: '€150',
      maxAmount: '€250',
      average: '€200',
      notes: 'Cooking at home saves money; student cafeterias affordable',
    },
    {
      item: 'Transportation (Monthly)',
      minAmount: '€30',
      maxAmount: '€80',
      average: '€50',
      notes: 'Semester ticket included in contribution at many universities',
    },
    {
      item: 'Health Insurance (Monthly)',
      minAmount: '€80',
      maxAmount: '€120',
      average: '€100',
      notes: 'Mandatory public health insurance for all students',
    },
  ],

  costCurrency: 'EUR',
  costNote: 'Germany offers the most affordable higher education in Europe. Living costs vary by city - Munich and Frankfurt are more expensive than other cities.',
  totalEstimate: '€8,000 - €12,000 per year',

  requirements: [
    'High school diploma or equivalent',
    'Academic transcripts',
    'Language proficiency (German or English tests)',
    'University entrance qualification (if required)',
    'Health insurance',
    'Financial proof',
  ],

  documentChecklist: [
    'Valid passport',
    'University acceptance letter',
    'Proof of financial support (blocked account)',
    'Health insurance certificate',
    'Accommodation proof',
    'Academic transcripts',
    'Language test results (TestDaF, DSH, or English tests)',
    'Birth certificate',
  ],
};
