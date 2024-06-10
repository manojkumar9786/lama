import React from "react";
import Ellipse from "../../public/images/Ellipse 2.png";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";

const ProjectNavbar = () => {
  return (
    <header className="px-10 py-8">
      <nav className="flex justify-between items-center">
        <div className="flex gap-x-1 text-[18px] items-center font-[500]">
           <Link to={"/"} className="text-primary"><HiHome /></Link>
           <p className="text-[#999999]">/</p>
           <p className="text-[#999999]">Sample Project</p>
           <p className="text-[#999999]">/</p>
           <p className="text-primary">Upload</p>
        </div>

        <div className="flex items-center gap-x-3">
          <div>
            <select name="" id="" className="border-none outline-none">
              <option value="" className="outline-none">EN</option>
              <option value="" className="outline-none outline-0">EN</option>
            </select>
          </div>
          <img src={Ellipse} className="w-8" alt="" />
          <div>
            <FaRegBell size={24} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default ProjectNavbar;
