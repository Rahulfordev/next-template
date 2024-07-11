import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-100 border-b border-gray-300 md:col-start-2 md:col-end-5">
      <div className="menu-icon cursor-pointer" onClick={toggleSidebar}>
        <span className="md:hidden">open sidebar</span>
      </div>
      <h1>header</h1>
    </header>
  );
};

export default Header;
