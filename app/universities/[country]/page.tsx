'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, DollarSign, BookOpen, Users } from 'lucide-react';
import { universityData } from "@/lib/university-data";
import { use } from 'react';

export default function CountryUniversityPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = use(params);
  const data = universityData[country as keyof typeof universityData];

  if (!data) {
    return (
      <main className="min-h-screen bg-white">
        <div className="sticky top-0 z-40 bg-white border-b border-foreground/5">
          <div className="max-w-[1280px] mx-auto px-4 py-6">
            <Link href="/universities">
              <Button variant="ghost" size="sm" className="text-foreground/60">← Back</Button>
            </Link>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground">Country not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
    
       <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20 pt-40">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="max-w-3xl">
              <p className="text-primary text-sm uppercase tracking-widest font-medium mb-6">
                Explore Universities 
              </p>
              <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6 leading-tight">
                Top Universities in {data.country}
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                Discover world-class institutions in {data.country} offering exceptional education and career opportunities.
              </p>
            </div>
          </div>
        </section>

      

      

      {/* Top Universities as Cards */}
      <section className="py-20 border-b border-foreground/10">
        <div className="max-w-[1280px] mx-auto px-4">
          <h3 className="text-3xl font-bold text-foreground mb-12">Top Universities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.universities.map((uni, idx) => {
              // Generate a unique image based on university index
              const campusImages = [
                'https://images.unsplash.com/photo-1427504494785-cdec9f9fab0b?w=500&h=400&fit=crop',
                'https://images.unsplash.com/photo-1445808661321-8ce185412b4f?w=500&h=400&fit=crop',
                'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=400&fit=crop',
                'https://images.unsplash.com/photo-1577090071183-a4e7fa54b9a4?w=500&h=400&fit=crop',
                'https://images.unsplash.com/photo-1561758033-d89a0ad1d128?w=500&h=400&fit=crop',
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
                'https://images.unsplash.com/photo-1514595541221-12e1f00361e7?w=500&h=400&fit=crop',
                'https://images.unsplash.com/photo-1564981797696-8c2d265b20a3?w=500&h=400&fit=crop',
              ];
              const imgUrl = campusImages[idx % campusImages.length];
              
              return (
                <a key={idx} href="#" onClick={(e) => e.preventDefault()} className="group">
                  <div 
                    className="relative h-40 rounded-lg overflow-hidden bg-cover bg-center mb-3 cursor-pointer hover:shadow-lg transition-all"
                    style={{ backgroundImage: `url('${imgUrl}')` }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <h4 className="text-white font-bold text-sm leading-tight">{uni.name}</h4>
                    </div>
                  </div>
                  <p className="text-xs text-foreground/60">{uni.location}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

    

   

    

    
    </main>
  );
}
