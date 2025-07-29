'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    transactions: 0,
    phonesAnswered: 0,
    cashProcessed: 0,
    nightAudits: 0,
    checkIns: 0,
    positiveReviews: 0,
    walkIns: 0
  });

  const targetNumbers = {
    transactions: 1000000,
    phonesAnswered: 250000,
    cashProcessed: 50000000,
    nightAudits: 15000,
    checkIns: 500000,
    positiveReviews: 95,
    walkIns: 75000
  };

  const stats = [
    { 
      key: 'transactions', 
      label: 'Transactions', 
      suffix: '+',
      format: (num: number) => num.toLocaleString()
    },
    { 
      key: 'phonesAnswered', 
      label: 'Phones Answered', 
      suffix: '+',
      format: (num: number) => num.toLocaleString()
    },
    { 
      key: 'cashProcessed', 
      label: 'Cash Processed', 
      prefix: '$',
      suffix: '+',
      format: (num: number) => (num / 1000000).toFixed(1) + 'M'
    },
    { 
      key: 'nightAudits', 
      label: 'Night Audits', 
      suffix: '+',
      format: (num: number) => num.toLocaleString()
    },
    { 
      key: 'checkIns', 
      label: 'Check-ins', 
      suffix: '+',
      format: (num: number) => num.toLocaleString()
    },
    { 
      key: 'positiveReviews', 
      label: 'Positive Reviews', 
      suffix: '%',
      format: (num: number) => num.toString()
    },
    { 
      key: 'walkIns', 
      label: 'Walk-Ins', 
      suffix: '+',
      format: (num: number) => num.toLocaleString()
    }
  ];

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const steps = 60; // Number of animation steps
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        let allComplete = true;

        Object.keys(targetNumbers).forEach(key => {
          const target = targetNumbers[key as keyof typeof targetNumbers];
          const current = prev[key as keyof typeof prev];
          const increment = target / steps;
          
          if (current < target) {
            newCounters[key as keyof typeof newCounters] = Math.min(
              current + increment,
              target
            );
            allComplete = false;
          }
        });

        if (allComplete) {
          clearInterval(interval);
        }

        return newCounters;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Aavgo: Approved by Hoteliers, Recommended by Professionals
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <Quote className="h-12 w-12 mx-auto mb-6 opacity-70" />
            <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-6">
              "Aavgo has come up with a solution which has helped us out consistently. 
              Their technology has transformed our operations and improved our guest satisfaction dramatically."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="font-semibold text-lg">Ankit Panchal</p>
                <p className="text-blue-200">CEO at 365 Hospitality</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                {stat.prefix || ''}
                {stat.format(counters[stat.key as keyof typeof counters])}
                {stat.suffix || ''}
              </div>
              <div className="text-sm lg:text-base text-blue-100 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl lg:text-2xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust Aavgo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Request Demo
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>

      {/* Animated Counter Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;