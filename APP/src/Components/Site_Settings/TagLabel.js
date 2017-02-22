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

class TagLabel extends Component {

    componentWillMount(){
        this.props.GetTagLabelFromDB()
    }


    render() {
        // console.log(this.state.textValue)
        // console.log(this.props)
        return (
            <div>

                <div className="tag_label_title">Tag Label</div>

                <MuiThemeProvider>

                    <TextField
                        hintText={this.props.placeholderText}
                        hintStyle={Styles.hintStyle}
                        floatingLabelStyle={Styles.floatingLabelStyle}
                        floatingLabelFixed={true}
                        value = {this.props.TextValue}
                        onChange={(event, newValue) => {
                            this.props.HandleTextInputForTagLabel(newValue)
                        }}

                    />
                </MuiThemeProvider>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("from componennt" , state)
    return {
        TextValue: state.TagLabelText
    }
}

export default connect(mapStateToProps, actions)(TagLabel)
