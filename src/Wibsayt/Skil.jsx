import React from "react";
import Frame1 from "../assets/Frame 45.png";
import Frame2 from "../assets/Frame 45 (1).png";
import Frame3 from "../assets/Frame 45 (2).png";
import Frame4 from "../assets/Frame 45 (3).png";
import Frame54 from "../assets/Frame 51.png";
import Frame64 from "../assets/Frame 58.png";

const Skil = () => {
  return (
    <div className="pt-16 px-6 md:px-16 bg-[rgb(0,8,20)] text-white">
      {/* Title & Description */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <strong className="text-2xl sm:text-3xl md:text-4xl max-w-[544px] text-center md:text-left">
          Get the skills you need for a job that is in demand.
        </strong>
        <div className="flex flex-col gap-6 text-center md:text-left max-w-[500px]">
          <p className="text-gray-400">
            The modern StudyNotion dictates its own terms. Today, to be a competitive
            specialist requires more than just professional skills.
          </p>
          <button className="bg-yellow-500 text-black rounded-md w-[140px] px-4 py-2 mx-auto md:mx-0">
            Learn More
          </button>
        </div>
      </div>

      {/* Skills List & Image */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 gap-10">
        {/* Skills List */}
        <div className="flex flex-col gap-6 w-full md:w-auto">
          {[{ img: Frame1, title: "Leadership", text: "Fully committed to the success of the company" },
            { img: Frame2, title: "Responsibility", text: "Students will always be our top priority" },
            { img: Frame3, title: "Flexibility", text: "The ability to switch is an important skill" },
            { img: Frame4, title: "Solve the problem", text: "Code your way to a solution" }].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <img src={item.img} alt={item.title} className="w-12 h-12" />
                <div>
                  <strong className="block">{item.title}</strong>
                  <p className="text-gray-400 text-sm">{item.text}</p>
                </div>
              </div>
          ))}
        </div>

        {/* Images */}
        <div className="relative w-full md:w-auto">
          <img src={Frame54} alt="Main Illustration" className="w-full max-w-[300px] md:max-w-[400px] mx-auto" />
          <img
            src={Frame64}
            alt="Overlay"
            className="absolute bottom-[-20px] right-[20px] hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Skil;
