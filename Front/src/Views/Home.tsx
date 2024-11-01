import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
 
  return (
    <>
      <Helmet>
          <title>Accueil - NapoPlate React</title>
      </Helmet>
      <div className="text-center text-xl mt-2 text-black font-bold dark:text-white">
        Bienvenue sur la page d'accueil !
      </div>
    </>
  );
};

export default HomePage;
