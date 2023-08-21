"use strict";

// DOM Elemente selektieren

const btn = document.querySelector("button");
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const quoteContainer = document.querySelector(".quote-container");


// Funktion zum Laden der gespeicherten Daten und Anwenden der Styles

function loadStoredData() {
  const storedQuoteData = JSON.parse(localStorage.getItem("quoteData")); // Gespeicherte Zitatdaten abrufen und in JavaScript-Objekt umwandeln
  if (storedQuoteData) {
    quoteText.textContent = storedQuoteData.quoteText; // Zitat-Text setzen
    quoteAuthor.textContent = storedQuoteData.quoteAuthor; // Zitat-Autor setzen
    quoteAuthor.style.backgroundColor = storedQuoteData.styles.backgroundColor; // Hintergrundfarbe des Zitat-Autors setzen
    quoteAuthor.style.display = storedQuoteData.styles.display; // Anzeigeeigenschaft des Zitat-Autors setzen
    quoteAuthor.style.borderRadius = storedQuoteData.styles.borderRadius; // Randradius des Zitat-Autors setzen
    quoteAuthor.style.paddingInline = storedQuoteData.styles.paddingInline; // Innenabstand des Zitat-Autors setzen
  }
}

// Eventlistener zum Laden der gespeicherten Daten beim Laden der Seite
document.addEventListener("DOMContentLoaded", loadStoredData);

btn.addEventListener("click", function () {
  // Daten von der API abrufen
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fehler beim Abrufen der Daten. HTTP-Statuscode: " + response.status); // Fehler werfen, wenn die API-Antwort nicht erfolgreich ist
      }
      return response.json(); // API-Daten in JavaScript-Objekt umwandeln
    })
    .then((data) => {
      quoteText.textContent = "\"" + data.quote + "\""; // Zitat-Text setzen
      quoteAuthor.textContent = `- ${data.author}`; // Zitat-Autor setzen
      quoteAuthor.style.backgroundColor = "lightgrey"; // Hintergrundfarbe des Zitat-Autors setzen
      quoteAuthor.style.display = "inline-block"; // Anzeigeeigenschaft des Zitat-Autors setzen
      quoteAuthor.style.borderRadius = "5px"; // Randradius des Zitat-Autors setzen
      quoteAuthor.style.paddingInline = "0.4rem"; // Innenabstand des Zitat-Autors setzen

      // // Das quoteData-Objekt wird erstellt und enthält den aktuellen Zitattext, 
      // // den aktuellen Zitatautor und die Style-Eigenschaften für den Zitatautor
      const quoteData = {
        quoteText: quoteText.textContent,
        quoteAuthor: quoteAuthor.textContent,
        styles: {
          backgroundColor: "lightgrey",
          display: "inline-block",
          borderRadius: "5px",
          paddingInline: "0.4rem"
        }
      };

      localStorage.setItem("quoteData", JSON.stringify(quoteData)); // Zitatdaten im localStorage speichern
    })
    // Fehlerbehandlung
    .catch((error) => {
      console.error("Fehler beim Abrufen der Daten: ", error.message);    // Fehlermeldung ausgeben
      quoteText.textContent = "Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.";  // Fehlermeldung im Zitat-Text anzeigen
      
      quoteAuthor.textContent = error.message; // Fehlermeldung im Zitat-Autor anzeigen
      quoteContainer.style.backgroundColor = "red"; // Hintergrundfarbe des Zitat-Containers auf rot setzen
      quoteContainer.style.borderRadius = "0.625rem"; // Randradius 
    });
});

/* ==== Gleicher Code mit Promise async/await ===== */
/*
"use strict";

const btn = document.querySelector("button"); // Button-Element auswählen
const quoteText = document.querySelector(".quote-text"); // Zitat-Text-Element auswählen
const quoteAuthor = document.querySelector(".quote-author"); // Zitat-Autor-Element auswählen
const quoteContainer = document.querySelector(".quote-container"); // Zitat-Container-Element auswählen

function loadStoredData() {
  // Gespeicherte Daten abrufen und anwenden
  const storedQuoteData = JSON.parse(localStorage.getItem("quoteData")); // Gespeicherte Zitatdaten abrufen und in JavaScript-Objekt umwandeln
  if (storedQuoteData) {
    quoteText.textContent = storedQuoteData.quoteText; // Zitat-Text setzen
    quoteAuthor.textContent = storedQuoteData.quoteAuthor; // Zitat-Autor setzen
    quoteAuthor.classList.add("quote-author--highlight"); // Zitat-Autor mit der Klasse "quote-author--highlight" markieren
  }
}

document.addEventListener("DOMContentLoaded", loadStoredData); // Event-Listener hinzufügen, um die Funktion "loadStoredData" auszuführen, wenn das DOM geladen wird

btn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://dummy-apis.netlify.app/api/quote"); // Daten von der API abrufen
    if (!response.ok) {
      throw new Error("Fehler beim Abrufen der Daten. HTTP-Statuscode: " + response.status); // Fehler werfen, wenn die API-Antwort nicht erfolgreich ist

    const data = await response.json(); // API-Daten in JavaScript-Objekt umwandeln

    quoteText.textContent = `"${data.quote}"`; // Zitat-Text setzen
    quoteAuthor.textContent = `- ${data.author}`; // Zitat-Autor setzen
    quoteAuthor.classList.add("quote-author--highlight"); // Zitat-Autor mit der Klasse "quote-author--highlight" markieren

    const quoteData = {
      quoteText: quoteText.textContent,
      quoteAuthor: quoteAuthor.textContent,
    }; // Zitatdaten in JavaScript-Objekt speichern

    localStorage.setItem("quoteData", JSON.stringify(quoteData)); // Zitatdaten im localStorage speichern
  } catch (error) {
    console.error("Fehler beim Abrufen der Daten: ", error.message); // Fehlermeldung ausgeben
    quoteText.textContent = "Es ist ein Fehler aufgetreten. Bitte versuche es später erneut."; // Fehlermeldung im Zitat-Text anzeigen

    quoteAuthor.textContent = error.message; // Fehlermeldung im Zitat-Autor anzeigen
    quoteContainer.style.backgroundColor = "red"; // Hintergrundfarbe des Zitat-Containers auf rot setzen
    quoteContainer.style.borderRadius = "0.625rem"; // Randradius des Zitat-Containers setzen
  }
});

*/
