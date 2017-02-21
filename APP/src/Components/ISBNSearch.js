import React, { Component } from 'react';



import '../App.css';


import IRT from './IRT'
import IRTC from './IRTC'


class ISBNSearch extends Component {
    render() {
        return (
            <div className="pagewrapper">

                <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>

                    <div style={{ flex: 1 }}>

                        <IRT/>
                        <IRTC/>

                    </div>

                    <div style={{
                        flex: 1
                    }}>


                    </div>







                </div>

            </div>)
    }
}

export default ISBNSearch
