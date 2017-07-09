import React, {Component} from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import Card from './Card.js'
import ItemTypes from './ItemTypes';
import { getEmptyImage } from 'react-dnd-html5-backend';
import Constants from './Constants';
import flow from 'lodash/flow';
import { connect } from 'react-redux';
import  { moveCards } from './actions/Actions';

const cardSpec = {
  
    canDrag(props,monitor){
      return props.isDraggable;
    },
    
    beginDrag(props) {
    // Return the data describing the dragged item
    const item = {
                   cardPile:props.getCardPile().slice(props.position), 
                   isShowing:props.isShowing,
                   isStraight:props.isStraight,
                   position:props.position,
                   fromType:props.type
                 };
    return item;
  },
   isDragging(props, monitor){
        let item = monitor.getItem();
        if(props.type === item.fromType && props.position >= item.position){
            return true;
        }
        return false;
    }
};

function getOppositeColorSuits(suit){
    switch(suit) {
        case "H":
        case "D":
            return ["C","S"];
        case "S":
        case "C":
            return ["D","H"];     
    }
}


function getPreviousCard(value) {
    switch(value){
        case "K":
            return "Q";
        case "Q":
            return "J";
        case "J":
            return "0";
        case "0":
            return "9";
        case "2":
            return "A";
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            return (parseInt(value,10) - 1).toString();
    }
}
const dropSpec = {
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
        let item = monitor.getItem();
        let currentItems = props.cards;
        
        if(item.type === props.type){
            console.log("attempting to drop card in same pile");
            candrop=false;
        }
        
        if(props.type === Constants.WASTE || props.type === Constants.FOUNDATION_PILE_HEARTS ||
          props.type === Constants.FOUNDATION_PILE_DIAMONDS || props.type === Constants.FOUNDATION_PILE_CLOVERS ||
          props.type === Constants.FOUNDATION_PILE_SPADES ){
            console.log("attempting to drop card in waste or foundation");
            candrop=false;
        }
        
        if(!props.isDraggable){
            candrop=false;
        }
        let currentPile = props.getCardPile;
        
        if(!currentPile || props.position !== currentPile().length - 1){
            candrop=false;
        }
        
        let topCard = item.cardPile[0];
        if(topCard.value !== getPreviousCard(props.value)){
            console.log("attempting to drop card with incorrect value");
            candrop=false;
        }
        
        if(getOppositeColorSuits(props.suit).indexOf(topCard.suit) < 0 ){
            console.log("attempting to drop card with incorrect suit");
            candrop=false;
        }
        
        return candrop;
    }
}

/**
 * Specifies which props to inject into your component.
 */

function dropCollect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    canDrop:monitor.canDrop()
  };
}


function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging(),
    canDrag:monitor.canDrag()
  };
}

class DraggableCard extends Component {
    componentDidMount() { 
    // Use empty image as a drag preview so browsers don't draw it
    // and we can draw whatever we want on the custom drag layer instead.
    this.props.connectDragPreview(getEmptyImage(), {
      // IE fallback: specify that we'd rather screenshot the node
      // when it already knows it's being dragged so we can hide it with CSS.
      captureDraggingState: true,
    });
  }
    render(){
        const { canDrag,isDragging, connectDragSource, connectDropTarget,isDraggable,type} = this.props;
        return connectDropTarget(connectDragSource(
            <span style={{
            position:'absolute',
            top:this.props.offset_top,
            width:Constants.CARD_WIDTH+"px",
            height:Constants.CARD_HEIGHT +"px",
            opacity:isDragging ? '0':'1',
            cursor:isDraggable || type === Constants.STOCK ? "pointer" : "auto"
           }}>
                <img src={this.props.isShowing ? this.props.image : Constants.CARD_BACK} width={Constants.CARD_WIDTH+"px"} height={ Constants.CARD_HEIGHT +"px"}></img>
           </span>
            ));
    }
}

const mapDispatchToProps = dispatch => {
  return {
     moveCardDispatcher:(cards,position,fromId,toId) =>{
         dispatch(moveCards(cards,position,fromId,toId))
     } 
  }
  };
 
let dropDragCard = flow(
DragSource(ItemTypes.CARD,cardSpec,collect),
DropTarget(ItemTypes.CARD, dropSpec, dropCollect)
)(DraggableCard);

export default connect(null,mapDispatchToProps)(dropDragCard);