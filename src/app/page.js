"use client";
import React, { useState } from "react";
import Header from "@/Components/layouts/header/Header";
import Main from "@/Components/layouts/main/Main";
import Sidebar from "@/Components/layouts/sidebar/Sidebar";
 

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
