import React, { Component } from 'react';

class GameListItem extends Component {
    render(){
        const { categoryItem } = this.props;
        return (
            <div className="category item">
                <div className="content">
                    <div className="header">{categoryItem.name}</div>
                </div>
            </div>
        );
    }
};

export default GameListItem;