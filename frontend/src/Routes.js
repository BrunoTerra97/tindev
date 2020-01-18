import React from 'react';
import Login from './pages/Login';
import Main from './pages/Main';
import { BrowserRouter, Route} from 'react-router-dom';

export default function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/main" component={Main} />
    </BrowserRouter>
  );
}