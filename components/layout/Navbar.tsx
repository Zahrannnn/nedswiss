'use client';

import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";

// Types for the social media links
interface Social {
  name: string;
  href: string;
}

// Mock socials data - this should be moved to a proper constants file
const socials: Social[] = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Twitter", href: "https://twitter.com" },
];

// TextZoo component - this was missing from the original code
interface TextZooProps {
  text: string;
}

const TextZoo: React.FC<TextZooProps> = ({ text }) => {
  return <span>{text}</span>;
};

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement[]>([]);
  const contactRef = useRef<HTMLDivElement>(null);
  const topLineRef = useRef<HTMLSpanElement>(null);
  const bottomLineRef = useRef<HTMLSpanElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const iconTl = useRef<gsap.core.Timeline | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showBurger, setShowBurger] = useState<boolean>(true);

  useGSAP(() => {
    if (!navRef.current || !contactRef.current) return;

    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (!tl.current || !iconTl.current) return;

    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (!tl.current || !iconTl.current) return;

    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed-safe z-navbar flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2"
      >
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
          {["home", "services", "about", "work", "contact"].map(
            (section, index) => (
              <div key={index} ref={(el) => {
                if (el) linksRef.current[index] = el;
              }}>
                <Link
                  className="transition-all duration-300 cursor-pointer hover:text-white"
                  to={section}
                  smooth
                  offset={0}
                  duration={2000}
                  onClick={closeMenu}
                >
                  <TextZoo text={section} />
                </Link>
              </div>
            )
          )}
        </div>
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-white/50">E-mail</p>
            <p className="text-xl tracking-widest lowercase text-pretty">
              <TextZoo text="palastinearabia@gmail.com" />
            </p>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-col flex-wrap items-center md:flex-row gap-x-2">
              {socials.map((social, index) => (
                <React.Fragment key={index}>
                  <a
                    href={social.href}
                    className="text-sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300"
                  >
                    <TextZoo text={social.name} />
                  </a>
                  {index < socials.length - 1 && (
                    <div className="w-1 h-1 bg-white rounded-full mb-3"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div
        className="fixed-safe z-navbar flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10"
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span
          ref={topLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
        <span
          ref={bottomLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
      </div>
    </>
  );
};

export default Navbar; 