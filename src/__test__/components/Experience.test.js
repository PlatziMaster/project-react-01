import React from 'react';
import { mount } from 'enzyme';
// eslint-disable-next-line import/no-self-import
import Experience from '../../components/Experience';

describe('<Experience />', () => {
  const experience = mount(<Experience />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });

  test('Experience title', () => {
    expect(experience.find('.Experience-title').length).toEqual(1);
  });

  test('Experience haves 3 items', () => {
    expect(experience.find('.Experience-item').length).toBeGreaterThan(2);
  });
});
