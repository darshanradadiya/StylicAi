import React from 'react';
import { Check } from 'lucide-react'; // Importing Lucide icon properly

const Third = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12 flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Image Section */}
        <div className="flex justify-center items-center">
          <img 
            src="./src/assets/Photos/i3.webp" // Replace with actual image path
            alt="AI Fashion Illustration"
            className="w-full max-w-md lg:max-w-full object-contain h-[400px] lg:h-[500px]"
          />
        </div>

        {/* Right Content Section */}
        <div className="space-y-6 lg:space-y-8">
          <div>
            <p className="text-black font-medium mb-2 md:mb-4">About Us</p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-950 leading-tight">
              Introducing a New and Revolutionary AI Solution to Fashion Images
            </h2>
            <p className="text-gray-600 text-base md:text-lg mt-4">
              At Stylic, we redefine fashion marketing by replacing costly, time-consuming photoshoots with cutting-edge AI-driven solutions.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {[
              "Save Time and Money: Create stunning visuals without the expense of traditional setups.",
              "Instant AI Transformation: Convert simple garment photos into lifelike images within seconds.",
              "High-Quality Visuals: Get professionally edited fashion images for your campaigns.",
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-golden p-2 rounded-full">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-black font-semibold">
                  {feature.split(":")[0]}{" "}
                  <span className="font-normal text-gray-500">
                    {feature.split(":")[1]}
                  </span>
                </p>
              </div>
            ))}
          </div>

          {/* About Us Button */}
          <button className="bg-navyblue text-white px-6 py-3 rounded-full hover:bg-gray-900 transition duration-300">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
};

export default Third;
