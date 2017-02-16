import React, { Component } from 'react';

import TextInput from './TextInput'

class ISBNSearch extends Component {
    render() {
        return (
            <div>
                <h2 style={{
                    fontFamily: 'Roboto'
                }}>ISBN Search</h2>


                <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>

                    <div style={{ flex: 1 }}>

                        <TextInput
                            title="Site Identifier"
                            placeholderText="essentialicon"
                        />

                        <TextInput
                            title="Title"
                            placeholderText="Polulated From Family Search"
                        />
                        <br/>

                        <TextInput
                            title="Instructor Resource Title"
                            placeholderText="Polulated From Family Search"
                            multiLine={true}
                            rows={2}
                        />

                        <TextInput
                            title="Instructor Resource Copy"
                            placeholderText="Polulated From Family Search"
                            multiLine={true}
                            rows={2}
                        />

                    </div>

                    <div style={{
                        flex: 1
                    }}>

                        <TextInput
                            title="Associated Tile Family"
                            placeholderText="Polulated From Family Search"
                        />

                        <TextInput
                            title="Discipline ID"
                            placeholderText="Polulated From Family Search"
                        />
                    </div>







                </div>

            </div>)
    }
}

export default ISBNSearch