import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-8">

      
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 items-start"
        >
          {/* Left Column - Identity */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
                className="h-px bg-gray-300 dark:bg-gray-700"
              />
              
              <div>
                <h1 className="text-3xl font-extralight tracking-[0.3em] text-gray-600 dark:text-gray-400 uppercase mb-4">
                  INFO
                </h1>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  Cybersecurity Engineer
                </p>
              </div>
            </div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1.5 }}
              className="space-y-6"
            >
              <h3 className="text-xs text-gray-400 font-light tracking-[0.25em] uppercase">Expertise</h3>
              <div className="space-y-3">
                {[
                  'Embedded Systems',
                  'Circuit Design', 
                  'Full-Stack Development',
                  'Hardware Design',
                  'Signal Processing'
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2 + index * 0.1, duration: 0.8 }}
                    className="text-sm text-gray-500 font-light"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Center Column - Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-xs text-gray-400 font-light tracking-[0.25em] uppercase mb-8">Experience</h3>
              <div className="space-y-8">
                {[
                  {
                    role: 'Software Engineer',
                    company: 'Tanium',
                    year: '2025',
                    description: 'Full-Stack Developer'
                  },
                  {
                    role: 'Machine Learning Engineer',
                    company: 'Gentian',
                    year: '2024',
                    description: 'Developed Internal Tools'
                  },
                  {
                    role: 'Software Developer',
                    company: 'Altaris',
                    year: '2022',
                    description: 'Network Architecture'
                  }
                ].map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 + index * 0.2, duration: 1 }}
                    className="space-y-2"
                  >
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-light">
                      {exp.role}
                    </div>
                    <div className="text-xs text-gray-500 font-light">
                      {exp.company} · {exp.year}
                    </div>
                    <div className="text-xs text-gray-400 font-light leading-relaxed">
                      {exp.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1.5 }}
              className="space-y-6"
            >
              <h3 className="text-xs text-gray-400 font-light tracking-[0.25em] uppercase">Selected Work</h3>
              <div className="space-y-4">
                {[
                  { name: 'RISC_V CPU', tech: 'Systemverilog, Verilog, C', url: 'https://github.com/zxcv616/otter-w-cache' },
                  { name: 'MarketLens', tech: 'React, Python, YFinance', url: 'https://github.com/zxcv616/MarketLens' },
                  { name: 'WavHaven', tech: 'React, Node.js, Django', url: 'https://github.com/zxcv616/WavHaven' }
                ].map((project, index) => (
                  <motion.a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.2 + index * 0.1, duration: 0.8 }}
                    className="group cursor-pointer block"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-light group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                          {project.name}
                        </div>
                        <div className="text-xs text-gray-400 font-light">
                          {project.tech}
                        </div>
                      </div>
                      <ExternalLink size={12} className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 1.5 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-xs text-gray-400 font-light tracking-[0.25em] uppercase mb-8">Connect</h3>
              <div className="space-y-6">
                <motion.a
                  href="mailto:mwiecking@me.com"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5, duration: 1 }}
                  className="group flex items-center gap-3 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
                >
                  <Mail size={14} />
                  <span className="font-light">Email</span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/zxcv616"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.7, duration: 1 }}
                  className="group flex items-center gap-3 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
                >
                  <Github size={14} />
                  <span className="font-light">GitHub</span>
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/mwiecking"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.9, duration: 1 }}
                  className="group flex items-center gap-3 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
                >
                  <Linkedin size={14} />
                  <span className="font-light">LinkedIn</span>
                </motion.a>
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1.5 }}
              className="space-y-4"
            >
              <h3 className="text-xs text-gray-400 font-light tracking-[0.25em] uppercase">Status</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-500 font-light">Employed</span>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.2, duration: 1.5 }}
              className="space-y-4"
            >
              <h3 className="text-xs text-gray-400 font-light tracking-[0.25em] uppercase">Location</h3>
              <div className="text-sm text-gray-500 font-light">
                San Francisco, CA
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 