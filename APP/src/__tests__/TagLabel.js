import React from 'react'
import {shallow} from 'enzyme'
import { TagLabel } from '../Components/Site_Settings/TagLabel'

function setup() {
  const props = {
        GetTagLabelFromDB : jest.fn()
  }

  const enzymeWrapper = shallow(<TagLabel {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("MaxCards Test", ()=>{

    it('renders the tag_label_title with out crashing and it has textfield title',()=>{

        const { enzymeWrapper } = setup()
        // const props = enzymeWrapper.find('.inputLabel').exists()
        // console.log(props)

        expect(enzymeWrapper.find('.tag_label_title').exists()).toBe(true)

    })


    it('has textfield with correct title',()=>{
        const { enzymeWrapper } = setup()
        // const value = enzymeWrapper.find('.inputLabel').text()
        // console.log(value)
        expect(enzymeWrapper.find('.tag_label_title').text()).toEqual('Tag Label')
        
    })

    it('has text field to enter text', ()=>{
        const { enzymeWrapper } = setup()
        // const value = enzymeWrapper.find('TextField').exists()
        // console.log(value)
        expect(enzymeWrapper.find('TextField').exists()).toBe(true)
    })

    
})