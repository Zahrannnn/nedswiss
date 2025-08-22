'use client';

import { useTranslations } from 'next-intl';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const BlogInsights = () => {
  const t = useTranslations('AboutPage.blogInsights');
  const carouselRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Sample blog data - this could come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: "Maximizing ROI with Strategic Social Media Marketing",
      category: "Web Development",
      date: "8 augustus 2025",
      image: "/rocket.png",
      slug: "maximizing-roi-social-media"
    },
    {
      id: 2,
      title: "Maximizing ROI with Strategic Social Media Marketing",
      category: "Web Development", 
      date: "8 augustus 2025",
      image: "/idea.png",
      slug: "strategic-social-media-marketing"
    },
    {
      id: 3,
      title: "The Future of Web Design: Trends for 2025",
      category: "Web Development",
      date: "5 augustus 2025",
      image: "/rocket.png",
      slug: "future-web-design-trends"
    },
    {
      id: 4,
      title: "Building High-Performance React Applications",
      category: "Web Development",
      date: "3 augustus 2025", 
      image: "/idea.png",
      slug: "high-performance-react-apps"
    },
    {
      id: 5,
      title: "SEO Best Practices for Modern Websites",
      category: "SEO Services",
      date: "1 augustus 2025",
      image: "/rocket.png",
      slug: "seo-best-practices"
    },
    {
      id: 6,
      title: "Creating Engaging Social Media Content",
      category: "Social Media",
      date: "29 julius 2025",
      image: "/idea.png",
      slug: "engaging-social-media-content"
    }
  ];

  // Handle responsive detection
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const totalCards = blogPosts.length;
    
    // Responsive card configurations
    let cardsToShow, cardWidth, gap;
    
    if (isMobile) {
      cardsToShow = 1;
      cardWidth = 320; // Mobile card width
      gap = 16; // Smaller gap for mobile
    } else if (isTablet) {
      cardsToShow = 1;
      cardWidth = 400; // Tablet card width
      gap = 24; // Medium gap for tablet
    } else {
      cardsToShow = 2;
      cardWidth = 532; // Desktop: 500px width + 32px gap
      gap = 32; // Desktop gap
    }

    const maxSteps = Math.ceil(totalCards / cardsToShow);

    // Set initial position
    gsap.set(carousel, { x: 0 });

    const animate = () => {
      // Calculate next position
      currentIndex.current += 1;
      
      // If we've reached the end, go back to start
      if (currentIndex.current >= maxSteps) {
        currentIndex.current = 0;
      }

      const targetX = -(currentIndex.current * cardsToShow * cardWidth);

      // Animate to next position
      gsap.to(carousel, {
        x: targetX,
        duration: 0.3,
        ease: "power2.inOut"
      });
    };

    // Start the interval - show each pair briefly, then move to next after 0.5 seconds
    const interval = setInterval(animate, 2000); // Show each pair for 2 seconds total

    // Cleanup
    return () => {
      clearInterval(interval);
    };
  }, [blogPosts.length, isMobile, isTablet]);

  return (
    <section className="py-8 md:py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl lg:text-6xl max-w-4xl mx-auto font-bold text-gray-900 mb-4">
          {t('title.prefix')} <span className="text-red-600">{t('title.highlight')}</span> {t('title.suffix')}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          {t('subtitle')}
        </p>
      </div>

      {/* GSAP Carousel Container */}
      <div className="relative max-w-sm md:max-w-md lg:max-w-5xl mx-auto overflow-hidden px-4 md:px-0">
        <div 
          ref={carouselRef}
          className="flex gap-4 md:gap-6 lg:gap-8"
        >
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-[320px] h-[400px] md:w-[400px] md:h-[450px] lg:w-[500px] lg:h-[500px] group cursor-pointer"
            >
              <div className="w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 lg:hover:-translate-y-3 hover:scale-105">
                {/* Full Card Container with Background */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-6 lg:p-8">
                    {/* Title at the top */}
                    <div className="flex-1 flex items-center justify-center">
                      <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-center leading-tight group-hover:text-red-300 transition-colors duration-300">
                        {post.title}
                      </h3>
                    </div>
                    
                    {/* Category and Date at the bottom */}
                    <div className="flex justify-between items-end text-white">
                      <div>
                        <p className="text-gray-300 text-xs md:text-sm mb-1 uppercase tracking-wide">{t('category')}</p>
                        <p className="font-semibold text-sm md:text-base lg:text-lg">{post.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-300 text-xs md:text-sm mb-1 uppercase tracking-wide">{t('date')}</p>
                        <p className="font-semibold text-sm md:text-base lg:text-lg">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Discover Blogs Button */}
      <div className="text-center mt-8 md:mt-12 px-4">
        <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base">
          {t('discoverButton')}
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </section>
  );
};

export default BlogInsights; 