"use client"
import { useRef } from "react";
import AnimatedHeaderSection from "../AnimatedHeaderSection";
import { useMediaQuery } from "react-responsive";   
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ProcessStep, useProcessSteps, type DetailedService } from "@/data";
import { useTranslations } from "next-intl";

const Services = () => {
  const text = `I build secure, high-performance full-stack apps
    with smooth UX to drive growth 
    not headaches.`;
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px
  const t = useTranslations('HomePage.processHeader');
  // Use data from translation hook
  const servicesDataa = useProcessSteps();

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
     
     
    });
  }, [servicesDataa]); 

  // useGSAP(() => {
  //   gsap.set("#services", {
  //     scale: 1,
      
  //   });
  //   gsap.to("#services", {
  //     scale: 1,
  //     scrollTrigger: {
  //       trigger: "#services",
  //       start: "top 90%",
  //       end: "top 40%",
  //       scrub: true,
  //       markers: false,
  //     },
  //     ease: "power1.inOut",
  //   });
  // }, []);


  
  return (
    <section id="services" className="min-h-screen  rounded-t-4xl  tracking-wide  ">
     <div className="p-10">
        
     <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={t('title')}
        text={t('subtitle')}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
     </div>
      {servicesDataa.map((service: ProcessStep, index: number) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el as never)}
          key={index}
          className="sticky px-10 pt-6 pb-12 text-red-500  bg-white border-t-2 border-gray-200  "
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesDataa.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-center gap-4 font-light">
            <div className="flex justify-center gap-4 font-light h-full">
           
                <h1 className="text-4xl lg:text-5xl font-bold border-r-2 border-gray-200 pr-4 h-full">0{index + 1}</h1>
      
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl lg:text-4xl font-bold">{service.title}</h2>
              <p className="text-lg leading-relaxed tracking-widest lg:text-xl text-black text-pretty">
                {service.description}
              </p>
             
            </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
