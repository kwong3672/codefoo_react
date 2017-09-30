import React from 'react';
import { Route } from 'react-router-dom';

import Articles from '../../containers/frontEnd/Articles';
import Videos from '../../containers/frontEnd/Videos';



const Container = () => { 
  return (
    <div>
      <Route path="/frontend/videos" component={Videos} />
      <Route path="/frontend/articles" component={Articles} />
    </div>
  );
}; 

export default Container;
