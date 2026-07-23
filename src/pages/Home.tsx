import Hero from "../components/features/home/hero/Hero";
import TrustedCompanies from "../components/features/home/trusted/TrustedCompanies";
import OurServices from "../components/features/home/OurServices";
import WhyChooseUs from "../components/features/home/WhyChooseUs/WhyChooseUs";
import FeaturedSolutions from "../components/features/home/FeaturedSolutions/FeaturedSolutions";
import TechnologyStack from "../components/features/home/TechnologyStack/TechnologyStack";
import ProductShowcase from "../components/features/home/ProductShowcase/ProductShowcase";

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
    </>
  );
}