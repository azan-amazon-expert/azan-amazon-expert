import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, TrendingUp, ArrowUpRight, BarChart3, CheckCircle2, ShieldAlert } from "lucide-react";

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const cases = [
    {
      id: "case-supplements",
      category: "Dietary Supplements",
      title: "Niche Supplement Brand Slashes ACoS & Multiplies Profit",
      description: "How we restructured an over-bid campaign setup, eliminated keyword cannibalization, and secured page-one ranking.",
      metrics: {
        before: { revenue: "$15,200", acos: "54.2%", roas: "1.8x" },
        after: { revenue: "$64,800", acos: "19.5%", roas: "5.1x" }
      },
      challenges: [
        "Uncontrolled auto-campaigns bleeding 40%+ of the daily budget on irrelevant non-converting terms.",
        "Listing conversion rate at a flat 6% due to unoptimized bullet points and lack of secondary search keywords.",
        "Bidding war on highly competitive main keywords causing extremely high cost-per-clicks ($3.50+)."
      ],
      solutions: [
        "Conducted deep search term analysis to identify and harvest high-intent, low-competition long-tail keywords.",
        "Launched manual Exact campaigns and instituted a rigorous hourly bid optimization program.",
        "Re-wrote title and bullet points to include high-traffic backend index terms, instantly boosting conversion rate to 14.5%."
      ],
      resultSummary: "Daily ad sales skyrocketed by 326% within 45 days. Net margin increased from negative to an extremely healthy 24.8% after FBA fees."
    },
    {
      id: "case-kitchen",
      category: "Home & Kitchen",
      title: "Eco-Friendly Storage Brand Launches to #1 Best Seller",
      description: "The launching strategy built on organic listing indexing, Vine program optimization, and highly targeted Sponsored Products.",
      metrics: {
        before: { revenue: "$0 (New Launch)", acos: "0%", roas: "0x" },
        after: { revenue: "$42,500/mo", acos: "26.4%", roas: "3.8x" }
      },
      challenges: [
        "Brand-new ASIN with zero ranking history, zero reviews, and heavy competitor dominance.",
        "No early organic indexing, making advertising highly expensive without prior historical relevancy score."
      ],
      solutions: [
        "Enrolled in the Amazon Vine Review Program, securing 18 high-quality, verified 5-star reviews within the first 2 weeks.",
        "Implemented a 'Rank-First' PPC strategy targeting highly specific medium-volume keywords using Exact and Phrase match types.",
        "Coordinated external off-Amazon ad campaigns to trigger Amazon's external traffic search-boost algorithm."
      ],
      resultSummary: "Secured the 'Hot New Release' badge on Day 12 and hit the #1 Best Seller badge in the primary sub-category within 28 days."
    },
    {
      id: "case-sports",
      category: "Sports & Outdoors",
      title: "Scaling Outdoor Gear Brand to $110k/mo with 5.2x ROAS",
      description: "Transforming a stable but stagnant product catalog by deploying advanced Sponsored Brand Video and Sponsored Display ad campaigns.",
      metrics: {
        before: { revenue: "$38,400", acos: "32.8%", roas: "3.0x" },
        after: { revenue: "$112,600", acos: "19.2%", roas: "5.2x" }
      },
      challenges: [
        "Heavy reliance on Sponsored Products alone, missing out on massive visual ad placements.",
        "Competitors bidding on our brand terms and stealing potential returning customers."
      ],
      solutions: [
        "Designed and published high-converting 15-second mobile-optimized Sponsored Brand Video ads, yielding CTRs above 2.4%.",
        "Set up brand defense campaigns to block competitor bidding on our proprietary brand name keywords.",
        "Launched cross-targeting Sponsored Display campaigns on competitors' listings directly underneath their buy-boxes."
      ],
      resultSummary: "Sales doubled in 60 days while reducing overall spend ratio (TACOS) to 7.8%. Brand loyalty increased with a 38% Subscribe & Save rate."
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-zinc-950 relative">
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-500 font-mono">
            Success Stories
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Real Results, Real Brands
          </p>
          <p className="text-zinc-400 text-base">
            Explore exactly how I diagnose campaign issues, implement systematic PPC structures, and scale seller metrics.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-zinc-900 pb-6">
          {cases.map((c, idx) => (
            <button
              id={`case-tab-${idx}`}
              key={c.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === idx
                  ? "bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/10 font-bold"
                  : "bg-zinc-900/40 text-zinc-400 hover:text-white border border-zinc-800/80 hover:border-zinc-700"
              }`}
            >
              {c.category}
            </button>
          ))}
        </div>

        {/* Tab Content Panel */}
        <div className="bg-zinc-900/30 border border-zinc-800/80 p-6 sm:p-10 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
              
              {/* Details (Left - Col Span 7) */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="text-xs font-bold text-amber-500 uppercase tracking-wider font-mono">
                    {cases[activeTab].category} Case Study
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-display mt-2 leading-tight">
                    {cases[activeTab].title}
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed font-medium">
                    {cases[activeTab].description}
                  </p>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5 font-mono">
                      <ShieldAlert className="w-4 h-4" />
                      <span>The Challenges</span>
                    </p>
                    <ul className="space-y-2.5">
                      {cases[activeTab].challenges.map((challenge, i) => (
                        <li key={i} className="text-xs text-zinc-400 leading-relaxed flex items-start space-x-2">
                          <span className="text-red-500 font-bold select-none mt-0.5">&bull;</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-mono">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>The Execution</span>
                    </p>
                    <ul className="space-y-2.5">
                      {cases[activeTab].solutions.map((solution, i) => (
                        <li key={i} className="text-xs text-zinc-300 leading-relaxed flex items-start space-x-2">
                          <span className="text-emerald-400 font-extrabold select-none mt-0.5">&#10003;</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Outcome summary text */}
                <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 text-xs text-amber-400 leading-relaxed">
                  <span className="font-bold">Net Outcome:</span> {cases[activeTab].resultSummary}
                </div>
              </div>

              {/* Metrics Visual Panel (Right - Col Span 5) */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-6">
                  <h4 className="text-sm font-bold text-white border-b border-zinc-800/80 pb-3 font-display flex items-center justify-between">
                    <span>Performance Comparison</span>
                    <BarChart3 className="w-4 h-4 text-amber-500" />
                  </h4>

                  {/* Monthly revenue growth comparison */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">Monthly Revenue</span>
                      <span className="text-emerald-400 font-bold">MoM Growth boost</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/60">
                        <span className="text-[10px] text-zinc-500 uppercase">Before</span>
                        <p className="text-base font-bold text-zinc-400 font-mono mt-1">{cases[activeTab].metrics.before.revenue}</p>
                      </div>
                      <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
                        <span className="text-[10px] text-amber-400 uppercase">After</span>
                        <p className="text-lg font-bold text-white font-mono mt-1">{cases[activeTab].metrics.after.revenue}</p>
                      </div>
                    </div>
                  </div>

                  {/* ACoS slash comparison */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">ACoS (Ad Spend Ratio)</span>
                      <span className="text-emerald-400 font-bold">Target ACoS Reduced</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/60">
                        <span className="text-[10px] text-zinc-500 uppercase">Before</span>
                        <p className="text-base font-bold text-zinc-400 font-mono mt-1">{cases[activeTab].metrics.before.acos}</p>
                      </div>
                      <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                        <span className="text-[10px] text-emerald-400 uppercase">After</span>
                        <p className="text-lg font-bold text-white font-mono mt-1">{cases[activeTab].metrics.after.acos}</p>
                      </div>
                    </div>
                  </div>

                  {/* ROAS comparison */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">ROAS (PPC Multiple)</span>
                      <span className="text-amber-500 font-bold">Scaling Velocity Boost</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/60">
                        <span className="text-[10px] text-zinc-500 uppercase">Before</span>
                        <p className="text-base font-bold text-zinc-400 font-mono mt-1">{cases[activeTab].metrics.before.roas}</p>
                      </div>
                      <div className="p-3 bg-amber-500/20 rounded-xl border border-amber-500/40">
                        <span className="text-[10px] text-amber-400 uppercase">After</span>
                        <p className="text-lg font-bold text-white font-mono mt-1">{cases[activeTab].metrics.after.roas}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  id={`case-cta-audit-${cases[activeTab].id}`}
                  href="#contact"
                  className="flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-100 text-xs font-bold transition-all"
                >
                  <span>Build This Strategy For My Brand</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-500" />
                </a>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
