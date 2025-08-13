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
  },
  {
    image: 'https://i.ibb.co/CCGGXR5/image.png',
    title: 'Ophtha Innovations named Runners up at CIMA Launch Pad 2023',
    description: 'Ophtha Innovations Achieves Remarkable Success as Runners-Up at the 2023 CIMA Launch Pad Competition'
  },
  {
    image: 'https://i.ibb.co/Q3dtL68q/Whats-App-Image-2024-02-20-at-15-56-11-26580c27.jpg',
    title: 'Senior Citizen Abinandana 2024 - Matara Health Camp',
    description: 'In 2024, we launched our first community health camp in Matara for 74 patients to detect early signs of diabetic retinopathy and raise awareness on routine eye care and diabetes management.'
  },
  {
    image: 'https://i.ibb.co/DfCGd4Wx/IMG-6931.jpg',
    title: 'Praana 4.0 - The blood donation campaign and free medical checkup.',
    description: 'In 2024, Ophtha Innovations, in collaboration with the Rotary Club of Sri Jayawardanapura, Techno Vision, and the Rotaract Club of CINEC, held Praana 4.0 at Sri Sudharmarama Viharaya, Battaramulla, providing 31 participants with free diabetic retinopathy screening, general health check-ups, and eye examinations to promote early detection and prevention of non-communicable diseases in Sri Lanka.'
  },
  {
    image: 'https://i.ibb.co/VcyLp9jf/1724768447944-e-2147483647-v-beta-t-Pyo-BYe5g9-Nq2fwie-Wjry8-WAp-IF1-Hb8bqse8v-Mv-An10.jpg',
    title: 'Ophtha Innovations named Runners-up at She Loves Tech 2024',
    description: 'Ophtha Innovations emerged as the Runners-up at She Loves Tech 2024, proudly representing Sri Lanka at the regional rounds in India.'
  },
  {
    image: 'https://i.ibb.co/xSHKpVCr/Inviting-Card.jpg',
    title: 'Ophtha Innovations Named Hemas Slingshot 2.0 Finalist',
    description: 'Selected as a finalist in the Hemas Slingshot 2.0 accelerator, recognizing Ophtha Innovations progress and impact in developing med-tech solutions for diabetic retinopathy screening.'
  },
  {
    image: 'https://i.ibb.co/ymwWSxr6/IMG-9987.jpg',
    title: 'Trace Expert City Health Camp for Western Province Police Officers',
    description: 'On 26th May 2025, at Trace Expert City, Colombo, Ophtha Innovations, with the College of Ophthalmologists of Sri Lanka, Vision Care Optical Services, and Techno Vision, screened 54 Western Province police officers for eye and vascular health to promote early detection of diabetic retinopathy, ocular conditions, and cardiovascular risks.'
  },
  {
    image: 'https://i.ibb.co/d4wxk0QD/Copy-of-IMG-9516.jpg',
    title: 'Second Trace Expert City Health Camp for Western Province Police Officers',
    description: 'On 21st June 2025 at Trace Expert City, Ophtha Innovations, Techno Vision, and Wickramarachchi Opticals provided 41 Western Province police officers with free vision and hearing screenings to promote early detection and preventive care.'
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