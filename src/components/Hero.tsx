'use client';

import { motion } from 'framer-motion';
import { Github, Mail, BookOpen, ChevronDown } from 'lucide-react';
import { personalInfo, contact } from '@/data/portfolio';
import dynamic from 'next/dynamic';

const StarryBackground = dynamic(() => import('./StarryBackground'), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
});

const LensEffect = dynamic(() => import('./LensEffect'), { 
  ssr: false 
});

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#0f0f23] to-slate-950">
      {/* Starry background */}
      <StarryBackground />
      
      {/* Lens effect */}
      <LensEffect />
      
      {/* Premium gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(255, 119, 198, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 50% 100%, rgba(120, 119, 255, 0.08) 0%, transparent 50%)
        `
      }} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: 0.2, 
            duration: 0.8,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="mb-12 relative"
        >
          <div className="absolute inset-0 blur-3xl opacity-30">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-violet-600 to-cyan-600 rounded-full" />
          </div>
          <motion.div 
            className="relative w-32 h-32 mx-auto rounded-full flex items-center justify-center"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/90 via-purple-500/90 to-cyan-500/90 rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full" />
            <div className="absolute -inset-0.5 bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-600 rounded-full blur-sm opacity-60 animate-pulse" />
            <span className="relative text-white text-5xl font-bold z-10 font-[var(--font-space-grotesk)]">
              {personalInfo.name[0]}
            </span>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="relative inline-block">
            <span className="absolute -inset-1 blur-2xl bg-gradient-to-r from-violet-600/40 via-purple-600/40 to-cyan-600/40 opacity-70" />
            <span className="relative bg-gradient-to-br from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="text-xl sm:text-2xl lg:text-3xl mb-6 font-light tracking-wide"
        >
          <span className="text-purple-300/90 font-medium">{personalInfo.title.split(' ')[0]}</span>
          <span className="text-gray-300"> {personalInfo.title.split(' ').slice(1).join(' ')}</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed px-4"
        >
          {personalInfo.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-7 py-3.5 overflow-hidden rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            <div className="relative flex items-center gap-2.5 text-white/90 font-medium">
              <Github className="transition-transform duration-300 group-hover:rotate-12" size={18} />
              <span className="text-sm tracking-wide">GitHub</span>
            </div>
          </motion.a>
          <motion.a
            href={`mailto:${contact.email}`}
            className="group relative px-7 py-3.5 overflow-hidden rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
            <div className="relative flex items-center gap-2.5 text-white font-medium">
              <Mail className="transition-transform duration-300 group-hover:rotate-12" size={18} />
              <span className="text-sm tracking-wide">Contact</span>
            </div>
          </motion.a>
          <motion.a
            href={contact.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-7 py-3.5 overflow-hidden rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 rounded-xl border border-purple-500/30 bg-purple-500/5 backdrop-blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            <div className="relative flex items-center gap-2.5 text-purple-300/90 font-medium group-hover:text-purple-200 transition-colors duration-300">
              <BookOpen className="transition-transform duration-300 group-hover:rotate-12" size={18} />
              <span className="text-sm tracking-wide">Blog</span>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 1 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 cursor-pointer group z-10"
        whileHover={{ scale: 1.1, opacity: 1 }}
      >
        <div className="relative">
          <div className="absolute inset-0 blur-xl bg-purple-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <ChevronDown size={28} className="text-purple-300/70 animate-bounce group-hover:text-purple-200 transition-colors duration-300" />
        </div>
      </motion.button>
    </section>
  );
}