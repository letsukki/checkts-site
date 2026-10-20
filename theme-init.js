(() => {
  let theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  try {
    const saved = localStorage.getItem('checkts-theme');
    if (saved === 'dark' || saved === 'light') theme = saved;
  } catch {}
  document.documentElement.dataset.theme = theme;
})();
