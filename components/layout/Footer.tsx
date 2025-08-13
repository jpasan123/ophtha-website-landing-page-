'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '#about' },
      { name: 'Features', href: '#features' },
      { name: 'Learn', href: '#learn' },
      { name: 'Team', href: '#team' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
      ],
    social: [
      { name: 'Facebook', icon: Facebook, href: '#' },
      { name: 'Twitter', icon: Twitter, href: '#' },
      { name: 'LinkedIn', icon: Linkedin, href: '#' },
      { name: 'Instagram', icon: Instagram, href: '#' },
    ],
  };

  return (
    <footer className="bg-[#000033]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://i.ibb.co/pB6bGWBm/Whats-App-Image-2024-10-31-at-07-58-49-d1b9d4a1-3.jpg" // Add your logo path here
                alt="Ophtha AES Logo"
                width={150}
                height={50}
                className="mb-4"
              />
              <p className="text-gray-300 max-w-md">
              OPHTHA AES (Automatic Eye Screening) is an application for screening and identifying diabetic retinopathy
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-[#1ED4D4] font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-[#1ED4D4] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-[#1ED4D4] font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-[#1ED4D4]" />
                <span>Bay 9, Trace Expert City, Maradana Road, Colombo 10</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-[#1ED4D4]" />
                <span>076-6210121</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-[#1ED4D4]" />
                <span>dhanuh.es@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social Links and Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex justify-center space-x-8 mb-8">
        {navigation.legal.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-400 hover:text-[#1ED4D4] transition-colors text-sm"
          >
            {item.name}
          </Link>
        ))}
      </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-[#1ED4D4] transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ophtha AES. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}