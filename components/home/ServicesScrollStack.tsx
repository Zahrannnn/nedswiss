'use client';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'

import { services } from '@/data';
import Card from '@/components/CardsStack';
import { useTranslations } from 'next-intl';

export default function ServicesScrollStack() {
  const container = useRef(null);
  const t = useTranslations('HomePage.servicesScrollStack');
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <main ref={container} className="flex flex-col items-center justify-center p-20">
      <div className="flex flex-col gap-7 items-center justify-center max-w-[1000px]">
        <h2 className="text-center text-4xl font-bold">Digital Services that Drive Results</h2>
        <p className="text-center text-lg line-clamp-3">Comprehensive digital solutions tailored for Swiss businesses. From creative design to technical development, we handle everything with precision and excellence.</p>
      </div>
      {
        services.map( (service, i) => {
          const targetScale = 1 - ( (services.length - i) * 0.05);
          return <Card url={service.link} key={`p_${i}`} i={i} {...service} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
  )
}