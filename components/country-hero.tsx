'use client';

import { CountryData } from '@/lib/countries';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function CountryHero({ country }: { country: CountryData }) {
  return ( 
    <>
      {/* Hero section with background image */}
      <section 
        className="relative min-h-[500px] flex items-end pb-16 mt-15"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${country.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Back button */}
        <Link href="/#destinations" className="absolute top-6 left-6">
          <button className="text-white/80 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
        </Link>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
          <div className="max-w-3xl">
            <p className="text-white/80 text-sm uppercase tracking-widest mb-6">Study Destination</p>
            <h2 className="text-6xl font-light text-white mb-6 leading-tight">{country.name}</h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">{country.overview}</p>

            {/* Stats moved into hero */}
            <div className="grid grid-cols-3 gap-8 md:gap-12 mt-12">
              <div>
                <p className="text-3xl font-light text-white">{country.universityCount}+</p>
                <p className="text-xs uppercase tracking-widest text-white/70 mt-3">Universities</p>
              </div>
              <div>
                <p className="text-3xl font-light text-white">{country.process.steps.length}</p>
                <p className="text-xs uppercase tracking-widest text-white/70 mt-3">Steps</p>
              </div>
              <div>
                <p className="text-3xl font-light text-white">{country.visa.types.length}</p>
                <p className="text-xs uppercase tracking-widest text-white/70 mt-3">Visas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
