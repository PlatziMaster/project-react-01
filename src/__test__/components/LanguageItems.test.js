import React from 'react';
import { mount } from 'enzyme';
import LanguagesItems from '../../components/LanguagesItem';

describe('<LanguagesItems />', () => {
  const languages = mount(<LanguagesItems />);

  test('LanguagesItems render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages has 1 item', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(0);
  });

});
