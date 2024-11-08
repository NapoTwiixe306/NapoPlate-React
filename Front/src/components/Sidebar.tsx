import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Wallet,
  BarChart2,
  Users,
  Settings,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";

type SidebarProps = {
  setCurrentPage: (page: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ setCurrentPage }) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside
      className={`w-64 h-full bg-indigo-700 text-white p-4 dark:bg-gray-900 dark:text-white dark:shadow-[0_4px_8px_rgba(0,0,0,0.3)] dark:shadow-[#444444] ${
        isSidebarOpen ? "block" : "hidden"
      } lg:block`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 text-white"
        >
          <FaBars size={20} />
        </button>
      </div>

      <nav>
        <ul className="flex flex-col gap-4">
          <li
            className="mb-4 flex gap-4 transition-colors cursor-pointer hover:rounded-sm p-2 bg-indigo-600 rounded-sm hover:bg-indigo-800 dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={() => setCurrentPage("overview")}
          >
            <LayoutDashboard />
            <span className="text-gray-300 hover:text-white dark:text-gray-400">
              Vue d'ensemble
            </span>
          </li>
          <li
            className="mb-4 flex gap-4 transition-colors cursor-pointer hover:rounded-sm p-2 hover:bg-indigo-800 dark:hover:bg-gray-700"
            onClick={() => setCurrentPage("wallet")}
          >
            <Wallet />
            <span className="text-gray-300 hover:text-white dark:text-gray-400">
              Portefeuille
            </span>
          </li>
          <li
            className="mb-4 flex gap-4 transition-colors cursor-pointer hover:rounded-sm p-2 hover:bg-indigo-800 dark:hover:bg-gray-700"
            onClick={() => setCurrentPage("analytics")}
          >
            <BarChart2 />
            <span className="text-gray-300 hover:text-white dark:text-gray-400">
              Analytique
            </span>
          </li>
          <li
            className="mb-4 flex gap-4 transition-colors cursor-pointer hover:rounded-sm p-2 hover:bg-indigo-800 dark:hover:bg-gray-700"
            onClick={() => setCurrentPage("users")}
          >
            <Users />
            <span className="text-gray-300 hover:text-white dark:text-gray-400">
              Utilisateurs
            </span>
          </li>
          <li
            className="mb-4 flex gap-4 transition-colors cursor-pointer hover:rounded-sm p-2 hover:bg-indigo-800 dark:hover:bg-gray-700"
            onClick={() => setCurrentPage("settings")}
          >
            <Settings />
            <span className="text-gray-300 hover:text-white dark:text-gray-400">
              Paramètres
            </span>
          </li>
          <li className="mb-4 flex gap-4 transition-colors cursor-pointer hover:rounded-sm p-2  hover:bg-indigo-800 dark:hover:bg-gray-700">
            <Home />
            <Link to="/" className="text-gray-300 hover:text-white dark:text-gray-400">
              Home
            </Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={toggleDarkMode}
        className="absolute bottom-4 left-4 p-2 text-white rounded-full"
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </aside>
  );
};

export default Sidebar;
