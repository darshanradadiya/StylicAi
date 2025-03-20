import React from "react";

const Five = () => {
  const logos = Array(10).fill("./src/assets/Logo/stylic.png");

  return (
    <div className="relative w-full bg-gray-100  overflow-hidden">
      <div className="flex items-center space-x-10  py-6 animate-marquee">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-none w-40 h-24 rounded-lg flex items-center  px-6  justify-center shadow"
          >
            <img
              src={logo}
              alt="Stylic logo"
              className="w-52 h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Five;