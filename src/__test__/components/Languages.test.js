/* eslint-disable */

import React from 'react';
import { mount } from 'enzyme';
import Language from '../../components/Languagee';

describe('<Language />', () => {
  const languages = mount(<Language />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });

  test('Languages has 3 items', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(2);
  });

});
