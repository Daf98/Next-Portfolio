import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { pageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'

type Props = {
    pageInfo: pageInfo
}

const Hero = ({pageInfo}: Props) => {
    const [text, count] = useTypewriter({
        words: [`Hi, I'm ${pageInfo.name}`,
            "MusicLover.jsx",
            "<HorrorFan />"
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <>
            <BackgroundCircles />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src={urlFor(pageInfo.heroImage)} alt="Profile picture"></img>
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">{pageInfo.role}</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#5ceacd" />
                </h1>
                <div className="pt-5 flex items-center justify-center gap-[10px]">
                    <Link href="#about">
                        <button className="hero-button">About</button>
                    </Link>
                    <Link href="#skills">
                        <button className="hero-button">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="hero-button">Projects</button>
                    </Link>
                </div>
            </div>
            </>
        </div>
    )
}
export default Hero