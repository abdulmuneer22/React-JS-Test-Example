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

class MaxCards extends Component {

    



    componentWillMount(){
        this.props.GetMaxCardsFromDB()
    }


    render() {
        // console.log(this.state.textValue)
        // console.log(this.props)
        return (
            <div>

                <div className="maxcard_title">Max Number of Links of Card</div>

                <MuiThemeProvider>

                    <TextField
                        id="max_card"
                        hintText={this.props.placeholderText}
                        hintStyle={Styles.hintStyle}
                        floatingLabelStyle={Styles.floatingLabelStyle}
                        floatingLabelFixed={true}
                        value = {this.props.MaxCards}
                        onChange={(event, newValue) => {
                            this.props.HandleTextInputForMaxCards(newValue)
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
        MaxCards: state.MaxCardsNumber
    }
}

export default connect(mapStateToProps, actions)(MaxCards)
