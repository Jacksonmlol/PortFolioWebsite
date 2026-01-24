const toggle = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  body.classList.add('dark');
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  
  let theme = 'light';
  if (body.classList.contains('dark')) {
    theme = 'dark';
    toggle.textContent = '☀️';
  } else {
    toggle.textContent = '🌙';
  }
  
  localStorage.setItem('theme', theme);
});