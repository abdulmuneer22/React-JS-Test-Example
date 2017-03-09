import React, { Component } from 'react';

import {ListData} from './ListData'

import ListChild from './ListChild'
import {connect} from 'react-redux'
import * as actions from '../../Redux/actions'

class List extends Component{

    componentWillMount(){
        this.props.GetAllChapters()
    }

    render(){
        // console.log(ListData)
        return(
            <div>
                {   this.props.ChapterList ?
                    this.props.ChapterList.map((item,i)=>{
                        //console.log(item)
                        return(
                            <ListChild childData = {item.SubChapters} parentNumber = {item.Chapter} key={i}/>
                        );
                    })
                    :
                    null
                }
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    //console.log(state)
    return {
        ChapterList: state.ChapterList
    }
}

export default connect(mapStateToProps, actions)(List)
