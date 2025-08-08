import type { Metadata } from "next";
import { getDictionary } from "../dictionaries";
import { locales, type Locale } from "@/app/i18n";
import HeroSection from "@/components/home/HeroSection";

import CallToAction from "@/components/home/CallToAction";
import SocialProof from "@/components/home/SocialProof";
import ServicesScrollStack from "@/components/home/ServicesScrollStack";
import ScrollVelocity from "@/comps/TextAnimations/ScrollVelocity/ScrollVelocity";
import ProcessPrecision from "@/components/home/ProcessPercission";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    return {
      title: "NED Swiss | Digital Excellence, Swiss Precision",
      description:
        "NED Swiss is a digital agency delivering exceptional web development, design, and digital marketing services with Swiss precision and excellence.",
    };
  }

  const messages = await getDictionary(locale as Locale);

  return {
    title: messages.HomePage.meta.title,
    description: messages.HomePage.meta.description,
  };
}

export default async function HomePage({ params }: HomePageProps) {
  return (
    <>
      <HeroSection />
      <ServicesScrollStack />
      <div className="  border-red-500 border-b-2 border-t-2">
      <ScrollVelocity
        texts={["NedSwiss"]}
        velocity={200}
        className=""
      />
      </div>
      {/* <ServicesOverview /> */}
      <ProcessPrecision />
      <SocialProof />
      <CallToAction />
    </>
  );
}
