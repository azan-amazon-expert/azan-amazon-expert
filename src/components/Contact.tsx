import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Send, Linkedin } from "lucide-react";

interface ContactProps {
  email: string;
  whatsapp: string;
  linkedin?: string;
}

export default function Contact({ email, whatsapp, linkedin }: ContactProps) {
  // Form states
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [brandName, setBrandName] = useState("");
  const [targetMarketplace, setTargetMarketplace] = useState("");
  const [salesBracket, setSalesBracket] = useState("$10k - $50k per month");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const whatsappLink = `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`;
  const mailtoLink = `mailto:${email}`;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "d8b7d17e-adbd-4111-af26-b50c1e8058ce",
          name: name,
          email: userEmail,
          brand_name: brandName,
          target_marketplace: targetMarketplace,
          monthly_sales: salesBracket,
          primary_challenges: message,
          subject: `New Amazon PPC Audit Request from ${name}`,
          from_name: name
        })
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again or contact via WhatsApp/Email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName("");
    setUserEmail("");
    setBrandName("");
    setTargetMarketplace("");
    setSalesBracket("$10k - $50k per month");
    setMessage("");
    setErrorMessage("");
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full bg-yellow-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-500 font-mono">
            Let's Collaborate
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Ready to Dominate on Amazon?
          </p>
          <p className="text-zinc-400 text-base">
            Get a comprehensive, 100% free PPC & listing audit of your Amazon Store. I'll highlight key campaign leaks, optimization gaps, and rank boosters.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Methods (Left - Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white font-display">
                Direct Channels
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Connect with me instantly for quick questions, urgent campaign consultations, or to arrange an invite-only audit session.
              </p>

              {/* Direct Link Grid */}
              <div className="space-y-4 pt-2">
                
                {/* WhatsApp Direct Contact Card */}
                <motion.a
                  id="direct-whatsapp-card"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.01 }}
                  className="block p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider font-mono">WhatsApp Hotline</p>
                      <p className="text-lg font-bold text-white font-display mt-0.5">{whatsapp}</p>
                      <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
                        <span>Tap to chat instantly</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </p>
                    </div>
                  </div>
                </motion.a>

                {/* Email Direct Contact Card */}
                <motion.a
                  id="direct-email-card"
                  href={mailtoLink}
                  whileHover={{ scale: 1.01 }}
                  className="block p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wider font-mono">Professional Email</p>
                      <p className="text-lg font-bold text-white font-display mt-0.5">{email}</p>
                      <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
                        <span>Send email query</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </p>
                    </div>
                  </div>
                </motion.a>

                {/* LinkedIn Direct Contact Card */}
                {linkedin && (
                  <motion.a
                    id="direct-linkedin-card"
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.01 }}
                    className="block p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-sky-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-zinc-950 transition-all">
                        <Linkedin className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-sky-400 uppercase tracking-wider font-mono">LinkedIn Profile</p>
                        <p className="text-lg font-bold text-white font-display mt-0.5">muhammad-azan-hayat</p>
                        <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
                          <span>Connect professionally</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </p>
                      </div>
                    </div>
                  </motion.a>
                )}

              </div>
            </div>

            {/* Credibility Box / Footer Bullet */}
            <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-3">
              <div className="flex items-center space-x-2 text-amber-500">
                <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">Confidentiality Assured</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                All audits are conducted under strict non-disclosure. I do not share listing data, brand names, or competitor strategies with any external parties. Your seller account is completely safe.
              </p>
            </div>
          </div>

          {/* Interactive Form Panel (Right - Col Span 7) */}
          <div className="lg:col-span-7 bg-zinc-900/30 border border-zinc-800 p-6 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  id="contact-form"
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="border-b border-zinc-800 pb-3">
                    <h3 className="text-xl font-bold text-white font-display">
                      Book a Free Account Audit
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Fill out this quick form and I will get back to you with custom projections within 24 hours.
                    </p>
                  </div>

                  {/* Input Row: Name & Brand */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="form-name" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-amber-500 focus:outline-none text-zinc-200 text-sm placeholder-zinc-600 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="form-brand" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Brand Name / ASINs
                      </label>
                      <input
                        id="form-brand"
                        type="text"
                        placeholder="e.g. Acme Kitchen"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-amber-500 focus:outline-none text-zinc-200 text-sm placeholder-zinc-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Input Row: Email */}
                  <div className="space-y-2">
                    <label htmlFor="form-email" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      Your Email Address
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-amber-500 focus:outline-none text-zinc-200 text-sm placeholder-zinc-600 transition-colors"
                    />
                  </div>

                  {/* Input Row: Target Marketplace & Current Monthly Sales */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="form-marketplace" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Target Marketplace
                      </label>
                      <input
                        id="form-marketplace"
                        type="text"
                        required
                        placeholder="e.g. US, UK, DE, CA"
                        value={targetMarketplace}
                        onChange={(e) => setTargetMarketplace(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-amber-500 focus:outline-none text-zinc-200 text-sm placeholder-zinc-600 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="form-sales" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Current Monthly Sales
                      </label>
                      <select
                        id="form-sales"
                        value={salesBracket}
                        onChange={(e) => setSalesBracket(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-amber-500 focus:outline-none text-zinc-300 text-sm transition-colors cursor-pointer"
                      >
                        <option className="bg-zinc-950 text-zinc-300" value="New Launch / Just starting">New Launch / Just starting</option>
                        <option className="bg-zinc-950 text-zinc-300" value="Under $10k per month">Under $10k per month</option>
                        <option className="bg-zinc-950 text-zinc-300" value="$10k - $50k per month">$10k - $50k per month</option>
                        <option className="bg-zinc-950 text-zinc-300" value="Over $50k per month">Over $50k per month</option>
                      </select>
                    </div>
                  </div>

                  {/* Textarea: Message */}
                  <div className="space-y-2">
                    <label htmlFor="form-message" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      Your Primary PPC Challenges / Goals
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      required
                      placeholder="My ACoS is too high... / I want to rank organic keywords... / Help launching my brand"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-amber-500 focus:outline-none text-zinc-200 text-sm placeholder-zinc-600 transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-xl text-center font-mono">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    id="form-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:bg-zinc-800 disabled:text-zinc-600 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/10 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                        <span>Generating Secure Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                        <span>Send Free Audit Request</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  id="form-success-panel"
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center space-y-6 py-8"
                >
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-white font-display">
                      Request Received, {name}!
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Thank you for reaching out. I am already preparing to audit your niche. I will review your challenge and contact you at your email/WhatsApp within 2 hours.
                    </p>
                  </div>

                  {/* Display details check card */}
                  <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl max-w-sm mx-auto text-left space-y-2 text-xs text-zinc-300">
                    <p className="font-bold border-b border-zinc-800 pb-1.5 uppercase font-mono text-[10px] text-zinc-500">Submitted details:</p>
                    <p><span className="text-zinc-500">Email:</span> {userEmail}</p>
                    <p><span className="text-zinc-500">Brand Name:</span> {brandName || "Not provided"}</p>
                    <p><span className="text-zinc-500">Marketplace:</span> {targetMarketplace || "Not provided"}</p>
                    <p><span className="text-zinc-500">Store Revenue:</span> {salesBracket}</p>
                    <p><span className="text-zinc-500">Inquiry focus:</span> "{message.slice(0, 80)}..."</p>
                  </div>

                  <button
                    id="success-reset-btn"
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-semibold transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
