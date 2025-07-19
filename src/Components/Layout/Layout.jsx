import React from "react";
import { Outlet } from "react-router-dom";
import SlideBar from "../SlideBar/SlideBar";
import TitlePage from "../TitlePage/TitlePage";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  return (
    <>
      <div className="min-h-screen flex flex-col md:grid md:grid-cols-[248px_1fr]">
        {/* Sidebar for desktop */}
        <div className="hidden md:block bg-[#02437B]">
          <SlideBar />
        </div>

        <div className="flex-1 flex flex-col">
          {/* Navbar (Always on top) */}
          <Navbar/>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto p-4 backColor">
            <Outlet />
            <TitlePage/>
          </div>

          {/* Sidebar for mobile (Bottom fixed) */}
          <div className=" md:hidden fixed bottom-0 left-0 w-full bg-[#02437B] z-50">
            <SlideBar />
          </div>
        </div>
      </div>
    </>
  );
}
