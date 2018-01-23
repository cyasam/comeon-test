import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { fetchSearch } from '../actions';

class SearchForm extends Component {
    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const { history, location } = this.props;
        const query = queryString.parse(location.search);
        this.props.fetchSearch(query, history);
        
        this.props.initialize({ q: query.q });
    }

    trimValue(value){
        return value.trim();
    }

    handleSubmit(data){
        this.props.fetchSearch(data, this.props.history);
    }

    render(){
        const { handleSubmit, search } = this.props;

        return(
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <div className="search ui small icon input ">
                        <Field name="q" type="text" placeholder="Search Game" component="input" />
                        <i className="search icon" />
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    search: state.search
});

export default withRouter(
    connect(mapStateToProps, { fetchSearch })(
        reduxForm({
            form: 'searchForm'
        })(SearchForm)
    )
);