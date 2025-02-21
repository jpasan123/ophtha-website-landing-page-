'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold tracking-tight text-[#000033] sm:text-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why choose Ophtha AES?
        </motion.h2>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative w-full h-[400px]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://i.ibb.co/kVSPDmC0/Whats-App-Image-2025-02-21-at-23-28-51-e8a02bfb.jpg"
              alt="Ophtha AES Benefits"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ul className="space-y-4">
              {[
                'Industry-leading ophthalmology software solutions',
                'Seamless integration with existing hospital systems',
                'Enhanced patient care and workflow efficiency',
                'Advanced data analytics and reporting',
                '24/7 technical support and training',
                'Customizable solutions for your specific needs'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#1ED4D4] mr-3">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}