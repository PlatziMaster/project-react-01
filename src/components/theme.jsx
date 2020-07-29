const white = '#e0edfb';
const white2 = '#ffffff';
const white3 = '#e0e0e0';
const black = '#1b1b1b';
const black2 = '#080808';
const gray = '#F8F8F9';
const gray2 = '#6d747d';
const black3 = '#111113';

const themeLight = {
  background: gray,
  body: black,
  background2: white2,
  body2: gray2,
  header: white,
  card: white2,
  title: black,
};

const themeDark = {
  background2: black3,
  background: black,
  body: white2,
  header: black2,
  card: black2,
  title: white3,
};

const theme = mode => (mode === 'dark' ? themeDark : themeLight);

export default theme;
