import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store'

import NavBar from './components/NavBar';
import Grid from './containers/Grid';
import Frontend from './containers/frontEnd/Frontend';

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Grid}/>
        <Route path="/frontend" component={Frontend}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
