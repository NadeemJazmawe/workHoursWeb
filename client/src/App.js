// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import Login from './page/login/login.js';
import Signup from './page/signup/signup';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Logoin</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login"><Login /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
