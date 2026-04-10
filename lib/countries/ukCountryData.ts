import { CountryData } from '../types/countryData';

export const ukCountryData: CountryData = {
  id: 'united-kingdom',
  name: 'United Kingdom',
  slug: 'united-kingdom',
  image: 'https://images.unsplash.com/photo-1535182519407-c6a3b6ba90b5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'Home to prestigious universities and world-class education',
  overview: 'The United Kingdom is a global leader in higher education with prestigious universities like Oxford and Cambridge. UK universities offer rigorous academics, excellent research opportunities, and a vibrant student life.',
  highlights: ['Oxford', 'Cambridge', 'LSE', 'Imperial', 'UCL'],
  universityCount: 130,
  color: 'from-red-600 to-blue-500',
  region: 'English Speaking',

  visa: {
    title: 'Student Visa (Subclass 4)',
    types: [
      {
        name: 'Student Visa',
        duration: 'Duration of course',
        description: 'Primary visa for international students studying full-time at UK universities',
        requirements: [
          'Conditional or unconditional offer from a registered UK university',
          'Proof of financial support (GBP 15,000-25,000 per year)',
          'English language proficiency (IELTS 6.0-7.0 or equivalent)',
          'Health and character requirements',
          'Tuberculosis test (if required)',
        ],
      },
      {
        name: 'Graduate Route Visa',
        duration: '2-3 years',
        description: 'Work visa for graduates to gain UK work experience after studies',
        requirements: [
          'Recently completed UK degree',
          'Obtained from a registered UK provider',
          'Application within 3 months of graduation',
          'Financial requirements',
        ],
      },
    ],
  },

  process: {
    title: 'Step-by-Step Visa Guide',
    steps: [
      {
        number: 1,
        title: 'Choose Course & University',
        description: 'Research and apply to CRICOS-registered institutions.',
        duration: '2-3 months',
      },
      {
        number: 2,
        title: 'Receive CoE',
        description: 'Get your Confirmation of Enrolment after accepting the offer.',
        duration: '1-2 weeks',
      },
      {
        number: 3,
        title: 'Arrange OSHC',
        description: 'Purchase Overseas Student Health Cover for the duration of your visa.',
        duration: '1 week',
      },
      {
        number: 4,
        title: 'Lodge Visa Application',
        description: 'Apply for Student Visa (Subclass 500) online via ImmiAccount.',
        duration: '1-3 months',
      },
      {
        number: 5,
        title: 'Travel & Enrol',
        description: 'Receive visa grant notification and arrange travel to study.',
        duration: '2 weeks',
      },
    ],
  },

  costs: {
    tuitionRange: 'GBP 10,000 - 30,000 per year',
    livingCost: 'GBP 12,000 - 18,000 per year',
    totalEstimate: 'GBP 22,000 - 48,000 per year',
    scholarships: 'British government and university scholarships available',
  },

  universities: [
    {
      name: 'University of Oxford',
      ranking: '#3 Worldwide',
      specialization: 'Law, Medicine, Humanities',
    },
    {
      name: 'University of Cambridge',
      ranking: '#5 Worldwide',
      specialization: 'Engineering, Science, Medicine',
    },
    {
      name: 'London School of Economics',
      ranking: '#37 Worldwide',
      specialization: 'Business, Law, Economics',
    },
    {
      name: 'Imperial College London',
      ranking: '#=6 Worldwide',
      specialization: 'Engineering, Science, Medicine',
    },
    {
      name: 'University College London',
      ranking: '#8 Worldwide',
      specialization: 'Engineering, Medicine, Law',
    },
  ],

  faqs: [
    {
      question: 'What is the minimum IELTS score required for UK universities?',
      answer: 'Most UK universities require IELTS 6.0-7.0. Top universities like Oxford and Cambridge may require 7.0-7.5 or higher.',
    },
    {
      question: 'Can international students work in the UK?',
      answer: 'Yes, Student visa holders can work up to 20 hours per week during term time and full-time during holidays.',
    },
    {
      question: 'Is health insurance mandatory?',
      answer: 'No, international students are covered by the NHS. There is no separate health insurance requirement.',
    },
    {
      question: 'What is the cost of living in the UK?',
      answer: 'Average living costs are GBP 12,000-18,000 per year. London and other major cities are more expensive.',
    },
    {
      question: 'Can I stay and work after graduation?',
      answer: 'Yes, you can apply for the Graduate Route Visa which allows you to stay and work in the UK for 2-3 years.',
    },
  ],

  countryHighlights: [
    {
      title: 'Top-Ranked Universities',
      description: 'Home to Oxford and Cambridge, among the world\'s best universities with exceptional global rankings.',
      icon: '🎓',
    },
    {
      title: 'Post-Study Work Visa',
      description: '2-3 year Graduate Route Visa allowing eligible graduates to work and gain UK professional experience.',
      icon: '💼',
    },
    {
      title: 'Cultural Diversity',
      description: 'Vibrant, multicultural environment with students from over 200 countries and rich social activities.',
      icon: '🌍',
    },
    {
      title: 'Quality Education & Research',
      description: 'World-leading research opportunities and courses ranked among the best globally across all disciplines.',
      icon: '🏆',
    },
  ],

  intakes: [
    {
      name: 'September (Fall)',
      period: 'Sep - Dec',
      months: 'September - December',
      type: 'Main intake',
    },
    {
      name: 'January (Spring)',
      period: 'Jan - Apr',
      months: 'January - April',
      type: 'Limited intake',
    },
    {
      name: 'April/May (Summer)',
      period: 'Apr - Aug',
      months: 'April - August',
      type: 'Specialized programs',
    },
  ],

  costBreakdown: [
    {
      category: 'Tuition Fee',
      range: 'GBP 10,000 - GBP 30,000 per year',
      icon: 'tuition',
    },
    {
      category: 'Living Cost',
      range: 'GBP 12,000 - GBP 18,000 per year',
      icon: 'living',
    },
  ],

  costCurrency: 'GBP',
  costNote: 'Living costs vary significantly based on location - London is the most expensive city for accommodation and expenses.',
  totalEstimate: 'GBP 22,000 - GBP 48,000 per year',

  detailedCosts: [
    {
      item: 'Undergraduate Tuition (Per Year)',
      minAmount: 'GBP 10,000',
      maxAmount: 'GBP 25,000',
      average: 'GBP 17,500',
      notes: 'Subject to Home Office limits; some programs more expensive',
    },
    {
      item: 'Postgraduate Tuition (Per Year)',
      minAmount: 'GBP 12,000',
      maxAmount: 'GBP 30,000',
      average: 'GBP 21,000',
      notes: 'Master\'s and PhD programs vary significantly',
    },
    {
      item: 'Accommodation (Monthly)',
      minAmount: 'GBP 400',
      maxAmount: 'GBP 900',
      average: 'GBP 650',
      notes: 'London is significantly more expensive than other cities',
    },
    {
      item: 'Food & Groceries (Monthly)',
      minAmount: 'GBP 200',
      maxAmount: 'GBP 400',
      average: 'GBP 300',
      notes: 'Budget supermarkets available; meal planning saves money',
    },
    {
      item: 'Transportation (Monthly)',
      minAmount: 'GBP 30',
      maxAmount: 'GBP 150',
      average: 'GBP 90',
      notes: 'Student railcards and bus passes provide discounts',
    },
    {
      item: 'Utilities & Council Tax (Monthly)',
      minAmount: 'GBP 80',
      maxAmount: 'GBP 200',
      average: 'GBP 140',
      notes: 'May not apply if in university accommodation',
    },
    {
      item: 'Phone & Internet (Monthly)',
      minAmount: 'GBP 20',
      maxAmount: 'GBP 50',
      average: 'GBP 35',
      notes: 'Many providers offer student discounts',
    },
    {
      item: 'Books & Course Materials (Per Year)',
      minAmount: 'GBP 500',
      maxAmount: 'GBP 1,500',
      average: 'GBP 1,000',
    },
  ],

  requirements: [
    'High school diploma or equivalent',
    'Academic transcripts',
    'English language proficiency (IELTS/TOEFL)',
    'Entrance examination results (if required)',
    'Financial proof',
    'Health certificate',
  ],

  documentChecklist: [
    'Valid passport',
    'Confirmation of Enrollment (CoE)',
    'Visa approval notification',
    'Proof of financial capacity',
    'Academic transcripts',
    'English language test results (IELTS/TOEFL)',
    'Birth certificate',
    'Police clearance certificate',
  ],
};
