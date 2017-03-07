import React, { Component } from 'react';

import {connect} from 'react-redux'

import * as actions from '../../Redux/actions'

export class Label extends Component{

    render(){
        console.log(this.props)
        return(
            <div>
                <div style={{
                    borderWidth : 1,
                    borderColor : 'rgba(13, 13, 13, 0.18)',
                    borderStyle : 'solid',
                    color : 'rgba(13, 13, 13, 0.5)',
                    maxWidth : 150,
                    marginTop : 20,
                    paddingTop : 5,
                    paddingBottom : 5,
                    paddingLeft : 5,
                    display : 'flex',
                    flexDirection : 'row',
                    cursor : 'pointer',
                    marginBottom : 10
                    
                }}
                onClick = {()=>{
                        
                        this.props.FlipDropDown(!this.props.DropDownStatus)
                    }}
                >
                    <div style={{
                        flex : 1,
                        fontWeight : '500'
                    }}
                    >
                    Chapters
                    </div>

                    <div style={{
                        marginRight : 10
                    }}
                    
                    >
                    {
                        !this.props.DropDownStatus ? 
                        <i className="fa fa-caret-right" aria-hidden="true" style={{
                        color : 'rgba(1,1,1,0.4)'
                        }}></i>

                        : 
                        <i className="fa fa-caret-down" aria-hidden="true" style={{
                        color : 'rgba(1,1,1,0.4)'
                        }}></i>
                    }


                    
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state)
    return {
        DropDownStatus: state.DropDown
    }
}


export default connect(mapStateToProps, actions)(Label)

