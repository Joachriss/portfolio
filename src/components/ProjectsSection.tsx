import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection = () => {
    return (
        <div className='container mx-auto py-10 px-4 flex flex-col md:flex-row gap-5 justify-center bg-transparent'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0, y: -50 }}
                viewport={{ once: false }}
                className="w-full text-black dark:text-gray-300 bg-transparent">
                <div className='text-4xl font-bold '>Projects</div>
                <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4'>
                    {/* <p>Here are some of the projects I have worked on:</p> */}
                    <ProjectCard name='Royal Products' description='MERN stack' link='https://royalproducts.net' />
                    <ProjectCard name='Ikon Creatives' description='HTML, CSS (Bootstrap), JavaScript and PHP' link='https://ikoncreatives.com' />
                    <ProjectCard name='Nibadilishe' description='MERN stack' link='#' />
                </div>
            </motion.div>
        </div>
    )
}
