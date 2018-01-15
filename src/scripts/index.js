import '../styles/semantic';
import '../styles/styles';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Components
import Header from './components/Header';
import Authentication from './components/hoc/Authentication';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import GameDetailPage from './pages/GameDetailPage';
import CategoryPage from './pages/CategoryPage';

// Store
import { Provider } from 'react-redux';
import store from './create-store';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div id="wrapper">
                    <Header />
                    
                    <div className="main container">
                        <Switch>
                            <Route exact path="/" component={Authentication(HomePage)} />
                            <Route path="/search" component={Authentication(SearchPage)} />
                            <Route path="/game/:code" component={Authentication(GameDetailPage)} />
                            <Route path="/category/:category" component={Authentication(CategoryPage)} />
                            <Route path="/login" component={LoginPage} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));