const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sideNav = document.getElementById('side-nav');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  sideNav.style.right = '0';
  overlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  sideNav.style.right = '-350px';
  overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
  sideNav.style.right = '-350px';
  overlay.style.display = 'none';
});