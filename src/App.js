import React from 'react'
import Login from './login'
import Signup from './signup'
import Lain from './lain'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
    <nav>
        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>

          <li>
            <Link to="/signup">signup</Link>
          </li>

          <li>
            <Link to="/lain">signup</Link>
          </li>
        </ul>
      </nav>
      

      {/* route */}

      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/lain">
            <Lain />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
