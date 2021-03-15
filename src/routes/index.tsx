import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    {/* Base routes. */}
    <Route path="/" exact component={Dashboard} />
    <Route path="*" component={Dashboard} />

    {/* Challenges routes. */}
  </Switch>
);

export default Routes;
