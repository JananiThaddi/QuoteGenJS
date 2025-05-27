const quotes = [
  "The best way to predict the future is to invent it. – Alan Kay",
  "Simplicity is the ultimate sophistication. – Leonardo da Vinci",
  "Stay hungry, stay foolish. – Steve Jobs",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "In the middle of difficulty lies opportunity. – Albert Einstein"
];

function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
}
