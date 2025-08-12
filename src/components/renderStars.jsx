// Funzione per generare un array di icone stelle in base al voto (vote) da 0 a 10
function renderStars(vote) {
  const stars = [];

  // Converte il voto da scala 0-10 a scala 0-5 arrotondata al mezzo voto più vicino
  // Esempio: 7.3 -> 3.5 stelle, 8 -> 4 stelle, ecc.
  const rating = Math.round((vote / 2) * 2) / 2;

  // Ciclo da 1 a 5 per generare le 5 stelle da mostrare
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      // Stiamo sotto o al valore intero: aggiungo stella piena
      stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
    } else if (i - 0.5 === rating) {
      // Se la differenza è di mezzo voto: aggiungo stella mezza
      stars.push(<i key={i} className="bi bi-star-half text-warning"></i>);
    } else {
      // Altrimenti stella vuota
      stars.push(<i key={i} className="bi bi-star text-warning"></i>);
    }
  }
  // Ritorna array di elementi JSX (icone stelle) da renderizzare
  return stars;
}

// Esporto la funzione
export default renderStars;
