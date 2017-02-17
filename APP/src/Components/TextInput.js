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
    constructor(){
        super();
        this.state = {
            text : ""
        }
    }

    handleText(event){
        console.log(event)
    }

    handleBlur(){
        
        if(this.state.text){
            //alert(this.state.text)
            console.log(this.state.text)

        }
    }

    render(){
        console.log(this.state.text)
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
                
                <div className="inputwrapper">
                <div className="inputLabel">{this.props.title}</div>
                <div>
                <TextField
                hintText={this.props.placeholderText}
                hintStyle={Styles.hintStyle}
                multiLine={true}
                rows={2}
                onChange={(event,newValue)=>{this.setState({text : newValue})}}
                onBlur ={()=>{this.handleBlur()}}
                />
                </div>

                </div>
                }

                </MuiThemeProvider>
            </div>
        );
    }
}

export default TextInput
