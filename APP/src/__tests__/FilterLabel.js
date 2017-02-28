import React from 'react'
import {shallow} from 'enzyme'
import { FilterLabel } from '../Components/Site_Settings/FilterLabel'

function setup() {
  const props = {
        SaveInstructorTitle : jest.fn(),
        GetFilterLabelFromDB : jest.fn()
  }

  const enzymeWrapper = shallow(<FilterLabel {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("Filter Label Test", ()=>{

    it('renders the filter_label_title with out crashing and it has textfield title',()=>{

        const { enzymeWrapper } = setup()
        // const value = enzymeWrapper.find('.filter_label_title').exists()
        // console.log(value)

        expect(enzymeWrapper.find('.filter_label_title').exists()).toBe(true)

    })


    it('has textfield with correct title',()=>{
        const { enzymeWrapper } = setup()
        // const value = enzymeWrapper.find('.filter_label_title').text()
        // console.log(value)
        expect(enzymeWrapper.find('.filter_label_title').text()).toEqual('Filter Label')
        
    })

    it('has text field to enter text', ()=>{
        const { enzymeWrapper } = setup()
        // const value = enzymeWrapper.find('TextField').exists()
        // console.log(value)
        expect(enzymeWrapper.find('TextField').exists()).toBe(true)
    })

    
})