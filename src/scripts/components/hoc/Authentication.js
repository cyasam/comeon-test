import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ContainerHeader from '../ContainerHeader';

export default (WrappedComponent) => {
    class Authentication extends Component {
        componentWillMount() {
            if (!this.props.auth) {
              this.props.history.push('/login');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.auth) {
              this.props.history.push('/login');
            }
        }

        render(){
            if (!this.props.auth) {
                return null;
            }

            return(
                <Fragment>
                    <ContainerHeader />
                    <WrappedComponent {...this.props} />
                </Fragment>
            );
        }
    }

    const mapStateToProps = state => ({
        auth: state.authentication.auth
    });
    
    return withRouter(connect(mapStateToProps)(Authentication));
};

