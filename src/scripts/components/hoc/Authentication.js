import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default (Component) => {
    class Authentication extends React.Component {
        componentWillMount() {
            if (!this.props.auth) {
              this.props.history.push('/login');
            }
        }

        componentWillUpdate(auth) {
            if (!nextProps.auth) {
              this.props.history.push('/login');
            }
        }

        render(){
            return(
                <Component {...this.props} />
            );
        }
    }

    const mapStateToProps = state => ({
        auth: state.authentication.auth
    });
    
    return withRouter(connect(mapStateToProps)(Authentication));
};

