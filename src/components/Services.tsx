import { motion } from "motion/react";
import { Search, Percent, Shield, TrendingUp, Zap, Layers, BarChart, BookOpen, Briefcase, ShieldCheck } from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      id: "srv-ppc",
      icon: <TrendingUp className="w-6 h-6 text-amber-400" />,
      title: "Amazon PPC Management & Audit",
      description: "Restructuring campaigns into strict Sponsored Products, Brands, and Display ad formats. Applying strategic keyword match typing, dayparting, bidding rules, and continuous negative targeting to reduce ad waste.",
      features: ["Auto & Manual Campaign Split", "ACoS / TACOS Control", "Placement & Bid adjustments", "Negative Keyword Harvesting"]
    },
    {
      id: "srv-atoz",
      icon: <Briefcase className="w-6 h-6 text-purple-400" />,
      title: "Amazon A-to-Z Account Management",
      description: "Complete daily operations and upkeep of your Amazon Seller Central. I handle everything from product listings, inventory health, case log resolution, performance notifications, to standard business operations.",
      features: ["Listing Creation & Maintenance", "Seller Central Operations", "Case Log & Support Resolution", "Suppressed/Stranded Listing Fixes"]
    },
    {
      id: "srv-seo",
      icon: <Search className="w-6 h-6 text-sky-400" />,
      title: "Amazon SEO & Listing Optimization",
      description: "Copywriting high-converting, keyword-dense titles, feature bullets, and backend search terms. Optimizing for both Amazon's A10 indexing algorithm and the actual shopper to push up conversion rates.",
      features: ["Helium 10 & Jungle Scout Keyword Research", "High-CTR Titles & Bullets", "Backend Search Terms Optimization", "A+ Content Copywriting"]
    },
    {
      id: "srv-launch",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Product Launch & Keyword Ranking",
      description: "Implementing structured launch campaigns designed to generate high early sales velocity, secure the 'Hot New Release' badge, and organically rank your primary high-volume keywords.",
      features: ["Rank-boosting Advertising Strategies", "Vine Review Program Management", "External Traffic (Google/FB Ads) Integration", "Initial Conversion Booster setups"]
    },
    {
      id: "srv-brand",
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      title: "Storefront & Brand Registry Scaling",
      description: "Designing gorgeous, premium Amazon Storefronts and A+ (EBC) detail pages that build major brand authority, cross-sell catalog products, and boost average order values.",
      features: ["Custom Amazon Storefront Design", "A+ Content Layout Selection", "Brand Story Implementation", "Catalog Architecture Planning"]
    },
    {
      id: "srv-safety",
      icon: <ShieldCheck className="w-6 h-6 text-rose-400" />,
      title: "Account Health & Policy Protection",
      description: "Proactive monitoring of Amazon Policy Compliance, IP complaints, customer voice health (NCX rate), product safety complaints, and direct resolution of performance issues.",
      features: ["IP & Trademark Complaint Fixes", "NCX & Voice of the Customer Monitoring", "Listing Hijacker Removal", "Policy Violation Appeal Assistance"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950 relative">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-500 font-mono">
            My Specializations
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Full-Stack Amazon Growth Services
          </p>
          <p className="text-zinc-400 text-base">
            From setup and listings to high-performance PPC and brand scaling, I provide complete, data-driven management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-amber-500/20 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors font-display">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature Tags list */}
                <div className="pt-4 border-t border-zinc-800/60">
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Key Focus Areas</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Get started link */}
              <div className="pt-8">
                <a
                  id={`srv-cta-${service.id}`}
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-amber-500 hover:text-amber-400 transition-colors"
                >
                  <span>Inquire about this service</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
