import React from "react";

const First = () => {
    return (
        <div className="container mx-auto md:px-20 px-4 pt-32 pb-20 md:py-32">
            <div className="flex flex-col lg:flex-row items-center gap-12">

                {/* Text Section */}
                <div className="w-full flex flex-col gap-2 lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-3xl text-navyblue leading-10 sm:text-5xl md:text-5xl font-bold mb-2">
                        Transform your day with AI here now!
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl mb-4 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                        Upgrade your fashion brand with Stylic's state-of-the-art AI solutions and get life-like visual representations of garments for your online store.
                    </p>
                    <a href="/contactus">
                        <button className="bg-golden text-white px-6 py-2 rounded-full hover:bg-navyblue transition duration-300">
                            Contact Us
                        </button>
                    </a>
                </div>

                {/* Image Grid Section */}
                <div className="w-full lg:w-2/5">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-y-4 md:gap-x-4">
                        {["./src/assets/Photos/i1.webp"
                            , "./src/assets/Photos/i2.webp"
                            , "./src/assets/Photos/i3.webp"
                            , "./src/assets/Photos/i4.webp"].map((img, index) => (
                                <div key={index} className="overflow-hidden md:h-72 h-60 rounded-md">
                                    <img className="w-full h-full object-contain" src={`${img}`} alt={`Stylic AI Fashion ${index + 1}`} />
                                </div>
                            ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default First;
