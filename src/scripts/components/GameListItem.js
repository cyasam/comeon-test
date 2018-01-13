import React, { Component } from 'react';

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
                        <div className="play ui right floated secondary button inverted">
                            Play
                            <i className="right chevron icon" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default GameListItem;