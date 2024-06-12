/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NavBar = ({ scrollToAbout, scrollToTop }) => {
  return (
    <nav className="bg-transparent py-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="flex items-center gap-10">
            <a
              onClick={scrollToTop}
              className="text-white text-xs font-bold hover:text-gray-300 mr-4 cursor-pointer"
            >
              HOME
            </a>
            <a
              onClick={scrollToAbout}
              className="text-white text-xs font-bold hover:text-gray-300 mr-4 cursor-pointer"
            >
              ABOUT
            </a>
            <a className="text-white text-xs font-bold hover:text-gray-300 mr-4 cursor-pointer">
              RESUME
            </a>
            <a className="text-white text-xs font-bold hover:text-gray-300 mr-4 cursor-pointer">
              PROJECTS
            </a>
            <a className="text-white text-xs font-bold hover:text-gray-300 mr-4 cursor-pointer">
              ACTIVITIES
            </a>
            <a className="text-white text-xs font-bold hover:text-gray-300 mr-4 cursor-pointer">
              STATISTICS
            </a>
            <a className="text-white text-xs font-bold hover:text-gray-300">
              CONTACT
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-0.5 bg-white mt-5" />
    </nav>
  );
};

export default NavBar;
