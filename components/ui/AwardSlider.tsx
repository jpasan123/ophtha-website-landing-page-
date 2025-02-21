'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const awards = [
  {
    image: 'https://i.ibb.co/mrwqvrKt/Whats-App-Image-2025-02-22-at-00-50-18-e376f99b.jpg',
    title: '2018 Kotiyak Watina Adahasak - First Runners Up',
    description: 'Ophtha AES was awarded as the first runners up in "Sirasa Kotiyak Watina Adahasak" competition in 2018.'
  },
  {
    image: 'https://i.ibb.co/wF1bpd4R/Whats-App-Image-2025-02-22-at-00-50-37-82cfde92.jpg',
    title: '2023 Slasscom National Ingenuity Awards',
    description: 'Runners Up - Best Disruptive Innovation - Western Province.'
  },
  {
    image: 'https://i.ibb.co/Jjx6QX23/Whats-App-Image-2025-02-22-at-00-51-21-597da639.jpg',
    title: '2019 Seedstar Local - Sri Lanka Final 20',
    description: 'We have been selected to final 20 round of Seedstars Sri Lanka, startup competition in 2019.'
  },
  {
    image: 'https://i.ibb.co/rKxbdBxd/Whats-App-Image-2025-02-22-at-00-51-36-6fdbce5f.jpg',
    title: '2021 - SLT Mobile Entrepreneurship Studio',
    description: 'Out of 60 applications, in 2021, we have been selected for seed funding of 1.5 million LKR by SLTMobitel Entrepreneurship Studio by being among final 20.'
  },
  {
    image: 'https://i.ibb.co/CF25Y5C/Whats-App-Image-2025-02-22-at-00-52-57-4e1919b7.jpg',
    title: '2021 Spiraling by ICTA',
    description: 'Out of 130 applications, in 2021, we have been selected for seed funding of 1.5 million LKR by Spirilation by being among the final 20.'
  }
];

export function AwardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % awards.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full mt-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="relative w-full md:w-1/2 h-[300px]">
            <Image
              src={awards[currentIndex].image}
              alt={awards[currentIndex].title}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#1ED4D4] mb-4">
              {awards[currentIndex].title}
            </h3>
            <p className="text-gray-300">
              {awards[currentIndex].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-2 mt-8">
        {awards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#1ED4D4]' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}