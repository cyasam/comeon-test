import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GameListItem extends Component {
    gameImage (gameItem) { 
        const gameImage = require(`../../${gameItem.icon}`);

        return gameImage;
    }

    render(){
        const { gameItem } = this.props;
        return (
            <div className="game item">
                <div className="ui small image">
                    <img src={ this.gameImage(gameItem) } alt="game-icon" />
                </div>
                <div className="content">
                    <div className="header"><b className="name">{ gameItem.name }</b></div>
                    <div className="description">
                        { gameItem.description }
                    </div>
                    <div className="extra">
                        <Link to={`/game/${gameItem.code}`} className="play ui right floated secondary button inverted">
                            Read More
                            <i className="right chevron icon" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
};

export default GameListItem;