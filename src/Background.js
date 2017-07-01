import React, { Component } from 'react';
import './App.css';

class Background extends Component {
    render(){
        const background_style={
            position:'fixed',
            width:'100%',
            height:'100%',
            zIndex:'-1000',
            top:'0px',
            left:'0px',
            backgroundImage:"url("+this.props.BackgroundUrl+")"
        };
        
    return (
        <div id="background" style={background_style}></div>
    );    
    }
}

export default Background;