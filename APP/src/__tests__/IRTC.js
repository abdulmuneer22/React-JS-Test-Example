import React from 'react'
import {shallow} from 'enzyme'
import { IRTC } from '../Components/IRTC'

function setup() {
  const props = {
        SaveInstructorTitle : jest.fn(),
        GetIRTCTitleFromDB : jest.fn()
  }

  const enzymeWrapper = shallow(<IRTC {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("Instructor Resource Title Test", ()=>{

    it('renders the button with out crashing and it has textfield title',()=>{

        const { enzymeWrapper } = setup()
        // const props = enzymeWrapper.find('.inputLabel').exists()
        // console.log(props)

        expect(enzymeWrapper.find('.inputLabel').exists()).toBe(true)

    })


    it('has textfield with correct title',()=>{
        const { enzymeWrapper } = setup()
        // const value = enzymeWrapper.find('.inputLabel').text()
        // console.log(value)
        expect(enzymeWrapper.find('.inputLabel').text()).toEqual('Instructor Resource Copy')
        
    })

    it('has text field to enter text', ()=>{
        const { enzymeWrapper } = setup()
        // const value = enzymeWrapper.find('TextField').exists()
        // console.log(value)
        expect(enzymeWrapper.find('TextField').exists()).toBe(true)
    })

    
})