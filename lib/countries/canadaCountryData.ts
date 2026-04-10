import { CountryData } from '../types/countryData';

export const canadaCountryData: CountryData = {
  id: 'canada',
  name: 'Canada',
  slug: 'canada',
  image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'Affordable quality education in a multicultural society',
  overview: 'Canada offers excellent education at affordable costs with a high quality of life. With over 100 universities and colleges, Canada provides diverse programs and post-graduation work opportunities.',
  highlights: ['Toronto', 'Vancouver', 'University of Toronto', 'McGill', 'UBC'],
  universityCount: 100,
  color: 'from-red-600 to-white',
  region: 'English Speaking',

  visa: {
    title: 'Study Permit',
    types: [
      {
        name: 'Study Permit',
        duration: 'Course duration + 90 days',
        description: 'Main permit for international students studying in Canada',
        requirements: [
          'Letter of acceptance from designated institution',
          'Proof of financial support (CAD $10,000 + tuition)',
          'English/French proficiency',
          'Medical examination',
          'Police certificate',
        ],
      },
      {
        name: 'Post-Graduation Work Permit',
        duration: 'Up to 3 years',
        description: 'Work permit for graduates to gain Canadian experience',
        requirements: [
          'Completed eligible program',
          'Valid study permit',
          'Applied within 180 days of completion',
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
        description: 'Select from accredited Canadian institutions',
        duration: '2-4 weeks',
      },
      {
        number: 2,
        title: 'Apply to Universities',
        description: 'Submit applications with required documents',
        duration: '1-2 months',
      },
      {
        number: 3,
        title: 'Receive Offers',
        description: 'Get acceptance letters from universities',
        duration: '2-4 weeks',
      },
      {
        number: 4,
        title: 'Apply for Study Permit',
        description: 'Submit visa application online or at embassy',
        duration: '2-4 months',
      },
      {
        number: 5,
        title: 'Arrival & Orientation',
        description: 'Arrive in Canada and complete orientation',
        duration: '1 week',
      },
    ],
  },

  costs: {
    tuitionRange: 'CAD $15,000 - $30,000 per year',
    livingCost: 'CAD $8,000 - $12,000 per year',
    totalEstimate: 'CAD $23,000 - $42,000 per year',
    scholarships: 'Government and university scholarships available',
  },

  universities: [
    {
      name: 'University of Toronto',
      ranking: '#21 Worldwide',
      specialization: 'Medicine, Engineering, Business',
    },
    {
      name: 'University of British Columbia',
      ranking: '#40 Worldwide',
      specialization: 'Forestry, Engineering, Business',
    },
    {
      name: 'McGill University',
      ranking: '#=49 Worldwide',
      specialization: 'Medicine, Law, Engineering',
    },
    {
      name: 'McMaster University',
      ranking: '#=85 Worldwide',
      specialization: 'Health Sciences, Engineering, Business',
    },
    {
      name: 'University of Montreal',
      ranking: '#=111 Worldwide',
      specialization: 'Engineering, Business, Arts',
    },
  ],

  faqs: [
    {
      question: 'What language tests are accepted for Canada?',
      answer: 'IELTS, TOEFL, PTE, and CELPIP for English; TEF/TCF for French.',
    },
    {
      question: 'Can I work while studying in Canada?',
      answer: 'Yes, students can work on-campus and off-campus with restrictions. Post-graduation work permits allow full-time work.',
    },
  ],

  countryHighlights: [
    {
      title: 'Affordable Education',
      description: 'Lower tuition fees compared to US and Australia. Excellent value for world-class education.',
      icon: '💰',
    },
    {
      title: 'Post-Study Work Permit',
      description: '3 years post-graduation work permit to build Canadian work experience and pathway to permanent residency.',
      icon: '💼',
    },
    {
      title: 'Safe & Friendly',
      description: 'Canada consistently ranks as one of the safest countries with high quality of life.',
      icon: '🌍',
    },
    {
      title: 'Scholarship Opportunities',
      description: 'Government scholarships, university bursaries, and research funding for international students.',
      icon: '🏆',
    },
  ],

  intakes: [
    {
      name: 'Fall Intake',
      period: 'Sep - Dec',
      months: 'September - December',
      type: 'Main intake',
    },
    {
      name: 'Winter Intake',
      period: 'Jan - Apr',
      months: 'January - April',
      type: 'Major intake',
    },
    {
      name: 'Spring/Summer',
      period: 'May - Aug',
      months: 'May - August',
      type: 'Minor intake',
    },
  ],

  costBreakdown: [
    {
      category: 'Tuition Fee',
      range: 'CAD 15,000 - CAD 30,000 per year',
      icon: 'tuition',
    },
    {
      category: 'Living Cost',
      range: 'CAD 8,000 - CAD 12,000 per year',
      icon: 'living',
    },
    {
      category: 'Health Insurance',
      range: 'CAD 600 - CAD 1,200 per year',
      icon: 'health',
    },
  ],

  detailedCosts: [
    {
      item: 'Tuition (Per Year)',
      minAmount: 'CAD 15,000',
      maxAmount: 'CAD 30,000',
      average: 'CAD 22,000',
      notes: 'Engineering programs cost more; arts programs are cheaper',
    },
    {
      item: 'Rent (Monthly)',
      minAmount: 'CAD 400',
      maxAmount: 'CAD 1,000',
      average: 'CAD 700',
      notes: 'Toronto and Vancouver most expensive; smaller cities offer better rates',
    },
    {
      item: 'Food (Monthly)',
      minAmount: 'CAD 200',
      maxAmount: 'CAD 400',
      average: 'CAD 300',
      notes: 'Cooking at home much cheaper than eating out',
    },
    {
      item: 'Transportation (Monthly)',
      minAmount: 'CAD 40',
      maxAmount: 'CAD 100',
      average: 'CAD 70',
      notes: 'Student transit passes offer significant discounts',
    },
    {
      item: 'Books & Course Materials (Per Year)',
      minAmount: 'CAD 500',
      maxAmount: 'CAD 1,200',
      average: 'CAD 800',
      notes: 'Used books and library resources reduce costs significantly',
    },
  ],

  costCurrency: 'CAD',
  costNote: 'Canada offers excellent value for money. Most students find it more affordable than US and Australia.',
  totalEstimate: 'CAD 23,000 - CAD 42,000 per year',

  requirements: [
    'High school diploma or equivalent',
    'Academic transcripts',
    'Language proficiency (IELTS/TOEFL or French tests)',
    'Financial proof',
    'Medical certificate',
    'Police clearance certificate',
  ],

  documentChecklist: [
    'Valid passport',
    'Letter of acceptance from Canadian institution',
    'Proof of financial support',
    'Language test results (IELTS/TOEFL)',
    'Academic transcripts',
    'Medical examination certificate',
    'Police clearance certificate',
    'Birth certificate',
  ],
};
