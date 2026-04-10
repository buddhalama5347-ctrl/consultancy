'use client';

interface Intake {
  name: string;
  period: string;
  months: string;
  type: string;
}

interface CountryIntakesProps {
  intakes: Intake[];
}

export function CountryIntakes({ intakes }: CountryIntakesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
            Intakes
          </p>
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-4">
            Available Intakes
          </h2>
          <p className="mx-auto max-w-2xl text-base text-foreground/70 leading-relaxed">
            Choose the best intake window for your application. Each term is structured to help you start your studies with confidence.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <ul className="space-y-6">
            {intakes.map((intake, index) => (
              <li
                key={index}
                className="flex flex-col gap-4 rounded-3xl border-b border-slate-200 pb-6 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-foreground">{intake.name}</p>
                  <p className="text-sm text-foreground/70">{intake.months}</p>
                  <p className="text-sm text-foreground/60">{intake.period}</p>
                </div>
                <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  {intake.type}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
