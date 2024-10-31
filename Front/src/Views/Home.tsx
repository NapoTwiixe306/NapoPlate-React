import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  return (
   <>
    <Helmet>
        <title>Accueil - NapoPlate React</title>
    </Helmet>
    <div className="text-center text-xl text-blue-800 font-bold">
      Bienvenue sur la page d'accueil !
    </div>
   </>
  );
};

export default HomePage;
