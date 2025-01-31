
const products = [
    { name: "Camiseta Casual", price: "$20", img: "https://via.placeholder.com/150" },
    { name: "Pantalón Elegante", price: "$35", img: "https://via.placeholder.com/150" },
    { name: "Zapatillas Deportivas", price: "$50", img: "https://via.placeholder.com/150" },
];

function loadProducts() {
    const productGrid = document.querySelector('.product-grid');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productGrid.appendChild(productDiv);
    });
}

function explorar() {
    window.location.href = "#products";
}

// Cargar productos al iniciar
document.addEventListener("DOMContentLoaded", loadProducts);
