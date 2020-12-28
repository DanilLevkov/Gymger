import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from './user/Login';
import SignUp from './user/Signup';
import Blog from './main/Blog';
import Adminpage from './admin/Admin';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Blog isLogged={false} />} />

        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/edit' component={Adminpage} />
        <Route path='/user' render={() => <Blog isLogged={true} />} />

      </Switch>
    </Router>
  );
}


export default App;
