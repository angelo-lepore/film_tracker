// Import di Bootstrap (CSS, JS e icone)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import dei componenti di routing
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import del layout e delle pagine
import DefaultLayout from "./layout/DefaultLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";

// Import css
import "./index.css";

// Import funzione per mostrare bandiera lingua e stelle
import getFlagEmoji from "./components/getFlagEmoji";
import renderStars from "./components/renderStars";

// Componente principale dell'applicazione
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout di default che racchiude le varie pagine */}
          <Route element={<DefaultLayout />}>
            {/* Rotte principali */}
            <Route path="/" element={<HomePage />} />
            <Route
              path="/search"
              element={
                <SearchPage
                  getFlagEmoji={getFlagEmoji}
                  renderStars={renderStars}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
