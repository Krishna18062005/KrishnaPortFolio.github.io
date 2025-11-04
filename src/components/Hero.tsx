import React from 'react';
import { motion } from 'framer-motion';

const imageUrls = [
  
  'https://images.unsplash.com/photo-1541542684-7f3a0b0d2f8b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2',
  'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4',
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=5',
  'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6',
  'https://images.unsplash.com/photo-1531123414780-f3b2f7d0b0b9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=7',
];

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-dark-100 dark:from-dark-900 dark:to-dark-800 overflow-hidden">
      {/* soft background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-primary-100 dark:bg-primary-900/20 blur-3xl opacity-60"></div>
        <div className="absolute top-1/3 -left-28 w-96 h-96 rounded-full bg-secondary-100 dark:bg-secondary-900/20 blur-3xl opacity-50"></div>
        <div className="absolute bottom-12 right-1/4 w-64 h-64 rounded-full bg-accent-100 dark:bg-accent-900/20 blur-3xl opacity-50"></div>
      </div>

      <div className="container relative z-10 py-24 flex flex-col items-center text-center px-6">
        {/* Image ring / gallery */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {},
          }}
          className="relative mb-8 w-full max-w-5xl"
        >
          {/* Grid for smaller screens, circular layout for larger screens */}
          <div className="hidden lg:block relative h-96 w-full">
            {/* Center card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-2xl bg-white dark:bg-dark-800 shadow-xl flex flex-col items-center justify-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Krishna <span className="text-primary-600 dark:text-primary-400">K</span></h2>
              <p className="text-sm md:text-base text-dark-500 dark:text-dark-300 mt-2 max-w-xs">
                Founder of Innovate & Inspire • Problem Solver • Author • Event Organiser
              </p>
              <div className="mt-4 flex gap-3">
                <a href="#projects" className="btn btn-primary px-6 py-2">View Projects</a>
                <a href="#contact" className="btn btn-outline px-5 py-2">Contact</a>
              </div>
            </motion.div>

            {/* Surrounding images positioned in a circular layout */}
            {imageUrls.slice(0, 7).map((url, idx) => {
              // Angles for 7 images placed around circle
              const angle = (idx / 7) * Math.PI * 2;
              const radius = 180; // distance from center in px
              const x = Math.round(Math.cos(angle) * radius);
              const y = Math.round(Math.sin(angle) * radius);
              return (
                <motion.div
                  key={idx}
                  initial={{ scale: 0.6, opacity: 0, x: x * 0.2, y: y * 0.2 }}
                  animate={{ scale: 1, opacity: 1, x, y }}
                  transition={{ duration: 0.7, delay: 0.1 * idx, type: 'spring', stiffness: 120 }}
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
                >
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 border-white dark:border-dark-700 shadow-lg">
                    <img src={url} alt={`hero-${idx}`} className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Fallback grid for small / medium screens */}
          <div className="lg:hidden grid grid-cols-3 gap-3 justify-items-center items-center mb-6">
            {imageUrls.slice(0, 6).map((url, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="w-24 h-24 rounded-lg overflow-hidden border-2 border-white dark:border-dark-700 shadow-md"
              >
                <img src={url} alt={`hero-grid-${idx}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
            {/* Center large card spanning two columns */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="col-span-3 flex flex-col items-center justify-center mt-2"
            >
              <h2 className="text-2xl font-bold">Krishna <span className="text-primary-600 dark:text-primary-400">K</span></h2>
              <p className="text-sm text-dark-500 dark:text-dark-300 mt-1">Founder • Author • Developer</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Large hero heading for desktop (keeps above images on small screens) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center px-4"
        >
          <h1 className="hidden lg:block text-5xl md:text-6xl font-extrabold mb-2 tracking-tight">
            Krishna <span className="text-primary-600 dark:text-primary-400">K</span>
          </h1>
          <p className="hidden lg:block max-w-2xl mx-auto text-lg md:text-xl text-dark-600 dark:text-dark-300">
            Founder of Innovate & Inspire | Best Coding Engineer '23 🌟 | International Author 📚
          </p>
        </motion.div>

        {/* Secondary CTA for mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex gap-3"
        >
          <a href="#projects" className="btn btn-primary px-6 py-2">View Projects</a>
          <a href="#contact" className="btn btn-outline px-5 py-2">Contact Me</a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-dark-400 dark:text-dark-500"
        >
          <span className="mb-2">Scroll Down</span>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
