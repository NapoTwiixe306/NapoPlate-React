import { Helmet } from 'react-helmet-async';
import {Wallet, BarChart2, Cloud} from 'lucide-react'
import PricingSection from '../components/Home/PricingSection';
import CTA from '../components/Home/CTA';
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
          <button className="bg-indigo-600 transition-all hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg ">
              Démarrez Gratuitement en 30 Secondes
            </button>
            <p className="text-sm font-normal">Aucune carte de crédit requise | Annulation facile</p>
          </div>
        </section>

        {/* Features section */}
        <section className="py-20 w-full mt-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Fonctionnalités puissantes pour votre entreprise
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Découvrez comment notre plateforme peut transformer vos opérations.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Wallet className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium">Intégration Web3</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400 text-center">
                Connectez-vous facilement aux technologies blockchain et aux applications décentralisées.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <BarChart2 className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium">Analyses avancées</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400 text-center">
                Obtenez des insights précieux grâce à nos puissants outils d'analyse de données.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <Cloud className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium">Infrastructure évolutive</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400 text-center">
                Développez votre entreprise avec nos solutions cloud flexibles et évolutives.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <PricingSection/>

      {/* CTA section */}
      <CTA/>
      </main>
    </>
  );
};

export default HomePage;
