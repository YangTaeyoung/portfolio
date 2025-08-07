'use client';

import { motion } from 'framer-motion';
import { Mail, Github, BookOpen, Phone, Send } from 'lucide-react';
import { contact } from '@/data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
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
                Get In Touch
              </span>
            </span>
          </h2>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
              <p className="text-center text-gray-300 mb-10 text-lg font-light tracking-wide">
                저와 함께 더 나은 서비스를 만들어가고 싶으시다면 언제든지 연락주세요!
              </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.a
                href={`mailto:${contact.email}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group/item relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="relative flex items-center gap-4 p-5">
                  <div className="p-3 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl text-white shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-0.5">Email</p>
                    <p className="font-medium text-gray-100">{contact.email}</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group/item relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="relative flex items-center gap-4 p-5">
                  <div className="p-3 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl text-white shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <Github size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-0.5">GitHub</p>
                    <p className="font-medium text-gray-100">YangTaeyoung</p>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href={contact.blog}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group/item relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="relative flex items-center gap-4 p-5">
                  <div className="p-3 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl text-white shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-0.5">Blog</p>
                    <p className="font-medium text-gray-100">code-kirin.me</p>
                  </div>
                </div>
              </motion.a>

              {contact.phone && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl" />
                  <div className="relative flex items-center gap-4 p-5">
                    <div className="p-3 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl text-white shadow-lg">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-0.5">Phone</p>
                      <p className="font-medium text-gray-100">{contact.phone}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.a
                href={`mailto:${contact.email}`}
                className="group relative inline-flex items-center gap-2.5 px-10 py-4 overflow-hidden rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                <Send size={18} className="relative z-10 text-white" />
                <span className="relative z-10 text-white font-medium tracking-wide">Send Message</span>
              </motion.a>
            </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}