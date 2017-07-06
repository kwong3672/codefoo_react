import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import Articles from '../../containers/frontEnd/Articles';
import Videos from '../../containers/frontEnd/Videos';



const Container = () => { 
  return (
    <div>
      <Redirect exact path="/frontend" to="/frontend/videos" />
      <Route path="/frontend/videos" component={Videos} />
      <Route path="/frontend/articles" component={Articles} />
    </div>
  );
}; 

export default Container;
