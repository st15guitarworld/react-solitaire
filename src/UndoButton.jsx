import React, {Component} from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    canUndo: state.board.past.length > 0
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo())
  }
}

class UndoButton extends Component{
    render(){
        return (
            <button id="undo" onClick={this.props.onUndo} disabled={!this.props.canUndo}>Undo Move
            </button>
        );
    }
}

const connectedUndoButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoButton);

export default connectedUndoButton;