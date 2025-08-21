// Example usage of the reusable Card component with different laptop images

import Card from './index';

export const cardExamples = [
  // Social Media Management Card
  {
    i: 0,
    title: "Social Media & Digital Marketing",
    subtitle: "Complete social media strategy, content creation, and community management services.",
    services: [
      "Profile Setup & Branding",
      "Content Planning & Scheduling",
      "Custom Post & Story Designs"
    ],
    buttonText: "From Concept to Success",
    backgroundColor: "#dc2626",
    laptopImage: "/laptop-social-media.png", // Replace with actual image path
    backgroundMask: "/mask-group.png"
  },

  // Web Development Card
  {
    i: 1,
    title: "Web Development & Design",
    subtitle: "Custom websites and web applications built with modern technologies and best practices.",
    services: [
      "Responsive Web Design",
      "E-commerce Solutions", 
      "Performance Optimization"
    ],
    buttonText: "Build Your Vision",
    backgroundColor: "#1e40af",
    laptopImage: "/laptop-web-development.png", // Replace with actual image path
    backgroundMask: "/mask-group.png"
  },

  // Graphic Design Card
  {
    i: 2,
    title: "Graphic Design & Branding",
    subtitle: "Visual identity solutions that make your brand stand out and connect with your audience.",
    services: [
      "Logo Design & Brand Identity",
      "Print & Digital Materials",
      "Brand Guidelines & Style"
    ],
    buttonText: "Create Your Brand",
    backgroundColor: "#7c2d12",
    laptopImage: "/laptop-graphic-design.png", // Replace with actual image path
    backgroundMask: "/mask-group.png"
  },

  // SEO Services Card
  {
    i: 3,
    title: "SEO & Digital Strategy",
    subtitle: "Comprehensive SEO services to improve your search rankings and online visibility.",
    services: [
      "Long-form & Analytical Blog Articles",
      "On-page SEO Optimization",
      "Technical SEO & Performance Reports"
    ],
    buttonText: "Boost Your Rankings",
    backgroundColor: "#065f46",
    laptopImage: "/laptop-seo-services.png", // Replace with actual image path
    backgroundMask: "/mask-group.png"
  },

  // Software Solutions Card  
  {
    i: 4,
    title: "Software Solutions",
    subtitle: "Custom software development and digital tools to streamline your business operations.",
    services: [
      "Custom Application Development",
      "API Integration & Development",
      "Database Design & Management"
    ],
    buttonText: "Scale Your Business",
    backgroundColor: "#1e1b4b",
    laptopImage: "/laptop-software-solutions.png", // Replace with actual image path
    backgroundMask: "/mask-group.png"
  },

  // Advertising Solutions Card
  {
    i: 5,
    title: "Advertising & Marketing",
    subtitle: "Strategic advertising campaigns that drive conversions and maximize your ROI.",
    services: [
      "Google Ads & PPC Campaigns",
      "Social Media Advertising",
      "Campaign Analytics & Optimization"
    ],
    buttonText: "Drive Results",
    backgroundColor: "#7c2d12",
    laptopImage: "/laptop-advertising.png", // Replace with actual image path
    backgroundMask: "/mask-group.png"
  }
];

// Example with internationalization
export const internationalizedCardExample = {
  i: 0,
  translationKey: "ServiceCards.SocialMediaManagement",
  backgroundColor: "#dc2626",
  laptopImage: "/laptop-social-media.png", // Replace with actual image path
  backgroundMask: "/mask-group.png"
};

// Example with custom illustration instead of laptop
export const customIllustrationExample = {
  i: 0,
  title: "Custom Service",
  subtitle: "Description of custom service offering.",
  services: [
    "Service Feature 1",
    "Service Feature 2",
    "Service Feature 3"
  ],
  buttonText: "Get Started",
  backgroundColor: "#8b5cf6",
  illustration: "/custom-service-illustration.png", // Custom illustration
  backgroundMask: "/mask-group.png"
};

// Example usage in a component:
/*
const ServicesSection = () => {
  return (
    <div>
      {cardExamples.map((cardProps, index) => (
        <Card
          key={index}
          {...cardProps}
          progress={scrollProgress}
          range={[index * 0.25, 1]}
          targetScale={1 - ((cardExamples.length - index) * 0.05)}
        />
      ))}
    </div>
  );
};
*/

// Images you'll need to add to the public folder:
/*
/public/
├── mask-group.png (already exists)
├── laptop-social-media.png
├── laptop-web-development.png  
├── laptop-graphic-design.png
├── laptop-seo-services.png
├── laptop-software-solutions.png
├── laptop-advertising.png
└── custom-service-illustration.png (optional)
*/ 