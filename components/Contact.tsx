import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

const Contact = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:dafne.azzolina@gmail?subject=${formData.subject}&body=Name: ${formData.name}. Message: ${formData.message}`
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-[#5ceacd] text-2xl">Contact</h3>
            <div className="flex flex-col space-y-5">
                <h4 className="text-4xl text-center font-semibold">Get in touch :)</h4>
                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#5ceacd] animate-pulse h-7 w-7" />
                        <p className="text-2xl">+54 342 58 7449</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#5ceacd] animate-pulse h-7 w-7" />
                        <p className="text-2xl">dafne.azzolina@gmail.com</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                        <div className="flex space-x-2">
                            <input {...register('name')} type="text" placeholder="Name" className="contact-input" />
                            <input {...register('email')} type="email" placeholder="Email" className="contact-input" />
                        </div>
                        <input {...register('subject')} type="text" placeholder="Subject" className="contact-input" />
                        <textarea {...register('message')} placeholder="Message" className="contact-input" />
                        <button type="submit" className="bg-[#5ceacd] py-2 px-10 rounded-md text-black font-bold text-lg">Submit</button>
                    </form>
                </div>
            </div>

        </motion.div>
    )
}

export default Contact