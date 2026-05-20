import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import BenefitsSection from "../components/sections/BenefitsSection";
import USPSection from "../components/sections/USPSection";
import CTASection from "../components/sections/CTASection";

export default function Home() {
    return (
        <div className="bg-black text-white min-h-screen">
            <Header />

            <main>
                <HeroSection />
                <FeaturesSection />
                <BenefitsSection />
                <USPSection />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
}