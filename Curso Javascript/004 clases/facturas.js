class Cliente {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Articulo {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Factura {
    constructor(cliente) {
        this.cliente = cliente;
        this.numeroFactura = "";
        this.fechaFactura = "";
        this.articulos = [];
    }

    agregarArticulo(articulo, precio, cantidad) {
        this.articulos.push({ articulo, precio, cantidad });
    }

    calcularTotal() {
        let total = 0;
        for (const item of this.articulos) {
            total += item.precio * item.cantidad;
        }
        return total;
    }
}

const clienteSelect = document.getElementById("cliente");
const articuloSelect = document.getElementById("articulo");
const agregarArticuloButton = document.getElementById("agregarArticulo");
const detalleFactura = document.getElementById("detalleFactura");
const totalFactura = document.getElementById("totalFactura");

const clientes = [
    new Cliente("Cliente 1"),
    new Cliente("Cliente 2"),
    new Cliente("Cliente 3"),
];

const articulos = [
    new Articulo("Artículo 1", 10.99),
    new Articulo("Artículo 2", 5.99),
    new Articulo("Artículo 3", 7.99),
];

const factura = new Factura(clientes[0]);

clienteSelect.addEventListener("change", () => {
    factura.cliente = clientes[clienteSelect.selectedIndex];
});

agregarArticuloButton.addEventListener("click", () => {
    const articulo = articulos[articuloSelect.selectedIndex];
    const precio = parseInt(document.getElementById("precio").value, 10);
    const cantidad = parseInt(document.getElementById("cantidad").value, 10);
    
    if (!isNaN(cantidad) && cantidad > 0) {
        factura.agregarArticulo(articulo, precio, cantidad);

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${articulo.nombre}</td>
            <td>${precio.toFixed(2)}€</td>
            <td>${cantidad}</td>
            <td>${(precio * cantidad).toFixed(2)}€</td>
        `;

        detalleFactura.appendChild(fila);

        totalFactura.textContent = `${factura.calcularTotal().toFixed(2)} €`;

        document.getElementById("cantidad").value = "";
    }
});