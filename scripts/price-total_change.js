const priceTotal = 750000
const priceModifiChange = document.getElementById('price-modifi_change')
const productPriceChange = document.getElementsByClassName('price-total_change')[0]

productPriceChange.textContent = `$${priceTotal * priceModifiChange.value}`

priceModifiChange.addEventListener('change', function name() {
 productPriceChange.textContent = `$${priceTotal * priceModifiChange.value}`
})
