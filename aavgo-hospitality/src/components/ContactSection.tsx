'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Shield
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Thank you for your message! We will contact you soon.');
  };

  return (
    <>
      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                For More Info.
              </h2>
              <h3 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-8">
                Feel Free to Contact Us.
              </h3>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Fill out the form and we will contact you soon. At Aavgo, our focus is to 
                innovate in hospitality tech and deliver solutions that can advance how hotels operate.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (877) 83-AAVGO</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">sales@aavgo.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">1730 S Amphlett Blvd, Suite 125<br />San Mateo, CA 94402</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-blue-400">Aavgo</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Revolutionizing how hotels operate with AI-powered solutions and contactless technology.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+1 (877) 83-AAVGO</p>
                <p>sales@aavgo.com</p>
                <p>1730 S Amphlett Blvd, Suite 125<br />San Mateo, CA 94402</p>
              </div>
            </div>

            {/* Our Products */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Products</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="/products" className="hover:text-blue-400 transition-colors">Our Products</a></li>
                <li><a href="/products/smart-reception" className="hover:text-blue-400 transition-colors">Virtual Front Desk</a></li>
                <li><a href="/products/guest-experience" className="hover:text-blue-400 transition-colors">Guest Experience App</a></li>
                <li><a href="/products/staff-operations" className="hover:text-blue-400 transition-colors">Staff Operations App</a></li>
              </ul>
            </div>

            {/* Who We Are */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Who We Are</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="/partnerships" className="hover:text-blue-400 transition-colors">Partnership</a></li>
                <li><a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="/case-studies" className="hover:text-blue-400 transition-colors">Case Study</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-blue-400 transition-colors">Terms</a></li>
              </ul>
              
              {/* Social Links */}
              <div className="mt-8">
                <h5 className="text-sm font-semibold mb-4">Follow</h5>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © ParshvaCorp. 2024. All Rights Reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <Shield className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-gray-400 text-sm">Secured By SSL</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;