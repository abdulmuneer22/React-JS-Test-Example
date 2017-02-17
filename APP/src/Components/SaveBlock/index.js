import React, { Component } from 'react';
import Button from './Button'

class SaveBlock extends Component{
    render(){
        return(
            
            <div className="buttonBlock">
            <Button 
            title="CANCEL"
            bgColor="#78909C"
            labelColor ="#ffffff"
            />

            <Button 
            title="SAVE"
            bgColor="#039BE5"
            labelColor ="#ffffff"
            />
            </div>
        );

    }
}

export default SaveBlock