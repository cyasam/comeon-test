import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { fetchGames, fetchSearch } from '../actions';
import GameList from '../components/GameList';
import CategoryList from '../components/CategoryList';
import ContainerHeader from '../components/ContainerHeader';

class SearchPage extends Component {
    componentDidMount(){
        this.props.fetchGames();

        const { history } = this.props;
        const query = queryString.parse(history.location.search) || null;
        this.props.fetchSearch(query, history);
    }

    renderGames(){
        const { search, games } = this.props;

        if(games.isFetching || search.isFetching) {
            return <div>Loading...</div>;
        }

        const query = search.q;

        const filteredGames = { ...games };

        if(query){
            const result = games.data.filter(game => {
                const regex = `^.*${query.toLowerCase()}.*`;
                return game.name.toLowerCase().match(new RegExp(regex, 'g'));
            });

            filteredGames.data = result;
        }

        return <GameList games={filteredGames} />;
    }

    render(){
        const { games, search } = this.props;
        return (
            <Fragment>
                <ContainerHeader />
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

export default withRouter(connect(mapStateToProps, { fetchGames, fetchSearch })(SearchPage));