import React from 'react';
import '../styles/components/Social.styl';

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
    <section className='Social Box'>
      <section className='Social__item-container'>
        {Social.map(item => (
          <a className='Social__item' key={item.name} href={item.url}>
            {item.name}
          </a>
        ))}
      </section>
    </section>
  );
};

export default Social;
