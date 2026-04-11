interface AboutLayoutProps {
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle?: string;
}

export const AboutHero = ({ heroTitle, heroHighlight, heroSubtitle }: AboutLayoutProps) => (
  <section className="relative bg-foreground pt-8 pb-0 overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/[0.04] rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />

   

    {/* Hero Content */}
    <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24 md:pb-32">
      <p
       
        className="text-gold tracking-[0.4em] uppercase text-sm font-semibold mb-6"
      >
        About Our Consultancy
      </p>
      <h1
        
        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.95] max-w-5xl"
      >
        {heroTitle}
        <br />
        <span className="italic font-normal text-gold">{heroHighlight}</span>
      </h1>
      {heroSubtitle && (
        <p
        
          className="mt-8 text-primary-foreground/60 text-xl md:text-2xl max-w-3xl leading-relaxed"
        >
          {heroSubtitle}
        </p>
      )}
    </div>
  </section>
);