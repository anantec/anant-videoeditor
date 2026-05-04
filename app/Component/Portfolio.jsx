'use client'

import React, { useEffect } from 'react'
import { PiStarFourFill } from "react-icons/pi"
import { motion } from "framer-motion"

export const Portfolio = () => {

    const project = [
        { title: "Harsh Vijay — 4M+ views", embedUrl: "https://www.instagram.com/reel/DWMTnWYklz0/" },
        { title: "Harsh Vijay — 600k+ views", embedUrl: "https://www.instagram.com/reel/DWS_mwkEUJ7/" },
        { title: "Harsh Vijay — 600k+ views", embedUrl: "https://www.instagram.com/reel/DWbu7RVElzz/" },
        // { title: "Harsh Vijay — 600k+ views", embedUrl: "https://www.instagram.com/reel/DV-_WhfkZ1R/" },
        { title: "Harsh Vijay — 1M+ views", embedUrl: "https://www.instagram.com/reel/DW1SyX7EZLQ/" },
        { title: "Harsh Vijay — 500k+ views", embedUrl: "https://www.instagram.com/reel/DXuNqilkt4q/" },
    ]

    const loopedProject = [...project, ...project]

    useEffect(() => {
        if (window.instgrm) {
            window.instgrm.Embeds.process()
            return
        }
        const script = document.createElement('script')
        script.src = 'https://www.instagram.com/embed.js'
        script.async = true
        script.onload = () => {
            if (window.instgrm) window.instgrm.Embeds.process()
        }
        document.body.appendChild(script)
    }, [])

    return (
        <section className='my-8' id='portfolio'>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0 }}
                viewport={{ once: true }}
                className='text-center mb-10'
            >
                <p className='text-content font-semibold inline-flex items-center gap-1 border border-outer py-1.5 px-3 rounded-2xl mb-4'>
                    <PiStarFourFill className='text-lg' />
                    Portfolio
                </p>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient'>
                    Check out my highlighted <br /> projects
                </h2>
            </motion.div>

            <div className='portfolio-wrapper relative overflow-hidden'>
                <div
                    className='flex gap-4 w-max px-4'
                    style={{ animation: 'portfolioScroll 30s linear infinite' }}
                    onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
                    onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
                >
                    {loopedProject.map((proj, index) => (
                        <div
                            key={`${proj.embedUrl}-${index}`}
                            className='flex-none w-[280px] sm:w-[300px] md:w-[320px] flex flex-col gap-2'
                        >
                            <p className='text-content text-xs font-semibold px-1 truncate'>
                                {proj.title}
                            </p>

                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink={`${proj.embedUrl}?utm_source=ig_embed&utm_campaign=loading`}
                                data-instgrm-version="14"
                                style={{
                                    background: '#FFF',
                                    border: 0,
                                    borderRadius: '16px',
                                    margin: 0,
                                    maxWidth: '320px',
                                    minWidth: '280px',
                                    padding: 0,
                                    width: '100%',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes portfolioScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                .portfolio-wrapper::before,
                .portfolio-wrapper::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 150px;
                    z-index: 10;
                    pointer-events: none;
                }

                .portfolio-wrapper::before {
                    left: 0;
                    background: linear-gradient(to right, var(--background), transparent);
                }

                .portfolio-wrapper::after {
                    right: 0;
                    background: linear-gradient(to left, var(--background), transparent);
                }

                @media (max-width: 640px) {
                    .portfolio-wrapper::before,
                    .portfolio-wrapper::after {
                        width: 60px;
                    }
                }
            `}</style>

        </section>
    )
}