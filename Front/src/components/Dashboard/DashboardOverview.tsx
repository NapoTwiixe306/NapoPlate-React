import { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import { Wallet, DollarSign, Activity, PieChart } from "lucide-react";

interface TokenData {
  name: string;
  symbol: string;
  decimals: number;
  market_data?: {
    decimal_places?: number;
    total_volume?: {
      usd?: number;
    };
    price_change_percentage_24h?: number;
    market_cap?: {
      usd?: number;
    };
  };
}

const DashboardOverview = () => {
  const { address } = useAccount();

  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [isLoadingTokenData, setIsLoadingTokenData] = useState(true);
  const {
    data: balance,
    isLoading,
    error,
  } = useBalance({
    address: address,
  });

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/ethereum",
        );
        const data: TokenData = await response.json();
        setTokenData(data);
        setIsLoadingTokenData(false);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données du token",
          error,
        );
        setIsLoadingTokenData(false);
      }
    };

    fetchTokenData();
  }, []);
  const transactions = [
    {
      type: "Envoie",
      address: "0x4b8f...234d",
      amount: 0.5,
      token: "ETH",
      status: "Confirmé",
    },
    {
      type: "Réception",
      address: "0x2d4f...890a",
      amount: 150,
      token: "USDT",
      status: "En Attente",
    },
    {
      type: "Swap",
      address: "0xa23d...e90f",
      amount: 1.25,
      token: "ETH",
      status: "Refusé",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="flex items-center gap-6 bg-gray-300 shadow-black py-4 px-5 rounded">
          <div className="bg-gray-100 p-3 rounded-full flex items-center justify-center">
            <Wallet className="w-5 h-5 text-black" />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Solde ETH :</p>
            {isLoading ? (
              <p>Chargement...</p>
            ) : error ? (
              <p>Erreur : {error.message}</p>
            ) : (
              <p>{balance ? `${balance.formatted} ETH` : "Indisponible"}</p>
            )}
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
                    {transaction.type === "Envoie" ||
                    transaction.type === "Swap"
                      ? `De: ${transaction.address.slice(0, 6)}...${transaction.address.slice(-4)}`
                      : `A: ${transaction.address.slice(0, 6)}...${transaction.address.slice(-4)}`}
                  </span>
                </td>
                <td className="px-4 py-2 text-right">
                  <span>
                    {transaction.amount} {transaction.token}
                  </span>
                  <span
                    className={`block mt-1 font-medium ${transaction.status === "Confirmé" ? "text-green-500" : transaction.status === "En Attente" ? "text-yellow-500" : "text-red-500"}`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
        <div className="bg-gray-300 h-40 p-6 rounded flex flex-col justify-center">
          <div className="flex mb-5">
            <h1 className="font-bold text-xl">Information du token</h1>
          </div>
          {isLoadingTokenData ? (
            <p>Chargement des informations...</p>
          ) : (
            <>
              <p>
                Nom: <span className="font-bold">{tokenData?.name}</span>
              </p>
              <p>
                Symbol:{" "}
                <span className="font-bold">
                  {tokenData?.symbol.toUpperCase()}
                </span>
              </p>
              <p>
                Décimal:{" "}
                <span className="font-bold">
                  {tokenData?.decimals || "Non disponible"}
                </span>
              </p>
            </>
          )}
        </div>
        <div className="bg-gray-300 h-40 p-6 rounded flex flex-col justify-between">
          <div className="flex mb-5">
            <h1 className="font-bold text-xl">Statistiques du marché</h1>
          </div>
          {isLoadingTokenData ? (
            <p>Chargement des statistiques...</p>
          ) : (
            <>
              <p>
                Volume 24h:{" "}
                <span className="font-bold">
                  ${" "}
                  {tokenData?.market_data?.total_volume?.usd?.toLocaleString()}
                </span>
              </p>
              <p>
                Variation 24h:{" "}
                <span
                  className={`font-bold ${tokenData?.market_data?.price_change_percentage_24h && tokenData?.market_data?.price_change_percentage_24h > 0 ? "text-green-600" : "text-red-500"}`}
                >
                  {tokenData?.market_data?.price_change_percentage_24h?.toFixed(
                    2,
                  )}
                  %
                </span>
              </p>
              <p>
                Capitalisation:{" "}
                <span className="font-bold">
                  $ {tokenData?.market_data?.market_cap?.usd?.toLocaleString()}
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardOverview;
