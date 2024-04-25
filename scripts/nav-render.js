let navCont = document.getElementsByClassName('navegation')[0]

const options = [
 { title: "Como Comprar", linkTo: "./rutas/how.html" },
 { title: "Costos y Tarifas", linkTo: "./rutas/taxs.html" },
 { title: "Mis Pedidos", linkTo: "./rutas/orders.html" },
 { title: "Garantia", linkTo: "./rutas/warranty.html" },
];

for (let option of options) {
 const anchor = document.createElement("a");
 anchor.textContent = option.title
 anchor.href = option.linkTo
 navCont.appendChild(anchor)
}