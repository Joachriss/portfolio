import aboutme from '/images/aboutme.png'



import { AnimatePresence, motion } from 'motion/react';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { AiOutlinePercentage } from 'react-icons/ai';

export const AboutSection = () => {
    return (
        <div className='container mx-auto overflow-hidden py-10 px-4 flex flex-col md:flex-row gap-5 justify-center bg-transparent' id='about'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0, x: 50 }}
                viewport={{ once: false }}
                className="w-full md:w-1/2 text-black dark:text-gray-300 text-center bg-transparent">
                <div className='text-4xl font-bold '>About Me</div>
                <div className='mt-4 text-lg text-start'>
                    <p>Hi, I'm Johannes Mwasanyila, a developer skilled in Python, React, Node.js, MongoDB, MySQL, and Flutter. Passionate about building impactful solutions
                        and continuously learning. </p>
                    <p>I thrive on challenges and enjoy collaborating with teams to create innovative applications. My goal is to leverage technology to solve real-world problems and enhance user experiences. Let's connect and explore how we can work together to make a difference!</p>
                    <div className="grid grid-cols-3 mt-5 justify-between items-center mx-auto p-2">
                        <div className="flex flex-col text-start mx-auto">
                            <h2 className='text-4xl flex flex-row font-extrabold'>2 <span className='text-orange-600'><HiOutlinePlusSm size={40}/></span></h2>
                            <p className='text-xs mt-3'>Years of<br/> experience</p>
                        </div>
                        <div className="flex flex-col text-start mx-auto">
                            <h2 className='text-4xl flex flex-row font-extrabold'>95 <span className='text-orange-600'><AiOutlinePercentage  size={40}/></span></h2>
                            <p className='text-xs mt-3'>Clients<br/> satisfaction</p>
                        </div>
                        <div className="flex flex-col text-start mx-auto">
                            <h2 className='text-4xl flex flex-row font-extrabold'>5 <span className='text-orange-600'><HiOutlinePlusSm size={40}/></span></h2>
                            <p className='text-xs mt-3'>Projects<br/> conducted</p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <AnimatePresence >
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    exit={{ opacity: 0, x: -50 }}
                    viewport={{ once: false }}
                    className="w-full md:w-1/2 mt-16 md:mt-0 text-center text-black dark:text-gray-300">
                    <div className=''>
                        <img src={aboutme} className='w-[70%] mx-auto' alt="" />
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
