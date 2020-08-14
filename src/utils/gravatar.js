import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  const formatedEmail = email.trim().toLowerCase();
  const hash = md5(formatedEmail, { encoding: 'binary' });
  return `${base}${hash}?s=200`;
};

export default gravatar;
