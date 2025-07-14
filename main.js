let usuarios = [];

function obtenerDatosDelUsuario() {
  let nombre, edad, peso, talla;

  while (true) {
    nombre = prompt("Ingresa tu nombre");
    edad = parseInt(prompt("Ingresa tu edad"));
    peso = parseFloat(prompt("Ingresa tu peso en kg"));
    talla = parseFloat(prompt("Ingresa tu talla en mts"));

    if (
      nombre &&
      !isNaN(edad) &&
      edad > 0 &&
      !isNaN(peso) &&
      peso > 0 &&
      !isNaN(talla) &&
      talla > 0
    ) {
      break;
    } else {
      alert("Por favor ingresa todos los datos correctamente.");
    }
  }

  return { nombre, edad, peso, talla };
}

function IMC(peso, talla) {
  return peso / (talla * talla);
}

function clasificarIMC(imc, edad) {
  if (imc < 18.5 && edad >= 18 && edad < 64) {
    return "Desnutrición";
  } else if (imc < 23 && edad >= 65) {
    return "Desnutrición";
  } else if (imc >= 18.5 && imc < 24.9 && edad < 64) {
    return "Normopeso";
  } else if (imc > 23.1 && imc < 27.9 && edad >= 65) {
    return "Normopeso";
  } else if (imc >= 25 && imc < 29.9 && edad < 64) {
    return "Sobrepeso";
  } else if (imc >= 28 && imc < 31.9 && edad >= 65) {
    return "Sobrepeso";
  } else if (imc >= 30 && imc < 34.9 && edad < 64) {
    return "Obesidad tipo I";
  } else if (imc >= 35 && imc < 39.9 && edad < 64) {
    return "Obesidad tipo II";
  } else if (imc > 40 && edad < 64) {
    return "Obesidad mórbida";
  } else if (imc > 32 && edad >= 65) {
    return "Obesidad";
  } else {
    return "Clasificación no determinada";
  }
}

// Bucle principal
let continuar = true;

while (continuar) {
  const { nombre, edad, peso, talla } = obtenerDatosDelUsuario();

  const imc = IMC(peso, talla);
  const clasificacion = clasificarIMC(imc, edad);

  alert(
    `${nombre}, tu IMC es ${imc.toFixed(
      2
    )} y se clasifica como: ${clasificacion}`
  );

  usuarios.push({
    nombre,
    edad,
    peso,
    talla,
    imc: imc.toFixed(2),
    clasificacion,
  });

  continuar = confirm("¿Deseás ingresar otro usuario?");
}

console.log("Usuarios ingresados:", usuarios);
