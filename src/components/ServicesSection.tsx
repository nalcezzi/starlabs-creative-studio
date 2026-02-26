import { motion } from "framer-motion";
import { Smartphone, Palette, Code, Rocket } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobil Uygulama",
    description: "iOS ve Android için performanslı, kullanıcı dostu uygulamalar geliştiriyoruz.",
  },
  {
    icon: Palette,
    title: "UI/UX Tasarım",
    description: "Kullanıcı deneyimini merkeze alan, estetik ve işlevsel arayüzler tasarlıyoruz.",
  },
  {
    icon: Code,
    title: "Web Geliştirme",
    description: "Modern teknolojilerle hızlı, güvenli ve ölçeklenebilir web çözümleri sunuyoruz.",
  },
  {
    icon: Rocket,
    title: "Dijital Strateji",
    description: "Fikrinizi pazara taşımak için kapsamlı dijital stratejiler oluşturuyoruz.",
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
    <section id="hizmetler" className="py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-brand uppercase tracking-widest">
            Hizmetler
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Neler Yapıyoruz?
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
