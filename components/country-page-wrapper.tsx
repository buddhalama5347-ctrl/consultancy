"use client";

import { Header } from "@/components/header-3";
import { CountryHero } from "@/components/country-hero";
import { CountryVisa } from "@/components/country-visa";
import { CountryFAQ } from "@/components/country-faq";

import { CountryRequirements } from "@/components/country-requirements";
import { CountryHighlights } from "@/components/country-highlights";
import { CountryIntakes } from "@/components/country-intakes";
import { CountryCosts } from "@/components/country-costs";

import { CountryData } from "@/lib/countries";

export function CountryPageWrapper({ country }: { country: CountryData }) {
  return (
    <>
      <Header />
      <main>
        <CountryHero country={country} />

        {country.countryHighlights && (
          <CountryHighlights
            title={`Why Study in ${country.name}`}
            highlights={country.countryHighlights}
            countryName={country.name}
            image={country.image}
          />
        )}

        {/* <VisaSteps
          steps={country.process.steps}
          title={country.process.title}
        /> */}

        {country.requirements && (
          <CountryRequirements requirements={country.requirements} />
        )}

        {country.detailedCosts && (
          <CountryCosts
            costs={country.detailedCosts}
            currency={country.costCurrency || "USD"}
            totalEstimate={country.totalEstimate}
            note={country.costNote}
          />
        )}

        {country.intakes && <CountryIntakes intakes={country.intakes} />}

        <CountryVisa country={country} />

        <CountryFAQ country={country} />

        <div className="bg-white pt-20">
          <div className="container mx-auto bg-blue-500  mb-20 rounded-lg relative overflow-hidden py-15">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-2xl flex items-center justify-center absolute right-[-90] top-[-220]" />
            <img
              src="/circle_top_right.png"
              className="absolute right-[160] top-[-50]"
              alt="circle decoration"
            />
            <img
              src="/top_left.png"
              className="absolute left-[-40] top-[-50]"
              alt="top left decoration"
            />
            <img
              src="/top_left_2.png"
              className="absolute left-[-100] top-[-50]"
              alt="top left decoration 2"
            />

            <div className="mx-auto max-w-2xl px-6 text-center">
              <h2 className="text-2xl font-semibold text-white">
                Still have questions?
              </h2>
              <p className="mt-3 text-white">
                Can&apos;t find the answer you&apos;re looking for? Our support
                team is here to help.
              </p>
              <button className="mt-6 rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </main>

     
    </>
  );
}
