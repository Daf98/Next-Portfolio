import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft: boolean;
}

const Skill = ({ directionLeft }: Props) => {
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
        className="rounded-full border border-[#5ceacd] object-cover h-10 w-10 md:h-20 md:w-20 filter group-hover:grayscale transition duration-300 ease-in-out"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4YuO05vRj22LwuBOl8Kad65ZF_MlfnGNYY4v4X9qb&s"
         />
    </div>
  )
}

export default Skill