import React, { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Wallet,
  BarChart2,
  Users,
  Settings,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
type SidebarProps = {
  setCurrentPage: (page: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ setCurrentPage }) => {
  const [selectedPage, setSelectedPage] = useState("overview");
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true",
  );

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
  const handlePageChange = (page: string) => {
    setSelectedPage(page);
    setCurrentPage(page);
  };

  return (
    <aside
    className={`w-64 h-full bg-indigo-700 text-white p-4 dark:bg-gray-900 dark:text-white dark:shadow-[0_4px_8px_rgba(0,0,0,0.3)] dark:shadow-[#444444]`}
  >
    <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav>
        <ul className="flex flex-col gap-4">
          <li
            className={`mb-4 flex gap-4 transition-colors cursor-pointer p-2 rounded-sm ${
              selectedPage === "overview" ? "bg-indigo-600" : "hover:bg-indigo-800"
            }`}
            onClick={() => handlePageChange("overview")}
          >
            <LayoutDashboard />
            <span className="text-gray-300 hover:text-white">
              Vue d'ensemble
            </span>
          </li>
          <li
            className={`mb-4 flex gap-4 transition-colors cursor-pointer p-2 rounded-sm ${
              selectedPage === "wallet" ? "bg-indigo-600" : "hover:bg-indigo-800"
            }`}
            onClick={() => handlePageChange("wallet")}
          >
            <Wallet />
            <span className="text-gray-300 hover:text-white">Portefeuille</span>
          </li>
          <li
            className={`mb-4 flex gap-4 transition-colors cursor-pointer p-2 rounded-sm ${
              selectedPage === "analytics" ? "bg-indigo-600" : "hover:bg-indigo-800"
            }`}
            onClick={() => handlePageChange("analytics")}
          >
            <BarChart2 />
            <span className="text-gray-300 hover:text-white">Analytique</span>
          </li>
          <li
            className={`mb-4 flex gap-4 transition-colors cursor-pointer p-2 rounded-sm ${
              selectedPage === "users" ? "bg-indigo-600" : "hover:bg-indigo-800"
            }`}
            onClick={() => handlePageChange("users")}
          >
            <Users />
            <span className="text-gray-300 hover:text-white">Utilisateurs</span>
          </li>
          <li
            className={`mb-4 flex gap-4 transition-colors cursor-pointer p-2 rounded-sm ${
              selectedPage === "settings" ? "bg-indigo-600" : "hover:bg-indigo-800"
            }`}
            onClick={() => handlePageChange("settings")}
          >
            <Settings />
            <span className="text-gray-300 hover:text-white">Paramètres</span>
          </li>
          <li className="mb-4 flex gap-4 transition-colors cursor-pointer p-2 hover:bg-indigo-800 rounded-sm">
            <Home />
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
        </ul>
        <button
        onClick={toggleDarkMode}
        className="absolute bottom-4 left-4 p-2 text-white rounded-full"
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
