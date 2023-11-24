import { FramerImage } from '@/lib/FramerElements';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TooltipedElement from '../ui/TooltipedButton';

type SkillProps = {
  name: string;
  icon: any;
  x: string;
  y: string;
  extras?: string;
};

const Skill = ({ name, icon, x, y, extras = '' }: SkillProps) => (
  <TooltipedElement tTMessage={name}>
    <FramerImage
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{
        x: x,
        y: y,

        transition: { duration: 2 },
      }}
      // animate={{
      //   x: [
      //     '25vw',
      //     '21vw',
      //     '8vw',
      //     '-8vw',
      //     '-21vw',
      //     '-25vw',
      //     '-21vw',
      //     '-8vw',
      //     '8vw',
      //     '21vw',
      //   ],
      //   y: [
      //     '0vh',
      //     '15vh',
      //     '24vh',
      //     '24vh',
      //     '15vh',
      //     '0vh',
      //     '-15vh',
      //     '-24vh',
      //     '-24vh',
      //     '-15vh',
      //   ],
      // }}
      transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
      src={icon}
      alt={name}
      className={`absolute h-auto w-14 ${extras}`}
    />
  </TooltipedElement>
);
export default Skill;
