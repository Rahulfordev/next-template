import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center p-6 bg-green-700 border-b border-gray-300 md:col-start-2 md:col-end-5">
      <div className=" md:hidden" onClick={toggleSidebar}>
        <span className="material-icons-outlined">menu</span>
      </div>
      <h1>header</h1>
    </header>
  );
};

export default Header;
