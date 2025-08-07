'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Zap, Server, GitBranch, Database, Archive } from 'lucide-react';
import { personalInfo, strengths } from '@/data/portfolio';
import React from "react";

const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  TrendingUp,
  Zap,
  Server,
  GitBranch,
  Database,
  Archive
};

export default function About() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,119,198,0.05),transparent_50%)]" />
      
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
                About Me
              </span>
            </span>
          </h2>

          <div className="relative group mb-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
              <p className="text-lg text-gray-300 leading-loose whitespace-pre-line font-light tracking-wide">
                {personalInfo.bio}
              </p>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-gray-200">핵심 강점</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => {
              const Icon = iconMap[strength.icon];
              return (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 30, rotateX: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
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
                    transition: { duration: 0.3 }
                  }}
                  className="group relative overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Glass card background */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative z-10 flex items-start gap-4 p-6">
                    <motion.div 
                      className="relative p-3 rounded-xl overflow-hidden"
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-cyan-600" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <Icon size={22} className="relative z-10 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2 text-gray-100 group-hover:text-violet-300 transition-colors duration-300">
                        {strength.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Premium shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}