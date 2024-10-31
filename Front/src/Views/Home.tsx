import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("ouais");
    
  };
  return (
   <>
    <Helmet>
        <title>Accueil - NapoPlate React</title>
    </Helmet>
    <div className="text-center text-xl font-bold dark:text-white">
      Bienvenue sur la page d'accueil !
    </div>
    <button onClick={toggleDarkMode} className='text-white'>
        Changement de theme
    </button>
   </>
  );
};

export default HomePage;
