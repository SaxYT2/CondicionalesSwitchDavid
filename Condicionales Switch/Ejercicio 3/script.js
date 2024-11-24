// Función para solicitar valores y acumularlos
function acumularValores() {
    let acumulado = 0;
    let valor;
  
    do {
      valor = parseInt(prompt("Ingrese un valor (0000 para finalizar):"));
      if (valor !== 0) {
        acumulado += valor;
      }
    } while (valor !== 0);
  
    console.log("Valor acumulado: " + acumulado);
    
    if (acumulado > 0) {
      console.log("El valor acumulado es mayor a cero.");
    } else if (acumulado < 0) {
      console.log("El valor acumulado es menor a cero.");
    } else {
      console.log("El valor acumulado es cero.");
    }
  }
  
  // Ejecutar la función
  acumularValores();