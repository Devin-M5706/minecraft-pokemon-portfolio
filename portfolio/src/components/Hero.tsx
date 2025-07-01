import { motion } from 'framer-motion';
import { ChevronDown, Code, Gamepad2, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isTyping, setIsTyping] = useState(true);

  const pokemonTypes = ['Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Fighting'];
  const [currentType, setCurrentType] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentType((prev) => (prev + 1) % pokemonTypes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-pixel text-white mb-4">
            <span className="text-minecraft-diamond">HELLO</span>
            <br />
            <span className="text-minecraft-gold">WORLD!</span>
          </h1>
          
          <motion.div
            className="text-xl md:text-2xl font-sans text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span>I'm a </span>
            <motion.span
              key={currentType}
              className="text-pokemon-red font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {pokemonTypes[currentType]}
            </motion.span>
            <span> type developer</span>
          </motion.div>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with the creativity of Minecraft and the strategy of Pokemon.
            <br />
            <span className="text-minecraft-diamond">Building blocks of code, one pixel at a time.</span>
          </p>
        </motion.div>

        {/* Interactive Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <motion.div
            className="pokemon-card"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="w-8 h-8 mx-auto mb-2 text-pokemon-yellow" />
            <h3 className="font-pixel text-sm text-white">PROJECTS</h3>
            <p className="text-2xl font-bold text-pokemon-yellow">25+</p>
          </motion.div>

          <motion.div
            className="pokemon-card"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Gamepad2 className="w-8 h-8 mx-auto mb-2 text-pokemon-yellow" />
            <h3 className="font-pixel text-sm text-white">GAMES MADE</h3>
            <p className="text-2xl font-bold text-pokemon-yellow">10+</p>
          </motion.div>

          <motion.div
            className="pokemon-card"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-8 h-8 mx-auto mb-2 text-pokemon-yellow" />
            <h3 className="font-pixel text-sm text-white">EXPERIENCE</h3>
            <p className="text-2xl font-bold text-pokemon-yellow">3+ YRS</p>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            className="px-8 py-4 bg-minecraft-diamond text-black font-pixel text-sm rounded-lg hover:bg-minecraft-gold transition-colors duration-300 glow-effect"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW PROJECTS
          </motion.button>
          
          <motion.button
            className="px-8 py-4 border-2 border-minecraft-diamond text-minecraft-diamond font-pixel text-sm rounded-lg hover:bg-minecraft-diamond hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTACT ME
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-minecraft-diamond" />
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-10 w-16 h-16 minecraft-block opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-20 left-10 w-12 h-12 rounded-full bg-pokemon-red opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero; 