import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {connect} from 'react-redux'
import * as actions from '../../Redux/actions'



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

class FilterLabel extends Component {

    componentWillMount(){
        this.props.GetFilterLabelFromDB()
    }


    render() {
        // console.log(this.state.textValue)
        // console.log(this.props)
        return (
            <div>

                <div className="filter_label_title">Filter Label</div>

                <MuiThemeProvider>

                    <TextField
                        hintText={this.props.placeholderText}
                        hintStyle={Styles.hintStyle}
                        floatingLabelStyle={Styles.floatingLabelStyle}
                        floatingLabelFixed={true}
                        value = {this.props.TextValue}
                        onChange={(event, newValue) => {
                            this.props.HandleTextInputForFilterLabel(newValue)
                        }}

                    />
                </MuiThemeProvider>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log("from componennt" , state)
    // console.log(state)
    return {
        TextValue: state.FLText
    }
}

export default connect(mapStateToProps, actions)(FilterLabel)
