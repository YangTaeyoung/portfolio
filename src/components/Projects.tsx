'use client';

import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Github, Code2 } from 'lucide-react';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/95 to-slate-950/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.06),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16">
            <span className="relative inline-block">
              <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-violet-600/30 to-cyan-600/30" />
              <span className="relative bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden rounded-2xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glass card background */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
                
                <div className="relative p-6 z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-100 group-hover:text-violet-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
                          whileHover={{ scale: 1.2, rotate: -360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {project.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <Code2 size={14} />
                      {project.type}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <ul className="space-y-1 mb-4">
                    {project.achievements.slice(0, 3).map((achievement, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-700 dark:text-gray-300 flex items-start"
                      >
                        <span className="text-purple-600 mr-2 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: index * 0.1 + i * 0.03,
                          duration: 0.3,
                          type: "spring"
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 text-purple-700 dark:text-purple-300 rounded-md hover:shadow-md transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}