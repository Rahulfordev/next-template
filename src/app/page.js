"use client";
import React, { useState } from "react";
import Head from "next/head";
import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import Main from "@/Components/Main";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Head>
        <title>My Project</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
      </Head>
      <div className="grid grid-rows-[0.2fr_3fr] h-screen overflow-hidden md:grid-cols-[320px_1fr_1fr_1fr] bg-bgprimary">
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Main />
      </div>
    </>
  );
}
