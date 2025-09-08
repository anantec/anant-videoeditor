import React from 'react'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';

export const Footer = () => {


    const socialIcons = [
        { icon: FaYoutube, href: "https://youtube.com/@ifeelbrutal?sub_confirmation=1" },
        { icon: FaInstagram, href: "https://www.instagram.com/pookie.anant" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/anantsinghdugtal/" },
        { icon: FaXTwitter, href: "https://x.com/pookie_anant" },
    ]


    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.2 },
        }
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }


    return (
        <footer className='py-12 px-4 text-center '>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className='flex justify-center gap-2 md:gap-6 mb-8 '>

                {socialIcons.map((social, index) => {
                    const Icon = social.icon;
                    return (
                        <motion.a
                            variants={item}
                            whileHover={{ scale: 1.02, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            href={social.href}
                            key={index}
                            target="_blank"
                            className='cursor-pointer p-4 rounded-2xl border border-outer hover:bg-primary/10  transition-all'
                        >
                            <Icon
                                className='text-clip md:text-2xl text-primary'
                            />
                        </motion.a>
                    )
                })}
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='text-xl md:text-2xl font-semibold text-gradient max-w-3xl mx-auto mb-8'>
                Want to know about me, tell me about your project or just to say hello? Contact me on instagram and I'll get back as soon as possible.
            </motion.p>

            <hr
                className='border-outer mb-8'
            />


        </footer>
    )
}
