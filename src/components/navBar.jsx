// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="relative">
            <div className="flex items-center space-x-4">
                <Link to="/" className="flex-shrink-0 p-4 rounded-lg shadow-lg bg-purple-600 text-white">
                    <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                    <p className="text-xs mt-1">Home</p>
                </Link>
                <Link to="/about_me" className="flex-shrink-0 p-4 rounded-lg shadow-lg bg-gray-800 text-white">
                    <div className="w-6 h-6 bg-purple-500 rounded-full opacity-0"></div>
                    <p className="text-xs mt-1">About Me</p>
                </Link>
                <Link to="/skills" className="flex-shrink-0 p-4 rounded-lg shadow-lg bg-gray-800 text-white">
                    <div className="w-6 h-6 bg-purple-500 rounded-full opacity-0"></div>
                    <p className="text-xs mt-1">Skills</p>
                </Link>
                <Link to="/tools" className="flex-shrink-0 p-4 rounded-lg shadow-lg bg-gray-800 text-white">
                    <div className="w-6 h-6 bg-purple-500 rounded-full opacity-0"></div>
                    <p className="text-xs mt-1">Tools</p>
                </Link>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 text-purple-500">
                    <path d="M12,111l112,64a8,8,0,0,0,7.94,0l112-64a8,8,0,0,0,0-13.9l-112-64a8,8,0,0,0-7.94,0l-112,64A8,8,0,0,0,12,111ZM128,49.21,223.87,104,128,158.79,32.13,104ZM246.94,140A8,8,0,0,1,244,151L132,215a8,8,0,0,1-7.94,0L12,151A8,8,0,0,1,20,137.05l108,61.74,108-61.74A8,8,0,0,1,246.94,140Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default NavBar;