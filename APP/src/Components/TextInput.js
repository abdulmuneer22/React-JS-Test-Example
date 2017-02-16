import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Styles = {
    hintStyle : {
        color : 'rgba(213, 211, 211,0.8)',
        fontSize : 12
    },
    floatingLabelStyle : {
        color : 'black',
        fontSize : 18,
        textAlign : "left"
    }
}


class TextInput extends Component{
    render(){
        return(
            <div>
                 <MuiThemeProvider>
                {!this.props.multiLine ?
                <TextField
                hintText={this.props.placeholderText}
                hintStyle={Styles.hintStyle}
                floatingLabelText= {this.props.title}
                floatingLabelStyle={Styles.floatingLabelStyle}
                floatingLabelFixed={true}
                />
                :
                <div>
                <label
                style={{textAlign : 'left' , display: 'inline-block'}}
                >{this.props.title}</label>
                <br/>
                <TextField
                hintText={this.props.placeholderText}
                hintStyle={Styles.hintStyle}
                multiLine={true}
                rows={2}
                />   
                </div>  
                }
                
                </MuiThemeProvider>
            </div>
        );
    }
}

export default TextInput
