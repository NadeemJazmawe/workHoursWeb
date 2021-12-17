// import logo from './logo.svg';
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
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/"><Login/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
