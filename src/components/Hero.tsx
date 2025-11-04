import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-dark-100 dark:from-dark-900 dark:to-dark-800 overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-100 dark:bg-primary-900/20 blur-3xl opacity-70"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-secondary-100 dark:bg-secondary-900/20 blur-3xl opacity-70"></div>
        <div className="absolute bottom-20 right-1/4 w-60 h-60 rounded-full bg-accent-100 dark:bg-accent-900/20 blur-3xl opacity-70"></div>
      </div>
      
      <div className="container relative z-10 pt-20 md:pt-0 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-block p-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full">
            <div className="h-32 w-32 md:h-40 md:w-40 rounded-full bg-white dark:bg-dark-800 flex items-center justify-center overflow-hidden">
              <span className="text-6xl animate-bounce-light">🚀</span>
            </div>
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
        >
          Krishna <span className="text-primary-600 dark:text-primary-400">K</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl text-lg md:text-xl text-dark-600 dark:text-dark-300 mb-8"
        >
          Founder of Innovate & Inspire | Ex-Chief Patron of Innovate & Inspire | 
          Best Coding Engineer '23 🌟 | International Author 📚 | Problem Solver 🔍 | 
          Debugger 🐞 | Researcher 📊 | Event Organiser 🎉 | Helping Others to Learn, 
          Code & Upgrade 🤝 | Motivator 💪
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <a href="#about" className="text-dark-400 dark:text-dark-500 flex flex-col items-center">
            <span className="mb-2 text-sm">Scroll Down</span>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce"
            >
              <path 
                d="M12 5L12 19M12 19L19 12M12 19L5 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
