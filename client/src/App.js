// import logo from './logo.svg';
import './App.css';
import Login from './page/login/login.js';

function App() {

  function handleServer() {
    fetch('/test')
      .then(r => r.json())
      .then(data => { console.log(data); })
  }
  return (
    <div className="App">
      {/* hello world */}
      <Login />
    </div>
  );
}

export default App;
