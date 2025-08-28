'use client';

import { useEffect, useRef } from 'react';

const SimpleVisitorTracker = () => {
  const hasTracked = useRef(false);

  useEffect(() => {
    const trackVisitor = async () => {
      // Only track once per session
      if (hasTracked.current) return;
      
      try {
        const response = await fetch('https://nedsite.runasp.net/api/VisitorLog', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          hasTracked.current = true;
          console.log('Visitor logged successfully');
        } else {
          console.warn('Failed to log visitor');
        }
      } catch (error) {
        console.error('Error logging visitor:', error);
      }
    };

    // Track visitor when component mounts
    trackVisitor();
  }, []);

  // This component doesn't render anything
  return null;
};

export default SimpleVisitorTracker; 