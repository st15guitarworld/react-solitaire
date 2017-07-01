import React, {Component} from 'react';
import ConnectedTableauPile from './TableauPile'
import Constants from './Constants';

export default class Tableau extends Component {
    render(){
        return (
            <div id="tableau" style={{
                    float:'left',
                    width:'650px',
                    height:'150px'
                }}>
                
                <ConnectedTableauPile type={Constants.TABLEAU_ONE} />
                <ConnectedTableauPile type={Constants.TABLEAU_TWO} />
                <ConnectedTableauPile type={Constants.TABLEAU_THREE} />
                <ConnectedTableauPile type={Constants.TABLEAU_FOUR} />
                <ConnectedTableauPile type={Constants.TABLEAU_FIVE} />
                <ConnectedTableauPile type={Constants.TABLEAU_SIX} />
                
        </div>
        );
    }
}