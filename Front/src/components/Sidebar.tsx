import React, { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Wallet,
  BarChart2,
  Users,
  Settings,
  Home,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";

type SidebarProps = {
  setCurrentPage: (page: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ setCurrentPage }) => {
  const [selectedPage, setSelectedPage] = useState("overview");
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true",
  );
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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
    setIsOpen(!isOpen);
  };

  const handlePageChange = (page: string) => {
    setSelectedPage(page);
    setCurrentPage(page);
    if (isOpen) setIsOpen(false);
  };

  const handleLogout = () => {
    // Supprimer le token du localStorage (ou cookie)
    localStorage.removeItem("token");
    navigate("/"); // Rediriger vers la page d'accueil
  };

  return (
    <aside className="h-full">
      <button
        className="md:hidden p-2 m-2 rounded-md focus:outline-none bg-gray-700 text-white dark:bg-white dark:text-black"
        onClick={toggleSidebar}
      >
        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 p-4 bg-indigo-700 text-white transform transition-transform md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:block dark:bg-gray-900`}
        style={{ boxShadow: "0px 0px 10px 2px rgba(255, 255, 255, 0.2)" }}
      >
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <nav>
          <ul className="flex flex-col gap-4">
            <li
              className={`mb-4 flex gap-4 transition-colors cursor-pointer p-2 rounded-sm ${
                selectedPage === "overview"
                  ? "bg-indigo-600"
                  : "hover:bg-indigo-800"
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
                selectedPage === "wallet"
                  ? "bg-indigo-600"
                  : "hover:bg-indigo-800"
              }`}
              onClick={() => handlePageChange("wallet")}
            >
              <Wallet />
              <span className="text-gray-300 hover:text-white">Portefeuille</span>
            </li>
            <li
              className={`mb-4 flex gap-4 transition-colors cursor-pointer p-2 rounded-sm ${
                selectedPage === "analytics"
                  ? "bg-indigo-600"
                  : "hover:bg-indigo-800"
              }`}
              onClick={() => handlePageChange("analytics")}
            >
              <BarChart2 />
              <span className="text-gray-300 hover:text-white">Analytique</span>
            </li>
            <li
              className={`mb-4 flex gap-4 transition-colors cursor-pointer p-2 rounded-sm ${
                selectedPage === "users"
                  ? "bg-indigo-600"
                  : "hover:bg-indigo-800"
              }`}
              onClick={() => handlePageChange("users")}
            >
              <Users />
              <span className="text-gray-300 hover:text-white">Utilisateurs</span>
            </li>
            <li
              className={`mb-4 flex gap-4 transition-colors cursor-pointer p-2 rounded-sm ${
                selectedPage === "settings"
                  ? "bg-indigo-600"
                  : "hover:bg-indigo-800"
              }`}
              onClick={() => handlePageChange("settings")}
            >
              <Settings />
              <span className="text-gray-300 hover:text-white">Paramètres</span>
            </li>
            <li className="mb-4 flex gap-4 transition-colors cursor-pointer p-2 hover:bg-indigo-800 rounded-sm">
              <Home />
              <Link to="/" className="text-gray-300 hover:text-white">
                Accueil
              </Link>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-8 left-8 flex flex-col gap-4">
          <button
            className="flex items-center gap-2 text-gray-300 hover:text-white"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            {darkMode ? "Passer en mode clair" : "Passer en mode sombre"}
          </button>
          <button
            onClick={handleLogout}
            className="mt-4 p-2 bg-red-600 hover:bg-red-800 text-white rounded-md"
          >
            Déconnexion
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
