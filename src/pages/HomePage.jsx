// Import React, useEffect e useState
import React, { useEffect, useState } from "react";

export default function HomePage() {
  // Stato per memorizzare i film popolari
  const [movies, setMovies] = useState([]);

  // URL dell'API per i film popolari (lingua italiana)
  const apiUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=5d6d500bcb846cb46820655f48714d93&language=it-IT";

  // useEffect esegue il codice al primo caricamento del componente
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error("Errore nel caricamento:", err));
  }, []);

  return (
    <>
      <main>
        <div className="container py-4">
          <h1 className="mb-4">🎬 Film Popolari</h1>
          <div className="row">
            {/* Per ogni film crea una card */}
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div className="card h-100 text-center shadow-sm">
                  {/* Immagine */}
                  <img
                    src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                    alt={movie.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    {/* Titolo del film */}
                    <h5 className="card-title">{movie.title}</h5>
                    {/* Data di uscita */}
                    <p className="card-text text-muted">
                      📅{" "}
                      {movie.release_date
                        ? new Date(movie.release_date).toLocaleDateString(
                            "it-IT"
                          )
                        : "Data non disponibile"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
