import React from 'react'
import { PiStarFourFill } from 'react-icons/pi'
import { motion, scale } from 'framer-motion'

export const About = () => {


    const container = {
        hidden: {},
        show: { transition: { staggerChilder: 0.2 } },
    };


    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <section className='mt-12 pb-8' id='about'>
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
                    About
                </p>

                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8'>
                    Turn you raw footage <br /> into an emotion.
                </h2>
            </motion.div>
            {/* about data */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
                {/* card 1 */}
                <motion.div
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer'>
                    <h3 className='text-5xl md:text-6xl font-bold text-gradient'>5+</h3>
                    <p className='text-gray-700 font-medium text-lg mt-0.5'>Year of Experience in <br /> Video Editing</p>
                </motion.div>
                {/* card 2 */}
                <motion.div
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer'>
                    <h3 className='text-5xl md:text-6xl font-bold text-gradient'>3+</h3>
                    <p className='text-gray-700 font-medium text-lg mt-0.5'>Year of Experience in <br /> Content Creation</p>
                </motion.div>
                {/* card 3 */}
                <motion.div
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer'>
                    <h3 className='text-5xl md:text-6xl font-bold text-gradient'>2+</h3>
                    <p className='text-gray-700 font-medium text-lg mt-0.5'>Month of Experience in <br /> Standup Comedy</p>
                </motion.div>
            </motion.div>



            {/* content text */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-start'>
                <div className='lg:col-span-2 space-y-6 '>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className='text-gray-600 text-lg leading-relaxed'>
                        🎬 I’m a video editor and content creator passionate about transforming raw footage into compelling stories.
                        From short-form social content to cinematic edits, I bring creativity, precision, and storytelling together
                        to create visuals that connect, inspire, and leave a lasting impact.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                        className='text-gray-600 text-lg leading-relaxed'>
                        I turn raw clips into stories that people remember.
                        From raw footage to visual representation,
                        I bring rhythm and emotion into every frame.
                        My goal is simple: create content that entertains, inspires, and leaves an impact.
                    </motion.p>
                </div>
                {/* right column */}
                <div className='lg:col-span-1 space-y-4'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-gray-500 text-sm font-medium mb-1'>Name</p>
                        <p className='text-gray-800 text-xl font-semibold '>Anant Singh Dugtal</p>
                    </motion.div>
                    {/* <div>
                    <p className='text-gray-500 text-sm font-medium mb-1'>Email/phnoo.</p>
                    <p className='text-gray-800 text-xl font-semibold '>Anant Singh Dugtal</p>
                </div> */}
                </div>
            </motion.div>

        </section >
    )
}
