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

  return (
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
      <div className="container ml-4 md:ml-10 absolute top-1/4 left-0 w-full min-h-screen flex flex-col gap-6 md:gap-10 mb-10">
        <div className="px-4 h-full">
          <div className="text-white font-bold flex flex-col gap-3 md:gap-5">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
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
            <h3 className="text-red-600 ml-1 md:ml-3 text-lg md:text-xl lg:text-2xl font-bold">
              {t("subtitle")}
            </h3>

            <div className="mt-4 md:mt-6 ml-1 md:ml-3">
              <Magnet padding={50} disabled={false} magnetStrength={5}>
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-md transition-all duration-300 transform hover:scale-105 inline-block">
                {t("cta")}
              </Link>
              </Magnet>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4  ">
            <CounterCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
