import { motion } from 'framer-motion';
import { Code, Gamepad2, Github, Globe, Play, Smartphone } from 'lucide-react';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'all', name: 'All Projects', icon: Code },
    { id: 'web', name: 'Web Apps', icon: Globe },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'games', name: 'Games', icon: Gamepad2 },
  ];

  const projects = [
    {
      id: 1,
      title: 'Minecraft Portfolio Builder',
      description: 'A 3D portfolio website built with Three.js, featuring Minecraft-style blocks and interactive elements.',
      category: 'web',
      technologies: ['React', 'Three.js', 'TypeScript', 'Tailwind CSS'],
      image: 'minecraft-portfolio',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      type: 'pokemon-red',
    },
    {
      id: 2,
      title: 'Pokemon Battle Simulator',
      description: 'A turn-based Pokemon battle game with authentic mechanics and beautiful pixel art graphics.',
      category: 'games',
      technologies: ['Unity', 'C#', 'Pixel Art', 'Game Design'],
      image: 'pokemon-battle',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      type: 'pokemon-blue',
    },
    {
      id: 3,
      title: 'Pixel Art Creator',
      description: 'A web-based pixel art editor with Minecraft and Pokemon-inspired tools and templates.',
      category: 'web',
      technologies: ['React', 'Canvas API', 'WebGL', 'LocalStorage'],
      image: 'pixel-art',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      type: 'pokemon-green',
    },
    {
      id: 4,
      title: 'Gaming Social Network',
      description: 'A social platform for gamers to share achievements, organize tournaments, and connect.',
      category: 'web',
      technologies: ['Next.js', 'MongoDB', 'Socket.io', 'AWS'],
      image: 'gaming-social',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      type: 'pokemon-yellow',
    },
    {
      id: 5,
      title: 'Mobile RPG Companion',
      description: 'A companion app for tabletop RPGs with character sheets, dice rolling, and campaign tracking.',
      category: 'mobile',
      technologies: ['React Native', 'Redux', 'SQLite', 'Push Notifications'],
      image: 'rpg-companion',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      type: 'pokemon-purple',
    },
    {
      id: 6,
      title: 'Block Puzzle Game',
      description: 'A Tetris-inspired puzzle game with Minecraft blocks and special power-ups.',
      category: 'games',
      technologies: ['JavaScript', 'Canvas', 'Web Audio API', 'LocalStorage'],
      image: 'block-puzzle',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      type: 'minecraft-diamond',
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'pokemon-red': 'border-pokemon-red',
      'pokemon-blue': 'border-pokemon-blue',
      'pokemon-green': 'border-pokemon-green',
      'pokemon-yellow': 'border-pokemon-yellow',
      'pokemon-purple': 'border-pokemon-purple',
      'minecraft-diamond': 'border-minecraft-diamond',
    };
    return colors[type] || 'border-minecraft-diamond';
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
            PROJECTS & CREATIONS
          </h2>
          <div className="w-24 h-1 bg-minecraft-gold mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Each project is like a Pokemon - unique, powerful, and ready for battle! Here are some of my best creations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-pixel text-sm transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-minecraft-diamond text-black glow-effect'
                  : 'bg-black/50 text-white hover:bg-white/10 border border-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`pokemon-card ${getTypeColor(project.type)} border-2 relative overflow-hidden ${
                project.featured ? 'ring-2 ring-minecraft-gold' : ''
              }`}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 bg-minecraft-gold text-black px-2 py-1 rounded font-pixel text-xs">
                  FEATURED
                </div>
              )}

              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 minecraft-block rounded-lg mx-auto mb-2"></div>
                  <p className="font-pixel text-xs text-gray-400">{project.title}</p>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="font-pixel text-white text-lg">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-black/50 text-minecraft-diamond text-xs rounded font-pixel"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-4">
                  <motion.button
                    className="flex-1 flex items-center justify-center space-x-2 bg-minecraft-diamond text-black px-4 py-2 rounded font-pixel text-xs hover:bg-minecraft-gold transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.button>
                  
                  <motion.button
                    className="flex-1 flex items-center justify-center space-x-2 bg-black/50 text-white px-4 py-2 rounded font-pixel text-xs hover:bg-white/10 transition-colors border border-gray-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="minecraft-block p-8 rounded-lg">
            <h3 className="font-pixel text-minecraft-gold text-xl mb-4">MORE PROJECTS COMING SOON!</h3>
            <p className="text-gray-300 mb-6">
              Like a Pokemon trainer always catching new Pokemon, I'm constantly working on new projects!
            </p>
            <motion.button
              className="px-8 py-4 bg-minecraft-diamond text-black font-pixel text-sm rounded-lg hover:bg-minecraft-gold transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW ALL PROJECTS
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 