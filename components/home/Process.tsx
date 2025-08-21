"use client"
import { useRef } from "react";
import AnimatedHeaderSection from "../AnimatedHeaderSection";
import { useMediaQuery } from "react-responsive";   
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { servicesData } from "@/data";

const Services = () => {
  const text = `I build secure, high-performance full-stack apps
    with smooth UX to drive growth 
    not headaches.`;
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px
  
  // Use data from constants directly
  const servicesDataa  = servicesData;

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
  }, [servicesData]); // Keep services as dependency for consistency

  useGSAP(() => {
    gsap.set("#services", {
      scale: 0.80,
      
    });
    gsap.to("#services", {
      scale: 1,
      scrollTrigger: {
        trigger: "#services",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });
  }, []);


  
  return (
    <section id="services" className="min-h-screen  rounded-t-4xl tracking-wide ">
     <div className="p-10">
        
     <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={"Our Precision Process"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
     </div>
      {servicesDataa.map((service, index) => (
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
              <h2 className="text-4xl lg:text-5xl font-bold">{service.title}</h2>
              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-black text-pretty">
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
