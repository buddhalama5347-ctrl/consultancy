export interface CountryData {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  overview: string;
  highlights: string[];
  universityCount: number;
  color: string;
  region: string;

  visa: {
    title: string;
    types: Array<{
      name: string;
      duration: string;
      description: string;
      requirements: string[];
    }>;
  };

  process: {
    title: string;
    steps: Array<{
      number: number;
      title: string;
      description: string;
      duration: string;
    }>;
  };

  costs: {
    tuitionRange: string;
    livingCost: string;
    totalEstimate: string;
    scholarships: string;
  };

  universities: Array<{
    name: string;
    ranking: string;
    specialization: string;
  }>;

  faqs: Array<{
    question: string;
    answer: string;
  }>;

  countryHighlights?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;

  intakes?: Array<{
    name: string;
    period: string;
    months: string;
    type: string;
  }>;

  costBreakdown?: Array<{
    category: string;
    range: string;
    icon: string;
  }>;

  detailedCosts?: Array<{
    item: string;
    minAmount: string;
    maxAmount: string;
    average: string;
    notes?: string;
  }>;

  costCurrency?: string;
  costNote?: string;
  totalEstimate?: string;
  requirements?: string[];
  documentChecklist?: string[];
}
