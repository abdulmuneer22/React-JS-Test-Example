import React, { Component } from 'react';


class ListChild extends Component{
    render(){
        return(
            <div>
                <input type="checkbox" id="cbox1" value="first_checkbox"/>
                <span style={{marginLeft : 10}}>Chapter {this.props.childData.Chapter}</span>
            {
                this.props.childData.hasChildren ?
                <div style={{
                    marginLeft : '25px'
                }}>
                {
                    //console.log(this.props.childData.SubChapters)
                    this.props.childData.SubChapters.map((item)=>{
                        console.log(item)
                        return(
                            <div style={{
                                padding : 10
                            }}>

                            <input type="checkbox" id="cbox1" value="first_checkbox"/>
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