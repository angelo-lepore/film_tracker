// Import React, useEffect e useState
import React, { useEffect, useState } from "react";

// useLocation serve per leggere l'URL corrente e prendere i parametri di ricerca
import { useLocation } from "react-router-dom";

// Import funzione per mostrare bandiera lingua e stelle
import getFlagEmoji from "../components/getFlagEmoji";
import renderStars from "../components/renderStars";

// Hook personalizzato per leggere i parametri della query dall'URL
function useQuery() {
  // Prende la parte dopo "?" nell'URL (query string)
  return new URLSearchParams(useLocation().search);
}

// Componente principale della pagina di ricerca
export default function SearchPage() {
  // Prende il parametro 'query' dalla query string o stringa vuota se non c'è
  const query = useQuery().get("query") || "";

  // Stato per memorizzare i risultati dei film/serie trovati
  const [movies, setMovies] = useState(null);

  // Chiave API per fare richieste a TMDB (presa dalle variabili ambiente)
  const API_KEY = import.meta.env.VITE_API_KEY;

  // useEffect si attiva ogni volta che cambia la query o la chiave API
  useEffect(() => {
    // Se la query è vuota, resetta i risultati
    if (!query) {
      setMovies(null);
      return;
    }

    // URL per cercare film con la query
    const ApiUrlMovie = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=it-IT&query=${encodeURIComponent(
      query
    )}`;

    // URL per cercare serie TV con la query
    const ApiUrlTV = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=it-IT&query=${encodeURIComponent(
      query
    )}`;

    // Effettua entrambe le richieste contemporaneamente (film + serie TV)
    Promise.all([
      fetch(ApiUrlMovie).then((res) => res.json()),
      fetch(ApiUrlTV).then((res) => res.json()),
    ])
      .then(([movieData, tvData]) => {
        // Combina i risultati di film e serie in un unico array,
        // aggiungendo un campo media_type per distinguerli
        const combined = [
          ...(movieData.results ?? []).map((item) => ({
            ...item,
            media_type: "movie",
          })),
          ...(tvData.results ?? []).map((item) => ({
            ...item,
            media_type: "tv",
          })),
        ];
        // Salva i risultati combinati nello stato
        setMovies(combined);

        // Logga i risultati in console
        console.log("Risultati ricerca:", combined);
      })
      .catch((err) => {
        // Se c'è un errore nella richiesta, mostra un alert e logga l'errore
        alert("Si è verificato un errore nel caricamento, riprova più tardi");
        console.error(err);
      });
  }, [query, API_KEY]);

  return (
    <>
      <main>
        <div className="container py-4">
          {Array.isArray(movies) && movies.length === 0 ? (
            // Se la ricerca è fatta ma non ci sono risultati, mostra questo messaggio
            <p className="text-center text-dark">
              Nessun film / serie TV trovato.
            </p>
          ) : (
            // Altrimenti, mostra le card con i risultati trovati
            <div className="row g-4 ">
              {Array.isArray(movies) &&
                movies.map((movie) => (
                  <div
                    key={`${movie.media_type}-${movie.id}`}
                    className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
                  >
                    <div className="card h-100 shadow-sm card-content rounded-3">
                      {/* Immagine */}
                      <div className="card-image">
                        {movie.poster_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                            className="card-img-top rounded-3"
                            style={{ height: "600px" }}
                            alt={
                              movie.media_type === "tv"
                                ? movie.name
                                : movie.title
                            }
                          />
                        ) : (
                          // Se non c'è immagine mostra un box grigio con testo
                          <div
                            className="card-img-top bg-secondary text-white d-flex align-items-center justify-content-center rounded-3"
                            style={{
                              minHeight: "200px",
                              height: "621px",
                              maxHeight: "600px",
                              alignItems: "center",
                            }}
                          >
                            <span>Immagine non disponibile</span>
                          </div>
                        )}
                      </div>
                      {/* Dettagli del film/serie */}
                      <div
                        className="card-body card-info"
                        style={{ height: "600px" }}
                      >
                        {/* Badge che indica se è film o serie TV */}
                        <span className="badge bg-danger mb-2">
                          {movie.media_type === "movie" ? (
                            <i className="bi bi-film"></i>
                          ) : (
                            <i className="bi bi-tv"></i>
                          )}
                        </span>
                        {/* Titolo */}
                        <h5 className="card-title">
                          {movie.media_type === "tv" ? movie.name : movie.title}
                        </h5>
                        {/* Titolo originale */}
                        <h6 className="card-subtitle mb-2 text-muted">
                          Titolo originale:{" "}
                          {movie.media_type === "tv"
                            ? movie.original_name
                            : movie.original_title}
                        </h6>
                        {/* Data di uscita */}
                        <p>
                          <strong>Data di uscita:</strong>{" "}
                          {movie.release_date
                            ? new Date(movie.release_date).toLocaleDateString(
                                "it-IT"
                              )
                            : "Data non disponibile"}
                        </p>
                        {/* Lingua originale con bandiera e voto con stelle */}
                        <p className="card-text">
                          <strong>Lingua:</strong> {movie.original_language}{" "}
                          {getFlagEmoji(movie.original_language)}
                          <br />
                          <strong>Voto:</strong>{" "}
                          {renderStars(movie.vote_average)}
                        </p>
                        {/* Trama */}
                        <p className="card-text truncate-overview">
                          <strong>Trama:</strong> {movie.overview}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
