"use client";

import RippleGrid from "@/comps/Backgrounds/RippleGrid/RippleGrid";
import RotatingText from "@/comps/TextAnimations/RotatingText/RotatingText";
import { useTranslations } from "next-intl";
import React from "react";
import CounterCards from "./CounterCards";
import Magnet from "@/comps/Animations/Magnet/Magnet";
import Link from "next/link";

const HeroSection = () => {
  const t = useTranslations("HeroSection");

  // Mobile Hero Component
  const MobileHero = () => (
    <div className=" p-8 w-full bg-[#1b1b1b] flex items-center justify-center px-4">
      <div className="text-center text-white space-y-6 max-w-sm">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold leading-tight">
            {t("mainText")}
          </h1>
          <div className="bg-slate-200 text-red-600 px-3 py-2 rounded-md font-bold text-lg">
            {t("services.graphicDesign")}
          </div>
          <div className="bg-slate-200 text-red-600 px-3 py-2 rounded-md font-bold text-lg">
            {t("services.printing")}
          </div>
          <div className="bg-slate-200 text-red-600 px-3 py-2 rounded-md font-bold text-lg">
            {t("services.webDevelopment")}
          </div>
          <div className="bg-slate-200 text-red-600 px-3 py-2 rounded-md font-bold text-lg">
            {t("services.socialMedia")}
          </div>
          <div className="bg-slate-200 text-red-600 px-3 py-2 rounded-md font-bold text-lg">
            {t("services.3dInstallations")}
          </div>
          <h3 className="text-red-500 text-lg font-semibold">
            {t("subtitle")}
          </h3>
        </div>
        
        <div className="pt-4">
          <Link 
            href="/contact" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 w-full text-center"
          >
            {t("cta")}
          </Link>
        </div>
        
        <div className="pt-6 scale-75">
          <CounterCards />
        </div>
      </div>
    </div>
  );

  // Desktop Hero Component  
  const DesktopHero = () => (
    <div
      className="h-screen w-full bg-[#1b1b1b]"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <RippleGrid
        enableRainbow={true}
        gridColor="#72030E"
        rippleIntensity={0.05}
        gridSize={5}
        gridThickness={20}
        mouseInteraction={true}
        mouseInteractionRadius={1.5}
        opacity={0.8}
      />
      <div className="container ml-10 absolute top-1/4 left-0 w-full h-full flex flex-col gap-10">
        <div className="px-4 h-full">
          <div className="text-white font-bold flex flex-col gap-5">
            <h1 className="text-8xl font-bold">
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
            <h3 className="text-red-600 ml-3 text-2xl font-bold">
              {t("subtitle")}
            </h3>

            <div className="mt-6 ml-3">
              <Magnet padding={50} disabled={false} magnetStrength={5}>
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-3 rounded-md transition-all duration-300 transform hover:scale-105">
                {t("cta")}
              </Link>
              </Magnet>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <CounterCards />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Version - Show on screens smaller than lg (1024px) */}
      <div className="block lg:hidden">
        <MobileHero />
      </div>
      
      {/* Desktop Version - Show on lg screens and larger */}
      <div className="hidden lg:block">
        <DesktopHero />
      </div>
    </>
  );
};

export default HeroSection;
