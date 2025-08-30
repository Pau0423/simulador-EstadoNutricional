let usuarios = [];

/*function obtenerDatosDelUsuario() {
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
}*/

function IMC(peso, talla) {
  return peso / (talla * talla);
}

function clasificarIMC(imc, edad) {
  if (edad >= 18 && edad < 65) {
    // Adultos
    if (imc < 18.5) return "Desnutricion";
    else if (imc >= 18.5 && imc <= 24.9) return "Normopeso";
    else if (imc >= 25 && imc <= 29.9) return "Sobrepeso";
    else if (imc >= 30 && imc <= 34.9) return "Obesidad tipo I";
    else if (imc >= 35 && imc <= 39.9) return "Obesidad tipo II";
    else if (imc >= 40) return "Obesidad morbida";
  } else if (edad >= 65) {
    // Adultos mayores
    if (imc < 23) return "Desnutricion";
    else if (imc >= 23 && imc <= 27.9) return "Normopeso";
    else if (imc >= 28 && imc <= 31.9) return "Sobrepeso";
    else if (imc >= 32) return "Obesidad";
  }
  return "Clasificacion no determinada";
}

document.getElementById("formIMC").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("usuario").value;
  const edad = parseInt(document.getElementById("edad").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const talla = parseFloat(document.getElementById("talla").value);

  if (
    !nombre ||
    isNaN(edad) ||
    isNaN(peso) ||
    isNaN(talla) ||
    edad <= 0 ||
    peso <= 0 ||
    talla <= 0
  ) {
    document.getElementById(
      "resultadoIMC"
    ).innerHTML = `<p style="color: red;">Por favor completa todos los campos correctamente.</p>`;
    return;
  }

  const imc = IMC(peso, talla);
  const clasificacion = clasificarIMC(imc, edad);

  const resultado = document.getElementById("resultadoIMC");
  resultado.innerHTML = `
    <h4>Resultado para ${nombre}</h4>
    <p>Edad: ${edad} años</p>
    <p>IMC: <strong>${imc.toFixed(1)}</strong></p>
    <p>Clasificación: <strong>${clasificacion}</strong></p>
  `;

  usuarios.push({
    nombre,
    edad,
    peso,
    talla,
    imc: imc.toFixed(1),
    clasificacion,
  });
  mostrarUsuarios();
  document.getElementById("formIMC").reset();
});

function mostrarUsuarios() {
  const lista = document.getElementById("listaUsuarios");
  if (usuarios.length === 0) {
    lista.innerHTML = "";
    return;
  }

  let html = "<h4>Usuarios ingresados:</h4><ul>";
  usuarios.forEach((u) => {
    html += `<li><strong>${u.nombre}</strong> - IMC: ${u.imc} (${u.clasificacion})</li>`;
  });
  html += "</ul>";
  lista.innerHTML = html;
}

// Bucle principal
/*let continuar = true;

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
} */

console.log("Usuarios ingresados:", usuarios);
