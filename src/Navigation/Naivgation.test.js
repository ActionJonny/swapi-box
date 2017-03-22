import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('has a component of "FilmScroll"', () => {
    const wrapper = shallow(<Navigation />)

    expect(wrapper.find('button').length).toBe(3)
  });
});
