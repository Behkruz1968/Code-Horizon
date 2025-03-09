import React from "react";

const Header2 = () => {
  return (
    <div className="bg-[rgb(0,8,20)] text-white flex flex-col items-center text-center px-4 py-16">
      <button className="bg-[rgb(22,29,41)] border-none rounded-full px-6 py-2 text-sm sm:text-base">
        Become an Instructor
      </button>
      <strong className="text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-5 max-w-[900px]">
        Empower Your Future with Coding Skills
      </strong>
      <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-[900px] pt-4">
        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
      </p>
      <div className="flex flex-wrap gap-4 pt-6">
        <button className="bg-yellow-500 text-black border-none rounded-lg px-5 py-2 text-sm sm:text-base">
          Learn More
        </button>
        <button className="bg-black text-white border border-white rounded-lg px-5 py-2 text-sm sm:text-base">
          Book a Demo
        </button>
      </div>
    </div>
  );
};

export default Header2;
