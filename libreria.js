document.getElementById("buscar").addEventListener("click", () => {
  const food = document.getElementById("DataCenter").value;

  if (!food) {
    alert("Por favor, escribe un alimento.");
    return;
  }

  fetch(
    `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${food}&search_simple=1&action=process&json=1
${food}&json=1`
  )
    .then((response) => response.json())
    .then((data) => {
      const resultDiv = document.getElementById("resultados");
      resultDiv.innerHTML = "";

      if (data.products && data.products.length > 0) {
        const producto = data.products[0];
        resultDiv.innerHTML = `
            <h2>${producto.product_name}</h2>
            <p><strong>Alimento:</strong> ${
              producto.brands || "No disponible"
            }</p>
            <p><strong>Calorías:</strong> ${
              producto.nutriments?.["energy-kcal_100g"] || "No disponible"
            } kcal</p>
            <p><strong>Carbohidratos:</strong> ${
              producto.nutriments?.carbohydrates_100g || "No disponible"
            } g</p>
            <p><strong>Lípidos:</strong> ${
              producto.nutriments?.fat_100g || "No disponible"
            } g</p>
            <p><strong>Proteínas:</strong> ${
              producto.nutriments?.proteins_100g || "No disponible"
            } g</p>
          `;
      } else {
        resultDiv.innerHTML = "<p>No se encontraron resultados.</p>";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("resultados").innerHTML =
        "<p>Hubo un problema al consultar la API.</p>";
    });
});
