'use client';

import { getAllCountries } from '@/lib/countries';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';

// export const metadata = {
//   title: 'Study Destinations | Exact Education',
//   description: 'Explore our study abroad destinations and find the perfect country for your education.',
// };

export default function DestinationsPage() {
  const allCountries = getAllCountries();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const regions = useMemo(() => {
    const uniqueRegions = Array.from(new Set(allCountries.map(country => country.region)));
    return ['All', ...uniqueRegions];
  }, [allCountries]);

  const filteredCountries = useMemo(() => {
    return allCountries.filter(country => {
      const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          country.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = selectedRegion === 'All' || country.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [allCountries, searchTerm, selectedRegion]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-24 bg-[#F7F9F9]">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-primary/60 text-sm font-medium uppercase tracking-widest mb-4">
              Study Destinations
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Choose Your Study Abroad Destination
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Discover world-class education opportunities in top destinations around the globe.
              Our expert counselors help you find the perfect country for your academic goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-white border-b">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Region Filter */}
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <Button
                  key={region}
                  variant={selectedRegion === region ? "default" : "outline"}
                  onClick={() => setSelectedRegion(region)}
                  className="text-sm"
                >
                  {region}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6">
            <p className="text-sm text-foreground/60">
              Showing {filteredCountries.length} of {allCountries.length} destinations
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section id="destinations" className="py-24 container max-w-7xl mx-auto bg-[#F7F9F9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {filteredCountries.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/60">No destinations found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCountries.map((country, index) => (
                <div
                  key={country.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image Background */}
                  <div className={`relative h-56 bg-gradient-to-br ${country.color} overflow-hidden`}>
                    <Image
                      src={country.image}
                      alt={country.name}
                      fill
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-xs font-medium text-foreground px-2 py-1 rounded-full">
                        {country.region}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {country.name}
                    </h3>
                    <p className="text-primary font-medium mb-6 text-sm">
                      {country.universityCount} universities
                    </p>

                    {/* Top Universities */}
                    <div className="mb-8 border-l-2 border-accent pl-4">
                      <p className="text-xs text-foreground/60 uppercase tracking-widest font-medium mb-3">
                        Featured Universities
                      </p>
                      <div className="space-y-2">
                        {country.highlights.slice(0, 3).map((highlight) => (
                          <p key={highlight} className="text-foreground text-sm">
                            {highlight}
                          </p>
                        ))}
                      </div>
                    </div>

                    <Link href={`/countries/${country.slug}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white font-medium transition-all duration-300 cursor-pointer"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}