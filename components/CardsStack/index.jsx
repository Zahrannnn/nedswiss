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
  
  // Add skew based on even/odd index - reduced for mobile
  const skewY = i % 2 === 0 ? -1 : 1; // Even cards skew left, odd cards skew right

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4 sm:px-6 lg:px-8">
      <motion.div 
        style={{
          backgroundColor: color, 
          scale, 
          top:`calc(-5vh + ${i * 25}px)`,
          skewY: `${skewY}deg`,
          rotateY: i % 2 === 0 ? 2 : -2,
        }} 
        className="flex flex-col relative 
                   h-[400px] w-full max-w-[350px] 
                   sm:h-[450px] sm:max-w-[600px] 
                   md:h-[500px] md:max-w-[800px] 
                   lg:h-[500px] lg:max-w-[1000px] 
                   xl:h-[500px] xl:max-w-[1200px] 
                   rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] 
                   p-4 sm:p-6 md:p-8 lg:p-12 xl:p-[50px] 
                   origin-top"
      >
        {/* Search Icon */}
        <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 sm:border-3 lg:border-4 border-white flex items-center justify-center">
            <svg 
              width="20" 
              height="20" 
              className="sm:w-6 sm:h-6 lg:w-8 lg:h-8" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-white 
                       text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                       font-bold 
                       mb-3 sm:mb-4 lg:mb-6 
                       px-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-center text-white 
                      text-sm sm:text-base lg:text-lg 
                      mb-6 sm:mb-8 lg:mb-12 
                      max-w-xl mx-auto 
                      leading-relaxed 
                      px-2">
          {description}
        </p>

        {/* Features List */}
        <div className="flex flex-col 
                        space-y-2 sm:space-y-3 lg:space-y-4 
                        max-w-xl mx-auto 
                        w-full">
          <div className="flex items-start sm:items-center text-white 
                          text-sm sm:text-base lg:text-xl 
                          px-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 
                           mr-2 sm:mr-3 lg:mr-4 
                           flex-shrink-0 
                           mt-1 sm:mt-0" 
                 fill="none" 
                 stroke="currentColor" 
                 viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="leading-tight">Long-form & Analytical Blog Articles</span>
          </div>
          <div className="flex items-start sm:items-center text-white 
                          text-sm sm:text-base lg:text-xl 
                          px-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 
                           mr-2 sm:mr-3 lg:mr-4 
                           flex-shrink-0 
                           mt-1 sm:mt-0" 
                 fill="none" 
                 stroke="currentColor" 
                 viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="leading-tight">On-page SEO Optimization</span>
          </div>
          <div className="flex items-start sm:items-center text-white 
                          text-sm sm:text-base lg:text-xl 
                          px-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 
                           mr-2 sm:mr-3 lg:mr-4 
                           flex-shrink-0 
                           mt-1 sm:mt-0" 
                 fill="none" 
                 stroke="currentColor" 
                 viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="leading-tight">Technical SEO & Performance Reports</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card