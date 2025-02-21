'use client';

import { motion } from 'framer-motion';
import { BookOpen, Video, FileText, GraduationCap } from 'lucide-react';

export function Learn() {
  const resources = [
    {
      title: 'Understanding Diabetic Retinopathy',
      description: 'Learn about the causes, symptoms, and treatment of diabetic retinopathy.',
      icon: BookOpen,
      link: '#',
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step guides on using our AI diagnostic system.',
      icon: Video,
      link: '#',
    },
    {
      title: 'Research Papers',
      description: 'Access our published research and technical documentation.',
      icon: FileText,
      link: '#',
    },
    {
      title: 'Training Resources',
      description: 'Educational materials for healthcare professionals.',
      icon: GraduationCap,
      link: '#',
    },
  ];

  return (
    <section id="learn" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Learn</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our comprehensive learning resources and educational materials.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {resources.map((resource) => (
            <motion.div
              key={resource.title}
              className="relative flex flex-col gap-6 bg-white px-6 py-8 ring-1 ring-gray-200 rounded-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1ED4D4] text-white">
                <resource.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-gray-600">{resource.description}</p>
              </div>
              <a
                href={resource.link}
                className="text-sm font-semibold text-[#1ED4D4] hover:text-[#17B8B8] mt-auto"
              >
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}