import React from 'react';
import { mount } from 'enzyme';
import AcademicItem from '../../components/AcademicItem';

describe('<AcademicItem />', () => {
  const academic = mount(<AcademicItem />);

  test('AcademicItem render', () => {
    expect(academic.length).toEqual(1);
  });
  test('Academic has 1 items', () => {
    expect(academic.find('.Academic-item').length).toBeGreaterThan(0);
  });
});
