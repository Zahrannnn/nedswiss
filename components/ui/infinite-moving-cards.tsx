"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    src: string;
    alt: string;
    name?: string;
    width?: number;
    height?: number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-2 py-2 sm:gap-3 sm:py-3 md:gap-4 md:py-4 lg:gap-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[240px] h-[140px] sm:w-[160px] sm:h-[100px] md:w-[200px] md:h-[220px] lg:w-[240px] lg:h-[140px] xl:w-[280px] xl:h-[160px] max-w-full shrink-0 rounded-xl sm:rounded-2xl bg-white/50 backdrop-blur-sm p-2 sm:p-3 md:p-4 dark:border-zinc-700 dark:bg-zinc-900/50 flex items-center justify-center group hover:scale-105 transition-transform duration-300"
            key={`${item.src}-${idx}`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={item.src}
                alt={item.alt}
                width={ 200}
                height={  120}
                className="object-contain max-w-full max-h-full transition-all duration-300"
                priority={idx < 4} // Prioritize first 4 images for better performance
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
