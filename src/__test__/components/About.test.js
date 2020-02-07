import React from 'react';
import { mount } from 'enzyme';
import About from '../../components/About';
import info from '../../__mocks__/InfoMock';

describe('<About />', () => {
  const about = mount(<About info={info} />);

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
