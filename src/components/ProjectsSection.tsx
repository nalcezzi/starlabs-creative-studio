import { motion } from "framer-motion";

const projects = [
  {
    title: "FinTrack",
    category: "Fintech",
    color: "from-brand to-brand-dark",
  },
  {
    title: "HealthPulse",
    category: "Sağlık",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "EduFlow",
    category: "Eğitim",
    color: "from-amber-500 to-orange-600",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projeler" className="py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-brand uppercase tracking-widest">
            Projeler
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Son Çalışmalarımız
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/5]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative z-10 flex flex-col justify-end h-full p-8">
                <span className="text-sm font-medium opacity-80 mb-1">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
