// Import all country data
import { ausCountryData } from '@/lib/countries/ausCountryData';
import { japanCountryData } from '@/lib/countries/japanCountryData';
import { ukCountryData } from '@/lib/countries/ukCountryData';
import { nzCountryData } from '@/lib/countries/nzCountryData';
import { usaCountryData } from '@/lib/countries/usaCountryData';
import { canadaCountryData } from '@/lib/countries/canadaCountryData';
import { germanyCountryData } from '@/lib/countries/germanyCountryData';
import type { CountryData } from '../types/countryData';
import { southKoreaCountryData } from './southKoreaCountryData';
import { netherlandsCountryData } from './netherlandCountryData';
import { finlandCountryData } from './finlandCountryData';
import { franceCountryData } from './franceCountryData';
import { irelandCountryData } from './irelandCountryData';
import { switzerlandCountryData } from './switzerlandCountryData';
import { denmarkCountryData } from './denmarkCountryData';
import { swedenCountryData } from './swedenCountryData';





// Export combined countries data for backward compatibility
export const countriesData = {
  'australia': ausCountryData,
  'japan': japanCountryData,
  'united-kingdom': ukCountryData,
  'new-zealand': nzCountryData,
  'united-states': usaCountryData,
  'canada': canadaCountryData,
  'germany': germanyCountryData,
  'south-korea': southKoreaCountryData,
  'netherlands': netherlandsCountryData,
    'finland': finlandCountryData,
  'denmark': denmarkCountryData,
  'sweden': swedenCountryData,
  'france': franceCountryData,
  'switzerland': switzerlandCountryData,
  'ireland': irelandCountryData,

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
