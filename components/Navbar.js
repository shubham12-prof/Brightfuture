import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuVariants = {
        hidden: { height: 0, opacity: 0, transition: { duration: 0.3 } },
        visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
    };

    return (
        <nav className="fixed w-full top-0 z-50 bg-gray-800">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex justify-between items-center h-16">
                    <h1 className="text-3xl font-extrabold text-white cursor-pointer ">
                        BrightFuture
                    </h1>


                    <div className="hidden md:flex items-center space-x-8 text-white text-lg">
                        <Link href="/" passHref legacyBehavior>
                            <a className="hover:text-green-300 transition">Home</a>
                        </Link>
                        <a href="#subjects" className="hover:text-green-300 transition">
                            Subjects
                        </a>
                        <Link href="/contact" passHref legacyBehavior>
                            <a className="hover:text-green-300 transition">Contact</a>
                        </Link>
                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-green-500 text-white px-4 py-1.5 rounded-full hover:bg-green-600 transition"
                        >
                            <FaWhatsapp size={18} />
                            WhatsApp
                        </a>
                    </div>


                    <button
                        className="md:hidden text-white hover:text-green-300 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
                    </button>
                </div>
            </div>


            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                        className="md:hidden overflow-hidden bg-white shadow-lg rounded-b-md"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-5 text-gray-700 font-semibold text-lg">
                            <Link href="/" passHref legacyBehavior>
                                <a onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition">
                                    Home
                                </a>
                            </Link>
                            <a
                                href="#subjects"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-blue-600 transition"
                            >
                                Subjects
                            </a>
                            <Link href="/contact" passHref legacyBehavior>
                                <a onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition">
                                    Contact
                                </a>
                            </Link>
                            <a
                                href="https://wa.me/919999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-green-600 hover:text-green-800 transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                <FaWhatsapp size={18} />
                                WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
