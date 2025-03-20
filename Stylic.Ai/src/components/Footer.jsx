import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#13254a] text-white py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* About Section */}
                <div>
                    <h1 className="text-3xl font-bold">STYLiC</h1>
                    <p className="mt-4 text-gray-300">
                        STYLiC brings innovation to fashion photography with AI technology. Create stunning designs effortlessly and enhance your commerce enterprise.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4 mt-4">
                        <FaFacebookF className="text-gray-400 text-xl cursor-pointer" />
                        <FaInstagram className="text-gray-400 text-xl cursor-pointer" />
                        <FaLinkedinIn className="text-gray-400 text-xl cursor-pointer" />
                    </div>
                </div>

                {/* Newsletter Section */}
                <div>
                    <h2 className="text-xl font-semibold">Newsletter</h2>
                    <p className="mt-2 text-gray-300">Subscribe to receive updates on the latest news!</p>
                    <div className="flex items-center mt-4">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="px-4 py-2 rounded-l-md outline-none text-white w-full"
                        />
                        <button className="bg-gray-900 px-4 py-2 rounded-r-md font-medium">Subscribe</button>
                    </div>
                </div>

                {/* Contact Section */}
                <div>
                    <h2 className="text-xl font-semibold">Contact Us</h2>
                    <div className="mt-4 flex items-center justify-center md:justify-start gap-2">
                        <FaPhone className="text-gray-400" />
                        <span>+91 63566 65365</span>
                    </div>
                    <div className="mt-2 flex items-center justify-center md:justify-start gap-2">
                        <FaEnvelope className="text-gray-400" />
                        <span>info@stylic.ai</span>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-300">
                <p>© 2025 <span className="text-gray-400 font-semibold">STYLiC</span>. All Rights Reserved.</p>
                <div className="mt-2">
                    <a href="#" className="hover:underline">Terms & Conditions</a> | 
                    <a href="#" className="hover:underline"> Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
