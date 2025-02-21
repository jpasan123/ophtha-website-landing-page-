'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FileText, ExternalLink } from 'lucide-react';

export function Publications() {
  const publications = [
    {
      title: 'A Rule based Approach for Hemorrhage Detection in Digital Fundus Photographs',
      description: 'Hemorrhages are one of the earliest signs of Diabetic Retinopathy, hence accurate detection of hemorrhages is crucial in an automated DR detection system. In this paper, a novel and robust rule based methodology for automated detection of hemorrhages is proposed.',
      journal: 'IEEE Conference Publication',
      year: '2021',
      link: 'https://ieeexplore.ieee.org/document/9657220',
      image: 'https://i.ibb.co/Q3nBfX72/OIP-14.jpg', // You'll need to add appropriate images
    },
    {
      title: 'A Novel Method of Detecting Neovascularization Regions in Digital Fundus Photographs',
      description: 'Neovascularization is one of the retinal signs we see in the proliferative stage of diabetic retinopathy (DR). This paper highlights a novel and a robust methodology for neovascularization detection.',
      journal: 'IEEE Conference Publication',
      year: '2022',
      link: 'https://ieeexplore.ieee.org/document/9945014',
      image: 'https://i.ibb.co/CpMzPbMb/OIP-13.jpg', // You'll need to add appropriate images
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
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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
                  width={600}
                  height={400}
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
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    {publication.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600 line-clamp-3">
                    {publication.description}
                  </p>
                  <a 
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-6 py-2 bg-[#000033] text-white rounded-md hover:bg-[#000044] transition-colors"
                  >
                    Read More
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}