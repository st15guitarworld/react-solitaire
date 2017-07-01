import React, {Component} from 'react';
import CardPile from './CardPile.js'
import CardPilePreview from './CardPilePreview';

export default class CardDragPreview extends Component {
    render(){
        return (
            <CardPilePreview cards={this.props.cards} isStraight={this.props.isStraight}/>
        );
    }
}