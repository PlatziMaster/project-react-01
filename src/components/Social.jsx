import React from 'react';
import '../styles/components/App.styl';

const Social = (props) => {
  const {
    Social = [
      {
        'name': 'facebook',
        'url': 'https://facebook.com/',
      },
      {
        'name': 'twitter',
        'url': 'https://twitter.com/',
      },
      {
        'name': 'github',
        'url': 'https://github.com/',
      },
      {
        'name': 'linkedin',
        'url': 'https://www.linkedin.com/',
      },
    ],
  } = props;

  return (
    <section className='Social'>
      <h1 className='Social__title'>
        Social
      </h1>
      {Social.map(item => (
        <section key={item.name} className='Social__item'>
          <a className='Social__item-name' href={item.url}>
            {item.name}
          </a>
        </section>
      ))}
    </section>
  );
};

export default Social;
