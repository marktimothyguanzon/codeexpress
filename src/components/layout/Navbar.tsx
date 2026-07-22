import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../common/Container";


const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Solutions", path: "/solutions" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <NavLink to="/" className="flex items-center">
  <h1 className="text-3xl font-black tracking-tight uppercase">
    <span className="text-slate-900">CODE</span>
    <span className="text-blue-600">EXPRESS</span>
  </h1>
</NavLink>

          <nav className="hidden lg:flex items-center gap-8">

            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-slate-700 hover:text-blue-600 transition"
                }
              >
                {link.name}
              </NavLink>
            ))}

          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            <MessageCircle size={18} />
            Get a Free Consultation
          </motion.button>

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {open && (
          <div className="pb-6 lg:hidden">

            <div className="flex flex-col gap-4">

              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}

            </div>

          </div>
        )}

      </Container>
    </header>
  );
}