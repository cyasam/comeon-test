import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import CategoryListItem from './CategoryListItem';

class CategoryList extends Component {
    componentDidMount(){
        this.props.fetchCategories();
    }

    renderComponent(){
        const list = this.props.categories.data.map((category, index) => {
            return <CategoryListItem key={index} categoryItem={category} />
        });

        return(
            <Fragment>
                <h3 className="ui dividing header">Categories</h3>
                <div className="ui selection animated list category items">
                    {list}
                </div>
            </Fragment>
        );
    }
    
    render(){
        if(this.props.categories.isFetching){
            return <div>Loading...</div>
        } else{
            if(!this.props.categories.data.length){
                return <div>No game categories found...</div>;
            }
            
            return this.renderComponent();
        }        
    }
};

const mapStateToProps = state => ({
    categories: state.categories
});

export default connect(mapStateToProps, { fetchCategories })(CategoryList);