import React, {Component} from 'react';
import Constants from './Constants';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import { connect } from 'react-redux';
import CardPile from './CardPile.js';
import  { moveCards } from './actions/Actions';

var foundationBackGroundStyle = {
    position:'absolute',
    top:'0px',
    width:Constants.CARD_WIDTH+'px',
    height:Constants.CARD_HEIGHT+'px',
    border:'2px solid black',
    borderRadius:'5px',
    textAlign:'center'
}

const heartFoundationBackground = (
    <div className="foundation_pile_background" style={foundationBackGroundStyle}>♥</div>
);

const diamondFoundationBackground = (
    <div className="foundation_pile_background" style={foundationBackGroundStyle}>♦</div>
);

const cloverFoundationBackground = (
    <div className="foundation_pile_background" style={foundationBackGroundStyle}>♣</div>
);

const spadeFoundationBackground = (
    <div className="foundation_pile_background" style={foundationBackGroundStyle}>♠</div>
);


function canDragCard(cards,id,item) {
    return true;
};

function getSuitFromType(foundationType){
    switch(foundationType){
            case Constants.FOUNDATION_PILE_SPADES:
                return "S";
            
            case Constants.FOUNDATION_PILE_HEARTS:
                return "H";
            
            case Constants.FOUNDATION_PILE_DIAMONDS:
                return "D";
                
            case Constants.FOUNDATION_PILE_CLOVERS:
                return "C";
            default:
                return null;
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
        
        if(items.cardPile.length > 1){
           console.log("attempting to add multiple cards to foundation");
           candrop = false;
        }
        let topCard = items.cardPile[0];
        if(!getSuitFromType(foundationtype) || topCard.suit !== getSuitFromType(foundationtype)){
           console.log("attempting to add card with incorrect suit to foundation"); 
           candrop = false;
        }
           
        if(Constants.FOUNDATION_PILE_ORDER[currentItems.length] !== topCard.value){
           console.log("attempting to add card in incorrect order");
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

class FoundationPile extends Component {
    constructor(props) {
        super(props);
        this.getFoundationBackground = this.getFoundationBackground.bind(this);
    }
    
    getFoundationBackground() {
        switch(this.props.type){
            case Constants.FOUNDATION_PILE_SPADES:
                return spadeFoundationBackground;
            
            case Constants.FOUNDATION_PILE_HEARTS:
                return heartFoundationBackground;
            
            case Constants.FOUNDATION_PILE_DIAMONDS:
                return diamondFoundationBackground;
                
            case Constants.FOUNDATION_PILE_CLOVERS:
                return cloverFoundationBackground;
            default:
                return null;
                break;
        }
    }
    
    render() {
        const { isOver, canDrop, connectDropTarget } = this.props;
        return connectDropTarget(
            <div id="foundation_pile_container" style={{
                    position:'relative',
                height:Constants.CARD_HEIGHT+'px',
                width:Constants.CARD_WIDTH+'px',
                margin:'0px 0px 0px 20px',
                float:'left'
                }}>
                
                {this.getFoundationBackground()}
                
                <CardPile cards={this.props.cards} isStraight={true} type={this.props.type}/>
            </div> 
        );
    }
}

let FoundationPileDecorator = DropTarget(ItemTypes.CARD,spec,collect)(FoundationPile);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoundationPileDecorator);