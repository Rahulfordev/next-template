import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 w-80 min-w-[260px] h-full bg-red-700 border-r border-gray-300 transform transition-transform md:relative md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:col-start-1 md:col-end-2 md:row-span-2`}
    >
      <div className="flex flex-col items-center gap-10 py-6">
        <button className=" md:hidden" onClick={toggleSidebar}>
          close
        </button>
        <h1>sidebar</h1>
      </div>
    </aside>
  );
};

export default Sidebar;
