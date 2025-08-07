'use client';

import { motion } from 'framer-motion';
import { Github, GitFork, Star } from 'lucide-react';
import { openSourceProjects } from '@/data/portfolio';

const languageColors: { [key: string]: string } = {
  'Go': 'bg-cyan-500',
  'TypeScript': 'bg-blue-500',
  'JavaScript': 'bg-yellow-500',
  'Python': 'bg-green-500'
};

export default function OpenSource() {
  return (
    <section id="opensource" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Open Source Contributions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openSourceProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Github className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 transition-colors" size={20} />
                      </motion.div>
                      <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    <motion.span 
                      className={`px-2 py-1 text-xs text-white rounded-md shadow-md ${languageColors[project.language] || 'bg-gray-500'}`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.language}
                    </motion.span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <motion.span 
                      className="flex items-center gap-1 group-hover:text-yellow-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Star size={14} className="group-hover:fill-yellow-500" />
                      Stars
                    </motion.span>
                    <motion.span 
                      className="flex items-center gap-1 group-hover:text-green-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <GitFork size={14} />
                      Forks
                    </motion.span>
                  </div>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <a
              href="https://github.com/YangTaeyoung"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              <Github size={20} />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}