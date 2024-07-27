"use client";
import React, { useState } from "react";
import Header from "@/Components/Layouts/Header/Header";
import Main from "@/Components/Layouts/Main/Main";
import Sidebar from "@/Components/Layouts/Sidebar/Sidebar";
 

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="grid grid-rows-[0.2fr_3fr] h-screen overflow-hidden md:grid-cols-[320px_1fr_1fr_1fr] bg-bgprimary">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Main />
    </div>
  );
}
