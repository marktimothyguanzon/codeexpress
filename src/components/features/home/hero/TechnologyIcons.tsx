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
  SiTypescript,
} from "react-icons/si";

import { ShieldCheck } from "lucide-react";

import FloatingIcon from "./FloatingIcons";

const iconClass = "h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8";

export default function TechnologyIcons() {
  return (
    <div className="hidden lg:block">

      <FloatingIcon
        icon={<FaReact className={iconClass} color="#61DAFB" />}
        top="5%"
        left="45%"
        delay={0}
      />

      <FloatingIcon
        icon={<FaJava className={iconClass} color="#EA2D2E" />}
        top="25%"
        left="-3%"
        delay={0.5}
      />

      <FloatingIcon
        icon={<FaDocker className={iconClass} color="#2496ED" />}
        top="70%"
        left="-2%"
        delay={1}
      />

      <FloatingIcon
        icon={<FaNodeJs className={iconClass} color="#3C873A" />}
        top="72%"
        left="88%"
        delay={1.5}
      />

      <FloatingIcon
        icon={<SiMysql className={iconClass} color="#00758F" />}
        top="92%"
        left="40%"
        delay={2}
      />

      <FloatingIcon
        icon={<FaAws className={iconClass} color="#FF9900" />}
        top="18%"
        left="92%"
        delay={2.5}
      />

      <FloatingIcon
        icon={<SiSpringboot className={iconClass} color="#6DB33F" />}
        top="45%"
        left="-8%"
        delay={3}
      />

      <FloatingIcon
        icon={<SiTypescript className={iconClass} color="#3178C6" />}
        top="45%"
        left="95%"
        delay={3.5}
      />

      <FloatingIcon
        icon={
          <ShieldCheck
            className={iconClass}
            color="#2563EB"
          />
        }
        top="90%"
        left="88%"
        delay={4}
      />

    </div>
  );
}