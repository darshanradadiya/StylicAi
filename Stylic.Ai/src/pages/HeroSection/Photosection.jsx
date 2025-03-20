import React, { useState } from "react";

const garments = [
  {
    id: 1,
    img: "./src/assets/garments/g1/garment1.webp",
    photoshoot: ["./src/assets/garments/g1/b1.webp", "./src/assets/garments/g1/b2.webp", "./src/assets/garments/g1/b3.webp"],
  },
  {
    id: 2,
    img: "./src/assets/garments/g2/garment2.webp",
    photoshoot: ["./src/assets/garments/g2/b1.webp", "./src/assets/garments/g2/b2.webp", "./src/assets/garments/g2/b3.webp"],
  },
  {
    id: 3,
    img: "./src/assets/garments/g3/garment3.webp",
    photoshoot: ["./src/assets/garments/g3/b1.webp", "./src/assets/garments/g3/b2.webp", "./src/assets/garments/g3/b3.webp"],
  },
  {
    id: 4,
    img: "./src/assets/garments/g4/garment4.webp",
    photoshoot: ["./src/assets/garments/g4/b1.webp", "./src/assets/garments/g4/b2.webp", "./src/assets/garments/g4/b3.webp"],
  },
];

const Forth = () => {
  const [selectedGarment, setSelectedGarment] = useState(garments[0]);
  const [previewImage, setPreviewImage] = useState(garments[0].photoshoot[0]);

  const handleGarmentClick = (garment) => {
    setSelectedGarment(garment);
    setPreviewImage(garment.photoshoot[0]);
  };

  return (
    <div className="bg-gradient-to-b from-slate-100 to-slate-200 py-20">
      {/* Header Section */}
      <div className="text-center px-4 lg:px-8 mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Walk into the Future of Fashion Imagery
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Create stunning, lifelike product imagery with Stylic. Fast, affordable, and seamless photoshoots to elevate your brand's visual storytelling.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 px-4 lg:px-8">
        {/* Left Section - Large Preview */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 flex justify-center items-center overflow-hidden">
          <img
            src={previewImage}
            alt="Selected Garment Preview"
            className="w-full h-full object-cover rounded-xl transition-all duration-300 hover:scale-105"
          />
        </div>

        {/* Right Section - Garment and Photoshoot Selection */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl p-6">
          {/* Garment Selection */}
          <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
            <span role="img" aria-label="Garment">👕</span> Select a Garment
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {garments.map((garment) => (
              <div 
                key={garment.id}
                className={`relative aspect-square overflow-hidden rounded-xl shadow-md cursor-pointer ${
                  selectedGarment.id === garment.id ? "ring-2 ring-blue-600 ring-offset-2" : ""
                }`}
                onClick={() => handleGarmentClick(garment)}
              >
                <img
                  src={garment.img}
                  alt={`Garment ${garment.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Photoshoot Selection */}
          <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
            <span role="img" aria-label="Camera">📸</span> Photoshoot Images
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {selectedGarment.photoshoot.map((photo, index) => (
              <div 
                key={index}
                className={`relative aspect-square overflow-hidden rounded-xl shadow-md cursor-pointer ${
                  previewImage === photo ? "ring-2 ring-blue-600 ring-offset-2" : ""
                }`}
                onClick={() => setPreviewImage(photo)}
              >
                <img
                  src={photo}
                  alt={`Photoshoot ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forth;