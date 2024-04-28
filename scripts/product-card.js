let cardCont = document.getElementsByClassName('card-container')[0];
const search = document.getElementsByClassName('search-inp')[0];

const createCard = () => {
 for (const product of productsArray) {
  const link = document.createElement('a');
  const classCard = document.createElement('div');
  const imgMok = document.createElement('img');
  const classInfoCard = document.createElement('div');
  const nameProduct = document.createElement('h1');
  const modelProduct = document.createElement('span');
  const classPrice = document.createElement('div');
  const productPrice = document.createElement('h1');
  const discount = document.createElement('span');
  const igv = document.createElement('span');
  link.href = "./rutas/details.html"
  classCard.className = 'card'
  classInfoCard.className = 'info-card'
  classPrice.className = 'price'

  imgMok.src = product.img
  imgMok.style.maxWidth = '250px'

  nameProduct.textContent = product.productName

  modelProduct.textContent = product.productModel

  productPrice.textContent = product.productPrice

  discount.textContent = product.discount

  igv.textContent = product.igv

  classPrice.appendChild(productPrice)
  classPrice.appendChild(discount)

  classInfoCard.appendChild(nameProduct)
  classInfoCard.appendChild(modelProduct)
  classInfoCard.appendChild(classPrice)
  classInfoCard.appendChild(igv)

  classCard.appendChild(imgMok)
  classCard.appendChild(classInfoCard)

  link.appendChild(classCard)

  cardCont.appendChild(link)
 }
}


class cardItem {
 constructor(img, productName, productModel, productPrice, discount, igv) {
  this.img = img,
  this.productName = productName,
  this.productModel = productModel,
  this.productPrice = productPrice,
  this.discount = discount,
  this.igv = igv
 }
}

const productsArray = [new cardItem('./assets/mock2.jpg', "MackBook Pro 15'4", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP"), new cardItem('./assets/mock2.jpg', "Iphone XR", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP"), new cardItem('./assets/mock2.jpg', "Iphone 12 Pro Max", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP"), new cardItem('./assets/mock2.jpg', "Mackbook 12'2", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP"), new cardItem('./assets/mock2.jpg', "Iphone SE", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP"), new cardItem('./assets/mock2.jpg', "Iphone 8", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP")]

createCard()

const createUnicCard = (pos) => {
 const link = document.createElement('a');
 const classCard = document.createElement('div');
 const imgMok = document.createElement('img');
 const classInfoCard = document.createElement('div');
 const nameProduct = document.createElement('h1');
 const modelProduct = document.createElement('span');
 const classPrice = document.createElement('div');
 const productPrice = document.createElement('h1');
 const discount = document.createElement('span');
 const igv = document.createElement('span');
 link.href = "./rutas/details.html";
 classCard.className = 'card';
 classInfoCard.className = 'info-card';
 classPrice.className = 'price';

 imgMok.src = productsArray[pos].img;
 imgMok.style.maxWidth = '250px';

 nameProduct.textContent = productsArray[pos].productName;

 modelProduct.textContent = productsArray[pos].productModel;

 productPrice.textContent = productsArray[pos].productPrice;

 discount.textContent = productsArray[pos].discount;

 igv.textContent = productsArray[pos].igv;

 classPrice.appendChild(productPrice);
 classPrice.appendChild(discount);

 classInfoCard.appendChild(nameProduct);
 classInfoCard.appendChild(modelProduct);
 classInfoCard.appendChild(classPrice);
 classInfoCard.appendChild(igv);

 classCard.appendChild(imgMok);
 classCard.appendChild(classInfoCard);

 link.appendChild(classCard);
}

// busqueda y filtrado

search.addEventListener('keyup', function validate(e) {
 if (e.key == 'Enter') {
  if (search.value.length > 0) {
   console.log(productsArray[search.value]);
   cardCont.innerHTML = ``
   createUnicCard(search.value)
  } else {
   alert('no')
  }
 }
})