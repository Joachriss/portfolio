import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import royalproducts from "/images/royalproduct.png";
import ikoncreatives from "/images/ikoncreatives.png";
import nibadilishe from "/images/nibadilishe.png";

export const ProjectsSection = () => {
    return (
        <div className='container mx-auto py-10 p-4 flex flex-col md:flex-row bg-transparent' id='projects'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                exit={{ opacity: 0, y: -50 }}
                viewport={{ once: false }}
                className=" text-black dark:text-gray-300 bg-transparent w-full">
                <div className='text-4xl font-bold'>Projects <br /></div>
                <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 '>
                    {/* <p>Here are some of the projects I have worked on:</p> */}
                    <ProjectCard image={royalproducts} name='Royal Products' description='MERN stack' link='https://royalproducts.net' />
                    <ProjectCard image={ikoncreatives} name='Ikon Creatives' description='HTML, CSS (Bootstrap), JavaScript and PHP' link='https://ikoncreatives.com' />
                    <ProjectCard image={nibadilishe} name='Nibadilishe NGO' description='MERN stack' link='#' />
                </div>
            </motion.div>
        </div>
    )
}
