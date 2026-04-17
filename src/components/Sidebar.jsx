import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppProvider";

const Sidebar = () => {
  const [clicked, setClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [title, setTitle] = useState("");
  const [addPage, setAddPage] = useState(false);
  const [isEdit, setIsEdit] = useState(null);

  const { pages, setPages, setSelectedPage, setTheme, theme } =
    useContext(AppContext);

  const handleAddPage = (e) => {
    const newPage = {
      id: Date.now(),
      title: title.trim().length > 0 ? title : "add page",
    };

    if (e.key === "Enter") {
      setPages((prev) => [...prev, newPage]
      );
      setAddPage(!addPage);
      setTitle("");
    }

    
  };

  const filterPage = (id) => {
    setPages((prev) => prev.filter((p) => p.id !== id));
  };

  const handleEdit = (page) => {
    setIsEdit((prev) => {
      if (isEdit === page.id) {
        setPages((prev) =>
          prev.map((p) => (p.id === page.id ? { ...p, title } : p)),
        );
        setTitle("");
        return null;
      } else {
        setTitle(page.title);
        return page.id;
      }
    });
  };

  const renderPages = pages.map((page) => (
    <div
      onClick={() => setSelectedPage(page)}
      className=" flex border border-gray-400 p-1 text-[14px] justify-between flex-row cursor-pointer"
      key={page.id}
    >
      {isEdit === page.id ? (
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          type="text"
          className="flex flex-col font-bold cursor-pointer w-34 outline-none bg-white"
        />
      ) : (
        <p>
          📃
          {page.title.length > 12
            ? page.title.slice(0, 12) + "..."
            : page.title}
        </p>
      )}
      <div className="flex gap-2">
        <span onClick={() => filterPage(page.id)}>🗑️</span>
        <span
          onClick={(e) => {
            e.stopPropagation();
            handleEdit(page);
          }}
        >
          {isEdit === page.id ? "✅" : "✎"}
        </span>
      </div>
    </div>
  ));

  return (
    <div
      onClick={(e) => setClicked(false)}
      className={`flex flex-col w-64  px-2 max-h-screen ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100"}`}
    >
      <div className="flex flex-1 flex-col">
        <div className="px-4 border-b border-gray-400 py-4 flex flex-col gap-2">
          <h2 className="font-bold text-center">Page List</h2>

          {/* Search pages */}
          <div
            className={`bg-white rounded border-2 ${
              clicked && theme === "dark"
                ? "border-white"
                : clicked
                  ? "border-gray-900"
                  : theme === "dark"
                    ? "border-gray-900"
                    : "border-gray-100"
            }`}
          >
            <input
              onClick={(e) => {
                e.stopPropagation();
                setClicked(true);
              }}
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              type="text"
              className={`w-full outline-none px-2 py-1 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100"}`}
              placeholder="Search page"
            />
          </div>
        </div>

        {/* display pages */}
        <div className="flex flex-col max-h-40 py-2 px-4 gap-1 border-b border-gray-400 overflow-scroll overflow-x-hidden">
          {renderPages}
        </div>

        {/* Add pages */}
        {addPage ? (
          <input
            onKeyDown={handleAddPage}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="flex flex-col px-4 py-2 font-bold cursor-pointer mt-2 outline-none bg-white"
            placeholder="Enter page name"
          />
        ) : (
          <div
            onClick={() => setAddPage(!addPage)}
            className="flex flex-col px-4 py-2 text-center font-bold cursor-pointer m-0"
          >
            ➕New Page
          </div>
        )}
      </div>
      {/* Toggle Theme */}
      <div className={`font-bold text-center mb-4 `}>
        <span
          onClick={(e) =>
            setTheme((prev) => (prev === "dark" ? "light" : "dark"))
          }
          className={`cursor-pointer rounded-full p-2 ${theme === "dark" ? "bg-gray-900 text-white" : "text-black bg-gray-400"}`}
        >
          {theme === "light" ? "Do Dark" : "Do light"}
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
