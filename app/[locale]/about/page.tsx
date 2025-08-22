/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import DiscoverVision from '@/components/about/DiscoverVision'
import Cards from '@/components/about/Cards'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { useTranslations } from 'next-intl';
import BlogInsights from '@/components/home/BlogInsights';
import SocialProof from '@/components/home/SocialProof';
import Link from 'next/link';

const AboutPage = () => {
  const t = useTranslations('HomePage.partnersHeaders');
  const t2 = useTranslations('AboutPage');
  return (
    <main className='bg-gray-50'>
      <DiscoverVision />
      <Cards />
      <div className="w-full h-full flex flex-col items-center justify-center pt-10">
      
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 ">{t('title')} <span className="text-red-500">{t('titleHighlight')}</span></h1>
      <div className='bg-[#FE233805]'>
      <InfiniteMovingCards
        direction="right"
        speed="normal"
        pauseOnHover
        items={[
          {
            src: "/clients/partner1.png",
            alt: "Partner 1",
            name: "Partner 1",
          },
          {
            src: "/clients/partner2.png",
            alt: "Partner 2",
            name: "Partner 2",
          },
          {
            src: "/clients/partner3.png",
            alt: "Partner 1",
            name: "Partner 1",
          },
          {
            src: "/clients/partner4.png",
            alt: "Partner 2",
            name: "Partner 2",
          },
          {
            src: "/clients/partner5.png",
            alt: "Partner 1",
            name: "Partner 1",
          },
          {
            src: "/clients/partner1.png",
            alt: "Partner 2",
            name: "Partner 2",
          },
          {
            src: "/clients/partner2.png",
            alt: "Partner 1",
            name: "Partner 1",
          },
          {
            src: "/clients/partner3.png",
            alt: "Partner 2",
            name: "Partner 2",
          },
          {
            src: "/clients/partner4.png",
            alt: "Partner 1",
            name: "Partner 1",
          },
          {
            src: "/clients/partner5.png",
            alt: "Partner 2",
            name: "Partner 2",
          },
          {
            src: "/clients/partner1.png",
            alt: "Partner 1",
            name: "Partner 1",
          },
          {
            src: "/clients/partner2.png",
            alt: "Partner 2",
            name: "Partner 2",
          },
        ]}
      />
        
      </div>
      <div className='h-10'/>
    </div>
    <div className='h-10'/>
    <BlogInsights />
    <SocialProof />
    {/*  */}
    <div className="w-[80%] mx-auto bg-gradient-to-b from-red-900 via-red-800 to-red-900 rounded-3xl overflow-hidden shadow-2xl my-16">
      <div className=" mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {t2('readyToWorkTogether')}
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          {t2('letsCreateSomethingAmazing')}
        </p>
        <Link href="/contact" className="inline-block bg-white text-red-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          {t2('startYourProject')}
        </Link>
      </div>
    </div>
    </main>
  )
}

export default AboutPage