import { useAccount, useBalance } from "wagmi";

import { Wallet, DollarSign, Activity } from "lucide-react";

const DashboardWallet = () => {
    const { address } = useAccount();
  const {
    data: balance,
    isLoading,
    error,
  } = useBalance({
    address: address,
  });
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
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
      </div>    
    </>
  )
}

export default DashboardWallet
