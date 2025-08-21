import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Partners = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
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
      <InfiniteMovingCards
        direction="left"
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
  );
};

export default Partners;
