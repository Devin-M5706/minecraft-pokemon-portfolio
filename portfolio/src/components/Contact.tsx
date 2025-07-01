import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, MessageSquare, Phone, Send, Twitter } from 'lucide-react';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@yourportfolio.com',
      color: 'pokemon-red',
      action: 'mailto:hello@yourportfolio.com',
    },
    {
      icon: MessageSquare,
      title: 'Discord',
      value: '@yourusername',
      color: 'pokemon-blue',
      action: '#',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Digital World',
      color: 'pokemon-green',
      action: '#',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      color: 'pokemon-yellow',
      action: 'tel:+15551234567',
    },
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: '#', color: 'pokemon-purple' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'minecraft-diamond' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'pokemon-blue' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message sent! Thanks for reaching out!');
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
            LET'S CONNECT!
          </h2>
          <div className="w-24 h-1 bg-minecraft-gold mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to start a new adventure together? Let's build something amazing!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-pixel text-minecraft-gold text-2xl mb-8">GET IN TOUCH</h3>
            
            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.action}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`pokemon-card border-2 border-${method.color} block p-6 hover:scale-105 transition-transform duration-300`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-${method.color} rounded-lg flex items-center justify-center`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-pixel text-white text-sm">{method.title}</h4>
                      <p className="text-gray-300">{method.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-pixel text-minecraft-gold text-lg mb-4">FOLLOW ME</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className={`w-12 h-12 bg-${social.color} rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-pixel text-minecraft-gold text-2xl mb-8">SEND A MESSAGE</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label className="block font-pixel text-white text-sm mb-2">NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 border-minecraft-diamond rounded-lg text-white font-pixel text-sm focus:outline-none focus:border-minecraft-gold transition-colors"
                    placeholder="Your Name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label className="block font-pixel text-white text-sm mb-2">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 border-minecraft-diamond rounded-lg text-white font-pixel text-sm focus:outline-none focus:border-minecraft-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label className="block font-pixel text-white text-sm mb-2">SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border-2 border-minecraft-diamond rounded-lg text-white font-pixel text-sm focus:outline-none focus:border-minecraft-gold transition-colors"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label className="block font-pixel text-white text-sm mb-2">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-minecraft-diamond rounded-lg text-white font-pixel text-sm focus:outline-none focus:border-minecraft-gold transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-minecraft-diamond text-black font-pixel text-sm rounded-lg hover:bg-minecraft-gold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Fun Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="minecraft-block p-8 rounded-lg">
            <h3 className="font-pixel text-minecraft-gold text-xl mb-4">READY FOR AN ADVENTURE?</h3>
            <p className="text-gray-300">
              Whether you want to build the next Minecraft or catch 'em all in a new Pokemon game, 
              I'm ready to help bring your ideas to life!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 