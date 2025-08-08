'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaPalette, FaCode, FaHashtag, FaSearch, FaLaptopCode, FaMegaport } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, href, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!cardRef.current || !iconRef.current) return;
    
    // Initial state
    gsap.set(cardRef.current, { 
      opacity: 0, 
      y: 100,
      scale: 0.8,
      rotateX: 15
    });
    
    gsap.set(iconRef.current, { 
      scale: 0,
      rotation: -180
    });
    
    // Scroll-triggered animation with scrub
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
        end: "top 20%",
        scrub: 1.2,
        toggleActions: "play none none reverse"
      }
    });
    
    tl.to(cardRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      duration: 1,
      ease: "power2.out"
    })
    .to(iconRef.current, {
      scale: 1,
      rotation: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.5");
    
    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(cardRef.current, {
        scale: 1.05,
        y: -10,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(iconRef.current, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
    const handleMouseLeave = () => {
      gsap.to(cardRef.current, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(iconRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
    const card = cardRef.current;
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === card) {
          trigger.kill();
        }
      });
    };
  }, []);
  
  return (
    <div ref={cardRef} className="service-card">
      <Card className="h-full transition-shadow hover:shadow-xl hover:shadow-red-100/50 border-0 shadow-lg">
        <CardHeader>
          <div 
            ref={iconRef}
            className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center text-[#DC2626] mb-4 shadow-sm"
          >
            {icon}
          </div>
          <CardTitle className="text-[#1A1A1A] group-hover:text-[#DC2626] transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="link" asChild className="p-0 text-[#DC2626] hover:text-[#E53E3E] group">
            <Link href={href} className="flex items-center">
              <span className="mr-2">Learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export const ServicesOverview = () => {
  const t = useTranslations('HomePage.services');
  const serviceT = useTranslations('HomePage.services');
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  const services = [
    {
      title: serviceT('graphicDesign.title'),
      description: serviceT('graphicDesign.description'),
      icon: <FaPalette className="w-6 h-6" />,
      href: '/services/graphic-design',
    },
    {
      title: serviceT('webDevelopment.title'),
      description: serviceT('webDevelopment.description'),
      icon: <FaCode className="w-6 h-6" />,
      href: '/services/web-development',
    },
    {
      title: serviceT('socialMediaManagement.title'),
      description: serviceT('socialMediaManagement.description'),
      icon: <FaHashtag className="w-6 h-6" />,
      href: '/services/social-media-management',
    },
    {
      title: serviceT('seoServices.title'),
      description: serviceT('seoServices.description'),
      icon: <FaSearch className="w-6 h-6" />,
      href: '/services/seo-services',
    },
    {
      title: serviceT('softwareSolutions.title'),
      description: serviceT('softwareSolutions.description'),
      icon: <FaLaptopCode className="w-6 h-6" />,
      href: '/services/software-solutions',
    },
    {
      title: serviceT('advertisingSolutions.title'),
      description: serviceT('advertisingSolutions.description'),
      icon: <FaMegaport className="w-6 h-6" />,
      href: '/services/advertising-solutions',
    },
  ];
  
  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return;
    
    // Initial states
    gsap.set(headerRef.current, { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    });
    
    gsap.set(gridRef.current, { 
      opacity: 0,
      y: 30
    });
    
    // Background color animation
    gsap.set(sectionRef.current, {
      background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)"
    });
    
    // Header animation with scrub
    gsap.to(headerRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 85%",
        end: "top 30%",
        scrub: 1,
        toggleActions: "play none none reverse"
      }
    });
    
    // Grid fade-in with scrub
    gsap.to(gridRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 90%",
        end: "top 50%",
        scrub: 0.8,
        toggleActions: "play none none reverse"
      }
    });
    
    // Parallax background effect
    gsap.to(sectionRef.current, {
      backgroundPosition: "50% 100px",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === headerRef.current || 
            trigger.trigger === gridRef.current || 
            trigger.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(220, 38, 38, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(220, 38, 38, 0.02) 0%, transparent 50%)
        `
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={headerRef}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A] tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
        
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-100 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-50 rounded-full opacity-30 blur-2xl"></div>
    </section>
  );
};

export default ServicesOverview;