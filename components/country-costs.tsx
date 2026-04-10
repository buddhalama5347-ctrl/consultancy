'use client';

interface CostItem {
  item: string;
  minAmount: string;
  maxAmount: string;
  average: string;
  notes?: string;
}

interface CountryCostsProps {
  costs: CostItem[];
  currency: string;
  totalEstimate?: string;
  note?: string;
}

// Exchange rates to NPR (approximate as of 2024)
const exchangeRates: Record<string, number> = {
  AUD: 90,
  GBP: 160,
  JPY: 0.85,
  USD: 130,
};

function convertToNPR(amount: string, currency: string): string {
  const rate = exchangeRates[currency] || 1;
  
  // Handle ranges like "JPY 1,500,000 - JPY 3,500,000 per year"
  if (amount.includes('-')) {
    const parts = amount.split('-').map(part => part.trim());
    const convertedParts = parts.map(part => {
      const numericAmount = parseFloat(part.replace(/[^\d.]/g, ''));
      if (isNaN(numericAmount)) return part;
      const nprAmount = Math.round(numericAmount * rate);
      // Replace the original currency amount with NPR
      return part.replace(/\d[\d,]*/, `NPR ${nprAmount.toLocaleString()}`);
    });
    return convertedParts.join(' - ');
  }
  
  // Handle single amounts
  const numericAmount = parseFloat(amount.replace(/[^\d.]/g, ''));
  if (isNaN(numericAmount)) return amount;
  const nprAmount = Math.round(numericAmount * rate);
  return `NPR ${nprAmount.toLocaleString()}`;
}

export function CountryCosts({ costs, currency, totalEstimate, note }: CountryCostsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl ">

        {/* Header */}
        <div className="mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">
            💰 Cost Breakdown
          </p>
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-4">
            Estimated Costs in {currency} & NPR
          </h2>
          <p className="text-lg text-foreground/70">
            Detailed breakdown of tuition, living expenses, and other costs for international students (with NPR conversion for Nepal-based clients)
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-primary/5 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">
                  Cost Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">
                  Minimum
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">
                  Maximum
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">
                  Average
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {costs.map((cost, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 transition-colors hover:bg-gray-50 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <td className="px-6 py-5 text-sm font-semibold text-foreground">
                    {cost.item}
                  </td>
                  <td className="px-6 py-5 text-sm text-foreground/70">
                    <div>{cost.minAmount}</div>
                    <div className="text-xs text-primary font-medium">{convertToNPR(cost.minAmount, currency)}</div>
                  </td>
                  <td className="px-6 py-5 text-sm text-foreground/70">
                    <div>{cost.maxAmount}</div>
                    <div className="text-xs text-primary font-medium">{convertToNPR(cost.maxAmount, currency)}</div>
                  </td>
                  <td className="px-6 py-5 text-sm font-semibold text-primary">
                    <div>{cost.average}</div>
                    <div className="text-xs text-primary font-medium">{convertToNPR(cost.average, currency)}</div>
                  </td>
                  <td className="px-6 py-5 text-xs text-foreground/60">
                    {cost.notes || '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Estimate */}

        <div className="relative">
             <img src  = "/mono.png" className="absolute right-0 top-[-0] w-90"  ></img>
       
        {totalEstimate && (
          <div className="mt-8 rounded-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-foreground/70 font-medium uppercase tracking-widest mb-1">
                  Estimated Total (Per Year)
                </p>
                <p className="text-3xl font-bold text-primary">
                  {totalEstimate}
                </p>
                <p className="text-lg font-semibold text-primary/80 mt-1">
                  {convertToNPR(totalEstimate, currency)}
                </p>
              </div>
             
            </div>
          </div>
        )}

        {/* Note */}
        {note && (
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3 max-w-3xl">
            <span className="text-xl flex-shrink-0">📍</span>
            <p className="text-sm text-foreground/70">
              {note}
            </p>
          </div>
        )}
         </div>
      </div>
    </section>
  );
}
