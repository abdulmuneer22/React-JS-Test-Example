import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class Button extends Component{
    render(){
        return(
            <div
            className="upload_button"
            onClick = {this.props.onClick}
            >
            <MuiThemeProvider>
            <FlatButton 
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