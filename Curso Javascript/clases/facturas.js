const detalleFactura = document.getElementById("detalleFactura");
const totalFactura = document.getElementById("totalFactura");

const agregarArticulo = document.getElementById("agregarArticulo");
agregarArticulo.addEventListener("click", () => {
    const articulo = document.getElementById("articulo").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);

    if (!articulo || isNaN(precio) || isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, complete los campos correctamente.");
        return;
    }

    const subtotal = precio * cantidad;

    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${articulo}</td>
        <td>${precio.toFixed(2)}</td>
        <td>${cantidad}</td>
        <td>${subtotal.toFixed(2)}</td>
    `;

    detalleFactura.appendChild(fila);

    // Calcular el nuevo total de la factura
    let totalActual = parseFloat(totalFactura.innerText);
    totalActual += subtotal;
    totalFactura.innerText = totalActual.toFixed(2);

    // Restablecer los campos
    document.getElementById("articulo").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";
});