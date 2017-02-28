import React from 'react'
import {shallow} from 'enzyme'
import { MaxCards } from '../Components/Site_Settings/MaxCards'

function setup() {
  const props = {
        GetMaxCardsFromDB : jest.fn(),
        GetIRTCTitleFromDB : jest.fn()
  }

  const enzymeWrapper = shallow(<MaxCards {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("MaxCards Test", ()=>{

    it('renders the maxcard_title with out crashing and it has textfield title',()=>{

        const { enzymeWrapper } = setup()
        // const props = enzymeWrapper.find('.inputLabel').exists()
        // console.log(props)

        expect(enzymeWrapper.find('.maxcard_title').exists()).toBe(true)

    })


    it('has textfield with correct title',()=>{
        const { enzymeWrapper } = setup()
        // const value = enzymeWrapper.find('.inputLabel').text()
        // console.log(value)
        expect(enzymeWrapper.find('.maxcard_title').text()).toEqual('Max Number of Links of Card')
        
    })

    it('has text field to enter text', ()=>{
        const { enzymeWrapper } = setup()
        // const value = enzymeWrapper.find('TextField').exists()
        // console.log(value)
        expect(enzymeWrapper.find('TextField').exists()).toBe(true)
    })

    
})