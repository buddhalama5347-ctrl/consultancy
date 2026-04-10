import { CountryData } from '../types/countryData';

export const ausCountryData: CountryData = {
  id: 'australia',
  name: 'Australia',
  slug: 'australia',
  image: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds',
  description: 'World-class education with exceptional quality of life',
  overview: 'Australia offers high-quality education in a vibrant, multicultural environment. With 43 universities including the prestigious Go8 group, Australia provides excellent opportunities across all academic disciplines.',
  highlights: ['Melbourne', 'Sydney', 'ANU', 'UNSW', 'Monash'],
  universityCount: 43,
  color: 'from-yellow-600 to-orange-500',
  region: 'English Speaking',

  visa: {
    title: 'Student Visa (Subclass 500)',
    types: [
      {
        name: 'Student Visa (Subclass 500)',
        duration: 'Duration of course + 6 months',
        description: 'Primary visa for international students studying full-time at Australian institutions',
        requirements: [
          'Enrolment confirmation from registered course',
          'Proof of financial support (AUD $20,290 per year)',
          'English language proficiency (IELTS 6.0 or equivalent)',
          'Health and character requirements',
          'GTE (Genuine Temporary Entrant) letter',
        ],
      },
      {
        name: 'Graduate Temporary Visa (Subclass 485)',
        duration: '18 months to 3 years',
        description: 'Work visa for graduates who want to gain Australian work experience',
        requirements: [
          'Recently completed Australian qualification',
          'English language requirements',
          'Character and health requirements',
          'Points test for some visa streams',
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
        description: 'Select an accredited course from a registered provider on the CRICOS list',
        duration: '2-4 weeks',
      },
      {
        number: 2,
        title: 'Submit University Application',
        description: 'Apply directly to the university with academic transcripts and English test scores',
        duration: '2-4 weeks',
      },
      {
        number: 3,
        title: 'Receive Offer Letter',
        description: 'University issues conditional or unconditional offer letter',
        duration: '1-2 weeks',
      },
      {
        number: 4,
        title: 'Visa Application',
        description: 'Apply online through ImmiAccount with CoE and supporting documents',
        duration: '1-3 months',
      },
      {
        number: 5,
        title: 'Visa Grant & Travel',
        description: 'Receive visa grant notification and arrange travel to Australia',
        duration: '2 weeks',
      },
    ],
  },

  costs: {
    tuitionRange: 'AUD $15,000 - $45,000 per year',
    livingCost: 'AUD $18,000 - $25,000 per year',
    totalEstimate: 'AUD $33,000 - $70,000 per year',
    scholarships: 'Australian government and university scholarships available',
  },

  universities: [
    {
      name: 'University of Melbourne',
      ranking: '#37 Worldwide',
      specialization: 'Medicine, Engineering, Business',
    },
    {
      name: 'Australian National University',
      ranking: '##54 Worldwide',
      specialization: 'Science, Engineering, Policy',
    },
    {
      name: 'University of Sydney',
      ranking: '#60 Worldwide',
      specialization: 'Medicine, Law, Engineering',
    },
    {
      name: 'UNSW Sydney',
      ranking: '#=84 Worldwide',
      specialization: 'Engineering, Business, Science',
    },
    {
      name: 'Monash University',
      ranking: '#=54 Worldwide',
      specialization: 'Engineering, Medicine, Law',
    },
  ],

  faqs: [
    {
      question: 'What is the IELTS requirement for Australian universities?',
      answer: 'Most universities require IELTS 6.0-7.0 overall. Medical and law programs may require higher scores of 7.0-7.5.',
    },
    {
      question: 'Can international students work in Australia?',
      answer: 'Yes, Student visa holders can work up to 20 hours per week during semester and full-time during semester breaks.',
    },
    {
      question: 'Is health insurance mandatory?',
      answer: 'Yes, international students must have Overseas Student Health Cover (OSHC) which is approximately AUD $600-$800 per year.',
    },
    {
      question: 'What is the cost of living in Australia?',
      answer: 'Average living costs are AUD $18,000-$25,000 per year, depending on the city and lifestyle. Sydney and Melbourne are more expensive.',
    },
    {
      question: 'Can I extend my stay after graduation?',
      answer: 'Yes, you can apply for the Graduate Temporary Visa (Subclass 485) which allows you to stay and work for 18 months to 3 years.',
    },
  ],

  countryHighlights: [
    {
      title: 'Top-Ranked Universities',
      description: '7 universities in global top 100 including University of Melbourne, ANU, and University of Sydney.',
      icon: '🎓',
    },
    {
      title: 'Post-Study Work Visa',
      description: '2-4 years post-study work visa depending on your qualification level to gain Australian work experience.',
      icon: '💼',
    },
    {
      title: 'Multicultural Environment',
      description: 'One of the most diverse countries with students from 190+ nationalities creating a vibrant community.',
      icon: '🌍',
    },
    {
      title: 'Scholarship Opportunities',
      description: 'Australia Awards, Destination Australia, and university-specific scholarships available for international students.',
      icon: '🏆',
    },
  ],

  intakes: [
    {
      name: 'February (Semester 1)',
      period: 'Feb - Jun',
      months: 'February - June',
      type: 'Major intake',
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
      range: 'AUD 15,000 - AUD 45,000 per year',
      icon: 'tuition',
    },
    {
      category: 'Living Cost',
      range: 'AUD 18,000 - AUD 25,000 per year',
      icon: 'living',
    },
  ],

  costCurrency: 'AUD',
  costNote: 'Living costs vary significantly based on location - Sydney and Melbourne are the most expensive.',
  totalEstimate: 'AUD 33,000 - AUD 70,000 per year',

  detailedCosts: [
    {
      item: 'Bachelor Degree Tuition (Per Year)',
      minAmount: 'AUD 15,000',
      maxAmount: 'AUD 45,000',
      average: 'AUD 30,000',
      notes: 'STEM fields typically more expensive than humanities',
    },
    {
      item: 'Master Degree Tuition (Per Year)',
      minAmount: 'AUD 20,000',
      maxAmount: 'AUD 55,000',
      average: 'AUD 37,500',
      notes: 'Research programs may have different fee structures',
    },
    {
      item: 'Overseas Student Health Cover (Per Year)',
      minAmount: 'AUD 600',
      maxAmount: 'AUD 1,000',
      average: 'AUD 800',
      notes: 'Mandatory for all international students',
    },
    {
      item: 'Accommodation (Monthly)',
      minAmount: 'AUD 800',
      maxAmount: 'AUD 1,600',
      average: 'AUD 1,200',
      notes: 'Sydney and Melbourne are more expensive',
    },
    {
      item: 'Food & Groceries (Monthly)',
      minAmount: 'AUD 300',
      maxAmount: 'AUD 600',
      average: 'AUD 450',
      notes: 'Cooking at home saves significantly',
    },
    {
      item: 'Transportation (Monthly)',
      minAmount: 'AUD 50',
      maxAmount: 'AUD 150',
      average: 'AUD 100',
      notes: 'Student concession cards available in all states',
    },
    {
      item: 'Utilities & Internet (Monthly)',
      minAmount: 'AUD 100',
      maxAmount: 'AUD 200',
      average: 'AUD 150',
      notes: 'Depends on accommodation type',
    },
    {
      item: 'Books & Course Materials (Per Year)',
      minAmount: 'AUD 500',
      maxAmount: 'AUD 2,000',
      average: 'AUD 1,250',
      notes: 'E-textbooks and library resources can reduce costs',
    },
  ],

  requirements: [
    'Academic transcripts and certificates (SLC/SEE, +2 Bachelor\'s)',
    'IELTS 6.0-6.5 overall (or PTE 50-58)',
    'Statement of Purpose (SOP)',
    'Letters of Recommendation (LOR)',
    'Financial proof (GTE requirement)',
    'Valid passport',
  ],
};
