import React, { useState } from "react";

const Six = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What kinds of clothing can I upload for AI visualization?",
            answer: "You are free to post any category of clothes, starting with dresses, tops, and pants and finishing with jackets. However, make sure you have clear front and back images for the highest possible quality of the scan."
        },
        {
            question: "What amount of time is taken to produce images?",
            answer: "This AI can generate high-quality images quickly. The generated pictures will probably be ready for downloading in just 12-24 hours after the requests are submitted."
        },
        {
            question: "Can I use these generated images on various platforms?",
            answer: "Absolutely! The images are created to be easily used on your e-commerce websites, social media, and advertising campaigns."
        },
        {
            question: "Do you have any recommended format when it comes to image uploads?",
            answer: "You should input high-resolution image formats such as JPEG or PNG file formats. Be sure that the images have good illumination to support better AI visualization performance."
        }
    ];

    return (
        <div className="py-20 bg-gray-50 px-8">
            <div className="max-w-3xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="text-blue-500 font-semibold text-lg">FAQ'S</p>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Frequently Asked Questions
                    </h1>
                </div>

                {/* FAQ List */}
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-lg bg-white shadow-md">
                            <button 
                                onClick={() => toggleFAQ(index)} 
                                className="w-full p-5 flex justify-between items-center text-left hover:bg-gray-50 transition"
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-lg font-medium">{faq.question}</span>
                                <span className="text-black text-xl">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            {openIndex === index && (
                                <div className="px-5 pb-5">
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Six;
