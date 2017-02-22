import React, { Component } from 'react';



import '../App.css';


import IRT from './IRT'
import IRTC from './IRTC'



// Story 2

import SiteSettings from './Site_Settings'

class ISBNSearch extends Component {
    render() {
        return (
            <div className="pagewrapper">

                <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>

                    <div style={{ flex: 1 }}>

                        <IRT />
                        <IRTC />

                    </div>

                    <div style={{
                        flex: 1
                    }}>


                    </div>









                </div>


                <SiteSettings />



            </div>);
    }
}

export default ISBNSearch
