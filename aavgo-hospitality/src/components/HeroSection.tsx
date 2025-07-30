'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Discover Our Smart Reception",
      subtitle: "The Future of Hospitality",
      description: "Aavgo's 360 Platform directly impacts operations, customer experience and profitability for hospitality.",
      ctaText: "Get a Demo Today",
      ctaLink: "/demo",
      image: "/api/placeholder/600/400",
      bgGradient: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      title: "Guest Experience Platform",
      subtitle: "Contactless Technology",
      description: "A unique Guest Management Platform for mobile check-in, Upsells, Messaging & Much More.",
      ctaText: "Learn More",
      ctaLink: "/products/guest-experience",
      image: "/api/placeholder/600/400",
      bgGradient: "from-purple-600 to-purple-800"
    },
    {
      id: 3,
      title: "Staff Operations Platform",
      subtitle: "Digital Workflow",
      description: "The Staff Operations Platform manages staff to increase efficiency and productivity.",
      ctaText: "Get Started",
      ctaLink: "/products/staff-operations",
      image: "/api/placeholder/600/400",
      bgGradient: "from-green-600 to-green-800"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgGradient}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex items-center justify-between h-full">
              <div className="w-full lg:w-1/2 text-white z-10">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <p className="text-lg font-medium mb-2 opacity-90">
                    {slides[currentSlide].subtitle}
                  </p>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={slides[currentSlide].ctaLink}
                      className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      {slides[currentSlide].ctaText}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors group">
                      <Play className="mr-2 h-5 w-5" />
                      Watch Demo
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Image/Visual Element */}
              <div className="hidden lg:block lg:w-1/2">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="relative"
                >
                  <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Play className="h-12 w-12" />
                      </div>
                      <p className="text-lg font-medium">Interactive Demo</p>
                    </div>
                  </div>
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm"
                  />
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;