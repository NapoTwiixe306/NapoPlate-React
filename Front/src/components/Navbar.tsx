import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { FaMoon, FaSun, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [isCommencerOpen, setIsCommencerOpen] = useState(false);

  const toggleConnect = () => setIsConnectOpen(!isConnectOpen);
  const toggleCommencer = () => setIsCommencerOpen(!isCommencerOpen);

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

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 text-black dark:text-white bg-transparent backdrop-blur-md border-b border-transparent dark:border-transparent">
      <div className="flex gap-2">
        <svg
          className="w-8 h-8 text-indigo-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
        <h1 className="text-xl font-bold">
          <Link to="/">ReactBoilerplate</Link>
        </h1>
      </div>

      <button
        className="md:hidden p-2 rounded-md focus:outline-none bg-gray-700 text-white dark:bg-white dark:text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      <nav className="hidden md:flex md:items-center space-x-8">
        <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">
          Home
        </Link>
        <Link
          to="/dashboard"
          className="hover:text-gray-700 dark:hover:text-gray-300"
        >
          Dashboard
        </Link>
        <Link
          to="/Features"
          className="hover:text-gray-700 dark:hover:text-gray-300"
        >
          Features
        </Link>
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="focus:outline-none text-white dark:text-black"
        >
          {darkMode ? (
            <FaSun size={20} className="text-white" />
          ) : (
            <FaMoon size={20} className="text-black" />
          )}
        </button>

        {/* Connect Dropdown */}
        <div className="relative">
          <button
            onClick={toggleConnect}
            className="flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Connect
            <FaChevronDown className="ml-2 h-4 w-4" />
          </button>
          {isConnectOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
              <Link
                to="/connectWithEmail"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Connect with Email
              </Link>
              <Link
                to="/connectWithWallet"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Connect with Wallet
              </Link>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-100 dark:bg-gray-900 md:hidden border-t border-gray-300 dark:border-gray-700">
          <nav className="flex flex-col items-start p-4 space-y-4">
            <Link
              to="/"
              className="hover:text-gray-700 dark:hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="hover:text-gray-700 dark:hover:text-gray-300"
            >
              Dashboard
            </Link>
            <Link
              to="/"
              className="hover:text-gray-700 dark:hover:text-gray-300"
            >
              Features
            </Link>

            <button
              onClick={toggleCommencer}
              className="bg-indigo-600 hover:bg-indigo-700 text-white w-full p-2 rounded-md dark:bg-green-700 mt-2 flex justify-between items-center"
            >
              Commencer <FaChevronDown className="ml-2" />
            </button>
            {isCommencerOpen && (
              <div className="w-full bg-white dark:bg-gray-800 rounded-md shadow-md mt-1">
                <Link
                  to="/connectWithWallet"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Connect with Email
                </Link>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Connect with Wallet
                </a>
              </div>
            )}

            <button
              onClick={toggleDarkMode}
              className="bg-gray-700 text-white w-full p-2 rounded-md dark:bg-white dark:text-black mt-2"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
