import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPlayer, handleLogout } from '../actions';
import SearchForm from './SearchForm';

class ContainerHeader extends Component {
    constructor(){
        super();

        this.handleLogout = this.handleLogout.bind(this);
    }

    componentWillMount(){
        this.props.fetchPlayer();
    }

    renderImage({ avatar }){
        if(!avatar){
            return null;
        }

        const avatarImage = require(`../../${avatar}`);

        return <img className="ui avatar image" src={avatarImage} alt="avatar" />;
    }

    handleLogout(){
        const { username } = this.props.player;
        this.props.handleLogout({ username }, this.props.history);
    }

    renderComponent(){
        const { player, error } = this.props;

        if(player.isFetching){
            return <div>Loading...</div>;
        }

        if(player.error){
            return <div>{player.error}</div>
        }

        return (
            <Fragment>
                <div className="ui list">

                    <div className="player item">
                        { this.renderImage(player) }

                        <div className="content">
                            <div className="header"><b className="name">{ player.name }</b></div>
                            <div className="description event">{ player.event }</div>
                        </div>
                        {
                            error && <div className="error-message">{error}</div>
                        }
                    </div>

                </div>
                <div className="logout ui left floated secondary button inverted"
                    onClick={this.handleLogout}>
                    <i className="left chevron icon" />
                    Log Out
                </div>
            </Fragment>
        )
    }

    render(){
        return (
            <div className="ui grid centered">
                <div className="twelve wide column">
                    { this.renderComponent() }
                </div>
                <div className="four wide column">
                    <SearchForm />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    player: state.player,
    auth: state.authentication.auth,
    error: state.authentication.error
});

export default withRouter(connect(mapStateToProps, { fetchPlayer, handleLogout })(ContainerHeader));
