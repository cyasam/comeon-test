import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GameListItem extends Component {
    render(){
        const { categoryItem } = this.props;
        return (
            <Link to={`/category/${categoryItem.slug}`} className="category item">
                <div className="content">
                    <div className="header">{categoryItem.name}</div>
                </div>
            </Link>
        );
    }
};

export default GameListItem;