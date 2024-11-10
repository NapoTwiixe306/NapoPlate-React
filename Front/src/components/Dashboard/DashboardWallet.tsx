import { useAccount, useBalance } from "wagmi";
import { useState,  } from "react";
import {
  Wallet,
  DollarSign,
  Activity,
  Send,
  Download,
  Repeat,
  PieChart,
} from "lucide-react";
import Modal from "../@modal/Modal";

type ModalType = "send" | "receive" | "exchange" | null;

const DashboardWallet = () => {
  const { address } = useAccount();
  const { data: balance, isLoading, error } = useBalance({ address });
  const [activeModal, setActiveModal] = useState<ModalType>(null);

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
    {
      type: "Réception",
      address: "0x2d4f...890a",
      amount: 150,
      token: "USDT",
      status: "En Attente",
    },
    {
      type: "Réception",
      address: "0x2d4f...890a",
      amount: 150,
      token: "USDT",
      status: "En Attente",
    },
  ];

  const openModal = (type: ModalType) => {
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

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

      <div className="w-full bg-gray-300 py-4 px-5 rounded mt-6">
        <h1 className="mb-6 font-bold text-lg">Actions Rapides</h1>
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <div className="w-full flex">
            <button
              onClick={() => openModal("send")}
              className="w-full flex items-center justify-center gap-5 bg-red-400 text-white py-2 rounded-lg hover:bg-red-500 focus:outline-none transition duration-200"
            >
              <Send />
              Envoyer
            </button>
          </div>
          <div className="w-full">
            <button
              onClick={() => openModal("receive")}
              className="w-full flex items-center justify-center gap-5 bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 focus:outline-none transition duration-200"
            >
              <Download />
              Recevoir
            </button>
          </div>
          <div className="w-full">
            <button
              onClick={() => openModal("exchange")}
              className="w-full flex items-center justify-center gap-5 bg-green-400 text-white py-2 rounded-lg hover:bg-green-500 focus:outline-none transition duration-200"
            >
              <Repeat />
              Echanger
            </button>
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

      <Modal
        isOpen={activeModal === "send"}
        onClose={closeModal}
        title="Envoyer des fonds"
      >
        <form className="space-y-4">
          <div>
            <label
              htmlFor="recipient"
              className="block text-sm font-medium text-gray-700"
            >
              Adresse du destinataire
            </label>
            <input
              type="text"
              id="recipient"
              name="recipient"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="0x..."
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Montant
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="0"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Envoyer
          </button>
        </form>
      </Modal>

      <Modal
        isOpen={activeModal === "receive"}
        onClose={closeModal}
        title="Recevoir des fonds"
      >
        <div>
          <p className="text-sm text-gray-500">Votre adresse de réception :</p>
          <input
            type="text"
            value={address || ""}
            readOnly
            className="mt-1 block w-full bg-gray-200 p-2 rounded-md border-gray-300"
          />
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === "exchange"}
        onClose={closeModal}
        title="Échanger des fonds"
      >
        <form className="space-y-4">
          <div>
            <label
              htmlFor="fromAmount"
              className="block text-sm font-medium text-gray-700"
            >
              Montant à échanger
            </label>
            <input
              type="number"
              id="fromAmount"
              name="fromAmount"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="0"
            />
          </div>
          <div>
            <label
              htmlFor="toToken"
              className="block text-sm font-medium text-gray-700"
            >
              Token de destination
            </label>
            <select
              id="toToken"
              name="toToken"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="ETH">ETH</option>
              <option value="USDT">USDT</option>
              <option value="DAI">DAI</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            Échanger
          </button>
        </form>
      </Modal>
    </>
  );
};

export default DashboardWallet;
