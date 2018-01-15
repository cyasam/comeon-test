import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { fetchGames } from '../actions';
import GameList from '../components/GameList';
import CategoryList from '../components/CategoryList';

class SearchPage extends Component {
    componentDidMount(){
        this.props.fetchGames();
    }

    renderGames(){
        const { search, games } = this.props;

        if(games.isFetching || search.isFetching) {
            return <div>Loading...</div>;
        }

        return <GameList games={games} filterBySearch={search.q} />;
    }

    render(){
        const { games, search } = this.props;
        return (
            <Fragment>
                <div className="ui grid">
                    <div className="twelve wide column">
                        {this.renderGames()}
                    </div>
                    <div className="four wide column">
                        <CategoryList />
                    </div>
                </div>
            </Fragment>
        );
    }
};

const mapStateToProps = state => ({
    games: state.games,
    search: state.search
});

export default withRouter(connect(mapStateToProps, { fetchGames })(SearchPage));