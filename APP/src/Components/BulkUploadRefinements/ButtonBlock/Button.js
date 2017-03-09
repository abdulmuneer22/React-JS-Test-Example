import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class Button extends Component{
    render(){
        return(
            <div
            onClick = {this.props.onClick}
            >
            <MuiThemeProvider>
            <FlatButton 
            disabled = {true}
            label= {this.props.title}
            style = {{
                color : this.props.labelColor,
                backgroundColor : this.props.bgColor,
                //width : 120,
                marginLeft : 10
                
            }}
            />
            </MuiThemeProvider>
            </div>
        );
    }
}


export default Button