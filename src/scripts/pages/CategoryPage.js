import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchGames, fetchCategories } from '../actions';
import CategoryList from '../components/CategoryList';
import GameList from '../components/GameList';

class CategoryPage extends Component {
    componentDidMount(){
        this.props.fetchGames();
    }

    render(){
        const { games, match: { params: { category } }} = this.props;

        return (
            <Fragment>
                <div className="ui grid">
                    <div className="twelve wide column">
                        <GameList games={games} filterByCategory={category} />
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