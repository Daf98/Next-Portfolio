import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
    const projects = [
        1, 2, 3, 4, 5
    ]
    return (
        <div className="h-screen relative flex py-10 overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-[#5ceacd] text-2xl">Projects</h3>
            <div className="realtive w-full flex overflow-x-scroll min-h-screen overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5ceacd]/80 scrollbar-thin">
                {projects.map((project, i) =>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 1.2
                            }}
                            className="w-[95px] h-[95px] sm:w-[125px] sm:h-[125px] md:h-[200px] md:w-[200px] rounded-2xl"
                            src="https://avatars.githubusercontent.com/u/82343891?v=4"
                        />
                        <div className="text-center px-0 md:px-10 max-w-10">
                            <h4 className="text-4xl font-semibold">
                                <span className="underline decoration-[#5ceacd]/50">Case study {i + 1} of {projects.length}:</span> Astrology Observations
                            </h4>
                            <p className="text-lg text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </motion.div>
                )}
            </div>
            <div className="w-full absolute top-[30%] bg-[#5ceacd]/20 left-0 h-[400px] -skew-y-12"></div>
        </div>
    )
}

export default Projects