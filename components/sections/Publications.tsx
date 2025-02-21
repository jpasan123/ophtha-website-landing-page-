'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FileText, ExternalLink } from 'lucide-react';

export function Publications() {
  const publications = [
    {
      title: 'AI-Powered Detection of Diabetic Retinopathy',
      journal: 'Journal of Medical AI',
      year: '2024',
      link: '#',
      image: 'https://picsum.photos/400/300',
    },
    {
      title: 'Machine Learning in Ophthalmology',
      journal: 'Digital Health Frontiers',
      year: '2023',
      link: '#',
      image: 'https://picsum.photos/401/300',
    },
    {
      title: 'Future of Automated Medical Diagnosis',
      journal: 'Tech in Medicine',
      year: '2023',
      link: '#',
      image: 'https://picsum.photos/402/300',
    },
  ];

  return (
    <section id="publications" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Publications</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Leading research and innovation in AI-powered medical diagnostics.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {publications.map((publication) => (
            <motion.article 
              key={publication.title}
              className="flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full">
                <Image
                  src={publication.image}
                  alt={publication.title}
                  width={400}
                  height={300}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={publication.year} className="text-gray-500">
                    {publication.year}
                  </time>
                  <span className="text-gray-500">{publication.journal}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={publication.link} className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>{publication.title}</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}