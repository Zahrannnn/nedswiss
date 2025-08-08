'use client'
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Card = ({i, title, description, src, url, color, progress, range, targetScale}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Add skew based on even/odd index
  const skewY = i % 2 === 0 ? -1 : 1; // Even cards skew left, odd cards skew right
 
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{
          backgroundColor: color, 
          scale, 
          top:`calc(-5vh + ${i * 25}px)`,
          skewY: `${skewY}deg`,
          rotateY: i % 2 === 0 ? 2 : -2,
        }} 
        className="flex flex-col relative h-[500px] w-[500px] md:w-[1200px] rounded-[25px] p-[50px] origin-top"
      >
        {/* Search Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-white text-4xl font-bold mb-6">{title}</h2>

        {/* Description */}
        <p className="text-center text-white text-lg mb-12 max-w-2xl mx-auto leading-relaxed">{description}</p>

        {/* Features List */}
        <div className="flex flex-col space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center text-white text-xl">
            <svg className="w-6 h-6 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Long-form & Analytical Blog Articles</span>
          </div>
          <div className="flex items-center text-white text-xl">
            <svg className="w-6 h-6 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>On-page SEO Optimization</span>
          </div>
          <div className="flex items-center text-white text-xl">
            <svg className="w-6 h-6 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Technical SEO & Performance Reports</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card