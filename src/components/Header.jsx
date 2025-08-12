// Import React, useState e useNavigate
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Componente Header che gestisce la barra di ricerca e la navigazione
export default function Header() {
  // Stato interno per il testo della ricerca
  const [search, setSearch] = useState("");

  // Hook di React Router per cambiare pagina senza ricaricare
  const navigate = useNavigate();

  // Resetta la barra di ricerca
  const resetSearch = () => {
    setSearch("");
  };

  // Gestisce l'invio del form
  function handleSearch(e) {
    e.preventDefault();
    // Se il campo ricerca non è vuoto, cambia pagina andando a /search
    if (search.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(search)}`);
    }
  }

  return (
    <header>
      <div className="container-fluid bg-light py-2 px-3 bg-dark">
        <div className="d-flex align-items-center justify-content-between">
          <img src="/img/Film_Tracker.png" alt="Logo" height="40" />
          {/* Bottone per tornare alla home e resettare la ricerca */}
          <button
            className="btn btn-outline-danger ms-3"
            onClick={() => {
              resetSearch(); // svuota la barra
              window.location.href = "/"; // naviga a Home
            }}
            aria-label="Home"
          >
            <i className="bi bi-house fs-5"></i>
          </button>
          {/* Form della ricerca */}
          <form
            onSubmit={handleSearch}
            className="d-flex ms-3 flex-grow-1"
            role="search"
          >
            <input
              className="form-control me-2 input-focus-red"
              type="search"
              placeholder="Nome film / serie TV..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* Bottone per inviare la ricerca */}
            <button className="btn btn-danger" type="submit">
              Cerca
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
