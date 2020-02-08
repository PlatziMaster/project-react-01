/* eslint-disable */

import React from 'react';
import { mount } from 'enzyme';
import Skill from '../../components/Skill';

describe('<Skill />', () => {
  const skills = mount(<Skill />);

  test('Skills render', () => {
    expect(skills.length).toEqual(1);
  });

  test('Skills title', () => {
    expect(skills.find('.Skills-title').length).toEqual(1);
  });

  test('Skills has 3 items', () => {
    expect(skills.find('.Skills-item').length).toBeGreaterThan(2);
  });

});
