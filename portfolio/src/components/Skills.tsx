import { motion } from 'framer-motion';
import { Code, Database, Gamepad2, Globe, Palette, Smartphone } from 'lucide-react';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: Palette, color: 'pokemon-red' },
    { id: 'backend', name: 'Backend', icon: Database, color: 'pokemon-blue' },
    { id: 'mobile', name: 'Mobile', icon: Smartphone, color: 'pokemon-green' },
    { id: 'gaming', name: 'Game Dev', icon: Gamepad2, color: 'pokemon-yellow' },
    { id: 'tools', name: 'Tools', icon: Code, color: 'pokemon-purple' },
    { id: 'other', name: 'Other', icon: Globe, color: 'minecraft-diamond' },
  ];

  const skills = {
    frontend: [
      { name: 'React', level: 90, type: 'pokemon-red' },
      { name: 'TypeScript', level: 85, type: 'pokemon-blue' },
      { name: 'HTML/CSS', level: 95, type: 'pokemon-green' },
      { name: 'Tailwind CSS', level: 88, type: 'pokemon-yellow' },
      { name: 'Next.js', level: 80, type: 'pokemon-purple' },
    ],
    backend: [
      { name: 'Node.js', level: 85, type: 'pokemon-red' },
      { name: 'Python', level: 80, type: 'pokemon-blue' },
      { name: 'Express.js', level: 82, type: 'pokemon-green' },
      { name: 'MongoDB', level: 75, type: 'pokemon-yellow' },
      { name: 'PostgreSQL', level: 70, type: 'pokemon-purple' },
    ],
    mobile: [
      { name: 'React Native', level: 75, type: 'pokemon-red' },
      { name: 'Flutter', level: 70, type: 'pokemon-blue' },
      { name: 'iOS Development', level: 65, type: 'pokemon-green' },
      { name: 'Android Development', level: 60, type: 'pokemon-yellow' },
    ],
    gaming: [
      { name: 'Unity', level: 70, type: 'pokemon-red' },
      { name: 'C#', level: 75, type: 'pokemon-blue' },
      { name: 'Game Design', level: 80, type: 'pokemon-green' },
      { name: '3D Modeling', level: 60, type: 'pokemon-yellow' },
    ],
    tools: [
      { name: 'Git', level: 90, type: 'pokemon-red' },
      { name: 'Docker', level: 75, type: 'pokemon-blue' },
      { name: 'AWS', level: 70, type: 'pokemon-green' },
      { name: 'CI/CD', level: 80, type: 'pokemon-yellow' },
    ],
    other: [
      { name: 'UI/UX Design', level: 85, type: 'pokemon-red' },
      { name: 'Agile/Scrum', level: 90, type: 'pokemon-blue' },
      { name: 'Problem Solving', level: 95, type: 'pokemon-green' },
      { name: 'Team Leadership', level: 80, type: 'pokemon-yellow' },
    ],
  };

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'pokemon-red': 'bg-pokemon-red',
      'pokemon-blue': 'bg-pokemon-blue',
      'pokemon-green': 'bg-pokemon-green',
      'pokemon-yellow': 'bg-pokemon-yellow',
      'pokemon-purple': 'bg-pokemon-purple',
      'minecraft-diamond': 'bg-minecraft-diamond',
    };
    return colors[type] || 'bg-minecraft-diamond';
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-pixel text-minecraft-diamond mb-4">
            SKILLS & ABILITIES
          </h2>
          <div className="w-24 h-1 bg-minecraft-gold mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Like Pokemon types, each skill has its strengths. Here's my tech stack organized by categories!
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-lg font-pixel text-xs transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-minecraft-diamond text-black glow-effect'
                  : 'bg-black/50 text-white hover:bg-white/10 border border-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-6 h-6 mx-auto mb-2" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skills[selectedCategory as keyof typeof skills].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="pokemon-card"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-pixel text-white text-sm">{skill.name}</h3>
                <span className="text-minecraft-gold font-bold">{skill.level}%</span>
              </div>
              
              {/* Minecraft-style progress bar */}
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <motion.div
                  className={`h-full ${getTypeColor(skill.type)} rounded-full relative`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                >
                  {/* Progress bar texture */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </motion.div>
              </div>
              
              {/* Skill level indicator */}
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">Novice</span>
                <span className="text-xs text-gray-400">Expert</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="minecraft-block p-8 rounded-lg">
            <h3 className="font-pixel text-minecraft-gold text-xl mb-4">SKILL SUMMARY</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-minecraft-diamond">20+</div>
                <div className="text-sm text-gray-300">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-minecraft-diamond">5+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-minecraft-diamond">90%</div>
                <div className="text-sm text-gray-300">Average Proficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-minecraft-diamond">∞</div>
                <div className="text-sm text-gray-300">Learning Potential</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 