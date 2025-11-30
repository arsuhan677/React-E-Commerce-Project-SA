import React, { useState } from "react";
import Sidebar from "../component/admin/Sidebar";
import Header from "../component/admin/Header";
import { Outlet } from "react-router";

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* SIDEBAR */}
      <div>
        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>

      {/* RIGHT SIDE (Header + Content) */}
      <div className="flex-1 min-h-screen lg:ml-64">
        {/* HEADER */}
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div>
          <Outlet />
        </div>
        {/* MAIN CONTENT */}
        <div className="pt-20 p-5 bg-gray-50 dark:bg-slate-900 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
