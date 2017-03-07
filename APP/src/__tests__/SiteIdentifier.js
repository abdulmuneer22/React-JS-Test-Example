import React from 'react'
import {shallow} from 'enzyme'
import { SiteIdentifier } from '../Components/SiteIdentifier'

function setup() {
  const props = {
        GetSiteIdentifier : jest.fn(),
        GetIRTCTitleFromDB : jest.fn(),
        HandleTextInputForSiteIdentifier : ()=>{
            return "Hello"
        },
        onChange : jest.fn(),
        TextValue : {
            value : "Hello",
            size : 4
        }
  }

  const enzymeWrapper = shallow(<SiteIdentifier {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("SiteIdentifier Test", ()=>{

    it('renders the SiteIdentifier with out crashing and it has textfield title',()=>{
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('.inputLabel').exists()).toBe(true)

    })

    it('has textfield with correct title',()=>{
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('.inputLabel').text()).toEqual('Site Identifier')
        
    })

    it('has text field to enter text', ()=>{
        const { enzymeWrapper } = setup()
        //const value = enzymeWrapper.find('TextField').exists()
        //console.log(value)
        expect(enzymeWrapper.find('TextField').exists()).toBe(true)
    })


    it('has shows correct error messages', ()=>{
        //const { enzymeWrapper } = setup()
        
        var props = {
        GetSiteIdentifier : jest.fn(),
        GetIRTCTitleFromDB : jest.fn(),
        TextValue : {
            value : "Hello",
            size : 4
        }
        }

        var enzymeWrapper = shallow(<SiteIdentifier {...props} />)
        
        var expetedError = "Needs to be exactly 5 chars - eg XXXXX"

        //const errorText = enzymeWrapper.find('TextField').props().errorText

        // console.log(value)
        expect(enzymeWrapper.find('TextField').props().errorText).toBe(expetedError)


        props = {
            GetSiteIdentifier : jest.fn(),
            GetIRTCTitleFromDB : jest.fn(),
            TextValue : {
            value : "Hello",
            size : ""
            }
        }
        
        var enzymeWrapper = shallow(<SiteIdentifier {...props} />)

        var expetedError = "Cannot be empty"

        expect(enzymeWrapper.find('TextField').props().errorText).toBe(expetedError)
        
        props = {
            GetSiteIdentifier : jest.fn(),
            GetIRTCTitleFromDB : jest.fn(),
            TextValue : {
            value : "test@1",
            size : 5
            }
        }


        var enzymeWrapper = shallow(<SiteIdentifier {...props} />)

        var expetedError = "Invalid Site Identifier , Site idnetifier should not have spaces or special charectors "
        
        expect(enzymeWrapper.find('TextField').props().errorText).toBe(expetedError)
        
        
    })


    it('has text field with correct value', ()=>{
        const { enzymeWrapper } = setup()
        const value = enzymeWrapper.find('TextField').props()
        console.log(value)
        expect(enzymeWrapper.find('TextField').props().value).toBe("Hello")
    })

    it('has the function defined' , ()=>{
        const { enzymeWrapper } = setup()
        // const value = enzymeWrapper.find('TextField').props().onChange
        // console.log(value)
        expect(enzymeWrapper.find('TextField').props().onChange.length).toBe(2)
        
    })

    
})