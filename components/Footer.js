import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-6 md:flex md:justify-between md:items-center">

                <div className="mb-8 md:mb-0">
                    <h2 className="text-2xl font-bold mb-2">BrightFuture</h2>
                    <p className="text-sm opacity-75">
                        &copy; {new Date().getFullYear()} BrightFuture. All rights reserved.
                    </p>
                </div>


                <div className="flex flex-col md:items-end">
                    <div className="flex space-x-5 mb-4">
                        <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition">
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}
