import React from 'react';
import { mount } from 'enzyme';
import About from '../../components/About';

describe('<About />', () => {
  const data = [
    {
      name: 'facebook',
      url: 'https://facebook.com/tuentyfaivpage',
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/TuentyFaiv',
    },
    {
      name: 'github',
      url: 'https://github.com/TuentyFaiv',
    },
  ];
  const about = mount(<About about={data} />);

  test('About render', () => {
    expect(about.length).toEqual(1);
  });

  test('About title', () => {
    expect(about.find('.About-title').length).toEqual(1);
  });

  test('About haves 3 items', () => {
    expect(about.find('.About-item').length).toBeGreaterThan(2);
  });
});
