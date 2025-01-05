const productos = [
  {
    titulo: "Gorra Streetwear",
    descripcion: "Estilo urbano, perfecta para cualquier ocasión.",
    precio: 19.99,
    imagen: "images/gorra.jpg",
  },
  {
    titulo: "Camiseta Oversize",
    descripcion: "Camiseta cómoda para un look relajado.",
    precio: 24.99,
    imagen: "images/camiseta.jpg",
  },
  {
    titulo: "Sudadera Hoodie",
    descripcion: "Sudadera con capucha ideal para el frío.",
    precio: 39.99,
    imagen: "images/hoodie.jpg",
  },
];

const contenedorProductos = document.getElementById("productos");

productos.forEach((producto) => {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.titulo}">
    <h3>${producto.titulo}</h3>
    <p>${producto.descripcion}</p>
    <p><strong>$${producto.precio.toFixed(2)} USD</strong></p>
    <a href="#">Agregar al Carrito</a>
  `;
  contenedorProductos.appendChild(div);
});
