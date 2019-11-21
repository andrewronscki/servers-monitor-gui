import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';
import history from './services/history';
import Menu from './components/Menu';

function App() {
  return (
    <Router history={history}>
      <Menu />
      <Routes />      
    </Router>
  );
}

export default App;
