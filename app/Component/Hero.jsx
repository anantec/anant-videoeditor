import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";


export const Hero = () => {


    // icon array
    const icons = [
        "/assets/capcut.png",
        "/assets/figma.png",
        "/assets/canva.jpg",
        // "/assets/premiere-pro.png",
        "/assets/figma.png",
        "/assets/capcut.png",
        // "/assets/premiere-pro.png",
        "/assets/canva.jpg",
    ]

    // animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };


    return (
        <section>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className='max-w-2xl m-auto flex flex-col items-center justify-center text-center pt-24 md:pt-36 px-4 md:px-0 pb-8 overflow-hidden'>

                {/* profile image */}
                <motion.div
                    variants={item}
                    className="w-[150px] h-[150px] mx-auto relative"
                >
                    <Image
                        src="/assets/Anant_Model.png"
                        alt="profile image"
                        fill
                        sizes="150px"
                        className="rounded-full object-cover"
                        priority
                    />
                </motion.div>

                {/* name part */}
                <motion.h3
                    variants={item}
                    className='text-lg md:text-xl font-semibold flex items-center justify-center gap-2 '>
                    I'm Anant Singh <span className='inline-block'>👋🏻</span>
                </motion.h3>

                {/* Title */}

                <motion.h1
                    variants={item}
                    className='text-3xl md:text-5xl font-semibold mt-2 leading-tight'>
                    Helping brands & creators <br className='md:hidden ' /> grow online.
                </motion.h1>
                <motion.p
                    variants={item}
                    className='text-sm  font-semibold  mt-3 max-w-md'
                >
                    Through websites, content & growth strategies
                </motion.p>

                {/* icon section/applications */}
                <motion.div
                    variants={item}
                    className='relative my-6 md:my-8 w-full mask-r-from-50% mask-l-from-50% overflow-hidden'>
                    <motion.div className='flex gap-4 w-max'
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" }}
                    >
                        {/* icon loop */}

                        {icons.concat(icons).map((icon, index) => (
                            <Image
                                src={icon}
                                key={index}
                                width={40}
                                height={40}
                                alt={`icon ${index + 1}`}
                                className='md:w-[50px] md:h-[50px] '
                            />
                        ))}
                    </motion.div>
                </motion.div>

                {/* buttons */}
                <motion.div
                    variants={item}
                    className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                    <a href="#portfolio"
                        className='custom-gradient w-full md:w-auto py-3 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300 '
                    >
                        My Work <HiOutlineViewGrid className='text-lg ' />
                    </a>
                    <a href="https://instagram.com/sochungausername"
                        target='_blank'
                        className='w-full md:w-auto py-3 px-8 rounded-full font-semibold border border-content/20
                         hover:border-content/40 hover:shadow-sm transition-colors duration-300 flex items-center justify-center gap-2 '
                    >
                        Instagram <FaInstagram className='text-lg' /></a>
                </motion.div>
            </motion.div>
        </section>
    )
}
