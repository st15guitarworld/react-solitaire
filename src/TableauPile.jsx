import React, {Component} from 'react';
import { DropTarget } from 'react-dnd';
import Constants from './Constants';
import CardPile from './CardPile.js';
import {connect} from 'react-redux';
import  { moveCards } from './actions/Actions';
import ItemTypes from './ItemTypes';

var tableauBackGroundStyle = {
    position:'absolute',
    top:'0px',
    width:Constants.CARD_WIDTH+'px',
    height:Constants.CARD_HEIGHT+'px',
    border:'2px solid black',
    borderRadius:'5px',
    textAlign:'center'
}

const mapStateToProps = (state,ownProps) => {
    return {
    cards:state[Constants.GAME_BOARD].present[ownProps.type]
  }
}

const mapDispatchToProps = dispatch => {
  return {
     moveCardDispatcher:(cards,position,fromId,toId) =>{
         dispatch(moveCards(cards,position,fromId,toId))
     } 
  }
};

class TableauPile extends Component {
    render(){
        const { isOver, canDrop, connectDropTarget } = this.props;
        return connectDropTarget(
            <div id="tableau_pile_container" style={{
                position:'relative',
                height:Constants.CARD_HEIGHT+'px',
                width:Constants.CARD_WIDTH+'px',
                margin:'0px 0px 0px 20px',
                float:'left',
                border:'2px solid black',
                borderRadius:'5px'
                }}>
                
                <CardPile cards={this.props.cards} isStraight={false} type={this.props.type}/>
            </div> 
        );
    }
}

const spec = {
    drop(props, monitor, component){
        if (monitor.didDrop()) {
          // If you want, you can check whether some nested
          // target already handled drop
          return;
        }
        
        // Obtain the dragged item
        const item = monitor.getItem();
        console.log(props);
        props.moveCardDispatcher(item.cardPile,item.position,item.fromType,props.type);
        
    },
    canDrop(props, monitor){
        let candrop = true;
        let foundationtype = props.type;
        let items = monitor.getItem();
        let currentItems = props.cards;
        
        if(props.cards.length > 0){
           console.log("attempting to add cards to non empty tableau");
           candrop = false;
        }
        let topCard = items.cardPile[0];
        if(topCard.value !== "K"){
            console.log("attempting to add a illegal card on empty tableau");
            candrop = false;
        } 
        
        return candrop;
    }
};

function collect(connect,monitor) {
  // Call this function inside render()
  // to let React DnD handle the drag events:
  return {
      connectDropTarget: connect.dropTarget(),
      // You can ask the monitor about the current drag state:
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
      itemType: monitor.getItemType()
  };
};
let DroppableTableauPile = DropTarget(ItemTypes.CARD,spec,collect)(TableauPile);

let ConnectedTableauPile =  connect(
  mapStateToProps,
  mapDispatchToProps
)(DroppableTableauPile);

export default ConnectedTableauPile;