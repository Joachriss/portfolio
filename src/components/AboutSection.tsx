import aboutme from '/images/aboutme.png'



import { AnimatePresence, motion } from 'motion/react';

export const AboutSection = () => {
    return (
        <div className='container mx-auto py-10 px-4 flex flex-col md:flex-row gap-5 justify-center bg-transparent'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0, x: 50 }}
                viewport={{ once: false }}
                className="w-full md:w-1/2 text-black dark:text-gray-300 text-center bg-transparent">
                <div className='text-4xl font-bold '>About Me</div>
                <div className='mt-4 text-lg'>
                    <p>Hi, I'm Johannes Mwasanyila, a developer skilled in Python, React, Node.js, MongoDB, MySQL, and Flutter. Passionate about building impactful solutions
                        and continuously learning. </p>
                    <p>I thrive on challenges and enjoy collaborating with teams to create innovative applications. My goal is to leverage technology to solve real-world problems and enhance user experiences. Let's connect and explore how we can work together to make a difference!</p>
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
                        <img src={aboutme} className='w-[90%]' alt="" />
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
