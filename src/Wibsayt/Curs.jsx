import React from 'react';

const Curs = () => {
  return (
    <div className='relative'>
      <div className="bg-[rgb(0,8,20)] text-white pt-[60px] md:pt-[124px] flex flex-col gap-4 justify-center items-center p-4 md:p-8">
        <div className="flex flex-col justify-center items-center text-center">
          <strong className='text-xl md:text-[36px]'>Unlock the Power of Code</strong>
          <p className='text-sm md:text-base'>Learn to Build Anything You Can Imagine</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-[40px] pt-[20px]">
          {[
            { title: "Learn HTML", desc: "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more." },
            { title: "Learn CSS", desc: "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques." },
            { title: "Responsive Web Design", desc: "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes." }
          ].map((course, index) => (
            <div key={index} className="w-full md:w-[343px] hover:bg-white bg-black text-white hover:text-blue-300 p-4 md:p-[20px]">
              <strong className='text-lg md:text-[20px]'>{course.title}</strong>
              <p className='text-sm md:text-[16px] text-gray-500 mt-2'>{course.desc}</p>
              <hr className='border-gray-600 my-4' />
              <div className="flex justify-between text-xs md:text-sm">
                <span>Beginner</span>
                <span>6 Lessons</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-4 pt-4 md:pt-[10px]">
          <button className="bg-yellow-500 text-black border-none rounded-[5px] w-full md:w-[195px] p-[10px]">Explore Full Catalog</button>
          <button className='bg-black text-white border border-white rounded-[5px] w-full md:w-[175px] p-[10px]'>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Curs;
