import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {

  it('App has a button', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('button').length).toBe(1)
  });

  it('App has a button', () => {
    const wrapper = shallow(<App />)
    wrapper.find('button').first().simulate('click')

    expect(wrapper.state().favoriteToggle).toBe(true)
  });


});
