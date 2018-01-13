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
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { LOGIN_SUCCESS } from './actions';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

const user = localStorage.getItem('auth');

if(user) {
  store.dispatch({ type: LOGIN_SUCCESS });
}

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