import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as actions from '../../Redux/actions'
import {connect} from 'react-redux'

class Button extends Component{
    render(){
        console.log(this.props)
        return(
            <div
            onClick={()=>{alert("Value has been updated")}}
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
    return {
        prop: state.prop
    }
}


export default connect(mapStateToProps, actions)(Button)
