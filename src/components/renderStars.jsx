function renderStars(vote) {
  const stars = [];
  const rating = Math.round((vote / 2) * 2) / 2;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
    } else if (i - 0.5 === rating) {
      stars.push(<i key={i} className="bi bi-star-half text-warning"></i>);
    } else {
      stars.push(<i key={i} className="bi bi-star text-warning"></i>);
    }
  }
  return stars;
}

export default renderStars;
