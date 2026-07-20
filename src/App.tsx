/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import ProofScreenshots from "./components/ProofScreenshots";
import Services from "./components/Services";
import ROASCalculator from "./components/Calculator";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const portfolioData = {
    name: "azan hayat",
    email: "azan.ppc.expert@gmail.com",
    whatsapp: "+923174119872",
    linkedin: "https://www.linkedin.com/in/muhammad-azan-hayat/",
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased selection:bg-amber-500 selection:text-zinc-950 overflow-x-hidden">
      <Header {...portfolioData} />
      <main>
        <Hero name={portfolioData.name} whatsapp={portfolioData.whatsapp} />
        <Metrics />
        <ProofScreenshots />
        <Services />
        <ROASCalculator />
        <CaseStudies />
        <Contact email={portfolioData.email} whatsapp={portfolioData.whatsapp} linkedin={portfolioData.linkedin} />
      </main>
      <Footer name={portfolioData.name} email={portfolioData.email} whatsapp={portfolioData.whatsapp} linkedin={portfolioData.linkedin} />
    </div>
  );
}
