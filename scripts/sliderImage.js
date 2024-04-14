const mock1 = document.getElementsByClassName('mock1')[0];
const mock2 = document.getElementsByClassName('mock2')[0];
const mockScrol = document.getElementsByClassName('mock-scrol')[0];

mock1.addEventListener('click', function marginMenos() {
 mockScrol.style.marginTop = '0%'
})

mock2.addEventListener('click', function marginMas() {
 mockScrol.style.marginTop = '-100%'
})