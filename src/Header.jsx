import React, {Component} from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import UndoButton from './UndoButton';
const headerStyle={
    backgroundColor:"black",
    color:"white",
    position: "relative",
    minHeight: 25+"px",
    border: "1px solid transparent"
};

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export default class Header extends Component {
    render(){
        return (
            <div style={headerStyle}>
            <ul className="nav-content pull-left">
                <li> 
                    <UndoButton />
                </li>
                <li>
                {pad(Math.floor(this.props.timer/60),2)}:{pad(this.props.timer%60,2)}
                </li>
                <li>
                    {this.props.moves} moves
                </li>
            </ul>
            </div>
        );
    }
}
