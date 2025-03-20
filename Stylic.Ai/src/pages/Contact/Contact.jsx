import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ContactHeader = () => {
  return (
    <motion.div
      className="bg-[#0f2854] py-20 flex flex-col items-center text-white"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <h1 className="text-4xl pt-20 font-bold mb-4">Contact Us</h1>
      <div className="flex items-center space-x-2 text-sm text-gray-200">
        <span className="font-semibold">Home</span>
        <ChevronRight className="w-4 h-4 text-yellow-400" />
        <span className="font-semibold text-white">Contact Us</span>
      </div>
    </motion.div>
  );
};

const ContactDetails = () => {
  return (
    <motion.section
      className="py-16 bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="./src/assets/contactform.jpg"
              alt="Contact"
              className="rounded-lg"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-6 md:mt-0 md:ml-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <h3 className="text-lg font-semibold mb-2">Communication Address</h3>
            <p className="text-gray-700 mb-4">
              402, Shangrila Arcade, near Shyamal Cross Road, <br />
              Shyamal cross road, Ahmedabad, Gujarat 380015
            </p>
            <p className="text-gray-900 font-semibold text-lg mb-2">
              +91 63566 65365
            </p>
            <p className="text-blue-600 font-semibold">info@stylic.ai</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <motion.section
      className="bg-white py-10"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <label className="block text-gray-700 font-medium mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name here"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <label className="block text-gray-700 font-medium mb-1">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email here"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </motion.div>
          </div>

          {/* Contact Number Field */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <label className="block text-gray-700 font-medium mb-1">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Your phone here"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <label className="block text-gray-700 font-medium mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us a few words"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <button
              type="submit"
              className="bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-700 transition duration-300"
            >
              SUBMIT
            </button>
          </motion.div>
        </form>
      </div>
    </motion.section>
  );
};

const Contact = () => {
  return (
    <div>
      <ContactHeader />
      <ContactDetails />
      <ContactForm />
    </div>
  );
};

export default Contact;