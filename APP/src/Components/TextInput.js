import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import axios from 'axios'
const querystring = require('querystring');

import * as actions from '../Redux/actions'
import {connect} from 'react-redux'

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

    
    componentWillMount(){
        console.log("Get Title From Db")
        // this.props.GetTitle("Title")
        var CMS_END = "http://localhost:8080/cms/GetTitle"
        var PostData = querystring.stringify({
            "target": "Title"
        })
        axios.post(CMS_END,PostData)
        .then((res)=>{
            console.log(res.data[0].Title)
            this.setState({
                text : res.data[0].Title
            })

        })
    }



    handleBlur(){
        
        if(this.state.text){
            //alert(this.state.text)
            // console.log(this.state.text)
            switch(this.props.target){
                case 'INSTRUCTOR_TITLE':
                console.log("Called INSTRUCTOR_TITLE")
                //update current value content
                this.props.SaveInstructorTitle(this.state.text)
                break;

                case 'INSTRUCTOR_TITLE_COPY':
                console.log("Called INSTRUCTOR_TITLE_COPY")
                this.props.SaveInstructorTitleCopy(this.state.text)
                break;
            }

        }
    }

    render(){
        console.log("current input " , this.state.text)
        console.log(this.props.target)
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
                value = {
                    this.props.target === "INSTRUCTOR_TITLE" ? 
                    this.props.RTitle ? this.props.RTitle : this.state.text
                    : 
                    ""
                    }
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


const mapStateToProps = (state) => {
    console.log(state)
    return {
        RTitle: state.ResourceTitle,
        CTitle : state.CopyTitle
    }
}

export default connect(mapStateToProps, actions)(TextInput)

