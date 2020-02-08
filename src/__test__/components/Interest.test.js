import React from 'react';
import { mount } from 'enzyme';
import Interest from '../../components/Interest';

describe('<Interest />', () => {
  const data = ['JavaScript', 'Develop', 'Backend'];
  const interest = mount(<Interest interest={data} />);

  test('Interest render', () => {
    expect(interest.length).toEqual(1);
  });

  test('Interest title', () => {
    expect(interest.find('.Interest-title').length).toEqual(1);
  });

  test('Interest has 3 items', () => {
    expect(interest.find('.Interest-item').length).toBeGreaterThan(2);
  });
});
