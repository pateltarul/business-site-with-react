import React from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    products: [
      { label: 'All Colors', action: () => scrollToSection('products') },
      { label: 'Warm Tones', action: () => scrollToSection('products') },
      { label: 'Cool Tones', action: () => scrollToSection('products') },
      { label: 'Neutrals', action: () => scrollToSection('products') }
    ],
    company: [
      { label: 'About Us', action: () => {} },
      { label: 'Our Story', action: () => {} },
      { label: 'Careers', action: () => {} },
      { label: 'Blog', action: () => {} }
    ],
    support: [
      { label: 'FAQ', action: () => {} },
      { label: 'Shipping', action: () => {} },
      { label: 'Returns', action: () => {} },
      { label: 'Contact', action: () => scrollToSection('contact') }
    ]
  };

  const socialLinks = [
    { icon: Facebook, link: '#' },
    { icon: Instagram, link: '#' },
    { icon: Twitter, link: '#' },
    { icon: Linkedin, link: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Paintbrush className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">AXIS PAINTS</span> {/* Changed company name */}
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your space with our premium wall paints. Quality colors that bring life and personality to every room.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block">Products</span>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block">Company</span>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block">Support</span>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 AXIS PAINTS. All rights reserved. {/* Changed company name */}
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;