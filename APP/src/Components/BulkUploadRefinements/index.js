import React, { Component } from 'react';


import Label from './Label'
import List from './List'

import {connect} from 'react-redux'

export class BulkUploadRefinements extends Component{
    render(){
        return(
            <div>
                <Label/>
                {
                    this.props.DropDownStatus ?
                    <List />
                    :
                    null
                }
            

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

