import React, { Component, Fragment } from 'react';
import GameListItem from './GameListItem';
import { connect } from 'react-redux';

class GameList extends Component {
    filterGamesBySearch(query){
        const { games } = this.props;

        const gamesData = games.data.filter(game => {
            const regex = `^.*${query.toLowerCase()}.*`;
            return game.name.toLowerCase().match(new RegExp(regex, 'g'));
        });

        return gamesData;
    }

    filterGamesByCategory(filterByCategory){
        const { games, categories } = this.props;

        // Finding Category Id
        const categoryData = categories.data.find(category => {
            return category.slug === filterByCategory;
        });

        // Filtering Games
        const gamesData = games.data.filter(game => {
            return game.categoryIds.includes(categoryData.id);
        });

        return gamesData;
    }

    renderComponent(){
        const { games, filterByCategory, filterBySearch } = this.props;

        if(games.isFetching){
            return <div>Loading...</div>
        } 

        if(games.error){
            return <div>{games.error}</div>
        }

        // Data Processing
        let allGameData;

        if(filterByCategory){
            allGameData = this.filterGamesByCategory(filterByCategory);
        } else if(filterBySearch){
            allGameData = this.filterGamesBySearch(filterBySearch);
        } else {
            allGameData = games.data;
        }

        if(!allGameData.length){
            return <div>No games found...</div>;
        }

        const list = allGameData.map((game, index) => {
            return <GameListItem key={index} gameItem={game} />
        });

        return (
            <div className="ui relaxed divided game items links">
                {list}
            </div>
        );
    }
    
    render(){
        return(
            <Fragment>
                <h3 className="ui dividing header">Games</h3>
                { this.renderComponent() }
            </Fragment>
        ); 
    }
};

const mapStateToProps = state => ({
    categories: state.categories
});

export default connect(mapStateToProps)(GameList);