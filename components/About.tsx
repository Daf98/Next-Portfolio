import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:flex-row md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-[#5ceacd] text-2xl">About</h3>
            <motion.div
                initial={{
                    x: -200,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}
                transition={{
                    duration: 1.2
                }}
                className="space-y-10 px-0 md:px-10"
            >
                <h4 className="font-semibold pt-20 text-3xl lg:text-4xl">Hi! My name is Daf and I'm a software developer</h4>
                <p className="text-base text-justify sm:text-sm md:text-md lg:text-lg"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas accumsan libero fringilla pulvinar. Donec tristique risus eget neque vestibulum tristique. Proin risus tortor, fermentum et euismod quis, posuere eget nisi. Curabitur sit amet dolor sit amet leo lacinia volutpat. Vestibulum pellentesque non magna id egestas. Sed dolor metus, feugiat sed rutrum et, ullamcorper ac velit. </p>
            </motion.div>
        </motion.div>
    )
}

export default About