import React, {Component} from 'react';
import FoundationPile from './FoundationPile';
import Constants from './Constants';

export default class Foundation extends Component {
    render(){
        return (
        <div id="foundation" style={{
                    float:'left',
                    width:'450px',
                    height:'150px'
                }}>
                <FoundationPile type={Constants.FOUNDATION_PILE_DIAMONDS} />
                <FoundationPile type={Constants.FOUNDATION_PILE_HEARTS} />
                <FoundationPile type={Constants.FOUNDATION_PILE_SPADES} />
                <FoundationPile type={Constants.FOUNDATION_PILE_CLOVERS} />
        </div>
        );
    }
}