'use client';

interface CountryRequirementsProps {
  requirements: string[];
}

export function CountryRequirements({ requirements }: CountryRequirementsProps) {
  return (
    <section className="py-20 bg-white relative">
      
       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

      <div className="max-w-7xl  sm:px-8 lg:px-12 mx-auto">
        {/* Header */}
        <div className=" mb-16 px-6 ">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
            Requirements
          </p>
          <h2 className="text-4xl sm:text-5xl font-light text-foreground leading-tight">
            What You Need to Apply
          </h2>
        </div>

        {/* Requirements Grid */}
        <div className="space-y-4 ">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="flex gap-6 bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow max-w-3xl @media(max-width:500px)]px-0"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-foreground text-base font-medium">
                  {requirement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
