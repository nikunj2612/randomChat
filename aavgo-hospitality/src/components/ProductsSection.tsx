'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  CreditCard, 
  QrCode, 
  MessageSquare, 
  Key, 
  Shield,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const ProductsSection = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Walk-in, Check-in, and Check-out",
      description: "Guests can use the Smart Reception for seamless self-service operations"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Multiple Payment Options",
      description: "Accept cash, swipe, EMV chip, Google Pay, Apple Pay, and tap payments"
    },
    {
      icon: <QrCode className="h-6 w-6" />,
      title: "QR Code Key Dispensing",
      description: "Guests can scan QR code to dispense keys from the smart dispenser"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "24/7 Guest Support",
      description: "Get answers to questions about the hotel and communicate with live support"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Integration",
      description: "Text, chat, or call from rooms to talk to live support staff"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Operations",
      description: "Cash deposit returns during check-out with complete security"
    },
    {
      icon: <Key className="h-6 w-6" />,
      title: "RFID and Mobile Keys",
      description: "Support for both RFID keys and mobile key technology"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "No Infrastructure Changes",
      description: "Implement without changing your existing hotel infrastructure"
    }
  ];

  const products = [
    {
      title: "Smart Reception Solution",
      description: "Comprehensive contactless front desk technology that executes all human operations, saves costs and improves customer service.",
      features: ["Contactless Check-in/out", "Multi-payment Support", "Key Dispensing", "24/7 Support"],
      ctaText: "Learn More",
      ctaLink: "/products/smart-reception",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Guest Experience App",
      description: "Provide guests comfort and convenience to use your amenities and services at their fingertips with our digital solution.",
      features: ["Mobile Check-in", "Upsells & Services", "In-room Messaging", "Digital Concierge"],
      ctaText: "Explore App",
      ctaLink: "/products/guest-experience",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Staff Operations Platform",
      description: "Save costs, increase efficiency and productivity of your staff with insights through in-depth reporting and analytics.",
      features: ["Digital Workflow", "Staff Management", "Analytics & Reports", "Efficiency Tools"],
      ctaText: "Get Started",
      ctaLink: "/products/staff-operations",
      gradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            CONTACTLESS TECHNOLOGY
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Aavgo's Smart Reception Solution and 360° Platform
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive technologies that execute all human operations, save on costs and improve customer service.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Products Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-r ${product.gradient} relative`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <h4 className="text-xl font-bold">{product.title}</h4>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={product.ctaLink}
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors group"
                >
                  {product.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-2xl p-12 shadow-sm"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Hotel Operations?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of hotels that have revolutionized their operations with Aavgo's 360° Platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;