import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-medium text-brand uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Born to Create
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Founded in 2026 in Turkey, Starlabs is an independent app studio with a passion for building polished, meaningful digital experiences. We're a small but ambitious team of designers and developers who believe great apps start with great craft.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Our focus is simple: create apps that people genuinely love to use. From the first pixel to the final release, we obsess over every detail — because we think the world deserves better apps.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We're just getting started, and we can't wait to share what we've been working on.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "2026", label: "Founded" },
              { value: "Turkey", label: "Based in" },
              { value: "Apps", label: "We Build" },
              { value: "∞", label: "Ambition" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="text-3xl font-bold text-brand mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
