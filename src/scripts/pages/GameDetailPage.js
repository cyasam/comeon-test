import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';

class GameDetailPage extends Component {
    render(){
        const { history, match: { params: { code } }} = this.props;

        return(
            <Fragment>
                <div className="logout ui secondary button inverted"
                     onClick={history.goBack}>
                    <i className="left chevron icon"></i>Back
                </div>
                <div id="game-launch">{code} game</div>
            </Fragment>
        );
    }
}

export default withRouter(GameDetailPage);