import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Challenges from '../pages/Challenges';

const Routes: React.FC = () => (
  <Switch>
    {/* Base routes. */}
    <Route path="/ThirtyDaysOfCSS" exact component={Dashboard} />

    {/* Challenges routes. */}
    <Route path="/challenges/:day" component={Challenges} />

    {/* Default route */}
    <Route path="*" component={Dashboard} />
  </Switch>
);

export default Routes;
