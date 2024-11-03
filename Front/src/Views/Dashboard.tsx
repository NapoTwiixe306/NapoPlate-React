import { Helmet } from 'react-helmet-async';
import { useAccount, useDisconnect } from 'wagmi';
import { useNavigate } from 'react-router-dom'; 

const Dashboard: React.FC = () => {
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect(); 
  const navigate = useNavigate(); 

  const handleDisconnect = () => {
    disconnect(); 
    localStorage.removeItem('user'); 
    navigate('/'); 
  };

  return (
    <>
      <Helmet>
        <title>Dashboard - NapoPlate React</title>
      </Helmet>
      <main className="flex items-center justify-center flex-col mt-56 text-center text-xl text-black font-bold dark:text-white">
        {isConnected ? (
          <>
            <h1>Bienvenue à bord !</h1>
            <p className="mt-2">Adresse Ethereum : {address}</p>
            <button 
              onClick={handleDisconnect} 
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Déconnexion
            </button>
          </>
        ) : (
          <h1>Vous n'êtes pas connecté. Veuillez vous connecter pour accéder à votre tableau de bord.</h1>
        )}
      </main>
    </>
  );
};

export default Dashboard;
