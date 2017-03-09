import React, { Component } from 'react';

import Button from './Button'

import {connect} from 'react-redux'

class ButtonBlock extends Component{

    constructor(){
        super();
        this.uploadandcreate = this.uploadandcreate.bind(this)
    }

    uploadandcreate(){
        
        console.log("Chapters Selected Are")
        if(this.props.ChapterSelected){
            this.props.ChapterSelected.map((item,i)=>{
                console.log(item)
            })
        }else {
            console.log("Null")
        }

        console.log("Sub Chapters Selected Are")
        if(this.props.SubChapterSelected){
            this.props.SubChapterSelected.map((item,i)=>{
                console.log(item)
            })
        }else {
            console.log("Null")
        }
        
    }


    render(){
        return(
            <div className="container" style={{
                display : 'flex',
                //backgroundColor : 'red',
                justifyContent : 'flex-end'
            }}>
                <Button 
                title="CANCEL"
                bgColor="#BDBDBD"
                labelColor ="#ffffff"
                />


                <Button 
                title="UPLOAD AND CREATE"
                bgColor="#2196F3"
                labelColor ="#ffffff"
                onClick = {this.uploadandcreate}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
// console.log(state.ChapterSelection)
    return {
        ChapterSelected: state.ChapterSelection,
        SubChapterSelected : state.SubChapterSelection 
    }
}

export default connect(mapStateToProps, null)(ButtonBlock)