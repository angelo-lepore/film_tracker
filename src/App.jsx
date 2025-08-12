// Import di Bootstrap (CSS, JS e icone)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import dei componenti di routing (gestione delle pagine)
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import del layout principale e delle pagine dell'app
import DefaultLayout from "./layout/DefaultLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";

// Import del file CSS
import "./index.css";

// Componente principale dell'applicazione React
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout di default che racchiude le varie pagine */}
          <Route element={<DefaultLayout />}>
            {/* Rotte principali */}
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// Esporto il componente App
export default App;
