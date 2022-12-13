import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="flex flex-row flex-around">
            <div className="flex flex-row items-center">
                {/* Social media icons */}
                <SocialIcon url="https://github.com/Daf98" fgColor="gray" bgColor="transparent" />
                <SocialIcon url="https://github.com/Daf98" fgColor="gray" bgColor="transparent" />
                <SocialIcon url="https://github.com/Daf98" fgColor="gray" bgColor="transparent" />
                <SocialIcon url="https://github.com/Daf98" fgColor="gray" bgColor="transparent" />
            </div>
            <div>
            <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Contact Me</p>
            </div>
        </header>
    )
}

export default Header