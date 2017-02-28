import React from 'react'
import {shallow} from 'enzyme'
import { Button } from '../Components/SaveBlock/Button'
import sinon from 'sinon'

function setup() {
  const props = {
            title : "CANCEL",
            bgColor : "#78909C",
            labelColor  : "#ffffff",
            SaveInstructorTitle : jest.fn(),
            SaveInstructorTitleCopy : jest.fn(),
            SaveFilterLabelToDB : jest.fn(),
            SaveTagLabelToDB : jest.fn(),
            SaveMaxCardsToDB : sinon.spy()

  }

//   const SaveMaxCardsToDB = sinon.spy();

  const enzymeWrapper = shallow(<Button {...props}  onClick={sinon.spy()}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("Button Test", ()=>{

    it('renders the button with out crashing and it has title',()=>{

        const { enzymeWrapper } = setup()
        // const value = enzymeWrapper.find('.mybutton').exists()
        // console.log(value)

        expect(enzymeWrapper.find('.mybutton').exists()).toBe(true)

    })

    it('Had FlatButton UI from material ui' ,()=>{
        
        const { enzymeWrapper } = setup()
        // const value = enzymeWrapper.find('FlatButton').exists()
        // console.log(value)
        expect(enzymeWrapper.find('FlatButton').exists()).toBe(true)
    })

    

    it('has correct label' ,()=>{
        const { enzymeWrapper } = setup()

        

        const value = enzymeWrapper.find('FlatButton').props().label
        
        expect(enzymeWrapper.find('FlatButton').props().label).toBe("CANCEL")
        

        
    })


    


    
    
})