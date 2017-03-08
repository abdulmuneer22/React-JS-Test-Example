import React, { Component } from 'react';

import {ListData} from './ListData'

import ListChild from './ListChild'

class List extends Component{
    render(){
        // console.log(ListData)
        return(
            <div>
                {
                    ListData.map((item,i)=>{
                        //console.log(item)
                        return(
                            <ListChild childData = {item} kye={i}/>
                        );
                    })
                }
            </div>
        );
    }
}


export default List