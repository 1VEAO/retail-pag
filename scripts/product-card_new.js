{/* <a href="./rutas/details.html">
      <div class="card"><img src="./assets/mock2.jpg" style="max-width: 250px;">
        <div class="info-card">
          <h1>MackBook Pro 15'4</h1><span>Space Gray</span>
          <div class="price">
            <h1>$750.000</h1><span>50% Off</span>
          </div><span>Incluye impuestos Pais y percepcion AFIP</span>
        </div>
      </div>
    </a> */}

const cardContainer = document.createElement('section')
cardContainer.className = 'card-container'
const cardContainerEspe = document.createElement('section')
cardContainerEspe.className = 'card-container'

const searchInput = document.getElementsByClassName('search-inp')[0];
const mody = document.querySelector('main')

class cardItem {
 constructor(img, productName, productModel, productPrice, discount, igv) {
  this.img = img,
   this.productName = productName,
   this.productModel = productModel,
   this.productPrice = productPrice,
   this.discount = discount,
   this.igv = igv
 }
};

const productsArray = [new cardItem('./assets/mock2.jpg', "MackBook Pro 15'4", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP"), new cardItem('./assets/mock2.jpg', "Iphone XR", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP"), new cardItem('./assets/mock2.jpg', "Iphone 12 Pro Max", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP"), new cardItem('./assets/mock2.jpg', "Mackbook 12'2", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP"), new cardItem('./assets/mock2.jpg', "Iphone SE", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP"), new cardItem('./assets/mock2.jpg', "Iphone 8", "Space Gray", '$750.000', "50% Off", "Incluye impuestos Pais y percepcion AFIP")];

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

  cardContainer.appendChild(link)
  mody.appendChild(cardContainer)
 }
}
document.addEventListener('DOMContentLoaded', createCard())

searchInput.addEventListener('keyup', function validate(e) {
 if (e.key == "Enter") {
  if (searchInput.value.length > 0) {
   cardContainerEspe.innerHTML = ``
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

   imgMok.src = productsArray[searchInput.value].img
   imgMok.style.maxWidth = '250px'

   nameProduct.textContent = productsArray[searchInput.value].productName

   modelProduct.textContent = productsArray[searchInput.value].productModel

   productPrice.textContent = productsArray[searchInput.value].productPrice

   discount.textContent = productsArray[searchInput.value].discount

   igv.textContent = productsArray[searchInput.value].igv

   classPrice.appendChild(productPrice)
   classPrice.appendChild(discount)

   classInfoCard.appendChild(nameProduct)
   classInfoCard.appendChild(modelProduct)
   classInfoCard.appendChild(classPrice)
   classInfoCard.appendChild(igv)

   classCard.appendChild(imgMok)
   classCard.appendChild(classInfoCard)

   link.appendChild(classCard)

   cardContainerEspe.appendChild(link)
   mody.appendChild(cardContainerEspe)
   cardContainer.remove()
  } else if (searchInput.value.length <=0 ){
   cardContainerEspe.remove()
  cardContainer.innerHTML=``
  createCard()
  }
 }
})
