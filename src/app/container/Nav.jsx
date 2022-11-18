import React from "react";
import image1 from "../assets/images/image 1.png";
import vectorImage from "../assets/images/Vector.png";
import vectorImage2 from "../assets/images/Vector2.png";
import vectorImage3 from "../assets/images/Vector3.png";
const Nav = () => {
  return (
    <nav className="flex  justify-between px-[35px] sm:px-[74px] font-medium">
      <img src={image1} alt="" className="block" />
      <ul className=" flex items-center text-[#80008040] justify-center">
        <li className="px-3.5 hidden sm:block">My Assignment</li>
        <li className="px-3.5 hidden sm:block">Chat with Mentor</li>
        <li className="px-3.5 flex items-center  text-white sm:text-[#800080]  bg-[#800080] sm:bg-white justify-center rounded-md">
          <div className="hidden sm:block ">
            <img src={vectorImage} alt="" className="mx-2 " />
          </div>
          <p className="p-2">ProfileName</p>
          <div className="justify-center">
            <img src={vectorImage2} alt="" className="mx-2 hidden sm:inline" />
            <img src={vectorImage3} alt="" className="mx-2 sm:hidden" />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
