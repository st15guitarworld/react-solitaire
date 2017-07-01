import React, {Component} from 'react';
import { DragSource } from 'react-dnd';
import Constants from './Constants';
import './App.css';

class Card extends Component {
render() { 
    return(<span style={{
           position:'absolute',
            top:this.props.offset_top
           }}>
        <img src={this.props.isShowing ? this.props.image : Constants.CARD_BACK} width={Constants.CARD_WIDTH+"px"} height={ Constants.CARD_HEIGHT +"px"}></img>
           </span>
    );
   } 
}

export default Card;