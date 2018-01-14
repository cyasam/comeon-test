import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPlayer, handleLogout } from '../actions';

class ContainerHeader extends Component {
    constructor(){
        super();

        this.handleLogout = this.handleLogout.bind(this);
    }

    componentWillMount(){
        this.props.fetchPlayer();
    }

    renderImage({ avatar }){
        const avatarImage = require(`../../${avatar}`);

        return <img className="ui avatar image" src={avatarImage} alt="avatar" />;
    }

    handleLogout(){
        const { username } = this.props.player;
        this.props.handleLogout({ username }, this.props.history);
    }

    render(){
        const { player } = this.props;

        if(!Object.keys(player).length || player.isFetching){
            return null;
        }

        return (
            <div className="ui grid centered">
                <div className="twelve wide column">
                    <div className="ui list">

                        <div className="player item">
                            { this.renderImage(player) }

                            <div className="content">
                                <div className="header"><b className="name">{ player.name }</b></div>
                                <div className="description event">{ player.event }</div>
                            </div>
                        </div>

                    </div>
                    <div className="logout ui left floated secondary button inverted"
                        onClick={this.handleLogout}>
                        <i className="left chevron icon" />
                        Log Out
                    </div>
                </div>
                <div className="four wide column">
                    <div className="search ui small icon input ">
                        <input type="text" placeholder="Search Game" />
                        <i className="search icon" />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    player: state.player
});

export default withRouter(connect(mapStateToProps, { fetchPlayer, handleLogout })(ContainerHeader));
