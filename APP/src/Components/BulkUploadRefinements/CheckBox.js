import React, { Component } from 'react';

import * as actions from '../../Redux/actions'
import { connect } from 'react-redux'

class CheckBox extends Component {

    constructor() {
        super();
        this.state = {
            SelectedMe: false
        }
    }



    componentWillReceiveProps(next) {

        const CurrentChapter = next.Chapter
        const SelectedChaper = next.SelectedChapter.Chapter

        if(!this.props.parent){

            //handle individual click on child
            const CurrentChapter = this.props.ParentChapter +"."+ this.props.ChildChapter
            // console.log("CurrentChapter" , CurrentChapter)

            const SelectedChapter = next.SubChapterSelected.Parent + "." + next.SubChapterSelected.Child
            //console.log("SelectedChapter" , SelectedChapter)
            if(CurrentChapter  === SelectedChapter){

                if(next.SubChapterSelected.Selected){
                    this.setState({
                    SelectedMe : true
                })
                }else{
                  this.setState({
                    SelectedMe : false
                })  
                }
                
            }


        }else{
        

        if (CurrentChapter === SelectedChaper) {
            if(next.SelectedChapter.Selected){
                this.setState({
                SelectedMe: true
                })
            }else{
                this.setState({
                SelectedMe: false
                })
            }
            

        }

        
        }


        if(this.props.ParentChapter === SelectedChaper){

            if(next.SelectedChapter.Selected){
                this.setState({
                SelectedMe: true
                })
            }else{
                this.setState({
                SelectedMe: false
                })
            }
        }


        

    }

    handleClick(id,state) {
        //check if parent
        if (this.props.parent) {
            this.props.SelectChapter(id,!this.props.SelectedChapter.Selected)
        }else{
            //console.log(this.props.ParentChapter)
            const SubChapter = this.props.ChildChapter
            const ParentChapter = this.props.ParentChapter

            this.props.SelectSubChapter(SubChapter,ParentChapter,!this.props.SubChapterSelected.Selected)
        }

    }


    render() {
        //console.log(this.props.SubChapterSelected)
        return (

            <i
                onClick={() => {
                    this.handleClick(this.props.Chapter)
                }}
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

