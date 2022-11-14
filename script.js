let btnMaisOpcoes = document.querySelector('.btn-maisOpcoes');
let floatMenu = document.querySelector('.maisOpcoes-menu');
let overlay = document.querySelector('.overlay');

btnMaisOpcoes.addEventListener('click', () => {
  floatMenu.classList.toggle('active');
  overlay.classList.toggle('active');
})

document.querySelectorAll('.maisOpcoes-item').forEach(n => n.addEventListener('click', () => {
  floatMenu.classList.remove('active');
  overlay.classList.remove('active');
}))

// Scroll reveal library
ScrollReveal().reveal('.area-1');
ScrollReveal().reveal('.area-2', { delay: 100, distance: '50px'});
ScrollReveal().reveal('.area-3', { distance: '50px'});
ScrollReveal().reveal('.area-4', { distance: '50px'});
