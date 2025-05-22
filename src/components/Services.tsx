import { AnimatePresence, motion } from "motion/react"
import { CgWebsite } from "react-icons/cg"
import { FaCloudArrowUp } from "react-icons/fa6"
import { ImMobile } from "react-icons/im"


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
                    <div className='text-4xl font-semibold w-full'>What i do </div>
                    <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xl'>
                        <div className="text-center flex gap-y-3 justify-center items-center p-6  text-black dark:text-white font-extrabold rounded-lg border-4 border-cyan-400 flex-col">
                            <CgWebsite size={50} />
                            <p>Website development</p>
                        </div>
                        <div className="text-center flex gap-y-3 flex-col justify-center items-center p-10 text-black dark:text-white font-extrabold rounded-lg border-4 border-cyan-400">
                            <ImMobile size={50} />
                            <p>Mobile apps development</p>
                        </div>
                        <div className="text-center flex gap-y-3 flex-col justify-center items-center p-10 text-black dark:text-white font-extrabold rounded-lg border-4 border-cyan-400">
                            <FaCloudArrowUp  size={50} />
                            <p>Web Hosting</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
