export const ThemeEnum = {
  Light: 'light',
  Dark: 'dark',
  System: 'system',
}

export const ThemeHandler = (theme) => {
  if (!theme) {
    theme = localStorage.getItem('theme')
  } else {
    localStorage.setItem('theme', theme);
  }

  if (theme === ThemeEnum.System) {
    theme = '';
    localStorage.removeItem('theme')
  }

  if (
    theme === 'dark' ||
    (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return theme;
}
