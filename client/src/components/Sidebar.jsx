import React from "react";
import logo from "../../public/images/logo.png";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/").at(-2);

  return (
    <div className="px-3 py-3 min-h-screen w-[360px] bg-[#F3E8FF] flex flex-col justify-between">
      <div>
        <div className="flex gap-2 items-center font-bold text-3xl">
          <img src={logo} alt="" />
          <h1 className="text-primary">LAMA.</h1>
        </div>
        <p className="text-sm my-4">Podcast Upload Flow</p>

        <div>
          <ul className="space-y-3">
            <li
              className={`flex items-center gap-x-3 p-2 rounded-full ${
                pathName === "upload" && "bg-primary text-white"
              }`}
            >
              <div className="bg-black text-white px-2 rounded-full">1</div>
              <p>Projects</p>
            </li>
            <li className="flex items-center gap-x-3  p-2 rounded-full hover:bg-gray-400">
              <div className="bg-gray-300 text-black px-2 rounded-full">2</div>
              <p>Widget Configurtion</p>
            </li>
            <li className="flex items-center gap-x-3  p-2 rounded-full hover:bg-gray-400">
              <div className="bg-gray-300 text-black px-2 rounded-full">3</div>
              <p>Deployment</p>
            </li>
            <li className="flex items-center gap-x-3  p-2 rounded-full hover:bg-gray-400">
              <div className="bg-gray-300 text-black px-2 rounded-full">4</div>
              <p>Pricing</p>
            </li>
          </ul>
        </div>
      </div>

      <div>
         <hr className="bg-black" />
      </div>
    </div>
  );
};

export default Sidebar;
