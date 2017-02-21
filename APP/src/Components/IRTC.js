import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {connect} from 'react-redux'
import * as actions from '../Redux/actions'



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

class IRTC extends Component {

    constructor() {
        super();
        this.state = {
            textValue: ""
        }

    }



    componentWillMount(){
        this.props.GetIRTCTitleFromDB()
    }


    render() {
        console.log(this.state.textValue)
        console.log(this.props)
        return (
            <div>

                <div className="inputLabel">Instructor Resource Copy</div>

                <MuiThemeProvider>

                    <TextField
                        hintText={this.props.placeholderText}
                        hintStyle={Styles.hintStyle}
                        floatingLabelText={this.props.title}
                        floatingLabelStyle={Styles.floatingLabelStyle}
                        floatingLabelFixed={true}
                        multiLine={true}
                        rows={2}
                        value = {this.props.TextValue}
                        onChange={(event, newValue) => { 
                            this.setState({ textValue: newValue }) 
                            this.props.HandleTextInputForIRTC(newValue)
                        }}

                    />
                </MuiThemeProvider>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("from componennt 2" , state)
    return {
        TextValue: state.IRTCText
    }
}

export default connect(mapStateToProps, actions)(IRTC)

