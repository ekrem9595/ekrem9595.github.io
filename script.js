const quoteText = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote-btn");

// Funktion, um zufälliges Zitat und passendes Hintergrundbild zu laden
async function displayRandomQuote() {
    try {
        // 1. Zitat von der ZenQuotes API abrufen
        const quoteResponse = await fetch("https://zenquotes.io/api/random");
        const quoteData = await quoteResponse.json();
        const quote = quoteData[0].q;  // das Zitat
        const author = quoteData[0].a; // der Autor

        // 2. Passendes Hintergrundbild über Unsplash API basierend auf dem Zitat abrufen
        const imageResponse = await fetch(`https://source.unsplash.com/1600x900/?nature,peace`);
        const imageUrl = imageResponse.url; // direkte URL des Bildes

        // 3. Anzeige des Zitats und Hintergrundbilds
        quoteText.textContent = `"${quote}" - ${author}`;
        document.body.style.backgroundImage = `url(${imageUrl})`;

    } catch (error) {
        console.error("Fehler beim Abrufen des Zitats oder Hintergrundbilds:", error);
        quoteText.textContent = "Oops, something went wrong. Please try again.";
    }
}

// Event-Listener für die Schaltfläche "Neues Zitat"
newQuoteBtn.addEventListener("click", displayRandomQuote);

// Erstes Zitat beim Laden der Seite anzeigen
window.onload = displayRandomQuote;
