import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppProvider";

const Topbar = () => {

    const {theme, setSelectedPage, selectedPage, pages} = useContext(AppContext);

  return (
    <div className={`flex flex-col w-full justify-center border-t  ${theme === "light" ? "border-gray-800" : "border-gray-300 text-white"}`}>
      <div className="py-2">
        <h2 className="text-center">
          {selectedPage?.title || "Create a new File"}
        </h2>
      </div>
      <div className="flex flex-row px-4 gap-4 items-center justify-center">
        <div
          className={`font-bold cursor-pointer border ${theme === "light" ? "border-gray-900 bg-white text-black" : "border-gray-300 text-white bg-gray-900"} p-1 rounded-md `}
        >
          Bold
        </div>
        <div
          className={`font-bold cursor-pointer border ${theme === "light" ? "border-gray-900 bg-white text-black" : "border-gray-300 text-white bg-gray-900"} p-1 rounded-md `}
        >
          Itally
        </div>
        <div
          className={`font-bold cursor-pointer border ${theme === "light" ? "border-gray-900 bg-white text-black" : "border-gray-300 text-white bg-gray-900"} p-1 rounded-md `}
        >
          Header
        </div>
        <div
          className={`font-bold cursor-pointer border ${theme === "light" ? "border-gray-900 bg-white text-black" : "border-gray-300 text-white bg-gray-900"} p-1 rounded-md `}
        >
          TextArea
        </div>
      </div>
    </div>
  );
};

export default Topbar;
