import React, { Component } from 'react';

import CheckBox from './CheckBox'

class ListChild extends Component{
    render(){
        return(
            <div>
                <CheckBox parent={true} Chapter = {this.props.childData.Chapter}/>
                <span style={{marginLeft : 10}}>Chapter {this.props.childData.Chapter}</span>
            {
                this.props.childData.hasChildren ?
                <div style={{
                    marginLeft : '25px'
                }}>
                {
                    //console.log(this.props.childData.SubChapters)
                    this.props.childData.SubChapters.map((item)=>{
                        //console.log(item)
                        return(
                            <div style={{
                                padding : 10
                            }}>

                            <CheckBox parent={false} ParentChapter={this.props.childData.Chapter} ChildChapter = {item.Chapter}/>
                            <span style={{marginLeft : 10}}>Chapter {this.props.childData.Chapter}.{item.Chapter}</span>
                            
                            </div>
                        );
                    })
                }
                
                </div>
                :
                null
            }
            </div>
        );
    }
}

export default ListChild