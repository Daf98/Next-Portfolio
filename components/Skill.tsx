import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    directionLeft: boolean;
    skill: Skill
}

const Skill = ({ directionLeft, skill }: Props) => {
    console.log(skill)
  return (
    <div className="group flex cursor-pointer">
        <motion.img
        initial={{
            opacity: 0,
            x: directionLeft ? -200 : 200
        }}
        whileInView={{
            opacity: 1,
            x: 0
        }}
        transition={{
            duration: 1
        }}
        viewport={{once: true}}
        className="object-cover h-20 w-20 xl:h-25 xl:w-25 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={urlFor(skill.image).url()}
         />
    </div>
  )
}

export default Skill