import React, { Component } from 'react';

import Button from './Button'


export default class ButtonBlock extends Component{
    render(){
        return(
            <div className="container" style={{
                display : 'flex',
                //backgroundColor : 'red',
                justifyContent : 'flex-end'
            }}>
                <Button 
                title="CANCEL"
                bgColor="#BDBDBD"
                labelColor ="#ffffff"
                />


                <Button 
                title="UPLOAD AND CREATE"
                bgColor="#2196F3"
                labelColor ="#ffffff"
                />
            </div>
        );
    }
}
