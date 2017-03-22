import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Card from '../VehicleCard';

describe('vehicle card', () => {

  it('Card has a class of "card"', () => {
    const fake = jest.fn()
    const wrapper = shallow(<Card removeFavorites={fake} addFavorites={fake} info={{ favoriteToggle: true }} />)

    expect(wrapper.find('.card').length).toBe(1)
  });

  it('Card has a favorite button to click', () => {
    const fake = jest.fn()
    const wrapper = mount(<Card removeFavorites={fake} addFavorites={fake} info={{ favoriteToggle: true }} />)
    const favButton = wrapper.find('button')
    favButton.simulate('click')

    expect(fake).toHaveBeenCalledTimes(1)
  });

});
