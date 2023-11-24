'use client';

import TechBadge from '@/lib/TechBadge';
import { useEffect, useState } from 'react';

type BadgeSlideshowType = {
  techBadges: string[];
};

export function BadgeSlideshow({ techBadges }: BadgeSlideshowType) {
  const [slide, setSlide] = useState<number[]>([techBadges.length - 1, 0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevValue) => [
        (prevValue[0] + 1) % techBadges.length,
        (prevValue[1] + 1) % techBadges.length,
        (prevValue[2] + 1) % techBadges.length,
      ]);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [techBadges.length]);

  return (
    <div className='relative flex w-full items-center '>
      <div className='relative z-0 flex-auto overflow-hidden rounded-lg'>
        <div className='left-1/2 flex items-center justify-center gap-3 transition-all'>
          <TechBadge name={techBadges[slide[0]]} />
          <TechBadge name={techBadges[slide[1]]} />
          <TechBadge name={techBadges[slide[2]]} />
        </div>
      </div>
    </div>
  );
}
