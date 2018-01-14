import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../actions';
import GameList from '../components/GameList';
import CategoryList from '../components/CategoryList';
import ContainerHeader from '../components/ContainerHeader';

class HomePage extends Component {
    componentDidMount(){
        this.props.fetchGames();
    }

    render(){
        return (
            <Fragment>
                <ContainerHeader />
                <div className="ui grid">
                    <div className="twelve wide column">
                        <GameList games={this.props.games} />
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
    games: state.games
});

export default connect(mapStateToProps, { fetchGames })(HomePage);

