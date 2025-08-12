import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ search, setSearch, resetSearch }) {
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    // fai navigare alla pagina di ricerca con query come parametro URL
    navigate(`/search?query=${encodeURIComponent(search)}`);
  }

  return (
    <header>
      <div className="container-fluid bg-light py-2 px-3 bg-dark">
        <div className="d-flex align-items-center justify-content-between">
          <img src="/img/Film_Tracker.png" alt="Logo" height="40" />
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
            <button className="btn btn-danger" type="submit">
              Cerca
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
