// Import all country data
import { ausCountryData } from '@/lib/countries/ausCountryData';
import { japanCountryData } from '@/lib/countries/japanCountryData';
import { ukCountryData } from '@/lib/countries/ukCountryData';
import { nzCountryData } from '@/lib/countries/nzCountryData';
import { usaCountryData } from '@/lib/countries/usaCountryData';
import { canadaCountryData } from '@/lib/countries/canadaCountryData';
import { germanyCountryData } from '@/lib/countries/germanyCountryData';
import type { CountryData } from '../types/countryData';



// Export combined countries data for backward compatibility
export const countriesData = {
  'australia': ausCountryData,
  'japan': japanCountryData,
  'united-kingdom': ukCountryData,
  'new-zealand': nzCountryData,
  'united-states': usaCountryData,
  'canada': canadaCountryData,
  'germany': germanyCountryData,
};

// Helper functions
export function getCountryData(slug: string): CountryData | null {
  return countriesData[slug as keyof typeof countriesData] || null;
}

export function getAllCountries(): CountryData[] {
  return Object.values(countriesData);
}

// Export type
export type { CountryData } from '../types/countryData';
