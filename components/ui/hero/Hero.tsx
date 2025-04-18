'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface FeatureCard {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Feature One",
    description: "Brief description of your first main feature or benefit"
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Feature Two",
    description: "Highlight another key aspect of your product or service"
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "Feature Three",
    description: "Describe a third compelling feature of your offering"
  }
];

function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen ">
      {/* Background Elements */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(2,6,23,0.8))]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section - Split Layout */}
        <div className="min-h-screen flex flex-col lg:flex-row">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 p-8 lg:p-20 flex flex-col justify-center"
          >
            <div className="max-w-xl">
              <span className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-4 block">
                Your Tagline Here
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Your Main
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text"> Headline </span>
                Here
              </h1>
              <p className="text-slate-400 text-lg mb-8">
                Your compelling value proposition goes here. Make it clear, concise, and focused on benefits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/primary-cta" 
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  Primary CTA
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/secondary-cta" 
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 border border-slate-700 hover:border-slate-600 text-center"
                >
                  Secondary CTA
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 p-8 lg:p-20 flex items-center"
          >
            <div className="grid gap-6 w-full">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="p-6 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-600 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

    
      </div>
    </div>
  );
}

export default Hero;
