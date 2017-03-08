import React, { Component } from 'react';


import Label from './Label'
import List from './List'

import ButtonBlock from './ButtonBlock'

import {connect} from 'react-redux'

export class BulkUploadRefinements extends Component{
    render(){
        return(
            <div>
                <Label/>
                <div style = {{height : 400}}>
                {
                    this.props.DropDownStatus ?
                    <List />
                    :
                    null
                }
                </div>
                <ButtonBlock/>
            

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state)
    return {
        DropDownStatus: state.DropDown
    }
}

export default connect(mapStateToProps, null)(BulkUploadRefinements)

