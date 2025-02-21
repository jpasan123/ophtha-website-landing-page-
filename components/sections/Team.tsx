'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Dr. Dhanushi Hettiarachchi',
    qualification: 'MBBS',
    role: 'Chief Executive Officer',
    image: 'https://i.ibb.co/fY9WyyCx/Whats-App-Image-2025-02-22-at-01-58-20-a0ab79c4.jpg'
  },
  {
    name: 'Eng. Shashika Chamod Munasinghe',
    qualification: 'BSc. Eng, MSc. Eng',
    role: 'Chief Technology Officer',
    image: 'https://i.ibb.co/NgCdMfnw/Whats-App-Image-2025-02-22-at-01-58-21-656d583e.jpg'
  },
  {
    name: 'Dr. Dushani Thennakoon',
    qualification: 'MBBS',
    role: 'Head of clinical studies',
    image: 'https://i.ibb.co/YzrtRSH/Whats-App-Image-2025-02-22-at-01-58-20-1ba37bef.jpg'
  },
  {
    name: 'Eng. Dilki Dandeniarachchi',
    qualification: 'BSc. Eng, MSc. Business intelligence',
    role: 'Software Engineer',
    image: 'https://i.ibb.co/392vfNVH/Whats-App-Image-2025-02-22-at-01-58-20-56738711.jpg'
  },
  {
    name: 'Dr. Sharathi Sirimanne',
    qualification: 'MBBS',
    role: 'Researcher',
    image: 'https://i.ibb.co/9kLgq4HK/Whats-App-Image-2025-02-22-at-01-58-20-0bf6271d.jpg'
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-[#000033]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#1ED4D4] sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Meet the experts behind Ophtha AES
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
             <div className="relative h-72 w-72 overflow-hidden rounded-full bg-[#000044] shadow-xl"> {/* Changed width and rounded-lg to rounded-full */}
  <Image
    src={member.image}
    alt={member.name}
    layout="fill"
    objectFit="cover"
    className="transition-transform duration-300 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-[#000033] to-transparent opacity-60 rounded-full" /> {/* Added rounded-full */}
  
  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
    <h3 className="text-lg font-semibold text-[#1ED4D4]">
      {member.name}
    </h3>
    <p className="mt-1 text-sm text-gray-300">
      {member.qualification}
    </p>
    <p className="mt-1 text-sm font-medium text-gray-300">
      {member.role}
    </p>
  </div>
</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}