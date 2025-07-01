import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React from 'react';

interface Section {
  id: string;
  name: string;
}

interface HeaderProps {
  sections: Section[];
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ sections, currentSection, setCurrentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-minecraft-diamond"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 minecraft-block rounded"></div>
            <span className="font-pixel text-minecraft-diamond text-sm">DEV_PORTFOLIO</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setCurrentSection(section.id)}
                className={`font-pixel text-xs px-4 py-2 rounded transition-all duration-300 ${
                  currentSection === section.id
                    ? 'bg-minecraft-diamond text-black glow-effect'
                    : 'text-white hover:text-minecraft-diamond hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.name}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-white hover:text-minecraft-diamond"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="pb-4 space-y-2">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => {
                  setCurrentSection(section.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left font-pixel text-xs px-4 py-2 rounded transition-all duration-300 ${
                  currentSection === section.id
                    ? 'bg-minecraft-diamond text-black'
                    : 'text-white hover:text-minecraft-diamond hover:bg-white/10'
                }`}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.name}
              </motion.button>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header; 