import { FramerImage } from '@/lib/FramerElements'
import TooltipedElement from '../UI/TooltipedButton'

type SkillProps = {
  name: string
  icon: any
  x: string
  y: string
}

const Skill = ({ name, icon, x, y }: SkillProps) => (
  <TooltipedElement tTMessage={name}>
    <FramerImage
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{
        x: x,
        y: y,

        transition: { duration: 1.5 },
      }}
      viewport={{ once: true }}
      src={icon}
      alt={name}
      className={`absolute h-14 w-14 md:h-7 md:w-7 sm:h-5 sm:w-5`}
    />
  </TooltipedElement>
)
export default Skill
