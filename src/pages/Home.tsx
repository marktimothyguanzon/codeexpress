import Hero from "../components/features/home/hero/Hero";
import TrustedCompanies from "../components/features/home/trusted/TrustedCompanies";
import OurServices from "../components/features/home/OurServices";
import WhyChooseUs from "../components/features/home/WhyChooseUs/WhyChooseUs";
import FeaturedSolutions from "../components/features/home/FeaturedSolutions/FeaturedSolutions";
import TechnologyStack from "../components/features/home/TechnologyStack/TechnologyStack";
import ProductShowcase from "../components/features/home/ProductShowcase/ProductShowcase";
import DevelopmentProcess from "../components/features/home/process/DevelopmentProcess";
import Testimonials from "../components/features/home/testimonials/Testimonials";
import FAQ from "../components/features/home/faq/FAQ";
import ContactCTA from "../components/features/home/contactcta/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <OurServices />
       <WhyChooseUs />
       <FeaturedSolutions />
       <TechnologyStack />
       <ProductShowcase />
       <DevelopmentProcess />
       <Testimonials />
       <FAQ />
       <ContactCTA />
    </>
  );
}