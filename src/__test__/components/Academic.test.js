import React from 'react';
import { mount } from 'enzyme';
import Academic from '../../components/Academic';

describe('<Academic />', () => {
  const data = [
    {
      degree: 'Escuela de Javascript',
      description: 'Alguna descripcion',
      endDate: 'Nov 2019',
      institution: 'Platzi',
      startDate: 'Ago 2019',
    },
    {
      degree: 'Preparatoria',
      description: 'Alguna descripcion',
      endDate: '---',
      institution: 'IPN',
      startDate: '2015',
    },
    {
      degree: 'Some degree',
      description: 'Some description',
      endDate: 'Some date',
      institution: 'Some institution',
      startDate: 'Some date',
    },
  ];
  const academic = mount(<Academic academic={data} />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

  test('Academic has 3 items', () => {
    expect(academic.find('.Academic-item').length).toBeGreaterThan(2);
  });
});
