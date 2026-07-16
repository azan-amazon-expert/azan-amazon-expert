import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp, Sparkles, ShieldCheck, Zap } from "lucide-react";

interface HeroProps {
  name: string;
  whatsapp: string;
}

export default function Hero({ name, whatsapp }: HeroProps) {
  const whatsappLink = `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-zinc-950 text-white"
    >
      {/* Decorative background blobs for a modern, high-end look */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] rounded-full bg-yellow-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,153,0,0.03),transparent_60%)] pointer-events-none" />

      {/* Grid Overlay for subtle tech texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content (Left) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tag / Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Verified Amazon Advertising Partner</span>
            </motion.div>

            {/* Main Catchy Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] font-display">
                Scale Your Amazon Brand with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 drop-shadow-sm">
                  High-Performance PPC
                </span>
              </h1>
              <p className="text-zinc-400 text-lg sm:text-xl font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Hi, I am <span className="text-white font-semibold capitalize">{name}</span>. I audit, restructure, and aggressively optimize campaigns to slash ACoS and maximize your organic ranking.
              </p>
            </motion.div>

            {/* High-converting CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                id="hero-cta-audit"
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-base transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5"
              >
                <span>Claim Your Free Audit</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </a>
              <a
                id="hero-cta-whatsapp"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-100 font-semibold text-base transition-all hover:-translate-y-0.5"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>

            {/* Quick Benefits Bullet Points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left max-w-xl mx-auto lg:mx-0"
            >
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-zinc-300">Data-Driven Approach</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-zinc-300">ACoS Reduction Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-zinc-300">Listing SEO Included</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Visual Card (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Board */}
            <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 border border-zinc-800/80 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors pointer-events-none" />

              {/* Upper Section representing Amazon Seller Dashboard Mock */}
              <div className="flex items-center justify-between border-b border-zinc-800/60 pb-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 hover:scale-110 transition-transform cursor-pointer" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 hover:scale-110 transition-transform cursor-pointer" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 hover:scale-110 transition-transform cursor-pointer" />
                  <span className="text-xs font-mono text-zinc-500 pl-2">seller-central.amazon.com</span>
                </div>
                <div className="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-400 hover:bg-amber-500 hover:text-zinc-950 hover:border-amber-400 transition-all duration-300 cursor-pointer select-none shadow-sm hover:shadow-amber-500/20 group-hover:scale-105 transform">
                  OVER STATES
                </div>
              </div>

              {/* Stat Boxes */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/80 hover:border-amber-500/30 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 cursor-default group/stat">
                  <p className="text-xs font-semibold text-zinc-500 group-hover/stat:text-zinc-400 transition-colors">Monthly Ad Sales</p>
                  <p className="text-2xl font-bold text-white tracking-tight mt-1 font-display group-hover/stat:text-amber-400 transition-colors">$184,392</p>
                  <span className="inline-block text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded mt-1.5">
                    +42.7% MoM
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/80 hover:border-amber-500/30 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 cursor-default group/stat2">
                  <p className="text-xs font-semibold text-zinc-500 group-hover/stat2:text-zinc-400 transition-colors">Average PPC ACoS</p>
                  <p className="text-2xl font-bold text-amber-500 tracking-tight mt-1 font-display group-hover/stat2:text-amber-450 transition-colors">14.8%</p>
                  <span className="inline-block text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded mt-1.5">
                    -12.4% reduced
                  </span>
                </div>
              </div>

              {/* Interactive Performance Graph Mock using pure SVG */}
              <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800/50 mb-4 hover:border-amber-500/20 hover:bg-zinc-900/70 transition-all duration-300 group/graph">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-zinc-300 group-hover/graph:text-amber-400 transition-colors">Sales vs Ad Spend Optimization</span>
                </div>
                <div className="h-32 w-full flex items-end relative overflow-hidden">
                  {/* Chart lines background */}
                  <div className="absolute inset-x-0 top-0 border-t border-zinc-800/30 w-full" />
                  <div className="absolute inset-x-0 top-1/3 border-t border-zinc-800/30 w-full" />
                  <div className="absolute inset-x-0 top-2/3 border-t border-zinc-800/30 w-full" />

                  {/* SVG Chart Wave */}
                  <svg className="w-full h-full absolute inset-0 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Fill Area */}
                    <path
                      d="M0 100 Q 15 80, 25 75 T 50 40 T 75 25 T 100 10 L 100 100 Z"
                      fill="url(#chartGrad)"
                      stroke="none"
                    />
                    {/* Glowing Stroke */}
                    <path
                      d="M0 100 Q 15 80, 25 75 T 50 40 T 75 25 T 100 10"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  
                  {/* Tooltip dot */}
                  <div className="absolute top-[10%] right-[5%] w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-zinc-950 animate-ping" />
                  <div className="absolute top-[10%] right-[5%] w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-zinc-950" />
                </div>
                <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono mt-2">
                  <span>Week 1</span>
                  <span>Week 3</span>
                  <span>Week 6</span>
                  <span>Week 9</span>
                </div>
              </div>

              {/* Small Overlay Callout */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs hover:bg-amber-500/20 hover:border-amber-500/30 transition-all duration-300">
                <span className="font-semibold text-amber-400">ROAS Boost: 4.8x</span>
                <span className="text-zinc-400">Organic Ranking Rank #1</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
