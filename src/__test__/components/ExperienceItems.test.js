import React from 'react';
import { mount } from 'enzyme';
import ExperienceItem from '../../components/ExperienceItem';

describe('<ExperienceItem />', () => {
  const experience = mount(<ExperienceItem />);

  test('Experience render', () => {
    expect(experience.length).toEqual(1);
  });
  test('Experience haves 3 items', () => {
    expect(experience.find('.Experience-item').length).toBeGreaterThan(0);
  });

});
