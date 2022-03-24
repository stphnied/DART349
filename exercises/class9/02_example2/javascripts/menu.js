// Menu animation
const trig = document.querySelector('#trigger');
const closer = document.querySelector('#close');

trig.addEventListener('click', openNav);
closer.addEventListener('click', closeNav);

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
