import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchGames, fetchCategories } from '../actions';
import ContainerHeader from '../components/ContainerHeader';
import CategoryList from '../components/CategoryList';
import GameList from '../components/GameList';

class CategoryPage extends Component {
    componentDidMount(){
        this.props.fetchGames();
    }

    renderGamesByCategory(slug){
        const isFetcingCats = this.props.categories.isFetching;
        const isFetcingGames = this.props.games.isFetching;

        if(isFetcingCats || isFetcingGames) {
            return null;
        }

        // Finding Category Id
        const categoryData = this.props.categories.data.find(category => {
            return category.slug === slug;
        });

        // Filtering Games
        const games = { ...this.props.games }
        const gamesData = games.data.filter(game => {
            return game.categoryIds.includes(categoryData.id);
        });

        games.data = gamesData;

        return <GameList games={games} />
    }

    render(){
        const { match: { params: { category } }} = this.props;

        return (
            <Fragment>
                <ContainerHeader />
                <div className="ui grid">
                    <div className="twelve wide column">
                        {this.renderGamesByCategory(category)}
                    </div>
                    <div className="four wide column">
                        <CategoryList />
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    games: state.games,
    categories: state.categories
});

export default withRouter(connect(mapStateToProps, {fetchGames, fetchCategories})(CategoryPage));