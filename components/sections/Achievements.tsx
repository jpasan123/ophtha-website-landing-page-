'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';
import { AwardSlider } from '../ui/AwardSlider';

export function Achievements() {
  const stats = [
    { name: 'Accuracy Rate', value: '98%', icon: Target },
    { name: 'Patients Served', value: '10,000+', icon: Users },
    { name: 'Analysis Time', value: '60 sec', icon: Clock },
    { name: 'Medical Awards', value: '15+', icon: Award },
  ];

  return (
    <section id="achievements" className="py-24 bg-[#000033]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Achievements</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Setting new standards in AI-powered medical diagnostics with proven results and recognition.
          </p>
        </motion.div>

        {/* <motion.dl 
          className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col items-center gap-y-4 border border-gray-800 rounded-lg p-8">
              <stat.icon className="h-8 w-8 text-[#1ED4D4]" />
              <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
            </div>
          ))}
        </motion.dl> */}

        <AwardSlider />
      </div>
    </section>
  );
}