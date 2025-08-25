"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingTab = () => {
  const t = useTranslations("Services.digitalMarketing");
  const [activeTab, setActiveTab] = useState("nedx");
  
  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const systemDevRef = useRef<HTMLDivElement>(null);
  const expertisesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Header text animation - Split text effect
    const headerTitle = headerRef.current?.querySelector('h1');
    if (headerTitle) {
      const text = headerTitle.textContent || '';
      headerTitle.innerHTML = text.split(' ').map(word => 
        `<span class="word">${word.split('').map(char => 
          `<span class="char" style="display: inline-block;">${char}</span>`
        ).join('')}</span>`
      ).join(' ');

      gsap.fromTo(
        headerTitle.querySelectorAll('.char'),
        { opacity: 0, y: 50, rotationX: -90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: "back.out(1.7)",
        }
      );
    }

    // Website Design section animation
    if (websiteDesignRef.current) {
      // Animate section titles with typewriter effect
      const sectionTitles = websiteDesignRef.current.querySelectorAll('h2, h3');
      sectionTitles.forEach((title) => {
        const text = title.textContent || '';
        title.innerHTML = text.split('').map(char => 
          `<span style="display: inline-block; opacity: 0;">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');

        gsap.to(title.querySelectorAll('span'), {
          opacity: 1,
          duration: 0.05,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Animate list items with slide-in effect
      const listItems = websiteDesignRef.current.querySelectorAll('li');
      gsap.fromTo(
        listItems,
        { opacity: 0, x: -30, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: websiteDesignRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate paragraphs with fade-in effect
      const paragraphs = websiteDesignRef.current.querySelectorAll('p');
      gsap.fromTo(
        paragraphs,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: websiteDesignRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // System Development section animation
    if (systemDevRef.current) {
      // Animate section titles with glitch effect
      const sectionTitles = systemDevRef.current.querySelectorAll('h2, h3');
      sectionTitles.forEach((title) => {
        gsap.fromTo(
          title,
          { opacity: 0, scaleY: 0, skewX: 15 },
          {
            opacity: 1,
            scaleY: 1,
            skewX: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: title,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate list items with bounce effect
      const listItems = systemDevRef.current.querySelectorAll('li');
      gsap.fromTo(
        listItems,
        { opacity: 0, x: 50, rotation: 5 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "elastic.out(1, 0.75)",
          scrollTrigger: {
            trigger: systemDevRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate paragraphs with slide-up effect
      const paragraphs = systemDevRef.current.querySelectorAll('p');
      gsap.fromTo(
        paragraphs,
        { opacity: 0, y: 30, filter: "blur(5px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: systemDevRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Expertises section animation
    if (expertisesRef.current) {
      // Animate main title with simple slide-up and fade-in
      const mainTitle = expertisesRef.current.querySelector('h2');
      if (mainTitle) {
        gsap.fromTo(
          mainTitle,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mainTitle,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate tab buttons with simple slide-up and fade-in
      const tabButtons = expertisesRef.current.querySelectorAll('button');
      gsap.fromTo(
        tabButtons,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: expertisesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Floating animation for images
    gsap.to(".floating-image", {
      y: "-20px",
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Tab switch animation
    const tabContent = container.querySelectorAll(".tab-content");
    tabContent.forEach((content) => {
      gsap.set(content, { opacity: 0, y: 30 });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Animate tab content when switching with text animations
    const activeContent = containerRef.current?.querySelector('.tab-content.active');
    if (activeContent) {
      // Animate container
      gsap.fromTo(
        activeContent,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );

      // Animate titles with split text
      const titles = activeContent.querySelectorAll('h3, h4, h5');
      titles.forEach((title, index) => {
        const text = title.textContent || '';
        title.innerHTML = text.split('').map(char => 
          `<span style="display: inline-block; opacity: 0; transform: translateY(20px);">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');

        gsap.to(title.querySelectorAll('span'), {
          opacity: 1,
          y: 0,
          duration: 0.03,
          stagger: 0.02,
          delay: 0.3 + (index * 0.1),
          ease: "power2.out",
        });
      });

      // Animate list items with cascade effect
      const listItems = activeContent.querySelectorAll('li');
      gsap.fromTo(
        listItems,
        { opacity: 0, x: -20, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          delay: 0.5,
          ease: "back.out(1.7)",
        }
      );

      // Animate paragraphs with fade and blur
      const paragraphs = activeContent.querySelectorAll('p');
      gsap.fromTo(
        paragraphs,
        { opacity: 0, filter: "blur(3px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.2,
          delay: 0.4,
          ease: "power2.out",
        }
      );

      // Animate technology items with random entrance
      const techItems = activeContent.querySelectorAll('.grid > div');
      gsap.fromTo(
        techItems,
        { 
          opacity: 0, 
          scale: 0.8,
          rotation: () => gsap.utils.random(-15, 15)
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.08,
          delay: 0.7,
          ease: "elastic.out(1, 0.8)",
        }
      );
    }
  }, [activeTab]);

  return (
    <div ref={containerRef} className="bg-[#424242] text-white min-h-screen">
      {/* Header Section */}
      <div ref={headerRef} className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 w-[78%] leading-20 text-center mx-auto">
          {t('header.title')}
        </h1>
      </div>

      {/* Website Design Section */}
      <div className="px-6 py-12">
        <div ref={websiteDesignRef} className="max-w-7xl mx-auto">
          {/* Header Row */}
         

          {/* Two Column Row */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">
                  {t('websiteDesign.workIncludes.title')}
                </h3>
                <ul className="space-y-3 text-gray-300 text-2xl">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    {t('websiteDesign.workIncludes.items.ecommerce')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    {t('websiteDesign.workIncludes.items.restaurant')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    {t('websiteDesign.workIncludes.items.landing')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    {t('websiteDesign.workIncludes.items.corporate')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    {t('websiteDesign.workIncludes.items.paidAds')}
                  </li>
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white group md:mt-20 hover:bg-red-600 backdrop-blur-sm text-red-600 hover:text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 border border-white/30 flex items-center space-x-2 w-fit"
              >
                <span className="text-red-500 group-hover:text-white text-lg sm:text-xl">
                  ✦
                </span>
                <span>{t('websiteDesign.cta.text')}</span>
              </motion.button>
            </div>

            <div className="">
              <Image
                src="/digital-marketing.jpg"
                alt="Website Design"
                width={400}
                height={500}
                className="floating-image"
              />
            </div>
          </div>
        </div>
      </div>

    

      {/* Expertises Section */}
      <div className="px-6 py-16">
        <div ref={expertisesRef} className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-left">
            {t('expertises.title')}
          </h2>

          {/* Tab Navigation */}
          <div className="flex justify-center items-center space-x-8 mb-16">
            <button
              onClick={() => setActiveTab("SEO")}
              className={`text-2xl font-bold px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "SEO"
                  ? "text-red-500 bg-white/10"
                  : "text-gray-400 hover:text-red-400"
              }`}
            >
              {t('expertises.tabs.seo')}
            </button>
            <button
              onClick={() => setActiveTab("socialMedia")}
              className={`text-2xl font-bold px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "socialMedia"
                  ? "bg-white text-black"
                  : "bg-gray-600 text-white hover:bg-gray-500"
              }`}
            >
              {t('expertises.tabs.socialMedia')}
            </button>
            <button
              onClick={() => setActiveTab("paidAds")}
              className={`text-2xl font-bold px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "paidAds"
                  ? "bg-white text-black"
                  : "bg-gray-600 text-white hover:bg-gray-500"
              }`}
            >
              {t('expertises.tabs.paidAds')}
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {activeTab === "SEO" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl p-8 tab-content active"
              >
                <h3 className="text-2xl font-bold mb-6 text-left">
                  {t('expertises.seo.title')}
                </h3>
                <p className="text-gray-300 text-lg mb-8">
                  {t('expertises.seo.description')}
                </p>

                <div className="rounded-xl mb-8   w-fit flex justify-center items-center mx-auto">
                  <Image
                    src="/seoService.jpg"
                    alt="NEDX CRM Platform"
                    width={800}
                    height={200}
                    className="   rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-left max-w-4xl">
                  {t('expertises.seo.subtitle')}
                </h3>

                <div className="text-left">
                  <h4 className="text-xl font-bold mb-4">
                    {t('expertises.seo.stageOne.title')}
                  </h4>

                  <p className="text-gray-300 text-xl mb-8 max-w-4xl">
                    {t('expertises.seo.stageOne.description')}
                  </p>
                  
                  <h4 className="text-xl font-bold mb-4">
                    {t('expertises.seo.stageTwo.title')}
                  </h4>

                  <p className="text-gray-300 text-xl mb-8 max-w-4xl">
                    {t('expertises.seo.stageTwo.description')}
                  </p>
                  
                </div>
              </motion.div>
            )}

            {activeTab === "socialMedia" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl p-8 tab-content active"
              >
                <h3 className="text-2xl font-bold mb-6 text-left">
                  {t('expertises.socialMedia.title')}
                </h3>
                <p className="text-gray-300 text-lg mb-8">
                  {t('expertises.socialMedia.description')}
                </p>

                <div className=" rounded-xl  mb-8   w-fit flex justify-center items-center mx-auto">
                  <Image
                    src="/socailService.jpg"
                    alt="NEDX CRM Platform"
                    width={600}
                    height={200}
                    className="   rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold  text-left max-w-4xl">
                  {t('expertises.socialMedia.stageOne.title')}
                </h3>

                <p className="text-gray-300 text-lg mb-8 max-w-4xl">
                  {t('expertises.socialMedia.stageOne.description')}
                </p>

                <h3 className="text-2xl font-bold m text-left max-w-4xl">
                  {t('expertises.socialMedia.stageTwo.title')}
                </h3>
                <p className="text-gray-300 text-lg mb-8 max-w-4xl">
                  {t('expertises.socialMedia.stageTwo.description')}
                </p>

                <div className="text-left">
                  <h4 className="text-2xl  mb-4 max-w-4xl leading-8">
                    {t('expertises.socialMedia.subtitle')}
                  </h4>

                 
                </div>
              </motion.div>
            )}
            {activeTab === "paidAds" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl p-8 tab-content active"
              >
                <h3 className="text-2xl font-bold mb-6 text-left">
                  {t('expertises.paidAds.title')}
                </h3>
                <p className="text-gray-300 text-lg mb-8">
                  {t('expertises.paidAds.description')}
                </p>

                <div className=" rounded-xl  mb-8   w-fit flex justify-center items-center mx-auto">
                  <Image
                    src="/paidAds .jpg"
                    alt="NEDX CRM Platform"
                    width={600}
                    height={200}
                    className="   rounded-lg"
                  />
                </div>
              

                <div className="text-left">
                  <h4 className="text-2xl  mb-4 max-w-4xl leading-8">
                    {t('expertises.paidAds.subtitle')}
                  </h4>
                  <p className="text-gray-300 text-xl mb-8 max-w-4xl">
                    {t('expertises.paidAds.subtitle2')}
                  </p>

                 
                  <ul className="space-y-3 text-gray-300 text-2xl">
                    <li className="flex items-center">
                      {t('expertises.paidAds.keyBenefits.items.0')}
                    </li>
                    <li className="flex items-center">
                      {t('expertises.paidAds.keyBenefits.items.1')}
                    </li>
                    <li className="flex items-center">
                      {t('expertises.paidAds.keyBenefits.items.2')}
                    </li>
                    <li className="flex items-center">
                      {t('expertises.paidAds.keyBenefits.items.3')}
                    </li>
                    <li className="flex items-center max-w-2xl">
                      {t('expertises.paidAds.keyBenefits.items.4')}
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingTab;
