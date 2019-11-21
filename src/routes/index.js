import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Monitor from '../pages/Monitor';
import Serv from '../pages/Serv';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/monitor" component={Monitor} isPrivate />
      <Route path="/server" component={Serv} isPrivate />
    </Switch>
  );
}
