import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as actions from '../../Redux/actions'
import {connect} from 'react-redux'

export class Button extends Component{
    render(){
        // console.log(this.props)
        return(
            <div
            className="mybutton"
            onClick={()=>{
                this.props.SaveInstructorTitle(this.props.IRTText)
                this.props.SaveInstructorTitleCopy(this.props.IRTCText)
                this.props.SaveFilterLabelToDB(this.props.FLText)
                this.props.SaveTagLabelToDB(this.props.TagLabelText)
                this.props.SaveMaxCardsToDB(this.props.MaxCardNumber)
                }}
            >
            <MuiThemeProvider>
            <FlatButton 
            label= {this.props.title}
            style = {{
                color : this.props.labelColor,
                backgroundColor : this.props.bgColor,
                width : 120,
                marginLeft : 20
            }}
            />
            </MuiThemeProvider>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
     //console.log("from button " , state)
    return {
        IRTCText: state.IRTCText,
        IRTText : state.IRTText,
        FLText : state.FLText,
        TagLabelText : state.TagLabelText,
        MaxCardNumber : state.MaxCardsNumber

    }
}


export default connect(mapStateToProps, actions)(Button)
