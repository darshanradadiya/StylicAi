import React from "react";

const Second = () => {
  return (
    <div className="w-full bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-16">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-gray-700 font-medium mb-2 md:mb-4 text-lg md:text-xl">
            How It Works
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Instant Photoshoots In Three Easy Steps
          </h2>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              img: "./src/assets/instant/Upload.png",
              title: "Upload Your Garment",
              description:
                "Upload your attire's front and back pictures for effective AI visualization.",
            },
            {
              img: "./src/assets/instant/ai.png",
              title: "Click Generate",
              description:
                "Observe our AI perform wonders instantly, creating professional, high-quality visuals.",
            },
            {
              img: "./src/assets/instant/downloads.png",
              title: "Download Your Photoshoot",
              description:
                "Get a ready collection of high-quality images with different poses for your campaigns.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-3xl p-6 shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="bg-gray-100 rounded-full p-4 mb-4 inline-block">
                <img
                  className="w-16 h-16 object-contain md:w-20 md:h-20"
                  src={step.img}
                  alt={step.title}
                />
              </div>
              <div className="space-y-2">
                <p className="text-gray-900 font-semibold text-lg md:text-xl">
                  {step.title}
                </p>
                <span className="text-sm md:text-base text-gray-600 block">
                  {step.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Second;