import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';
import { forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const FramerImage = motion(Image);

type FramerButtonProps = {
  className: string;
  children: JSX.Element;
  href: string;
  ariaLabel: string;
};
const FramerButton = motion(Button);
export const FramerButtonIcon = ({
  className,
  children,
  href,
  ariaLabel,
}: FramerButtonProps) => {
  return (
    <FramerButton
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className={`w-6 ${className}`}
      aria-label={ariaLabel}
    >
      <Link href={href} target='_blank'>
        {children}
      </Link>
    </FramerButton>
  );
};

type FramerLiProps = {
  className: string;
  children: React.ReactNode[] | React.ReactNode;
  initial: any;
  whileInView: any;
  viewport: any;
};

export const FramerLi = ({
  className,
  children,
  initial,
  whileInView,
  viewport,
}: FramerLiProps) => {
  return (
    <motion.li
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
    >
      {children}
    </motion.li>
  );
};

type SideScrollBarProps = {
  offset: any;
};

export const SideScrollBar = forwardRef(
  ({ offset }: SideScrollBarProps, forwardedRef: React.Ref<any>) => {
    const { scrollYProgress } = useScroll({
      target: forwardedRef as React.MutableRefObject<any>,
      offset: offset,
    });

    return (
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className='absolute left-9 top-0 mt-2 h-full w-1 origin-top bg-primary md:left-[30px] md:w-[2px] xs:left-[20px]'
      />
    );
  }
);

SideScrollBar.displayName = 'SideScrollBar';

export const LiIcon = ({
  reference,
}: {
  reference: React.RefObject<HTMLElement> | undefined;
}) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  });
  return (
    <figure className='absolute left-0 stroke-accent'>
      <svg
        className='-rotate-90 md:h-[60px] md:w-[60px] xs:h-[40px] xs:w-[40px] '
        width={75}
        height={75}
        viewBox='0 0 100 100'
      >
        <circle cx={75} cy={50} r={20} className=' fill-none stroke-1' />
        <motion.circle
          cx={75}
          cy={50}
          r={20}
          className=' fill-primary-background stroke-[5px] '
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx={75}
          cy={50}
          r={10}
          className='animate-pulse fill-accent stroke-1'
        />
      </svg>
    </figure>
  );
};
