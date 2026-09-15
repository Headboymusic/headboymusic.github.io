const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '70px';
  nav.style.right = '5vw';
  nav.style.flexDirection = 'column';
  nav.style.padding = '18px';
  nav.style.background = '#f4f1eb';
  nav.style.border = '1px solid #d9d4ca';
});
