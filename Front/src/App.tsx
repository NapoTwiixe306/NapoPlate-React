import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Views/Home';
import ConnectWithWallet from './Views/Auth/connectWithWallet';
import ConnectWithEmail from './Views/Auth/ConnectWithEmail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './Views/Dashboard';

const Pages = [
  { path: "/", component: <HomePage /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/connectWithEmail", component: <ConnectWithEmail/> },
  { path: "/connectWithWallet", component: <ConnectWithWallet/> },
];

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {Pages.map((page, index) => (
          <Route key={index} path={page.path} element={page.component} />
        ))}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
