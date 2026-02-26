import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative z-10 container px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-brand/15 text-brand-light border border-brand/20 mb-8">
            App Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-6"
        >
          Fikirlerinizi{" "}
          <span className="text-gradient">dijital gerçekliğe</span>{" "}
          dönüştürüyoruz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Starlabs olarak, yaratıcı tasarım ve ileri teknoloji ile markanızı
          geleceğe taşıyoruz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#iletişim"
            className="px-8 py-3.5 rounded-xl font-medium bg-brand text-primary-foreground hover:bg-brand-light transition-colors glow text-base"
          >
            Projeni Başlat
          </a>
          <a
            href="#projeler"
            className="px-8 py-3.5 rounded-xl font-medium border border-border text-foreground hover:bg-surface-hover transition-colors text-base"
          >
            Projelerimiz
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
