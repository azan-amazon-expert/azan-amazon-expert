import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calculator, Percent, DollarSign, TrendingUp, HelpCircle, ArrowRight } from "lucide-react";

export default function ROASCalculator() {
  // Inputs
  const [sellingPriceInput, setSellingPriceInput] = useState<string>("29.99");
  const [cogsInput, setCogsInput] = useState<string>("8.50");
  const [fbaFeesInput, setFbaFeesInput] = useState<string>("6.80");
  const [cpcInput, setCpcInput] = useState<string>("1.15");
  const [conversionRateInput, setConversionRateInput] = useState<string>("12");

  // Computed numeric values
  const sellingPrice = parseFloat(sellingPriceInput) || 0;
  const cogs = parseFloat(cogsInput) || 0;
  const fbaFees = parseFloat(fbaFeesInput) || 0;
  const cpc = parseFloat(cpcInput) || 0;
  const conversionRate = parseFloat(conversionRateInput) || 0;

  // Outputs
  const [marginBeforeAds, setMarginBeforeAds] = useState<number>(0);
  const [marginPercent, setMarginPercent] = useState<number>(0);
  const [adCostPerSale, setAdCostPerSale] = useState<number>(0);
  const [estimatedAcos, setEstimatedAcos] = useState<number>(0);
  const [estimatedRoas, setEstimatedRoas] = useState<number>(0);
  const [breakEvenAcos, setBreakEvenAcos] = useState<number>(0);
  const [netProfitPerAdSale, setNetProfitPerAdSale] = useState<number>(0);
  const [healthStatus, setHealthStatus] = useState<{ text: string; color: string; desc: string }>({
    text: "Healthy",
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    desc: "Your campaign has strong potential profitability."
  });

  useEffect(() => {
    // 1. Profit Margin before advertising
    const profitBeforeAds = sellingPrice - cogs - fbaFees;
    setMarginBeforeAds(Math.max(0, profitBeforeAds));

    // 2. Margin %
    const marginPct = sellingPrice > 0 ? (profitBeforeAds / sellingPrice) * 100 : 0;
    setMarginPercent(Math.max(0, marginPct));

    // 3. Break-even ACoS is equal to the profit margin % before ads
    setBreakEvenAcos(Math.max(0, marginPct));

    // 4. Ad Cost per sale = CPC / (Conversion Rate / 100)
    const convDecimal = conversionRate / 100;
    const adCost = convDecimal > 0 ? cpc / convDecimal : 0;
    setAdCostPerSale(adCost);

    // 5. Estimated ACoS = (Ad Cost / Selling Price) * 100
    const acos = sellingPrice > 0 ? (adCost / sellingPrice) * 100 : 0;
    setEstimatedAcos(acos);

    // 6. Estimated ROAS = Selling Price / Ad Cost
    const roas = adCost > 0 ? sellingPrice / adCost : 0;
    setEstimatedRoas(roas);

    // 7. Net Profit per Ad Sale = profitBeforeAds - adCost
    const netProfit = profitBeforeAds - adCost;
    setNetProfitPerAdSale(netProfit);

    // 8. Health status check
    if (netProfit < 0) {
      setHealthStatus({
        text: "Negative Margin / Warning",
        color: "text-red-400 bg-red-500/10 border-red-500/20",
        desc: "Your advertising cost exceeds your product profit margin. You are losing money on each PPC sale!"
      });
    } else if (acos > marginPct * 0.8) {
      setHealthStatus({
        text: "High ACoS Risk",
        color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
        desc: "ACoS is close to your break-even threshold. Margins are extremely tight. Needs keyword optimization."
      });
    } else {
      setHealthStatus({
        text: "Excellent Profitability",
        color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        desc: "Your PPC campaigns are highly profitable and sustainable! Let's scale this budget."
      });
    }
  }, [sellingPrice, cogs, fbaFees, cpc, conversionRate]);

  return (
    <section id="calculator" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-500 font-mono flex items-center justify-center gap-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Tool</span>
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Amazon PPC & ROAS Estimator
          </p>
          <p className="text-zinc-400 text-base">
            Instantly check your unit economics. Slide the variables below to understand how product price, CPC, and conversion rates impact your bottom-line PPC profitability.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls / Inputs (Left - Col Span 7) */}
          <div className="lg:col-span-7 bg-zinc-900/40 border border-zinc-800 p-6 sm:p-8 rounded-2xl space-y-6">
            <h3 className="text-lg font-bold text-white font-display border-b border-zinc-800/80 pb-3 flex items-center justify-between">
              <span>Adjust Campaign Metrics</span>
              <span className="text-xs text-zinc-400 font-mono font-normal">Step-by-step inputs</span>
            </h3>

            {/* Input 1: Product Selling Price */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-zinc-300 flex items-center gap-1.5">
                  Product Selling Price ($)
                </label>
                <div className="flex items-center gap-1 bg-zinc-950 border border-zinc-800 focus-within:border-amber-500/50 rounded-lg px-2 py-0.5 max-w-[100px] transition-all">
                  <span className="text-zinc-500 font-mono text-xs font-bold">$</span>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={sellingPriceInput}
                    onChange={(e) => setSellingPriceInput(e.target.value)}
                    className="bg-transparent text-amber-400 font-mono font-bold text-xs w-full focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-right"
                  />
                </div>
              </div>
              <input
                id="calc-input-price"
                type="range"
                min="5"
                max="200"
                step="0.5"
                value={sellingPrice}
                onChange={(e) => setSellingPriceInput(e.target.value)}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>$5</span>
                <span>$100</span>
                <span>$200</span>
              </div>
            </div>

            {/* Input 2: COGS */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-zinc-300">
                  Product COGS ($)
                </label>
                <div className="flex items-center gap-1 bg-zinc-950 border border-zinc-800 focus-within:border-amber-500/50 rounded-lg px-2 py-0.5 max-w-[100px] transition-all">
                  <span className="text-zinc-500 font-mono text-xs font-bold">$</span>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={cogsInput}
                    onChange={(e) => setCogsInput(e.target.value)}
                    className="bg-transparent text-zinc-300 font-mono font-bold text-xs w-full focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-right"
                  />
                </div>
              </div>
              <input
                id="calc-input-cogs"
                type="range"
                min="1"
                max="80"
                step="0.1"
                value={cogs}
                onChange={(e) => setCogsInput(e.target.value)}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>$1</span>
                <span>$40</span>
                <span>$80</span>
              </div>
            </div>

            {/* Input 3: Amazon Fees & FBA */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-zinc-300">
                  Amazon Referral & FBA Fees ($)
                </label>
                <div className="flex items-center gap-1 bg-zinc-950 border border-zinc-800 focus-within:border-amber-500/50 rounded-lg px-2 py-0.5 max-w-[100px] transition-all">
                  <span className="text-zinc-500 font-mono text-xs font-bold">$</span>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={fbaFeesInput}
                    onChange={(e) => setFbaFeesInput(e.target.value)}
                    className="bg-transparent text-zinc-300 font-mono font-bold text-xs w-full focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-right"
                  />
                </div>
              </div>
              <input
                id="calc-input-fees"
                type="range"
                min="1"
                max="50"
                step="0.1"
                value={fbaFees}
                onChange={(e) => setFbaFeesInput(e.target.value)}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                <span>$1</span>
                <span>$25</span>
                <span>$50</span>
              </div>
            </div>

            {/* Inputs Grid: CPC and CVR */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Input 4: CPC */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label className="font-semibold text-zinc-300">
                    Cost-Per-Click ($)
                  </label>
                  <div className="flex items-center gap-1 bg-zinc-950 border border-zinc-800 focus-within:border-amber-500/50 rounded-lg px-2 py-0.5 max-w-[100px] transition-all">
                    <span className="text-zinc-500 font-mono text-xs font-bold">$</span>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={cpcInput}
                      onChange={(e) => setCpcInput(e.target.value)}
                      className="bg-transparent text-amber-500 font-mono font-bold text-xs w-full focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-right"
                    />
                  </div>
                </div>
                <input
                  id="calc-input-cpc"
                  type="range"
                  min="0.10"
                  max="5.00"
                  step="0.05"
                  value={cpc}
                  onChange={(e) => setCpcInput(e.target.value)}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>$0.10</span>
                  <span>$2.50</span>
                  <span>$5.00</span>
                </div>
              </div>

              {/* Input 5: Conversion Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label className="font-semibold text-zinc-300">
                    Conversion Rate (CVR %)
                  </label>
                  <div className="flex items-center gap-1 bg-zinc-950 border border-zinc-800 focus-within:border-amber-500/50 rounded-lg px-2 py-0.5 max-w-[100px] transition-all">
                    <input
                      type="number"
                      step="0.1"
                      min="0.1"
                      value={conversionRateInput}
                      onChange={(e) => setConversionRateInput(e.target.value)}
                      className="bg-transparent text-amber-500 font-mono font-bold text-xs w-full focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-right"
                    />
                    <span className="text-zinc-500 font-mono text-xs font-bold">%</span>
                  </div>
                </div>
                <input
                  id="calc-input-cvr"
                  type="range"
                  min="1"
                  max="40"
                  step="1"
                  value={conversionRate}
                  onChange={(e) => setConversionRateInput(e.target.value)}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>1%</span>
                  <span>20%</span>
                  <span>40%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Outputs Panel (Right - Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Economic Card */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl relative overflow-hidden flex-1 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

              <h4 className="text-base font-bold text-white font-display border-b border-zinc-800 pb-3 mb-5 flex items-center justify-between">
                <span>Calculated Projections</span>
                <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded font-mono uppercase">Output metrics</span>
              </h4>

              {/* Metrics stack */}
              <div className="space-y-4">
                {/* Break-even ACoS */}
                <div className="flex items-center justify-between py-1 border-b border-zinc-800/60 pb-2">
                  <span className="text-zinc-400 text-sm">Break-Even ACoS</span>
                  <span className="font-mono text-white font-bold text-base">{breakEvenAcos.toFixed(1)}%</span>
                </div>

                {/* Estimated PPC ACoS */}
                <div className="flex items-center justify-between py-1 border-b border-zinc-800/60 pb-2">
                  <span className="text-zinc-400 text-sm">Estimated PPC ACoS</span>
                  <span className={`font-mono font-bold text-base ${estimatedAcos > breakEvenAcos ? "text-red-400" : "text-amber-400"}`}>
                    {estimatedAcos.toFixed(1)}%
                  </span>
                </div>

                {/* Estimated ROAS */}
                <div className="flex items-center justify-between py-1 border-b border-zinc-800/60 pb-2">
                  <span className="text-zinc-400 text-sm">Estimated PPC ROAS</span>
                  <span className="font-mono text-emerald-400 font-extrabold text-lg">{estimatedRoas.toFixed(2)}x</span>
                </div>

                {/* Margins breakdown */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/60">
                    <p className="text-[10px] font-semibold text-zinc-500 uppercase">Unit Margin (Before Ads)</p>
                    <p className="text-lg font-bold text-white font-mono mt-1">${marginBeforeAds.toFixed(2)}</p>
                    <span className="text-[10px] text-zinc-500">Margin: {marginPercent.toFixed(1)}%</span>
                  </div>
                  <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/60">
                    <p className="text-[10px] font-semibold text-zinc-500 uppercase">Net Unit Margin (PPC Sale)</p>
                    <p className={`text-lg font-bold font-mono mt-1 ${netProfitPerAdSale < 0 ? "text-red-400" : "text-emerald-400"}`}>
                      ${netProfitPerAdSale.toFixed(2)}
                    </p>
                    <span className="text-[10px] text-zinc-500">
                      {sellingPrice > 0 ? ((netProfitPerAdSale / sellingPrice) * 100).toFixed(1) : 0}% net
                    </span>
                  </div>
                </div>
              </div>

              {/* Campaign Health Status */}
              <div className={`mt-6 p-4 rounded-xl border ${healthStatus.color} text-xs space-y-1 transition-all duration-300`}>
                <p className="font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                  <span>Account Status: {healthStatus.text}</span>
                </p>
                <p className="leading-relaxed opacity-90">{healthStatus.desc}</p>
              </div>
            </div>

            {/* High-converting custom strategy alert box */}
            <div className="p-5 bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm font-bold text-white font-display">Need higher ROAS and lower ACoS?</p>
                <p className="text-[11px] text-zinc-400 leading-snug">Let me build a targeted PPC structure for your specific niche.</p>
              </div>
              <a
                id="calc-cta-contact"
                href="#contact"
                className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-all flex items-center justify-center flex-shrink-0"
              >
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
