import { useState, useEffect } from "react";
import { MessageSquare, Mail, Menu, X, ArrowUpRight, Linkedin } from "lucide-react";

interface HeaderProps {
  name: string;
  email: string;
  whatsapp: string;
  linkedin?: string;
}

export default function Header({ name, email, whatsapp, linkedin }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            id="logo-link"
            href="#hero"
            className="flex items-center space-x-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/10 group-hover:scale-105 transition-all duration-300">
              <svg className="w-5 h-5 text-zinc-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 6v12h12" />
                <path d="M10 18v-4" />
                <path d="M14 18v-8" />
                <path d="M18 18v-12" />
              </svg>
            </div>
            <div className="flex flex-col items-start text-left leading-none">
              <span className="text-[17px] font-bold tracking-tight text-white font-display group-hover:text-amber-400 transition-colors capitalize">
                {name}
              </span>
              <span className="text-[9px] font-bold tracking-[0.16em] text-zinc-400 uppercase mt-1.5 font-mono">
                Amazon PPC Expert
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            <a
              id="nav-services"
              href="#services"
              className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors"
            >
              Services
            </a>
            <a
              id="nav-metrics"
              href="#metrics"
              className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors"
            >
              My Growth Stats
            </a>
            <a
              id="nav-calculator"
              href="#calculator"
              className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              ROAS Calculator
              <span className="bg-amber-500/10 text-amber-400 text-[10px] px-1.5 py-0.5 rounded font-mono">Free</span>
            </a>
            <a
              id="nav-case-studies"
              href="#case-studies"
              className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors"
            >
              Case Studies
            </a>
            <a
              id="nav-contact"
              href="#contact"
              className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors"
            >
              Let's Talk
            </a>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center space-x-3">
            {linkedin && (
              <a
                id="cta-linkedin-header"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-sky-500/50 text-zinc-300 hover:text-white transition-all"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
              </a>
            )}
            <a
              id="cta-whatsapp-header"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 text-zinc-200 hover:text-white text-sm font-medium transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp Chat</span>
            </a>
            <a
              id="cta-talk-header"
              href="#contact"
              className="flex items-center space-x-1 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 text-sm font-semibold transition-all shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20"
            >
              <span>Get Free Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-nav" className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-2 pb-6 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-200">
          <a
            id="mobile-nav-services"
            href="#services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            Services
          </a>
          <a
            id="mobile-nav-metrics"
            href="#metrics"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            My Growth Stats
          </a>
          <a
            id="mobile-nav-calculator"
            href="#calculator"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            ROAS Calculator
          </a>
          <a
            id="mobile-nav-case-studies"
            href="#case-studies"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            Case Studies
          </a>
          <a
            id="mobile-nav-contact"
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            Let's Talk
          </a>
          <div className="pt-4 grid grid-cols-2 gap-3">
            <a
              id="mobile-cta-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm font-medium"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp</span>
            </a>
            <a
              id="mobile-cta-audit"
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-1 p-3 rounded-lg bg-amber-500 text-zinc-950 text-sm font-semibold"
            >
              <span>Get Free Audit</span>
            </a>
          </div>
          {linkedin && (
            <a
              id="mobile-cta-linkedin"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm font-medium w-full mt-2"
            >
              <Linkedin className="w-4 h-4 text-sky-400" />
              <span>Connect on LinkedIn</span>
            </a>
          )}
        </div>
      )}
    </header>
  );
}
