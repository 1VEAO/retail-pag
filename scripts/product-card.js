let cardCont = document.getElementsByClassName('card-container')[0];

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

const productsArray = [new cardItem('./assets/mock2.jpg', "MackBook Pro 15'4", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP"), new cardItem('./assets/mock2.jpg', "MackBook Pro 15'4", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP"), new cardItem('./assets/mock2.jpg', "MackBook Pro 15'4", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP"), new cardItem('./assets/mock2.jpg', "MackBook Pro 15'4", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP"), new cardItem('./assets/mock2.jpg', "MackBook Pro 15'4", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP"), new cardItem('./assets/mock2.jpg', "MackBook Pro 15'4", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP")]

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
 const igv= document.createElement('span');
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