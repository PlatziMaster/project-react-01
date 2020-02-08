import React from 'react';
import { mount } from 'enzyme';
import SkillItem from '../../components/SkillsItem';

describe('<SkillItem />', () => {
  const skills = mount(<SkillItem />);

  test('SkillItem render', () => {
    expect(skills.length).toEqual(1);
  });
  test('SkillItem has 1 items', () => {
    expect(skills.find('.Skills-item').length).toBeGreaterThan(0);
  });

});
