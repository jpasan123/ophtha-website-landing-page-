'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function VideoSection() {
    const [showYoutubeVideo, setShowYoutubeVideo] = useState(false);

    return (
        <section className="py-20 bg-[#000033]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.h2 
                    className="text-3xl font-bold tracking-tight text-[#1ED4D4] sm:text-4xl text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Ophtha AES
                </motion.h2>
                <motion.p
                    className="text-lg text-white text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    AI Eye Screening System
                </motion.p>
                <motion.p
                    className="text-base text-white text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    As your eyes are the windows to the world, AI-based solutions are being designed, developed, and trained to diagnose retinal-associated diseases and disorders to treat the populace at an affordable cost yet with accurate results. Thus, OPHTHA AES is capable of detecting conditions (automatically segmenting pathological features) related to DR and detecting the existence of DR and pathological features (exudates, hemorrhages, microaneurysms, neovascularization) based on which the classification is done.
                </motion.p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Autoplay Video */}
                    <motion.div 
                        className="relative aspect-video rounded-lg overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <video 
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/videos/Ophtha System.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4">
                        </div>
                    </motion.div>

                    {/* Second Autoplay Video with Thumbnail */}
                    <motion.div 
                        className="relative aspect-video rounded-lg overflow-hidden cursor-pointer"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        onClick={() => setShowYoutubeVideo(!showYoutubeVideo)}
                    >
                        {showYoutubeVideo ? (
                            <video 
                                autoPlay 
                                muted 
                                loop 
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/videos/ophtha_System2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <div className="relative w-full h-full">
                                <img 
                                    src="https://i.ibb.co/8gwKSC64/Screenshot-2025-04-11-132657.png" 
                                    alt="Video Thumbnail" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-black bg-opacity-50 rounded-full p-2">
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-8 w-8 text-white" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor"
                                        >
                                            {showYoutubeVideo ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m-7 4h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.07A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.07a1 1 0 000-1.664z" />
                                            )}
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4">
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}