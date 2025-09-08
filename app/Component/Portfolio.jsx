import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import { motion } from "framer-motion"


export const Portfolio = () => {

    // project
    const project = [
        {
            type: "video",
            title: "In frame: Anant Singh",
            src: "/video/video1.mp4"
        },

        {
            type: "video",
            title: "In frame: Mayank Singh",
            src: "/video/mayankbhaiya.mp4"
        },
        {
            type: "video",
            title: "In frame: Anant Singh",
            src: "/video/video2.mp4"
        },
    ];

    // animation variant

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25,
            }
        }
    }


    // card
    const card = {
        hidden: { opacity: 0, y: 60, rorateX: -10 },
        show: {
            opacity: 1,
            y: 0,
            rateteX: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        }
    }

    return (
        <section className='my-8' id='portfolio'>
            {/* heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-center'>
                <p className='text-content font-semibold inline-flex items-center gap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4'>
                    <PiStarFourFill
                        className='text-lg'
                    />

                    Portfolio
                </p>

                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8'>
                    Check out my hightlighted <br /> projects
                </h2>
            </motion.div>

            {/* project */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    project.map((proj, index) => (
                        <motion.div
                            key={index}
                            variants={card}
                            whileHover={{ scale: 1.03, rotateY: 3 }}
                            transition={{ type: "spring", stiffness: 120, damping: 12 }}
                            className='group relative bg-white/5 backdrop-blur-sm overflow-hidden'
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                className='relative overflow-hidden flex flex-col items-center'
                            >
                                <video
                                    src={proj.src}

                                    controls
                                    loop
                                    className='w-[300px] h-[550px] rounded-lg rounded-t-lg object-cover'
                                />
                                <h3 className='font-bold text-content mb-3 mt-1'>
                                    {proj.title}
                                </h3>
                            </motion.div>
                        </motion.div>
                    ))
                }
            </motion.div>
        </section>
    )
}
