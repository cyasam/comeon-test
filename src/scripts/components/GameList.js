import React, { Component, Fragment } from 'react';
import GameListItem from './GameListItem';

class GameList extends Component {
    renderComponent(){
        const list = this.props.games.data.map((game, index) => {
            return <GameListItem key={index} gameItem={game} />
        });

        return(
            <Fragment>
                <h3 className="ui dividing header">Games</h3>
                <div className="ui relaxed divided game items links">
                    {list}
                </div>
            </Fragment>
        );
    }
    
    render(){
        if(this.props.games.isFetching){
            return <div>Loading...</div>
        } 

        if(!this.props.games.data.length){
            return <div>No games found...</div>;
        }
        
        return this.renderComponent();    
}
};

export default GameList;