import { SiteHeader } from "./components/site/SiteHeader.jsx";
import { HeroSection } from "./components/site/HeroSection.jsx";
import { ServicesSection } from "./components/site/ServicesSection.jsx";
import { ProductShowcaseSection } from "./components/site/ProductShowcaseSection.jsx";
import { ProcessSection } from "./components/site/ProcessSection.jsx";
import { ProofSection } from "./components/site/ProofSection.jsx";
import { ContactSection } from "./components/site/ContactSection.jsx";
import { SiteFooter } from "./components/site/SiteFooter.jsx";

export default function App() {
  return (
    <div className="website-shell">
      <SiteHeader />
      <main className="website-main">
        <HeroSection />
        <ServicesSection />
        <ProductShowcaseSection />
        <ProcessSection />
        <ProofSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
