import Hero from "../components/features/home/hero/Hero";
import TrustedCompanies from "../components/features/home/trusted/TrustedCompanies";
import OurServices from "../components/features/home/OurServices";
import WhyChooseUs from "../components/features/home/WhyChooseUs/WhyChooseUs";
import FeaturedSolutions from "../components/features/home/FeaturedSolutions/FeaturedSolutions";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <OurServices />
       <WhyChooseUs />
       <FeaturedSolutions />
    </>
  );
}