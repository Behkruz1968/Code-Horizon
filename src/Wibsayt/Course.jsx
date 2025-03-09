import React, { useState, useEffect } from 'react';
import Header from './Header';

const Course = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/Python')
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.error('Error fetching data:', err));
    }, []);

    return (
        <div>
            <Header />
            <div className="bg-gray-800 text-white flex flex-col gap-4 p-6 md:p-[100px] items-center text-center md:text-left">
                <strong className='text-2xl md:text-[30px]'>CATALOG</strong>
                <p className='text-gray-500 w-full md:w-[870px] text-sm md:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur pariatur, alias repellat sapiente fugiat voluptates amet ipsa quam beatae provident ea dolorem deserunt esse veritatis sit ducimus fuga sequi rerum.
                </p>
            </div>
            <div className="bg-[rgb(0,8,20)] p-6 md:pl-[125px] md:pt-[50px]">
                <div className="text-center md:text-left">
                    <strong className='text-2xl md:text-[30px] text-white'>Courses to get you started</strong>
                </div>
            </div>
        </div>
    );
};

export default Course;
