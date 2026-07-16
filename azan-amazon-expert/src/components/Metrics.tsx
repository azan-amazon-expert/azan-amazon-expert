import { motion } from "motion/react";
import { TrendingUp, Award, Users, Percent, ShieldCheck, ShoppingCart } from "lucide-react";

export default function Metrics() {
  const stats = [
    {
      id: "stat-spend",
      icon: <ShoppingCart className="w-6 h-6 text-amber-400" />,
      value: "$1.5M+",
      label: "Ad Spend Managed",
      desc: "Carefully allocated and optimized ad budgets across multiple niches.",
    },
    {
      id: "stat-roas",
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      value: "4.6x",
      label: "Average ROAS Achieved",
      desc: "Delivering an average return on ad spend that outperforms category baselines.",
    },
    {
      id: "stat-acos",
      icon: <Percent className="w-6 h-6 text-amber-400" />,
      value: "-58%",
      label: "Average ACoS Reduction",
      desc: "Slashing unprofitable ad spend while boosting organic ranking and visibility.",
    },
    {
      id: "stat-brands",
      icon: <Users className="w-6 h-6 text-sky-400" />,
      value: "80+",
      label: "Amazon Brands Scaled",
      desc: "Successfully launching and growing Private Label brands to 6 & 7-figures.",
    },
  ];

  return (
    <section id="metrics" className="py-24 bg-zinc-950 border-y border-zinc-900 relative">
      <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-500 font-mono">
            Proven Growth Records
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            The Numbers Behind the Strategies
          </p>
          <p className="text-zinc-400 text-base">
            No guesswork, no vanity metrics. I focus on real profitability, lower ACoS, and higher margins for Amazon Sellers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 shadow-lg hover:border-amber-500/30 transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Highlight gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-5 group-hover:bg-zinc-800/80 transition-colors">
                {stat.icon}
              </div>

              {/* Metric Value */}
              <p className="text-4xl font-extrabold tracking-tight text-white font-display group-hover:text-amber-400 transition-colors">
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-base font-semibold text-zinc-200 mt-2">
                {stat.label}
              </p>

              {/* Description */}
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Highlight Badge / Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-amber-500/10 rounded-full border border-amber-500/20 text-amber-400 flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-bold text-white font-display">Are you losing money on underperforming PPC campaigns?</p>
              <p className="text-sm text-zinc-400 mt-0.5">Let me audit your Seller Central account for free. I'll identify at least 3 leaks in 15 minutes.</p>
            </div>
          </div>
          <a
            id="metrics-banner-cta"
            href="#contact"
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm text-center transition-all whitespace-nowrap shadow-md hover:shadow-lg shadow-amber-500/10"
          >
            Request Free PPC Audit
          </a>
        </div>

      </div>
    </section>
  );
}
