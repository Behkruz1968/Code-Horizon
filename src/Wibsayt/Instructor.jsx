import React from "react";
import Frame from "../assets/Frame 51 (1).png";

const Instructor = () => {
  return (
    <div className="bg-[rgb(0,8,20)] text-white py-16 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <img src={Frame} alt="Instructor" className="w-full max-w-[400px] md:max-w-[500px]" />
        <div className="flex flex-col gap-4 text-center md:text-left">
          <strong className="text-2xl sm:text-3xl md:text-4xl">
            Become an Instructor
          </strong>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-[470px]">
            Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
