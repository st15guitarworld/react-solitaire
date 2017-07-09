import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './App.css';
import Background from './Background.js';
import WasteStock from './WasteStock.js';
import CardDragLayer from './CardDragLayer';
import Foundation from './Foundation';
import Tableau from './Tableau';
import Header from './Header';
import { connect } from 'react-redux';
import Constants from './Constants';
import SkyLight from 'react-skylight';

function isCompleted(state){
    return state.board.present[Constants.FOUNDATION_PILE_HEARTS].length === 13 &&
      state.board.present[Constants.FOUNDATION_PILE_DIAMONDS].length === 13 && 
      state.board.present[Constants.FOUNDATION_PILE_SPADES].length === 13 && 
      state.board.present[Constants.FOUNDATION_PILE_CLOVERS].length === 13;
}

const mapStateToProps = state => {
  return {
    moves: state.moves,
    isCompleted: isCompleted(state)
  }
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            timer:0,
            
        };
            this.tickTimer = this.tickTimer.bind(this);
            this.startTimer = this.startTimer.bind(this);
            this.showCompletedPopup = this.showCompletedPopup.bind(this);
    }
    startTimer(){
            this.timerInterval = setInterval(this.tickTimer,1000);
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.moves > 0 && !this.timerInterval) {
        this.startTimer();
      }
        
      if(nextProps.isCompleted){
          this.showCompletedPopup();
      }  
    }
    showCompletedPopup(){
        clearInterval(this.timerInterval);
        this.refs.completedDialog.show();
    }
    tickTimer(){
        this.setState({timer:this.state.timer + 1});
    }
    render() {
        let timerCopy = this.state.timer;
        return (
      <div id="App">
        <Background BackgroundUrl="/textures/greenfelt.jpg"/>
            <Header timer={this.state.timer} moves={this.props.moves}/>
        <div id="foundationContainer" className="clearfix">
           <WasteStock />
           <Foundation />
        </div>
            <div id="tableauContainer">
            <Tableau />
            </div>
           <CardDragLayer />
           <SkyLight ref="completedDialog" title="Congratulations! You have Completed the Game.">
            Here are your stats: <br/>
            {this.props.moves} moves taken.<br/>
            {pad(Math.floor(timerCopy/60),2)}:{pad(timerCopy,2)} minutes taken. <br/>
            Thanks for Playing.
            </SkyLight>
      </div>
    );
  }
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

let contextApp =  DragDropContext(HTML5Backend)(App);
let connectedContextApp = connect(
    mapStateToProps)(contextApp);
export default connectedContextApp;