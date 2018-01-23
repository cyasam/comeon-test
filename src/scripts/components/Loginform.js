import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field  } from 'redux-form';
import { submitLogin } from '../actions';

class Loginform extends Component {
    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        if(this.props.formResult.auth){
            this.props.history.push('/');
        }
    }
    
    handleSubmit(data){
        this.props.submitLogin(data, this.props.history);
    }

    handleResultMessage(){
        const { formResult } = this.props;

        if(Object.keys(formResult).length){
            const { error, auth, isFetching } = formResult;
            return (
                <Fragment>
                { !auth && error && 
                    <div className="error-message">
                        {error}
                    </div>
                }
                {
                    isFetching && 
                    <div className="error-message">
                        Loading...
                    </div>
                }
                </Fragment>
            );
        }
        
        return null;
    }

    renderField({input,placeholder,icon,type,meta: { touched, error, warning }}) {
        return(
            <div className="field">
                <div className="ui icon input">
                    <input {...input} placeholder={placeholder} type={type} />
                    <i className={icon} />
                </div>
                {touched &&
                    ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
            </div>
        );
    }

    render(){
        const { handleSubmit, error } = this.props;
        return (
            <div className="login">
                <div className="ui grid centered">

                    <form onSubmit={handleSubmit(this.handleSubmit)}>
                        <div className="fields">
                            {this.handleResultMessage()}
                            <div className="required field">
                                    <Field icon="user icon" type="text" name="username" placeholder="Username" component={this.renderField} />

                            </div>
                            <div className="required field">
                                
                                    <Field icon="lock icon" type="password" name="password" placeholder="Password" component={this.renderField} />

                            </div>
                            <div className="field">
                                <div className="ui icon input">
                                    <button type="submit">
                                        Login
                                        <i className="right chevron icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if(!values.username){
        errors.username = 'Please enter a username';
    }

    if(!values.password){
        errors.password = 'Please enter a password';
    }

    return errors;
}

const mapStateToProps = state => ({
    formResult: state.authentication
});

export default reduxForm({
    form: 'loginForm',
    validate,
    touchOnBlur: false
})(withRouter(connect(mapStateToProps, { submitLogin })(Loginform)));