import React from 'react';
import { mount } from 'enzyme';
import Skills from '../../components/Skills';

describe('<Skills />', () => {
  const data = [
    {
      name: 'HTML5',
      percentage: '80%',
    },
    {
      name: 'CSS',
      percentage: '78%',
    },
    {
      name: 'JavaScript',
      percentage: '68%',
    },
  ];
  const skills = mount(<Skills skills={data} test />);

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
