import React from "react";
import Frame from '../assets/Frame 37.png' 
const Code = () => {
  const code = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
    <script src="./tailwind.config.js"></script>
</body>
</html>
  `;

  return (
    <div className="bg-[rgb(0,8,20)] text-white px-4 sm:px-6 md:px-[100px] pt-[50px] md:pt-[124px] flex flex-col gap-6 justify-center items-center w-full">
      <div className="w-full max-w-[600px]">
        <img src={Frame} alt="Code Preview" className="w-full" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between py-[50px] gap-6 md:gap-10 w-full">
        <div className="w-full md:w-[500px] flex flex-col gap-5 text-center md:text-left">
          <strong className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight">
            Unlock your coding potential with our online courses.
          </strong>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base">
            Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-500 text-black border-none rounded-lg w-full sm:w-auto px-6 py-2">
              Try it Yourself
            </button>
            <button className="bg-black text-white border border-white rounded-lg w-full sm:w-auto px-6 py-2">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full max-w-[600px] overflow-x-auto">
          <pre className="border border-gray-500 p-4 rounded-lg bg-gray-900 text-white text-xs sm:text-sm md:text-base">
            <code className="language-html whitespace-pre-wrap break-words">{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Code;