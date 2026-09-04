const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');

const syncThemeControl = () => {
  const isDark = root.dataset.theme === 'dark';
  themeToggle?.setAttribute('aria-pressed', String(isDark));
  themeToggle?.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
};

syncThemeControl();

themeToggle?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
  syncThemeControl();
});

const year = document.querySelector('#year');
if (year) {
  year.textContent = new Date().getFullYear();
}
