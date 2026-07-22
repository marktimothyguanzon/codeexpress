import {
  FaReact,
  FaJava,
  FaDocker,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql, 
  SiTypescript
} from "react-icons/si";

import { ShieldCheck } from "lucide-react";

import FloatingIcon from "./FloatingIcons";

export default function TechnologyIcons() {
  return (
    <>
      <FloatingIcon
        icon={<FaReact size={34} color="#61DAFB" />}
        top="5%"
        left="45%"
        delay={0}
      />

      <FloatingIcon
        icon={<FaJava size={34} color="#EA2D2E" />}
        top="25%"
        left="-3%"
        delay={0.5}
      />

      <FloatingIcon
        icon={<FaDocker size={34} color="#2496ED" />}
        top="70%"
        left="-2%"
        delay={1}
      />

      <FloatingIcon
        icon={<FaNodeJs size={34} color="#3C873A" />}
        top="72%"
        left="88%"
        delay={1.5}
      />

      <FloatingIcon
        icon={<SiMysql size={34} color="#00758F" />}
        top="92%"
        left="40%"
        delay={2}
      />

      <FloatingIcon
        icon={<FaAws size={34} color="#FF9900" />}
        top="18%"
        left="92%"
        delay={2.5}
      />

      <FloatingIcon
        icon={<SiSpringboot size={34} color="#6DB33F" />}
        top="45%"
        left="-8%"
        delay={3}
      />

      <FloatingIcon
  icon={<SiTypescript size={34} color="#3178C6" />}
  top="45%"
  left="95%"
  delay={3.5}
/>

      <FloatingIcon
        icon={<ShieldCheck size={34} color="#2563EB" />}
        top="90%"
        left="88%"
        delay={4}
      />
    </>
  );
}