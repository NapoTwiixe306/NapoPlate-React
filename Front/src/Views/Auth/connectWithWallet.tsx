import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";
import { useAccount } from "wagmi"; // Importer depuis wagmi
import { useNavigate } from "react-router-dom";

const ConnectWithWallet: React.FC = () => {
  const { isConnected } = useAccount(); // Vérifie si l'utilisateur est connecté
  const navigate = useNavigate(); // Hook pour la navigation

  useEffect(() => {
    if (isConnected) {
      // Enregistrer les informations de l'utilisateur dans le localStorage
      const userInfo = { connected: true }; // Vous pouvez ajouter d'autres informations si nécessaire
      localStorage.setItem("user", JSON.stringify(userInfo));

      // Rediriger vers le tableau de bord
      navigate("/dashboard"); // Remplacez par votre route de tableau de bord
    }
  }, [isConnected, navigate]); // Dépendance pour exécuter l'effet lorsque l'état de connexion change

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <ConnectButton />
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            En vous connectant, vous acceptez nos{" "}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Conditions d'utilisation
            </a>{" "}
            et notre{" "}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Politique de confidentialité
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithWallet;
