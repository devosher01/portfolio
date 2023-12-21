import React from 'react';

const AboutMe = () => {
    return (
        <div className="flex flex-col justify-start items-start bg-[rgb(15,15,15)] rounded-[30px] text-white shadow-lg w-full sm:w-[800px] h-auto sm:h-[236.4px] max-w-full opacity-100 p-4">
            <h1 className="text-3xl font-medium mb-4 text-left text-lighter-gray">Hello there! Oscar here!</h1>
            <p className="text-base mb-4 text-light-gray">I'm a passionate software developer with fullstack experience in web and mobile applications. My focus is on creating engaging and functional digital solutions. I enjoy bringing fluid user experiences to life, combining attention to detail with a constant dedication to quality. Each project is an exciting opportunity to overcome new challenges in software development. Ready to innovate in every line of code!</p>
            <a href="./about" className="flex items-center justify-center bg-[rgb(26,26,26)] text-[rgb(172,153,255)] rounded-lg shadow-lg w-full py-2 group hover:text-white hover:fill-white">
                <p className="mr-2 transition duration-300">More about Me</p>
                <svg viewBox="0 0 256 256" className="w-6 h-6 fill-current transition-transform duration-500 ease-in-out group-hover:translate-x-2 group-focus:translate-x-0">
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                </svg>
            </a>
        </div>
    );
};

export default AboutMe;