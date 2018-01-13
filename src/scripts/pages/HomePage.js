import React, { Component } from 'react';
import GameList from '../components/GameList';
import CategoryList from '../components/CategoryList';

const HomePage = () => {
    return (
        <div className="ui grid">
            <div className="twelve wide column">
                <GameList />
            </div>
            <div className="four wide column">
                <CategoryList />
            </div>
        </div>
    );
};

export default HomePage;

