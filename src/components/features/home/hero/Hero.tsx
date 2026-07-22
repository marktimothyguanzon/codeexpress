import Container from "../../../common/Container";

import Background from "./Background";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import CircuitBackground from "./CircuitBackground";


export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <Background />

      <Container className="relative py-28">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <HeroContent />

          <HeroImage />

          <CircuitBackground />

        </div>

      </Container>

    </section>
  );
}