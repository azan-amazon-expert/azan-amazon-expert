import { motion } from "motion/react";
import { LineChart, ShieldCheck } from "lucide-react";

export default function ProofScreenshots() {
  const screenshots = [
    {
      id: "proof-1",
      src: "/seller-central-performance-1.jpg",
      period: "Jun 8 - Jul 8, 2026",
      caption: "9.83% ACoS at a 10.18 ROAS across a 30-day stretch.",
    },
    {
      id: "proof-2",
      src: "/seller-central-performance-2.jpg",
      period: "Jun 8 - Jul 8, 2026",
      caption: "$141,002.70 in sales driven from $31,695.92 in ad spend.",
    },
    {
      id: "proof-3",
      src: "/seller-central-performance-3.png",
      period: "Jun 17 - Jul 17, 2026",
      caption: "11.23% ACoS sustained at an 8.90 ROAS over the following month.",
    },
  ];

  return (
    <section id="proof" className="py-24 bg-zinc-950 relative">
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-500 font-mono">
            Straight From Seller Central
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Real Dashboards, Not Mockups
          </p>
          <p className="text-zinc-400 text-base">
            Live performance snapshots pulled directly from Amazon Seller Central campaigns I manage.
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {screenshots.map((shot, index) => (
            <motion.div
              key={shot.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-zinc-900/40 border border-zinc-800/80 shadow-lg hover:border-amber-500/30 transition-all duration-300 group hover:-translate-y-1 overflow-hidden"
            >
              <div className="flex items-center justify-between px-5 pt-5">
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-400 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-mono">
                  <LineChart className="w-3.5 h-3.5" />
                  {shot.period}
                </span>
              </div>

              <div className="p-5">
                <img
                  src={shot.src}
                  alt={`Amazon Seller Central performance dashboard, ${shot.period}`}
                  className="w-full h-auto rounded-xl border border-zinc-800/80"
                  loading="lazy"
                />
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed px-5 pb-6">
                {shot.caption}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
