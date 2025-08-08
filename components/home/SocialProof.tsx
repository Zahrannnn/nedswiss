'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SocialProof = () => {
  const t = useTranslations('HomePage.socialProof');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLQuoteElement>(null);
  const clientInfoRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  
  const testimonials = t.raw('testimonials.items') as Array<{
    quote: string;
    author: string;
    position: string;
    location: string;
    project: string;
  }>;
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
      
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4")
      .from(cardRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out"
      }, "-=0.3")
      .from(navigationRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.5");
      
      // Animate card elements sequentially
      tl.from(quoteRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      }, "-=0.8")
      .from(starsRef.current?.children || [], {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.3")
      .from(testimonialRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.2")
      .from(clientInfoRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.3");
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  // Animation for testimonial changes
  useEffect(() => {
    if (testimonialRef.current && clientInfoRef.current) {
      const tl = gsap.timeline();
      
      tl.to([testimonialRef.current, clientInfoRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in"
      })
      .set([testimonialRef.current, clientInfoRef.current], {
        y: 20
      })
      .to([testimonialRef.current, clientInfoRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  }, [currentTestimonial]);
  
  const handlePrevious = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const handleDotClick = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black">{t('title').split(' ')[0]} </span>
            <span className="text-red-600">{t('title').split(' ')[1]}</span>
          </h2>
          <p ref={subtitleRef} className="text-lg md:text-xl max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <div 
            ref={cardRef}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-5xl mx-auto hover:shadow-2xl transition-shadow duration-300"
            onMouseEnter={() => {
              gsap.to(cardRef.current, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
              });
            }}
            onMouseLeave={() => {
              gsap.to(cardRef.current, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
              });
            }}
          >
            {/* Quote Icon */}
            <div ref={quoteRef} className="text-pink-200 text-7xl font-serif mb-4">
              &#8220;&#8221;
            </div>

            {/* Star Rating */}
            <div ref={starsRef} className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star} 
                  className="w-8 h-8 text-yellow-400 hover:scale-110 transition-transform duration-200" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.2,
                      rotation: 10,
                      duration: 0.2,
                      ease: "power2.out"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      rotation: 0,
                      duration: 0.2,
                      ease: "power2.out"
                    });
                  }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote ref={testimonialRef} className="text-center text-xl md:text-2xl font-medium mb-8">
              &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
            </blockquote>

            {/* Client Info */}
            <div ref={clientInfoRef} className="flex flex-col md:flex-row items-center justify-center">
              <div className="mb-4 md:mb-0 md:mr-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/company.jpg" 
                    alt={testimonials[currentTestimonial].author} 
                    width={80} 
                    height={80} 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold">{testimonials[currentTestimonial].author}</h4>
                <p className="text-gray-700">{testimonials[currentTestimonial].position}</p>
                <p className="text-red-600">{testimonials[currentTestimonial].location}</p>
                <p className="text-gray-500 mt-1">{testimonials[currentTestimonial].project}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div ref={navigationRef} className="flex justify-center items-center mt-8 space-x-2">
            <button 
              className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
              aria-label="Previous testimonial"
              onClick={handlePrevious}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.1,
                  duration: 0.2,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  duration: 0.2,
                  ease: "power2.out"
                });
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-red-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => handleDotClick(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to testimonial ${index + 1}`}
                  onMouseEnter={(e) => {
                    if (index !== currentTestimonial) {
                      gsap.to(e.currentTarget, {
                        scale: 1.2,
                        duration: 0.2,
                        ease: "power2.out"
                      });
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== currentTestimonial) {
                      gsap.to(e.currentTarget, {
                        scale: 1,
                        duration: 0.2,
                        ease: "power2.out"
                      });
                    }
                  }}
                />
              ))}
            </div>
            
            <button 
              className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
              aria-label="Next testimonial"
              onClick={handleNext}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.1,
                  duration: 0.2,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  duration: 0.2,
                  ease: "power2.out"
                });
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;