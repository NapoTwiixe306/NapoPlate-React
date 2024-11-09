import { Helmet } from "react-helmet-async";
import { useAccount, useDisconnect,  } from "wagmi";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import DashboardOverview from "../components/Dashboard/DashboardOverview";


const Dashboard: React.FC = () => {
  const { address, isConnected } = useAccount();

  const { disconnect } = useDisconnect();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("overview");
 

  const handleDisconnect = () => {
    disconnect();
    localStorage.removeItem("user");
    navigate("/");
  };

  
  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 4)}...${addr.slice(-2)}`;
  };

  const pageTitles: { [key: string]: string } = {
    overview: "Vue d'ensemble",
    wallet: "Portefeuille",
    analytics: "Analytique",
    users: "Utilisateurs",
    settings: "Paramètres",
  };
 
  const renderPageContent = () => {
    switch (currentPage) {
      case "overview":
        return <DashboardOverview/>
      case "wallet":
        return <h2 className="text-2xl font-bold">Portefeuille</h2>;
      case "analytics":
        return <h2 className="text-2xl font-bold">Analytique</h2>;
      case "users":
        return <h2 className="text-2xl font-bold">Utilisateurs</h2>;
      case "settings":
        return <h2 className="text-2xl font-bold">Paramètres</h2>;
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Dashboard - BlockSafe</title>
      </Helmet>
      <div className="flex lg:flex-row h-screen">
        <Sidebar setCurrentPage={setCurrentPage} />
        <main className="flex-1 p-6 sm:p-8 lg:p-12 overflow-x-hidden">
          {isConnected ? (
            <div className="flex-1 flex flex-col overflow-hidden">
              <header className="flex justify-between items-center shadow">
                <div className="flex items-center space-x-4">
                  <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {pageTitles[currentPage] || ""}
                  </h1>
                </div>

                <div className="ml-auto flex items-center gap-7">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {address ? truncateAddress(address) : ""}
                  </span>
                  <button
                    onClick={handleDisconnect}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  >
                    Déconnexion
                  </button>
                </div>
              </header>

              <section className="py-6">{renderPageContent()}</section>
            </div>
          ) : (
            <ConnectButton />
          )}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
