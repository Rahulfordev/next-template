import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 w-80 min-w-[260px] h-full bg-white border-r border-gray-300 transform transition-transform md:relative md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:col-start-1 md:row-start-1 md:row-end-3`}
    >
      <div className="flex flex-col items-center gap-10 py-6 h-full">
        <button className="sidebar__navbar" onClick={toggleSidebar}>
          close
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
