import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import CardWrapper from './CardWrapper'

describe('cardwrapper', () => {

  it('Card has a component of "card-wrapper"', () => {
    const fake = jest.fn()
    const wrapper = shallow(<CardWrapper removeFavorites={fake} addFavorites={fake} display={[{buttonType: 'people'}]} favoriteArray={[]} favoriteToggle={false} />)

    expect(wrapper.find('.card-wrapper').length).toBe(1)
  })
})
