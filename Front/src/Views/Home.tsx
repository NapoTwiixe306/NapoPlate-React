import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Accueil - NapoPlate React</title>
      </Helmet>
      <main className="flex items-center justify-center flex-col mt-56 text-center text-xl text-black font-bold dark:text-white">
        <section className="p-4 lg:w-3/5 flex items-center justify-center flex-col h-full space-y-4">
          <div className="text-center">
            <h1 className="text-3xl w-full font-bold lg:text-6xl">
              Propulsez votre Vision Web3 vers de Nouveaux Sommets
            </h1>
            <p className="text-sm font-medium">
              Décuplez votre Productivité avec le Boilerplate Ultime pour Développeurs dApp
            </p>
          </div>
          <div className="text-center flex flex-col gap-2">
            <button className="bg-indigo-600 p-2 px-5 text-white mt-2 rounded-full">
              Démarrez Gratuitement, et rapidement
            </button>
            <p className="text-sm font-normal">Aucune carte de crédit requise | Annulation facile</p>
          </div>
        </section>
        <section className="flex items-center justify-center flex-col text-center mt-28">
          <div className='flex items-center justify-center'>
            <h2 className="lg:text-4xl w-full lg:w-3/5">
              Des fonctionnalités puissantes pour votre entreprise
            </h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
