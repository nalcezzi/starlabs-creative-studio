import { motion } from "framer-motion";
import { Smartphone, Palette, Code, Rocket } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform apps built for performance and delightful user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that balances aesthetics with intuitive functionality.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Fast, secure, and scalable web applications using modern technologies.",
  },
  {
    icon: Rocket,
    title: "Product Strategy",
    description: "From idea to market — we help you define, build, and launch your digital product.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-brand uppercase tracking-widest">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            What We Do
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-brand/30 transition-all duration-300 hover:shadow-[var(--shadow-brand)]"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5 group-hover:bg-brand/20 transition-colors">
                <service.icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
