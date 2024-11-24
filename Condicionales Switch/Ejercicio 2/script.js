// Función para solicitar un número válido
function solicitarNumero() {
    let numero = parseInt(prompt("Por favor, ingrese un número entre 1 y 10:"));
    
    while (isNaN(numero) || numero < 1 || numero > 10) {
      numero = parseInt(prompt("Número inválido. Por favor, ingrese un número válido entre 1 y 10:"));
    }
  
    return numero;
  }
  
  // Función para procesar el número con switch
  function procesarNumero(numero) {
    switch (numero) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        console.log(`Gracias. Has ingresado el número ${numero}.`); // Corrección: uso de comillas invertidas
        break;
      default:
        console.log("Número fuera del rango permitido."); // Esta línea nunca debería ejecutarse debido al bucle while.
        break;
    }
  }
  
  // Solicitar un número y procesarlo
  let numeroIngresado = solicitarNumero();
  procesarNumero(numeroIngresado);
  
