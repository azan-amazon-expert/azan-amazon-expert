import { ArrowUp, ShoppingBag, ShieldCheck, Linkedin, Mail, MessageCircle } from "lucide-react";

interface FooterProps {
  name: string;
  email?: string;
  whatsapp?: string;
  linkedin?: string;
}

export default function Footer({ name, email, whatsapp, linkedin }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappLink = whatsapp ? `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}` : "";
  const mailtoLink = email ? `mailto:${email}` : "";

  return (
    <footer id="footer-section" className="bg-zinc-950 border-t border-zinc-900 py-12 text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          
          {/* Logo & disclaimer brief */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center shadow-md shadow-amber-500/10">
              <svg className="w-4.5 h-4.5 text-zinc-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 6v12h12" />
                <path d="M10 18v-4" />
                <path d="M14 18v-8" />
                <path d="M18 18v-12" />
              </svg>
            </div>
            <div className="flex flex-col items-start text-left leading-none">
              <span className="text-base font-bold tracking-tight text-white font-display capitalize">
                {name}
              </span>
              <span className="text-[8px] font-bold tracking-[0.16em] text-zinc-400 uppercase mt-1 font-mono">
                Amazon PPC Expert
              </span>
            </div>
          </div>

          {/* Contact Badges / Social Links row */}
          <div className="flex flex-wrap justify-center gap-4">
            {linkedin && (
              <a
                id="footer-linkedin-upper"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 text-zinc-300 hover:text-amber-400 transition-all text-xs"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            )}
            {whatsappLink && (
              <a
                id="footer-whatsapp"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 text-zinc-300 hover:text-emerald-400 transition-all text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            )}
            {mailtoLink && (
              <a
                id="footer-email"
                href={mailtoLink}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 text-zinc-300 hover:text-amber-400 transition-all text-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Me</span>
              </a>
            )}
          </div>
        </div>

        {/* Lower footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p className="text-zinc-600">
              &copy; {new Date().getFullYear()} <span className="capitalize">{name}</span>. All Rights Reserved.
            </p>
            <span className="hidden sm:inline text-zinc-800">|</span>
            <p className="text-[10px] text-zinc-700 max-w-sm">
              Amazon Ads Consultant. "Amazon" is a trademark of Amazon.com, Inc.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#services" className="hover:text-zinc-300 transition-colors">Services</a>
            <a href="#metrics" className="hover:text-zinc-300 transition-colors">Growth Stats</a>
            <a href="#calculator" className="hover:text-zinc-300 transition-colors">Calculator</a>
            <button
              id="scroll-to-top-btn"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 text-zinc-400 hover:text-white transition-all flex items-center justify-center cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
