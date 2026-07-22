import Hero from "../components/features/home/hero/Hero";
import TrustedCompanies from "../components/features/home/trusted/TrustedCompanies";
import OurServices from "../components/features/home/OurServices";
import WhyChooseUs from "../components/features/home/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <OurServices />
       <WhyChooseUs />
    </>
  );
}