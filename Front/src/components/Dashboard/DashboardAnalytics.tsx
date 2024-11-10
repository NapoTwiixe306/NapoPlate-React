import { Wallet, DollarSign, Activity, PieChart } from "lucide-react";
import { useEffect, useState } from "react";

interface TokenData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const DashboardAnalytics = () => {
  const [tokenData, setTokenData] = useState<TokenData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const tokenIds = ["ethereum", "solana", "tether"];
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${tokenIds.join(",")}`;
        
        const response = await fetch(url);
        const data: TokenData[] = await response.json();

        setTokenData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des données des tokens", error);
        setIsLoading(false);
      }
    };

    fetchTokenData();
  }, []);

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="flex items-center gap-6 bg-gray-300 shadow-black py-4 px-5 rounded">
          <div className="bg-gray-100 p-3 rounded-full flex items-center justify-center">
            <Wallet className="w-5 h-5 text-black" />
          </div>
          <div className="flex flex-col">
            <p>Variation 24h: </p>
            <span
              className={`font-bold ${
                tokenData[0]?.price_change_percentage_24h > 0
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {tokenData[0]?.price_change_percentage_24h?.toFixed(2)}%
            </span>
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
        <h1 className="mb-6 font-bold text-lg">Performance des tokens</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full rounded-lg shadow">
            <thead>
              <tr>
                <th className="text-left font-semibold text-gray-500 px-4 py-2">TOKEN</th>
                <th className="text-left font-semibold text-gray-500 px-4 py-2">PRIX</th>
                <th className="text-left font-semibold text-gray-500 px-4 py-2">VARIATION 24H</th>
                <th className="text-left font-semibold text-gray-500 px-4 py-2">VALEUR DÉTENUE</th>
              </tr>
            </thead>
            <tbody>
              {tokenData.map((token) => (
                <tr key={token.id} className="border-t">
                  <td className="px-4 py-2 font-medium">{token.symbol.toUpperCase()}</td>
                  <td className="px-4 py-2">${token.current_price.toFixed(2)}</td>
                  <td className={`px-4 py-2 ${token.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}`}>
                    {token.price_change_percentage_24h.toFixed(2)}%
                  </td>
                  <td className="px-4 py-2">
                    $ 0
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashboardAnalytics;
