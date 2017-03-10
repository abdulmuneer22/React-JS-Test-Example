import React from 'react'
import {shallow} from 'enzyme'
import { Button } from '../Components/BulkUploadRefinements/ButtonBlock/Button'
import { ButtonBlock } from '../Components/BulkUploadRefinements/ButtonBlock'
import {CheckBox} from '../Components/BulkUploadRefinements/CheckBox'
import {ListChild} from '../Components/BulkUploadRefinements/ListChild'


function setup() {
  const props = {
        title : "CANCEL",
        bgColor: "#BDBDBD",
        labelColor : "#ffffff",
        onClick : jest.fn()

  }

  const enzymeWrapper = shallow(<Button {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("Refinements  Test", ()=>{

    it('renders the button with out crashing and it has proper label',()=>{
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.props().children.props.children.props.label).toBe("CANCEL")

    })

    it('renders the button with out crashing and it has onClick function',()=>{
        const { enzymeWrapper } = setup()
        var mockfunction = enzymeWrapper.props().onClick
        mockfunction(true)
        //console.log(mockfunction.mock.calls)
        mockfunction(false)
        // console.log(mockfunction.mock.calls[1][0])
        expect(mockfunction.mock.calls[0][0]).toBe(true)
        expect(mockfunction.mock.calls[1][0]).toBe(false)
        
    })


    

    
})


describe('Checkbox ', ()=>{

    const props = {
    SelectSubChapter : ()=>{},
    onClick : (state) => {
        enzymeWrapper.setState({SelectedMe : state})
    }
    }


  const enzymeWrapper = shallow(<CheckBox {...props} />)
  it('renders the Checkbox with out crashing and it has proper value with all functionalities',()=>{
        expect(enzymeWrapper.find('.fa-square-o').props().className).toBe("fa fa-square-o")
        //expect inital selected me state to be false
        expect(enzymeWrapper.state().SelectedMe).toBe(false)
        // var props = enzymeWrapper.props()
        // console.log(props)
        enzymeWrapper.setState({SelectedMe : true})
        //expect inital selected me state to be updated as true
        expect(enzymeWrapper.state().SelectedMe).toBe(true)
        //expect class name of fa-square-o to be updated as fa-check-square-o since button is toggled
        expect(enzymeWrapper.props().className).toBe("fa fa-check-square-o")

        // var props = enzymeWrapper.props().className
        // console.log(props)

        enzymeWrapper.props().onClick()
        expect(enzymeWrapper.props().className).toBe("fa fa-square-o")
        // var props = enzymeWrapper.props().className
        // console.log(props)

        //Checks if calling on click is updating the state and className
        enzymeWrapper.props().onClick()
        
        expect(enzymeWrapper.props().className).toBe("fa fa-check-square-o")
        
        // var props = enzymeWrapper.props().className
        // console.log(props)
        

    })


})

describe('Chapter Name List' , ()=>{

    //set up
    const props = {
        childData : [],
        parentNumber : 2
    }
    const enzymeWrapper = shallow(<ListChild {...props} />)

    // var value = enzymeWrapper.props()
    // console.log(value)

    it('Has correct chapter number rendered for the parent', ()=>{
    expect(enzymeWrapper.find('span').text()).toBe("Chapter 2")
    var Chapter = 5
    enzymeWrapper.setProps({parentNumber : Chapter})
    expect(enzymeWrapper.find('span').text()).toBe("Chapter "+Chapter)
    })
})


describe('Button Block' , ()=>{
    const props = {
        ChapterSelected : 1,
        SubChapterSelected : 1.2
    }

    const enzymeWrapper = shallow(<ButtonBlock {...props} />)
    it('has buttons inside button block' , ()=>{
        expect(enzymeWrapper.find(Button).exists()).toBe(true)
        
    })

})
