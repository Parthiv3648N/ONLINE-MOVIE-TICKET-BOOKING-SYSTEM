basePrice: 199,
    rating: "8.7/10",
    city: "Hyderabad",
    basePrice: 179,
    rating: "7.9/10",
    city: "Mumbai",
    basePrice: 169,
    rating: "8.2/10",
    city: "Bengaluru",
    basePrice: 189,
    rating: "8.1/10",
    city: "Chennai",
    basePrice: 149,
    rating: "7.7/10",
    city: "Chennai",
    basePrice: 219,
    rating: "8.9/10",
    city: "Bengaluru",
const summaryPaymentMethod = document.getElementById("summaryPaymentMethod");
const searchInput = document.getElementById("searchInput");
const headerCityButton = document.getElementById("headerCityButton");

function renderMovies() {
  const query = searchInput.value.trim().toLowerCase();
  const filteredMovies = movies.filter((movie) => {
    if (!query) return true;
    return [movie.title, movie.language, movie.genre, movie.city]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });

  movieGrid.innerHTML = movies
    .filter((movie) => filteredMovies.includes(movie))
    .map((movie) => {
          <div class="movie-poster" style="--poster-gradient: ${movie.posterGradient}">
            <span class="movie-tag">${movie.language}</span>
            <strong>${movie.title}</strong>
            <span class="movie-rating">★ ${movie.rating}</span>
            <strong class="movie-title">${movie.title}</strong>
          </div>
            <div class="movie-meta">
              <span>${movie.language}</span>
              <span>${movie.genre}</span>
            </div>
            <button class="book-cta" type="button">Book tickets</button>
          </div>

  if (!movieGrid.innerHTML.trim()) {
    movieGrid.innerHTML = `
      <article class="mini-banner">
        <span class="mini-label">No matches</span>
        <strong>Try a different search for title, city or language.</strong>
      </article>
    `;
  }

  [...document.querySelectorAll(".movie-card")].forEach((card) => {
  bookingShowBadge.textContent = bookingState.showtime;
  headerCityButton.textContent = bookingState.city;
  summaryPaymentMethod.textContent = `${bookingState.paymentMethod} ready`;
    updatePaymentChips();
    updateSummary();
  });

searchInput.addEventListener("input", () => {
  renderMovies();
});

payButton.addEventListener("click", () => {