import { AnimatePresence, motion } from "motion/react"


export const Services = () => {
    return (
        <div className='container p-5'>
            <AnimatePresence >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    exit={{ opacity: 0, y: -50 }}
                    viewport={{ once: false }}
                    className="w-full mt-16 md:mt-0 text-center text-black dark:text-gray-300">
                    <div className='text-4xl font-semibold w-full'>Services </div>
                    <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-2xl'>
                        <div className="text-center flex justify-center items-center p-10 bg-cyan-400 text-white font-extrabold rounded-lg border-4 border-cyan-400">Website development</div>
                        <div className="text-center flex justify-center items-center p-10 bg-cyan-400 dark:text-white font-extrabold rounded-lg border-4 border-cyan-400">Mobile apps development</div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
