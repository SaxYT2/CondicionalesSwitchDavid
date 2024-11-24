// Función para obtener el saludo basado en el estado civil codificado
function saludarSegunEstadoCivil(nombre, estadoCivilCodigo) {
    let saludo;

    switch (estadoCivilCodigo) {
        case 1:
            saludo = `Hola, ${nombre}. ¡Qué bueno verte disfrutando de tu soltería!`;
            break;
        case 2:
            saludo = `Hola, ${nombre}. Espero que tú y tu pareja estén teniendo un gran día.`;
            break;
        case 3:
            saludo = `Hola, ${nombre}. Espero que estés encontrando paz y felicidad en esta nueva etapa de tu vida.`;
            break;
        case 4:
            saludo = `Hola, ${nombre}. Espero que estés rodeado de amor y apoyo.`;
            break;
        case 5:
            saludo = `Hola, ${nombre}. Espero que tú y tu pareja estén disfrutando de su unión libre.`;
            break;
        default:
            saludo = `Hola, ${nombre}. Estado civil desconocido.`;
            break;
    }

    return saludo;
}

// Variables de ejemplo
let nombre = 'Juan';
let estadoCivilCodigo = 2; // 1: Soltero, 2: Casado, 3: Separado, 4: Viudo, 5: Unión libre

// Muestra el saludo en la consola
console.log(saludarSegunEstadoCivil(nombre, estadoCivilCodigo));
