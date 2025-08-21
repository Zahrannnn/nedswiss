"use client";

import { useTranslations } from "next-intl";
import React from "react";
import CounterCards from "./CounterCards";
import Link from "next/link";
import { useLocale } from "next-intl";
import CustomBtn from "../ui/customBtn";
import RotatingText from "@/comps/TextAnimations/RotatingText/RotatingText";

const HeroSection = () => {
  const t = useTranslations("HeroSection");
  const tSocialProof = useTranslations("HomePage.socialProof");
  const locale = useLocale();

  return (
    <div className="relative min-h-screen w-full bg-[#2A2A2A] overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-pattern w-full h-full"></div>
      </div>

      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0">
        {/* Blob 1 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Blob 2 */}
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Blob 3 */}
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-600/25 to-cyan-600/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Blob 4 - Moving blob */}
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-pink-900/10 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-6xl">
          {/* Main Content */}
          <div className="mb-16">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold leading-tight text-white">
              {t("mainText")}{" "}
              <RotatingText
                texts={[
                  t("services.graphicDesign"),
                  t("services.printing"),
                  t("services.webDevelopment"),
                  t("services.socialMedia"),
                  t("services.3dInstallations"),
                  t("services.paidAds"),
                  t("services.seo"),
                ]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-slate-200 text-red-600 overflow-hidden mt-2 justify-center inline-block"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 700 }}
                rotationInterval={4000}
              />
            </h1>
            
            {/* Subtitle */}
            <div className="mb-8">
              <span className="text-red-500 text-lg md:text-xl font-semibold tracking-wider uppercase">
                {t('subtitle')}
              </span>
            </div>
            
            {/* CTA Button */}
            <div className="mb-6 relative ml-10 md:ml-8" >
              <CustomBtn />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 md:ml-50 mt-50">
            {/* Card 1 */}
            <div className="hover:scale-105 transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500 mb-2">
                  50+
                </div>
                <div className="text-white font-semibold text-sm lg:text-base mb-1">
                  {tSocialProof('deliveringResults')}
                </div>
                <div className="text-gray-300 text-xs lg:text-sm">
                  {tSocialProof('deliveringResultsSubtitle')}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className=" hover:scale-105 transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500 mb-2">
                  100+
                </div>
                <div className="text-white font-semibold text-sm lg:text-base mb-1">
                  {tSocialProof('projectsCompleted')}
                </div>
                <div className="text-gray-300 text-xs lg:text-sm">
                  {tSocialProof('projectsSubtitle')}
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className=" hover:scale-105 transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500 mb-2 flex items-center justify-center">
                  5<span className="text-yellow-400 ml-1">★</span>
                </div>
                <div className="text-white font-semibold text-sm lg:text-base mb-1">
                  {tSocialProof('clientsRating')}
                </div>
                <div className="text-gray-300 text-xs lg:text-sm">
                  {tSocialProof('clientsSubtitle')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for additional animations and grid pattern */}
      <style jsx>{`
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.6) 1px, transparent 1px);
          background-size: 300px 300px;
          background-position: 0 0, 0 0;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(10px) rotate(-1deg); }
        }
        
        @keyframes colorShift {
          0%, 100% { filter: hue-rotate(0deg); }
          25% { filter: hue-rotate(90deg); }
          50% { filter: hue-rotate(180deg); }
          75% { filter: hue-rotate(270deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-color-shift {
          animation: colorShift 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
