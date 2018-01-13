import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../actions';
import GameListItem from './GameListItem';

class GameList extends Component {
    componentDidMount(){
        this.props.fetchGames();
    }

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
        } else{
            if(!this.props.games.data.length){
                return <div>No games found...</div>;
            }
            
            return this.renderComponent();
        }        
    }
};

const mapStateToProps = state => ({
    games: state.games
});

export default connect(mapStateToProps, { fetchGames })(GameList);