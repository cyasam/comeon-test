import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchGames } from '../actions';

class GameDetailPage extends Component {
    componentDidMount(){
        this.props.fetchGames();
    }

    renderGameDetail(code){
        if(this.props.games.isFetching){
            return null;
        }

        const gameData = this.props.games.data; 

        const game = gameData.find(game => {
            return game.code === code;
        });

        const gameImage = require(`../../${game.icon}`);

        return (
            <Fragment>
                <div className="ui relaxed divided game items links">
                    <div className="game item">
                        <div className="ui small image">
                            <img src={gameImage} alt="game-icon" />
                        </div>
                        <div className="content">
                            <div className="header">
                                <h2>{game.name}</h2>
                            </div>
                            <div className="description">
                                <p>{game.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    render(){
        const { games, history, match: { params: { code } }} = this.props;

        if(games.isFetching){
            return <div>Loading...</div>
        } 

        if(games.error){
            return <div>{games.error}</div>
        }

        return(
            <Fragment>
                <div className="game-detail">
                    <div className="game-detail-top">
                        <div className="logout ui secondary button inverted"
                            onClick={history.goBack}>
                            <i className="left chevron icon"></i>Back
                        </div>
                    </div>
                    <div className="game-detail-content">
                        {this.renderGameDetail(code)}
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    games: state.games
});

export default withRouter(connect(mapStateToProps, {fetchGames})(GameDetailPage));