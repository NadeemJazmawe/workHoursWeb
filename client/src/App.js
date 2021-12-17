// import logo from './logo.svg';
import './App.css';
import Login from './page/login/login.js';
import Signup from './page/signup/signup';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ResetPass from './page/resetPass/resetPass.js';

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li className="active-nav">
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/resetPass">reset Password</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/signup"><Signup /></Route>
          <Route path="/resetPass"><ResetPass /></Route>

          <Route path="/"><Login /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
