'use client';

import { ContentSectionVariant2 } from './ui/content-section';

interface Highlight {
  title: string;
  description: string;
  icon: string;
}

interface CountryHighlightsProps {
  title: string;
  highlights: Highlight[];
  countryName: string;
  image?: string;
}

export function CountryHighlights({ title, highlights, countryName, image }: CountryHighlightsProps) {
  return (
    <section className="py-0 mt-15">
      <div className="mx-auto px-6 py-0 [@media(max-width:500px)]:px-0 max-w-7xl">
        <ContentSectionVariant2
          image={image || "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"}
          title={title}
        
          number="01"
        >
          <p>
            Study in {countryName} offers strong academic options, global work pathways, and a supportive student community.
          </p>

          <div className="space-y-5">
            {highlights.map((highlight, index) => (
              <p key={index} className="text-foreground/70 leading-relaxed">
                <span className="font-semibold text-foreground">{highlight.title}:</span> {highlight.description}
              </p>
            ))}
          </div>
        </ContentSectionVariant2>
      </div>
    </section>
  );
}
