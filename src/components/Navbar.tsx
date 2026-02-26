import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const navItems = ["About", "Apps", "Contact"];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container flex items-center justify-between h-16 px-6">
        <img src={logo} alt="Starlabs" className="h-20" />
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "About", href: "#about" },
            { label: "Apps", href: "#work" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="px-5 py-2 rounded-lg text-sm font-medium bg-brand text-primary-foreground hover:bg-brand-light transition-colors glow"
        >
          Get in Touch
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
