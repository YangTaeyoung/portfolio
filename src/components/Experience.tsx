'use client';

import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';
import { experiences } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/95 to-slate-950/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(120,119,198,0.1),transparent_50%)]" />
      
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
                Experience
              </span>
            </span>
          </h2>

          <div className="relative">
            {/* Premium timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/50 via-purple-500/30 to-cyan-500/50 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Premium timeline dot */}
                  <motion.div 
                    className="absolute left-8 w-4 h-4 -translate-x-1/2 hidden md:block"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full" />
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full blur-md opacity-60 animate-pulse" />
                  </motion.div>
                  
                  <motion.div 
                    className="ml-0 md:ml-20 relative group/card overflow-hidden rounded-2xl"
                    whileHover={{ 
                      x: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Glass card background */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-cyan-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    {/* Premium gradient accent line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-cyan-500 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-l-2xl" />
                    
                    <div className="relative z-10 p-6">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-100 mb-1">
                            {exp.company}
                          </h3>
                          <p className="text-purple-300/80 font-medium">
                            {exp.position}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-violet-400" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Briefcase size={14} className="text-cyan-400" />
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2.5">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-300/90 flex items-start leading-relaxed"
                          >
                            <span className="text-violet-400 mr-2.5 mt-0.5">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.techStack && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {exp.techStack.map((tech, i) => (
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
                              whileHover={{ scale: 1.05, y: -1 }}
                              className="relative px-3 py-1.5 text-xs font-medium overflow-hidden rounded-lg group/tag cursor-default"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-lg" />
                              <span className="relative text-violet-300/90">{tech}</span>
                            </motion.span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}