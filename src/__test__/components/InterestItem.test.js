import React from 'react';
import { mount } from 'enzyme';
import InterestItem from '../../components/InterestItem';

describe('<InterestItem />', () => {
  const interest = mount(<InterestItem />);

  test('InterestItem render', () => {
    expect(interest.length).toEqual(1);
  });
  test('InterestItem has 1 items', () => {
    expect(interest.find('.Interest-item').length).toBeGreaterThan(0);
  });
});
