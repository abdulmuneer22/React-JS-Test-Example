import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';

import {connect} from 'react-redux'
import * as actions from '../Redux/actions'

//reg-x validator library
import validator from 'validator';


const Styles = {
    hintStyle: {
        color: 'rgba(213, 211, 211,0.8)',
        fontSize: 12
    },
    floatingLabelStyle: {
        color: 'black',
        fontSize: 18,
        textAlign: "left"
    }
}

export class SiteIdentifier extends Component {

    componentWillMount(){
        //calling the action for getting intial data from mongodb
        this.props.GetSiteIdentifier()
    }


    stringValidation(){

        if(!this.props.TextValue.size){
            return "Cannot be empty"
        }else{
            if(this.props.TextValue.size !== 5){
                return "Needs to be exactly 5 chars - eg XXXXX"
            }else {
                if(!validator.isAlphanumeric(this.props.TextValue.value)){
                    return "Invalid Site Identifier , Site idnetifier should not have spaces or special charectors "
                }
            }
        }


        
        
    }

    render() {

        return (
            <div className="site_identifier">

                <div className="inputLabel">Site Identifier</div>

                <MuiThemeProvider>

                    <TextField
                        id = "TextField"
                        hintText={this.props.placeholderText}
                        hintStyle={Styles.hintStyle}
                        errorText={this.stringValidation()}
                        value = {this.props.TextValue.value}
                        onChange={(event, newValue) => {
                            this.props.HandleTextInputForSiteIdentifier(newValue)
                        }}

                    />
                </MuiThemeProvider>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log("from componennt" , state)
    return {
        TextValue: state.SiteIdentifier
        
    }
}

export default connect(mapStateToProps, actions)(SiteIdentifier)
