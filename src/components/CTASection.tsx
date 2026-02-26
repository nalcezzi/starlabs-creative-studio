import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
          style={{ background: "var(--gradient-brand)" }}
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Great
            </h2>
            <p className="text-lg opacity-90 max-w-xl mx-auto mb-10">
              Got an idea? Let's turn it into a stunning digital product together.
            </p>
            <a
              href="mailto:hello@starlabs.studio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-background text-foreground hover:bg-surface-hover transition-colors text-base"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
