import React, { Component } from 'react';

import TextInput from './TextInput'

import '../App.css';


class ISBNSearch extends Component {
    render() {
        return (
            <div className="pagewrapper">

                <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>

                    <div style={{ flex: 1 }}>

                        <TextInput
                            title="Instructor Resource Title"
                            placeholderText="Input Text"
                            multiLine={true}
                            rows={2}
                        />

                        <TextInput
                            title="Instructor Resource Copy"
                            placeholderText="Input Text"
                            multiLine={true}
                            rows={2}
                        />

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
