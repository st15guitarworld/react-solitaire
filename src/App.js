import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './App.css';
import Background from './Background.js';
import WasteStock from './WasteStock.js';
import CardDragLayer from './CardDragLayer';
import Foundation from './Foundation';
import Tableau from './Tableau';

class App extends Component {
    render() {
        var stock = [
            {
                image:"/cards/AS.png",
                suit:"S",
                value:"A",
                isDraggable:false,
                isShowing:false
            },{ 
                image:"/cards/JS.png",
                suit:"S",
                value:"J",
                isDraggable:false,
                isShowing:false,
            }
        ];
        
        
        var waste = [{
                image:"/cards/0S.png",
                suit:"S",
                value:"0",
                isDraggable:true,
                isShowing:true
            },{ 
                image:"/cards/2H.png",
                suit:"H",
                value:"2",
                isDraggable:true,
                isShowing:true
            }
        ];
        
        return (
      <div id="App">
        <Background BackgroundUrl="/textures/greenfelt.jpg"/>
        <div id="foundationContainer" className="clearfix">
           <WasteStock />
           <Foundation />
        </div>
            <div id="tableauContainer">
            <Tableau />
            </div>
            <CardDragLayer />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);