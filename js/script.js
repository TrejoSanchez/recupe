let products = [
    { id: 1, name: "Producto 1", description: "Descripción 1", purchasePrice: 10.00, salePrice: 15.00, quantity: 100, type: "Tipo A" },
    { id: 2, name: "Producto 2", description: "Descripción 2", purchasePrice: 20.00, salePrice: 30.00, quantity: 200, type: "Tipo B" },
    { id: 3, name: "Producto 3", description: "Descripción 3", purchasePrice: 30.00, salePrice: 45.00, quantity: 300, type: "Tipo C" },
    { id: 4, name: "Producto 4", description: "Descripción 4", purchasePrice: 40.00, salePrice: 60.00, quantity: 400, type: "Tipo D" },
    { id: 5, name: "Producto 5", description: "Descripción 5", purchasePrice: 50.00, salePrice: 75.00, quantity: 500, type: "Tipo E" },
    { id: 6, name: "Producto 6", description: "Descripción 6", purchasePrice: 60.00, salePrice: 90.00, quantity: 600, type: "Tipo F" },
    { id: 7, name: "Producto 7", description: "Descripción 7", purchasePrice: 70.00, salePrice: 105.00, quantity: 700, type: "Tipo G" },
    { id: 8, name: "Producto 8", description: "Descripción 8", purchasePrice: 80.00, salePrice: 120.00, quantity: 800, type: "Tipo H" },
    { id: 9, name: "Producto 9", description: "Descripción 9", purchasePrice: 90.00, salePrice: 135.00, quantity: 900, type: "Tipo I" },
    { id: 10, name: "Producto 10", description: "Descripción 10", purchasePrice: 100.00, salePrice: 150.00, quantity: 1000, type: "Tipo J" },
];
let productId = 11;

function addProduct() {
    const product = {
        id: productId++,
        name: prompt("Ingrese el nombre del producto:"),
        description: prompt("Ingrese la descripción del producto:"),
        purchasePrice: parseFloat(prompt("Ingrese el precio de compra:")),
        salePrice: parseFloat(prompt("Ingrese el precio de venta:")),
        quantity: parseInt(prompt("Ingrese la cantidad:")),
        type: prompt("Ingrese el tipo de producto:")
    };
    products.push(product);
    renderTable();
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        product.name = prompt("Modificar nombre del producto:", product.name);
        product.description = prompt("Modificar descripción del producto:", product.description);
        product.purchasePrice = parseFloat(prompt("Modificar precio de compra:", product.purchasePrice));
        product.salePrice = parseFloat(prompt("Modificar precio de venta:", product.salePrice));
        product.quantity = parseInt(prompt("Modificar cantidad:", product.quantity));
        product.type = prompt("Modificar tipo de producto:", product.type);
        renderTable();
    }
}

function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    renderTable();
}

function renderTable() {
    const tbody = document.querySelector("#productTable tbody");
    tbody.innerHTML = "";

    products.forEach(product => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.purchasePrice.toFixed(2)}</td>
            <td>${product.salePrice.toFixed(2)}</td>
            <td>${product.quantity}</td>
            <td>${product.type}</td>
            <td>
                <button onclick="editProduct(${product.id})">Editar</button>
                <button onclick="deleteProduct(${product.id})">Eliminar</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", renderTable);




let services = [
    { id: 1, type: "Consulta", description: "Consulta general para mascotas", price: 25.00 },
    { id: 2, type: "Vacunación", description: "Vacunación completa", price: 50.00 },
    { id: 3, type: "Desparasitación", description: "Desparasitación interna y externa", price: 35.00 },
    { id: 4, type: "Cirugía", description: "Cirugía menor", price: 150.00 },
    { id: 5, type: "Estética", description: "Baño y corte de pelo", price: 40.00 },
    { id: 6, type: "Urgencias", description: "Atención de urgencias", price: 75.00 },
    { id: 7, type: "Radiología", description: "Radiografía", price: 100.00 },
    { id: 8, type: "Laboratorio", description: "Análisis de sangre", price: 60.00 },
    { id: 9, type: "Hospitalización", description: "Día de hospitalización", price: 200.00 },
    { id: 10, type: "Adiestramiento", description: "Adiestramiento básico", price: 120.00 },
];
let serviceId = 11;

function addService() {
    const service = {
        id: serviceId++,
        type: prompt("Ingrese el tipo de servicio:"),
        description: prompt("Ingrese la descripción del servicio:"),
        price: parseFloat(prompt("Ingrese el precio del servicio:"))
    };
    services.push(service);
    renderTable();
}

function editService(id) {
    const service = services.find(s => s.id === id);
    if (service) {
        service.type = prompt("Modificar tipo de servicio:", service.type);
        service.description = prompt("Modificar descripción del servicio:", service.description);
        service.price = parseFloat(prompt("Modificar precio del servicio:", service.price));
        renderTable();
    }
}

function deleteService(id) {
    services = services.filter(s => s.id !== id);
    renderTable();
}

function renderTable() {
    const tbody = document.querySelector("#serviceTable tbody");
    tbody.innerHTML = "";

    services.forEach(service => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${service.id}</td>
            <td>${service.type}</td>
            <td>${service.description}</td>
            <td>${service.price.toFixed(2)}</td>
            <td>
                <button onclick="editService(${service.id})">Editar</button>
                <button onclick="deleteService(${service.id})">Eliminar</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", renderTable);
