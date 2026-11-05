fetch("https://api.frankfurter.dev/v2/rate/USD/COP")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let tasa = data.rate;
    document.querySelector("h1").textContent = "1 USD = $" + tasa + " COP";
  });