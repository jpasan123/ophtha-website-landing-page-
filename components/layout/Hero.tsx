'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-[#000033] overflow-hidden">
      <div className="relative pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
            <div className="max-w-2xl">
              <motion.h1 
                className="text-4xl font-bold tracking-tight text-[#1ED4D4] sm:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                AI Diagnostic system to detect Diabetic Retinopathy
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Analyzed report in 1 minute for 1$
              </motion.p>
              <motion.div 
                className="mt-10 flex items-center gap-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link
                  href="/try-now"
                  className="rounded-md bg-[#1ED4D4] px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#17B8B8] transition-colors"
                >
                  Try Now
                </Link>
              </motion.div>
            </div>
            <motion.div 
              className="relative w-full h-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="https://i.ibb.co/jPx3rVDv/Whats-App-Image-2025-02-21-at-22-28-14-c3a2dc55.jpg"
                  alt="Medical Equipment"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-2xl"
                  priority
                />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
                  <Image
                    src="https://i.ibb.co/JRPy6pnM/Whats-App-Image-2025-02-21-at-22-28-29-7f6169e8.jpg"
                    alt="AI Visualization"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
