import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import FilmScroll from './FilmScroll'

describe('FilmScroll', () => {
  const film = {
    opening_crawl: '',
    title: '',
    release_date: ''
  }

  it('has a component of "FilmScroll"', () => {
    const fake = jest.fn()
    const wrapper = shallow(<FilmScroll film={film} />)

    expect(wrapper.find('.film-scroll').length).toBe(1)
  })
})
