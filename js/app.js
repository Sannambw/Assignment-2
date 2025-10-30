/* Assignment 2 – Fetch, API & Array Methods
- API som används:
- https://api.sampleapis.com/movies/animation
- (hämtar filmer med titel, genre, regissör m.m.)
*/

/* Hämtar data från ett öppet API (filmer) */
fetch("https://api.sampleapis.com/movies/animation")
  .then(response => response.json()) // Gör om svaret till JSON
  .then(data => {
    console.log("Alla filmer:", data); /* Visar datan i konsolen */
  })
  .catch(error => {
    console.error("Något gick fel:", error);
  });
