import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import grid from './reducers/gridReducers';
import app from './reducers/frontEnd/appReducers';
import articles from './reducers/frontEnd/articleReducers';
import videos from './reducers/frontEnd/videoReducers';


const rootReducer = combineReducers({
  grid,
  app,
  articles,
  videos
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger, promise()),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
