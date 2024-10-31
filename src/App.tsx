// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Views/Home';

const Pages = [
  { component: <HomePage /> }
];

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {Pages.map((page, index) => (
          <Route key={index} path="/" element={page.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
