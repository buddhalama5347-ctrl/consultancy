import { CountryData } from '../types/countryData';

export const irelandCountryData: CountryData = {
  id: 'ireland',
  name: 'Ireland',
  slug: 'ireland',
  image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1633&auto=format&fit=crop',
  description: 'English-speaking education hub with strong tech industry links',
  overview: 'Ireland is one of the top destinations for international students due to its English-speaking environment, high-quality universities, and strong connections to global tech companies like Google, Apple, and Meta.',
  highlights: ['Dublin', 'Cork', 'Galway', 'Limerick'],
  universityCount: 7,
  color: 'from-green-600 to-emerald-500',
  region: 'English Speaking',

  visa: {
    title: 'Student Visa (D Type)',
    types: [
      {
        name: 'Stamp 2 Student Visa',
        duration: 'Duration of study program',
        description: 'Main visa for non-EU students studying full-time in Ireland',
        requirements: [
          'Acceptance letter from Irish institution',
          'Proof of financial support (~€10,000 per year)',
          'Valid passport',
          'Proof of tuition fee payment',
          'Health insurance',
          'English language proficiency (IELTS 6.0+)',
        ],
      },
      {
        name: 'Stamp 1G (Graduate Visa)',
        duration: '12–24 months',
        description: 'Allows graduates to stay in Ireland to work after studies',
        requirements: [
          'Completed degree from recognized Irish institution',
          'Valid Stamp 2 visa history',
          'Proof of graduation',
          'Registration with immigration authorities',
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
        description: 'Select a program from Irish universities or institutes of technology',
        duration: '2-4 weeks',
      },
      {
        number: 2,
        title: 'Apply to Institution',
        description: 'Submit application with transcripts, SOP, and English test scores',
        duration: '4-8 weeks',
      },
      {
        number: 3,
        title: 'Receive Offer Letter',
        description: 'Get conditional or unconditional offer from university',
        duration: '2-6 weeks',
      },
      {
        number: 4,
        title: 'Apply for Visa',
        description: 'Submit visa application to Irish Naturalisation and Immigration Service (INIS)',
        duration: '1-3 months',
      },
      {
        number: 5,
        title: 'Travel to Ireland',
        description: 'Receive visa approval and travel for studies',
        duration: '2 weeks',
      },
    ],
  },

  costs: {
    tuitionRange: '€10,000 - €25,000 per year',
    livingCost: '€10,000 - €15,000 per year',
    totalEstimate: '€20,000 - €40,000 per year',
    scholarships: 'Government of Ireland scholarships and university merit-based scholarships available',
  },

  countryHighlights: [
    {
      title: 'English-Speaking Country',
      description: 'Ireland is the only native English-speaking country in the EU after Brexit.',
      icon: '🇮🇪',
    },
    {
      title: 'Tech Industry Hub',
      description: 'Home to major companies like Google, Apple, Meta, and Microsoft.',
      icon: '💻',
    },
    {
      title: 'Post-Study Work Opportunities',
      description: 'Generous post-study work visa of up to 2 years for graduates.',
      icon: '💼',
    },
    {
      title: 'High-Quality Education',
      description: 'Irish universities are globally ranked and research-focused.',
      icon: '🎓',
    },
  ],

  intakes: [
    {
      name: 'September Intake',
      period: 'Sep - Dec',
      months: 'September - December',
      type: 'Major intake',
    },
    {
      name: 'January Intake',
      period: 'Jan - May',
      months: 'January - May',
      type: 'Minor intake',
    },
  ],

  costBreakdown: [
    {
      category: 'Tuition Fee',
      range: '€10,000 - €25,000 per year',
      icon: 'tuition',
    },
    {
      category: 'Living Cost',
      range: '€10,000 - €15,000 per year',
      icon: 'living',
    },
  ],

  costCurrency: 'EUR',
  costNote: 'Dublin is the most expensive city in Ireland for students.',
  totalEstimate: '€20,000 - €40,000 per year',

  detailedCosts: [
    {
      item: 'Bachelor Degree Tuition (Per Year)',
      minAmount: '€10,000',
      maxAmount: '€20,000',
      average: '€15,000',
      notes: 'Humanities are cheaper than engineering/medicine',
    },
    {
      item: 'Master Degree Tuition (Per Year)',
      minAmount: '€12,000',
      maxAmount: '€25,000',
      average: '€18,000',
      notes: 'Business and tech programs may cost more',
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
      minAmount: '€500',
      maxAmount: '€1,200',
      average: '€850',
      notes: 'Dublin is significantly more expensive',
    },
    {
      item: 'Food & Groceries (Monthly)',
      minAmount: '€250',
      maxAmount: '€450',
      average: '€350',
      notes: 'Cooking at home helps reduce costs',
    },
    {
      item: 'Transportation (Monthly)',
      minAmount: '€60',
      maxAmount: '€120',
      average: '€90',
      notes: 'Student Leap Card provides discounts',
    },
    {
      item: 'Books & Materials (Per Year)',
      minAmount: '€300',
      maxAmount: '€800',
      average: '€500',
      notes: 'Digital materials reduce expenses',
    },
  ],

  faqs: [
    {
      question: 'Is IELTS required for Ireland?',
      answer: 'Yes, most universities require IELTS 6.0–6.5 or equivalent English proficiency tests.',
    },
    {
      question: 'Can international students work in Ireland?',
      answer: 'Yes, students can work 20 hours per week during term and 40 hours during holidays.',
    },
    {
      question: 'Is Ireland good for tech jobs?',
      answer: 'Yes, Ireland is a major European tech hub with many global companies hiring graduates.',
    },
    {
      question: 'Can I stay after graduation?',
      answer: 'Yes, the Stamp 1G Graduate Visa allows you to stay up to 2 years to find work.',
    },
    {
      question: 'Is Ireland expensive for students?',
      answer: 'Yes, especially Dublin, but other cities like Cork and Galway are more affordable.',
    },
  ],

  requirements: [
    'Academic Requirements',
    'English Language Proficiency (IELTS 6.0–6.5 or equivalent)',
    'Valid passport',
    'University acceptance letter',
    'Proof of financial support (~€10,000 per year)',
    'Statement of Purpose (SOP)',
    'Health insurance',
  ],
};