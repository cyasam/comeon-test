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


// Store
import { Provider } from 'react-redux';
import store from './create-store';

const App = () => {
    return (
        <Provider store={store}>
            <div id="wrapper">
                <Header />
                
                <div className="main container">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Authentication(HomePage)} />
                            <Route path="/login" component={LoginPage} />
                        </Switch>
                    </Router>
                </div>
            </div>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));