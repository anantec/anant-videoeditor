import React from 'react'
import { PiComputerTowerFill, PiGraduationCapFill, PiStarFourFill } from 'react-icons/pi'
import { motion } from 'framer-motion'

export const Resume = () => {


    // education array
    const educationData = [
        // here will be the education
    ]


    // work experience
    const WorkData = [
        {
            year: "2017-2018",
            title: "Tech Content creator/Video Editor",
            description: "I have created some videos in tech field"
        },
        {
            year: "2019-2020",
            title: "Freelance Video Editor",
            description: "Worked as entertainment freelance video editor"
        },
        {
            year: "2020-2022",
            title: "Gaming Video Creator and Esports player",
            description: "Created some gaming videos and played some local esports tournament"
        },
        {
            year: "2025-08/2025",
            title: " Video Editing Internship",
            description: "Done my video internship in a Marketing Agency by editing video for brands"
        },
        {
            year: "2025-Present",
            title: " Freelance Video Editor",
            description: "Trying my best to turn the raw footage into a valuable emotion/information"
        },
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
        <section className='mt-12 pb-8' id='resume'>
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
                    Resume
                </p>

                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8'>
                    Analyze Think and<br /> create.
                </h2>
            </motion.div>
            {/* timeline content */}
            <div className='gap-4 space-y-12 flex items-center  justify-center'>

                {/* blow grid id for 2 things educatio and workexperience */}
                {/* <div className=' grid grid-cols-1 md:grid-cols-1 gap-4 space-y-12 flex items-center '> */}
                {/* eduction */}
                {/* <div>
                    <h3 className='text-xl md:text-2xl font-bold text-content mb-8 '>My Education</h3>
                    <div className='relative'>
                        <div className='absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60'></div>
                        <div>
                            {educationData.map((edu, index) => (
                                <div className='relative flex items-baseline space-x-6 pb-8 '>
                                    <div className='relative flex-shrink-0'>
                                        <div className='w-8 h-8 custom-gradient rounded-full flex items-center justify-center '>
                                            <PiGraduationCapFill className='w-4 h-4 text-white' />
                                        </div>
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <div className='flex items-center space-x-2 mb-2'>
                                            <span className='text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded '>{edu.year}</span>
                                        </div>
                                        <h4 className='text-lg font-semibold text-content'>{edu.title}</h4>
                                        <p className='text-gray-600 mb-2'>{edu.institue}</p>
                                        <p className='text-gray-700 text-sm'>{edu.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}



                {/* experience */}
                <motion.div
                initial={{opacity:0, y:40}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.8}}
                viewport={{once:true}}
                >
                    <h3 className='text-xl md:text-2xl font-bold text-content mb-8 '>Work Experience</h3>
                    <div className='relative'>
                        <div className='absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60'></div>
                        <div>
                            {WorkData.map((item, index) => (
                                <motion.div 
                                variants={item}
                                whileHover={{x:10}}
                                className='relative flex items-baseline space-x-6 pb-8 ' key={index}>
                                    <div className='relative flex-shrink-0'>
                                        <div className='w-8 h-8 custom-gradient rounded-full flex items-center justify-center '>
                                            <PiComputerTowerFill className='w-4 h-4 text-white' />
                                        </div>
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <div className='flex items-center space-x-2 mb-2'>
                                            <span className='text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded '>{item.year}</span>
                                        </div>
                                        <h4 className='text-lg font-semibold text-content'>{item.title}</h4>
                                        {/* <p className='text-gray-600 mb-2'>{item.institue}</p> */}
                                        <p className='text-gray-700 text-sm'>{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
