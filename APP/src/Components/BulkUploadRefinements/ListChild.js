import React, { Component } from 'react';

import CheckBox from './CheckBox'

class ListChild extends Component{
    render(){
        return(
            <div>
                <CheckBox parent={true} Chapter = {this.props.parentNumber}/>
                <span style={{marginLeft : 10}}>Chapter {this.props.parentNumber}</span>
            {
                this.props.childData.map((item,i)=>{
                    return(
                            <div style={{
                                padding : 10
                            }}
                            key={i}
                            >
                            <CheckBox parent={false} SubChapter={this.props.parentNumber +"."+item}/>
                            <span style={{marginLeft : 10}}>Chapter {this.props.parentNumber +"."+item}</span>
                            
                            </div>
                        );

                })
            }
            </div>
        );
    }
}

export default ListChild