import React, { Component } from 'react';
import { DragLayer } from 'react-dnd';
import CardPilePreview from './CardPilePreview';

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};

function collect(monitor) {
  return {
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging()
  };
};

function getItemStyles(props) {
   const { currentOffset } = props;
  if (!currentOffset) {
    return {
      display: 'none',
    };
  }

  let { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

class CardDragLayer extends Component {
   render() {
    const {canDrag,item, itemType, isDragging } = this.props;
    if (!item || !isDragging) {
      return null;
    }
       
    return (
      <div style={layerStyles}>
        <div style={getItemStyles(this.props)}>
          <CardPilePreview  cards={item.cardPile} isStraight={item.isStraight}/>
        </div>
      </div>
    );
  }
}

export default DragLayer(collect)(CardDragLayer);