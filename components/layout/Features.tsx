'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'FULLY-AUTONOMOUS',
    description: 'From retinal image screening to grading for DR standards to reporting and flagging, our system operates as a fully autonomous solution.',
    image: 'https://i.ibb.co/VcV7kR70/Whats-App-Image-2025-02-22-at-00-29-33-cf1bbfb4.jpg',
  },
  {
    title: 'ETDRS GRADING',
    description: 'Our solution offers you with high results performance figures including 87.7% validation accuracy and 81.1% test accuracy.',
    image: 'https://i.ibb.co/whbK8QxS/Whats-App-Image-2025-02-22-at-00-29-37-2a1fee27.jpg',
  },
  {
    title: 'SECURE, CLOUD-BASED DESIGN',
    description: 'Your data is secured and confidential with us. Ophtha AES uses novel and effective encryption and decryption technologies end-to-end, with highest level of compliance.',
    image: 'https://i.ibb.co/nq41v1j1/Whats-App-Image-2025-02-22-at-00-29-48-a20e98c5.jpg',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold tracking-tight text-center text-[#000033] sm:text-4xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Features
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#1ED4D4]" />

          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-24 last:mb-0 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1ED4D4] rounded-full z-10" />

              <div className="w-1/2 px-8">
                <div className={`flex flex-col ${index % 2 === 0 ? 'items-end text-right' : 'items-start'}`}>
                  <h3 className="text-xl font-bold text-[#000033] mb-4">{feature.title}</h3>
                  <p className="text-gray-600 max-w-md">{feature.description}</p>
                </div>
              </div>

              <div className="w-1/2 px-8">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}