import React from 'react';
import { mount } from 'enzyme';
import Experience from '../../components/Experience';

describe('<Experience />', () => {
  const data = [
    {
      company: 'Estancia infantil y jardín de niños Colibrí',
      endDate: 'Present',
      jobDescription: 'Alguna descripcion',
      jobTitle: 'Maestro de computación',
      startDate: 'Ago 2018',
    },
    {
      company: 'Other company',
      endDate: 'Some date',
      jobDescription: 'Some description',
      jobTitle: 'Some job',
      startDate: 'Some date',
    },
    {
      company: 'Other company1',
      endDate: 'Some date',
      jobDescription: 'Some description',
      jobTitle: 'Some job',
      startDate: 'Some date',
    },
  ];
  const experience = mount(<Experience experience={data} />);

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
