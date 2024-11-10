import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Views/Home";
import ConnectWithWallet from "./Views/Auth/connectWithWallet";
import ConnectWithEmail from "./Views/Auth/ConnectWithEmail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./Views/Dashboard";
import Features from "./Views/Features";
import Login from "./Views/login";

const Pages = [
  { path: "/", component: <HomePage /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/features", component: <Features /> },
  { path: "/connectWithEmail", component: <ConnectWithEmail /> },
  { path: "/connectWithWallet", component: <ConnectWithWallet /> },
  { path: "/login", component: <Login /> }, // Ajoute la route /login ici
];

const AppContent: React.FC = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <>
      {!isDashboard && <Navbar />}
      <Routes>
        {Pages.map((page, index) => (
          <Route key={index} path={page.path} element={page.component} />
        ))}
      </Routes>
      {!isDashboard && <Footer />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
