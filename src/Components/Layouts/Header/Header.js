import React from "react";
import { IoMenuOutline } from "react-icons/io5";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center p-6 bg-sidebar-primary md:col-start-2 md:col-end-5">
      <div>
        <IoMenuOutline
          className="cursor-pointer text-3xl md:hidden"
          onClick={toggleSidebar}
        />
      </div>
      <h1>header</h1>
    </header>
  );
};

export default Header;
