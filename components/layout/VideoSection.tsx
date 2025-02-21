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

                    {/* YouTube Video */}
                    <motion.div 
                        className="relative aspect-video rounded-lg overflow-hidden"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {showYoutubeVideo ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/8POsPbfft8k?autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <div className="relative w-full h-full bg-black">
                                <img
                                    src={`https://img.youtube.com/vi/8POsPbfft8k/maxresdefault.jpg`}
                                    alt="Video thumbnail"
                                    className="w-full h-full object-cover opacity-75"
                                />
                                <button
                                    onClick={() => setShowYoutubeVideo(true)}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1ED4D4] text-white px-6 py-3 rounded-md hover:bg-[#17B8B8] transition-colors flex items-center gap-2"
                                >
                                    <svg 
                                        className="w-6 h-6" 
                                        fill="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                    Watch Video
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}