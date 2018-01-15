import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import CategoryListItem from './CategoryListItem';

class CategoryList extends Component {
    componentDidMount(){
        this.props.fetchCategories();
    }

    renderComponent(){
        const { categories } = this.props;
        
        if(categories.isFetching){
            return <div>Loading...</div>
        }

        if(categories.error){
            return <div>{categories.error}</div>
        }
        
        if(!categories.data.length){
            return <div>No game categories found...</div>;
        }

        const list = categories.data.map((category, index) => {
            return <CategoryListItem key={index} categoryItem={category} />
        });

        return(
            <div className="ui selection animated list category items">
                {list}
            </div>
        );
    }
    
    render(){
        return (
            <Fragment>
                <h3 className="ui dividing header">Categories</h3>
                { this.renderComponent() }
            </Fragment>
        );     
    }
};

const mapStateToProps = state => ({
    categories: state.categories
});

export default connect(mapStateToProps, { fetchCategories })(CategoryList);