import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className="relative flex flex-col text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center gap-[10px] mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#5ceacd] text-2xl">Skills</h3>
        <h3 className="absolute top-36 uppercase tracking-[1px] text-gray-500 text-sm">Here's a list of technologies I've worked with</h3>
        <div className="pt-10 grid grid-cols-4 gap-5">
            <Skill directionLeft={true} />
            <Skill directionLeft={true} />
            <Skill directionLeft={true} />
            <Skill directionLeft={true} />
            <Skill directionLeft={true} />
            <Skill directionLeft={true} />
            <Skill directionLeft={true} />
            <Skill directionLeft={true} />
            <Skill directionLeft={false} />
            <Skill directionLeft={false} />
            <Skill directionLeft={false} />
            <Skill directionLeft={false} />
        </div>

    </motion.div>
  )
}

export default Skills