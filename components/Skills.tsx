import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '../typings'

type Props = {
  skills: SkillType[]
}

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col text-center md:text-left max-w-[2000px] px-5 xl:px-10 min-h-screen justify-center gap-[10px] mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#5ceacd] text-2xl">Skills</h3>
      <h3 className="absolute top-36 uppercase tracking-[1px] text-gray-500 text-sm">Here's a list of technologies I've worked with</h3>
      <div className="pt-20 grid grid-cols-4 gap-5">
        {skills.slice(0, skills.length / 2).map((skill) => {
          return (
            <Skill key={skill._id} directionLeft skill={skill} />
          )
        })}
        {skills.slice((skills.length / 2) + 1, skills.length).map((skill) => {
          return (
            <Skill key={skill._id} directionLeft={false} skill={skill} />
          )
        })}
      </div>

    </motion.div>
  )
}

export default Skills