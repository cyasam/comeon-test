import React, { Fragment } from 'react';
import GameList from '../components/GameList';
import CategoryList from '../components/CategoryList';
import ContainerHeader from '../components/ContainerHeader';

const HomePage = () => {
    return (
        <Fragment>
            <ContainerHeader />
            <div className="ui grid">
                <div className="twelve wide column">
                    <GameList />
                </div>
                <div className="four wide column">
                    <CategoryList />
                </div>
            </div>
        </Fragment>
    );
};

export default HomePage;

