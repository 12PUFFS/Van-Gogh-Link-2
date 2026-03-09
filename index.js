const btn = document.querySelector('.hamburger-button');
const list = document.querySelector('.menu-items');

list.classList.add('hidden');

btn.addEventListener('click', () => {
  list.classList.toggle('hidden');
});
