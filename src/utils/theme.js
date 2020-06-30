import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#1e3744',
});

export const textColor = theme('mode', {
  light: '#000',
  dark: '#fff',
});

export const buttonBackgroundColor = theme('mode', {
  light: '#1e3744',
  dark: '#eee',
});

export const buttonTextColor = theme('mode', {
  light: '#eee',
  dark: '#222',
});
