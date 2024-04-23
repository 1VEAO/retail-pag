let navCont = document.getElementsByClassName('navegation')[0]

const options = [
 { title: "Como Comprar", linkTo: "./how.html" },
 { title: "Costos y Tarifas", linkTo: "./taxs.html" },
 { title: "Mis Pedidos", linkTo: "./orders.html" },
 { title: "Garantia", linkTo: "./warranty.html" },
];

for (let option of options) {
 const anchor = document.createElement("a");
 anchor.textContent = option.title
 anchor.href = option.linkTo
 navCont.appendChild(anchor)
}