/* Assignment 2 – Filmguiden (JavaScript + API)
 - Genom att jag använder mig av console.log i koden är det inget som hamnar på hemsidan,
 utan bara i webbläsarens console */

async function main() {
  // Välj vilken kategori du vill hämta filmer från:
  const genre = "animation"; /* Här väljer jag att solla bort alla andra genrar och bara fokusera på env*/
  const url = `https://api.sampleapis.com/movies/${genre}`; /* Här är API:N jag har valt för denna uppgift*/

  // Hämtar data från API
  const response = await fetch(url);
  const movies = await response.json();

  /* Här skrives de ut hur många filmer som hämtats */
  console.log(`Antal ${genre}-filmer:`, movies.length);

  /* Här lägger jag in ett kommando som gör att filmerna via deras titel skrivs
  i bokstavsordning innan de visas i consolen*/
  movies.sort((a, b) => a.title.localeCompare(b.title));

  /* Här valde jag att göra så att det skrivs utt 10 stycka filmer.
  Men man kan ändra variablen om man vill ha mer eller mindre filmer */
  console.log("\nDe 10 första filmerna (A–Z):");
  for (let i = 0; i < 10; i++) {
    console.log(movies[i].title);
  }
  /* Här kollar jag upp om det finnns någon film med titeln Harry Potter */
  const finnsHarryPotter = movies.some(film =>
    film.title.toLowerCase().includes("harry potter")
  );

  /* Samma som koden innan. Kollar jag upp om det finns någon titel med namnet Bambi */
  const finnsBambi = movies.some(film =>
    film.title.toLowerCase().includes("bambi")
  );

 /* Här skrivs resultatet ut om det finns eller inte finns någon film som heter det i listan.
 Där har jag använt mig av en If sats för att det ska skrivas olika meddelanden om det finns eller inte */
  if (finnsHarryPotter) {
    console.log("Ja, filmen 'Harry Potter' finns med på listan!");
  } else {
    console.log("Nej, filmen 'Harry Potter' finns inte på listan.");
  }

  if (finnsBambi) {
    console.log("Ja, filmen 'Bambi' finns med på listan!");
  } else {
    console.log("Nej, filmen 'Bambi' finns inte på listan.");
  }

  /* Här valde jag att räkna ut hur många titlar i listen som börjar på bokstaven A */
  const antalPrinsessfilmer = movies.filter(film =>
    film.title.toLowerCase().startsWith("a")
  ).length;

  console.log(`Antal filmer med 'A' i titeln på listan: ${antalPrinsessfilmer}`);
}
/* Med hjälp av den här raden startar jag programmet. */
main();
