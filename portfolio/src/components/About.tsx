import { motion } from 'framer-motion';
import { Award, Heart, Shield, Target, Users, Zap } from 'lucide-react';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tabs = [
    { id: 'story', name: 'My Story', icon: Heart },
    { id: 'mission', name: 'Mission', icon: Target },
    { id: 'values', name: 'Values', icon: Shield },
  ];

  const stats = [
    { icon: Users, label: 'Team Projects', value: '15+' },
    { icon: Award, label: 'Awards Won', value: '5' },
    { icon: Zap, label: 'Technologies', value: '20+' },
  ];

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
            ABOUT ME
          </h2>
          <div className="w-24 h-1 bg-minecraft-gold mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Minecraft-style avatar */}
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto relative">
                <div className="w-full h-full minecraft-block rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-minecraft-diamond to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="font-pixel text-2xl text-white">DEV</span>
                    </div>
                    <h3 className="font-pixel text-minecraft-gold text-lg">Level 25 Developer</h3>
                    <p className="text-sm text-gray-300">Minecraft & Pokemon Enthusiast</p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-pokemon-red rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-pokemon-blue rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-minecraft-diamond" />
                  <p className="font-pixel text-sm text-white">{stat.label}</p>
                  <p className="text-xl font-bold text-minecraft-gold">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Tab Navigation */}
            <div className="flex space-x-2 mb-8">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-pixel text-xs transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-minecraft-diamond text-black'
                      : 'text-white hover:text-minecraft-diamond hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pokemon-card"
            >
              {activeTab === 'story' && (
                <div>
                  <h3 className="font-pixel text-minecraft-gold text-lg mb-4">My Journey</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Like a Pokemon trainer starting their adventure, I began my coding journey with curiosity and determination. 
                    From my first "Hello World" to building complex applications, every line of code has been a step forward in my quest.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Just as Minecraft teaches us to build block by block, I've learned that great software is crafted piece by piece, 
                    with patience, creativity, and a love for problem-solving.
                  </p>
                </div>
              )}

              {activeTab === 'mission' && (
                <div>
                  <h3 className="font-pixel text-minecraft-gold text-lg mb-4">My Mission</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    To create digital experiences that bring joy and solve real problems, just like how Pokemon games bring adventure 
                    and Minecraft brings endless possibilities to players worldwide.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    I believe in writing clean, maintainable code that not only works but also tells a story - 
                    the story of how technology can make the world a better place.
                  </p>
                </div>
              )}

              {activeTab === 'values' && (
                <div>
                  <h3 className="font-pixel text-minecraft-gold text-lg mb-4">My Values</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-pokemon-red rounded-full"></div>
                      <span className="text-gray-300">Creativity in problem-solving</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-pokemon-blue rounded-full"></div>
                      <span className="text-gray-300">Continuous learning and growth</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-pokemon-green rounded-full"></div>
                      <span className="text-gray-300">Collaboration and teamwork</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-pokemon-yellow rounded-full"></div>
                      <span className="text-gray-300">Quality and attention to detail</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 