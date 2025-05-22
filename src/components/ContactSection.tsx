import { motion } from "motion/react"
import { FaLinkedin } from "react-icons/fa"
import { FaSquareGithub, FaSquareWhatsapp } from "react-icons/fa6"
import { IoMail } from "react-icons/io5"
import { MdOutlinePhone } from "react-icons/md"

export const ContactSection = () => {
    return (
        <motion.div
            className="container p-5 grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            id="contact"
            exit={{ opacity: 0, y: -50 }}
        >
            <div className="block space-y-2">
                <h1 className="text-4xl font-bold mb-5">Contacts</h1>
                <div className="flex gap-4 items-center flex-row">
                    <IoMail size={30} />
                    <p>
                        <a href="mailto:joachriss@gmail.com">joachriss@gmail.com</a>
                    </p>
                </div>
                <div className="flex gap-4 items-center flex-row">
                    <MdOutlinePhone size={30} />
                    <p>+255 658 191 222</p>
                </div>
                <div className="flex gap-4 items-center flex-row">
                    <FaLinkedin size={30} />
                    <p>
                        <a href="https://www.linkedin.com/in/johannes-mwasanyila-4b0b1a1b6/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </p>
                </div>
                <div className="flex gap-4 items-center flex-row">
                    <FaSquareGithub size={30} />
                    <p>
                        <a href="https://github.com/joachriss" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </p>
                </div>
                <div className="flex gap-4 items-center flex-row">
                    <FaSquareWhatsapp size={30}  />
                    <a href="https://wa.me/+255658191222">+255 658 191 222</a>
                </div>
            </div>

            {/* contact form */}
            <div className="">
                <h1 className="text-2xl font-bold mb-5 mt-7">Contact form</h1>
                <form action="">
                    <div className="mb-4">
                        <label htmlFor="name" className="block">Name</label>
                        <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block">Email</label>
                        <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block">Message</label>
                        <textarea id="message" rows={4} className="w-full p-2 border border-gray-300 rounded"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
                </form>
            </div>
        </motion.div>
    )
}
