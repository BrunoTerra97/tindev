import React from 'react';
import Login from './Pages/Login';
import Main from './Pages/Main';
import { BrowserRouter, Route} from 'react-router-dom';

export default function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/dev/:id" component={Main} />
    </BrowserRouter>
  );
}