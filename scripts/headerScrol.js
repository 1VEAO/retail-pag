const barScrol = document.getElementsByClassName('bar')[0];
const navRrss = document.getElementsByClassName('cont-nav-rrss')[0];

barScrol.addEventListener('click', function scrol() {
 if (navRrss.style.top == '-80px') {
  navRrss.style.setProperty('top', '120px')
 } else {
  navRrss.style.setProperty('top', '-80px')
 }
})
