import React from "react";
import Frame85 from "../assets/Frame 84.png";

const TIme = () => {
  return (
    <div className="pt-16 px-6 md:px-16 text-white text-center">
      {/* Title & Description */}
      <div className="flex flex-col items-center gap-6">
        <strong className="text-2xl sm:text-3xl md:text-4xl max-w-[600px]">
          Your Swiss knife for learning any language
        </strong>
        <p className="text-gray-400 text-sm sm:text-base max-w-[600px]">
          Using Spin makes learning multiple languages easy. With 20+ languages, realistic voice-over, progress tracking, custom schedule, and more.
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center pt-8">
        <img src={Frame85} alt="Learning Illustration" className="w-full max-w-[400px] md:max-w-[500px]" />
      </div>
    </div>
  );
};

export default TIme;
