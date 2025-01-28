// Select the button and quote element
const randomQuoteButton = document.getElementById('random-quote-button');
const quoteElement = document.getElementById('quote');

// Function to generate a random quote
function generateRandomQuote() {
  let quote = '';
  const totalQuotes = 5; // Number of quotes to choose from

  // Use a for loop to generate a random number and select a quote
  for (let i = 0; i < 1; i++) { // Loop runs once for simplicity
    const randomNumber = Math.floor(Math.random() * totalQuotes) + 1;

    if (randomNumber === 1) {
      quote = "The best way to predict the future is to create it.";
    } else if (randomNumber === 2) {
      quote = "Success is not final, failure is not fatal: It is the courage to continue that counts.";
    } else if (randomNumber === 3) {
      quote = "Don't watch the clock; do what it does. Keep going.";
    } else if (randomNumber === 4) {
      quote = "Keep your face always toward the sunshine—and shadows will fall behind you.";
    } else if (randomNumber === 5) {
      quote = "The only limit to our realization of tomorrow is our doubts of today.";
    }
  }

  // Update the quote element
  quoteElement.textContent = quote;
}

// Add click event listener to the button
randomQuoteButton.addEventListener('click', generateRandomQuote);
