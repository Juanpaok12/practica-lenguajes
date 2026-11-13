const boton = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  resultado.textContent = "Consultando...";

  fetch("https://api.frankfurter.dev/v2/rate/USD/COP")
    .then(function (response) { 
      return response.json();
    })
    .then(function (data) {
      const tasa = data.rate.toLocaleString("es-CO");
      resultado.textContent = "1 USD = $" + tasa + " COP";
    })
    .catch(function (){
      resultado.textContent = "No se consultar el dolar. Intenta de nuevo.";
    });
});