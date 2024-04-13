const barScrol = document.getElementsByClassName('bar')[0];
const navRrss = document.getElementsByClassName('cont-nav-rrss')[0];

barScrol.addEventListener('click', function scrol() {
 if (navRrss.style.top == '-80px') {
  navRrss.style.setProperty('top', '120px')
 } else {
  navRrss.style.setProperty('top', '-80px')
 }
})


// prueba promociones

const bannerProm = document.getElementsByClassName('banner-promociones')[0];
// bannerProm.innerHTML=('<img src="./assets/hero_bg.png" alt="logo">')