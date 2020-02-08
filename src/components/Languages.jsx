import React from 'react';

const Languages = ({ itemsArray }) => {
  const items = itemsArray || Array(3).fill(1);

  return (
    <section>
      <h1 className='Languages-title'>Idiomas</h1>
      {items.map((item, index) => {
        const i = index + 1;
        return (
          <article className='Languages-item' key={i}>
            <p>
              <span>
                {item.name}
              </span>
              <span />
            </p>
            <p>{item.percentage}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Languages;
