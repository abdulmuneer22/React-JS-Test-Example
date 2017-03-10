import React, { Component } from 'react';

import * as actions from '../../Redux/actions'
import { connect } from 'react-redux'

import axios from 'axios'

export class CheckBox extends Component {

    constructor() {
        super();
        this.state = {
            SelectedMe: false
        }
    }



    handleClick() {
        //console.log(this.props)
        if(this.props.parent){
        this.props.SelectChapter(this.props.Chapter,!this.state.SelectedMe)
        }else{
            //console.log(this.props.SubChapter)
            this.props.SelectSubChapter(this.props.SubChapter,!this.state.SelectedMe)
        }
        this.setState({
            SelectedMe : !this.state.SelectedMe
        })

    }


    render() {

        return (
            <i 
            onClick = {()=>{this.handleClick()}}
            className={!this.state.SelectedMe ? "fa fa-square-o" : "fa fa-check-square-o"}
            aria-hidden="true" />



        );
    }
}

const mapStateToProps = (state) => {
    //console.log("from reducer prop" , state.SubChapterSelection.Selected)
    return {
        SelectedChapter: state.ChapterSelection,
        SubChapterSelected : state.SubChapterSelection
    }
}

export default connect(mapStateToProps, actions)(CheckBox)

