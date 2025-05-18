import nodejs from '/logos/nodejs.svg';
import python from '/logos/python.svg';
import react from '/logos/react.svg';
import mongodb from '/logos/mongodb.svg';
import mysql from '/logos/mysql.svg';
import dart from '/logos/dart.svg';
import javascript from '/logos/javascript.svg';
import html from '/logos/html.svg';
import css from '/logos/css.svg';
import typescript from '/logos/typescript.svg';
import redux from '/logos/redux.svg';
import git from '/logos/git.svg';
import github from '/logos/github.svg';
import vscode from '/logos/vscode.svg';
import postgresql from '/logos/postgresql.svg';
import amazon from '/logos/amazon.svg';
import c from '/logos/c.svg';
import { AnimatePresence, motion } from 'motion/react';


export const Skills = () => {
    const skills = [
        { name: 'React', image: react },
        { name: 'Node.js', image: nodejs },
        { name: 'MongoDB', image: mongodb },
        { name: 'MySQL', image: mysql },
        { name: 'Python', image: python },
        { name: 'Flutter', image: dart },
        { name: 'JavaScript', image: javascript },
        { name: 'HTML', image: html },
        { name: 'CSS', image: css },
        { name: 'TypeScript', image: typescript },        
        { name: 'Redux', image: redux },
        { name: 'Git', image: git },
        { name: 'GitHub', image: github },
        { name: 'C', image: c },
        { name: 'AWS', image: amazon },
        { name: 'PostgreSQL', image: postgresql },
        { name: 'VsCode', image: vscode }
    ];
    return (
        <div className='container p-5'>
            <AnimatePresence >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    exit={{ opacity: 0, x: 50 }}
                    viewport={{ once: false }}
                    className="w-full mt-16 md:mt-0 text-center text-black dark:text-gray-300">
                    <div className='text-4xl font-semibold w-full'>Skills </div>
                    <div className='mt-4 grid grid-cols-6 gap-4'>
                        {
                            skills.map((skill, index) => (
                                <div key={index} className="text-center flex flex-col items-center">
                                    <img className='' width={80} src={skill.image} alt="" />
                                    <p className='text-xs font-semibold'>{skill.name}</p>
                                </div>
                            ))

                        }


                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
