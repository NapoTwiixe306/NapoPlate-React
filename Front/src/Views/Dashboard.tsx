import { Helmet } from "react-helmet-async";
import { useAccount, useDisconnect, useBalance } from "wagmi";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { Wallet, DollarSign, Activity, PieChart } from "lucide-react";

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

  const { data: balance, isLoading, error } = useBalance({
    address: address,
  });

  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 4)}...${addr.slice(-2)}`;
  };
  const transactions = [
    { type: "Envoie", address: "0x4b8f...234d", amount: 0.5, token: "ETH", status: "Confirmé" },
    { type: "Réception", address: "0x2d4f...890a", amount: 150, token: "USDT", status: "En Attente" },
    { type: "Swap", address: "0xa23d...e90f", amount: 1.25, token: "ETH", status: "Refusé" },
  ];
  

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
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="flex items-center gap-6 bg-gray-300 shadow-black py-4 px-5 rounded">
                <div className="bg-gray-100 p-3 rounded-full flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-black" />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">Solde ETH :</p>
                  {isLoading ? ( <p>Chargement...</p> ) : error ? ( <p>Erreur : {error.message}</p> ) : ( <p>{balance ? `${balance.formatted} ETH` : "Indisponible"}</p> )}
                </div>
              </div>
              <div className="flex items-center gap-6 bg-gray-300 py-4 px-5 rounded">
                <div className="bg-gray-100 p-3 rounded-full flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-black" />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">Valeur Totale</p>
                  <p>$4,500.00</p>
                </div>
              </div>
              <div className="flex items-center gap-6 bg-gray-300 py-4 px-5 rounded">
                <div className="bg-gray-100 p-3 rounded-full flex items-center justify-center">
                  <Activity className="w-5 h-5 text-black" />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">Transactions : </p>
                  <p>24</p>
                </div>
              </div>
              <div className="flex items-center gap-6 bg-gray-300 py-4 px-5 rounded">
                <div className="bg-gray-100 p-3 rounded-full flex items-center justify-center">
                  <PieChart className="w-5 h-5 text-black" />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">Tokens</p>
                  <p>5</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
              <div className="bg-gray-300 h-80 p-6 rounded flex flex-col justify-between">
                <h1 className="dark:text-black text-left">Historique du solde</h1>
                <div className="flex items-center justify-center flex-grow">
                  <h1>Graphique d'historique du solde</h1>
                </div>
              </div>
              <div className="bg-gray-300 h-80 p-6 rounded flex flex-col justify-between">
                <h1 className="dark:text-black text-left">Répartition des tokens</h1>
                <div className="flex items-center justify-center flex-grow">
                  <h1>Graphique de distribution des tokens</h1>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-300 py-4 px-5 rounded mt-6">
              <h1 className="font-bold">Transaction Récentes</h1>
              <table className="w-full mt-4 table-auto">
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-2 flex flex-col">
                        <span>{transaction.type}</span>
                        <span className="text-sm text-gray-500">
                          {transaction.type === "Envoie" || transaction.type === "Swap" 
                            ? `De: ${transaction.address.slice(0, 6)}...${transaction.address.slice(-4)}`
                            : `A: ${transaction.address.slice(0, 6)}...${transaction.address.slice(-4)}`}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-right">
                        <span>{transaction.amount} {transaction.token}</span>
                        <span className={`block mt-1 font-medium ${transaction.status === "Confirmé" ? 'text-green-500' : transaction.status === "En Attente" ? 'text-yellow-500' : 'text-red-500'}`}>
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </>
        );
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
        <title>Dashboard - NapoPlate React</title>
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

              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
                <div className="container mx-auto px-6 py-8">
                  {renderPageContent()}
                </div>
              </main>
            </div>
          ) : (
            <div className="flex gap-3 items-center">
              <ConnectButton />
              <h1 className="dark:text-white">
                Vous n'êtes pas connecté. Veuillez vous connecter pour accéder à
                votre tableau de bord.
              </h1>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
