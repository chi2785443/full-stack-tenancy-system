import React, { useContext } from "react";
import assets from "../assets/assets";
import { AppContext } from "../context/Appcontext.context";

const Header = () => {
  const { userData } = useContext(AppContext);
  return (
    <div className=" flex flex-col items-center mt-20 px-4 text-center text-gray-800">
      <h1 className="flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2">
        Hello {userData ? userData.name : "Tenant"}{" "}
        <img src={assets.hand_wave} className="w-8 aspect-square" alt="" />
      </h1>
      <h2 className="text-3xl sm:text-5xl font-semibold mb-4">
        Welcome to Tenancy System
      </h2>
      <p className=" mb-8 max-w-md">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        minima libero iure in consectetur voluptatum nesciunt earum fugit minus,
        illo cum quam et sapiente dolorum possimus id eaque? Asperiores,
        reprehenderit?
      </p>
      <button className=" border border-gray-500 rounded-full px-8 py-2.3 my-8 hover:bg-gray-100 transition-all">
        Get started
      </button>
    </div>
  );
};

export default Header;
