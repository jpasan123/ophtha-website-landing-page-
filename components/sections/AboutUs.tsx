'use client';

import { motion } from 'framer-motion';
import { Microscope, Brain, Heart } from 'lucide-react';

export function AboutUs() {
  const features = [
    {
      name: 'Advanced AI Technology',
      description: 'Utilizing state-of-the-art artificial intelligence for accurate retinopathy detection.',
      icon: Brain,
    },
    {
      name: 'Medical Expertise',
      description: 'Developed in collaboration with leading ophthalmologists and medical professionals.',
      icon: Microscope,
    },
    {
      name: 'Patient-Centric',
      description: 'Focused on providing accessible and affordable diagnostic solutions for all patients.',
      icon: Heart,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            We're revolutionizing diabetic retinopathy detection through AI-powered technology, making diagnosis faster, more accurate, and accessible to everyone.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div 
                key={feature.name} 
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1ED4D4]">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <motion.h3 
            className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h3>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            To realize a day where each and everyone on the planet can afford and access modern technological products to lead a healthier life.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <motion.h3 
            className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Vision
          </motion.h3>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            To innovate AI-driven predictive and preventive solutions with the right fusion of advanced diagnostics to save and improve more human lives.
          </motion.p>
        </div>
      </div>
    </section>
  );
}