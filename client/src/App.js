import logo from './logo.svg';
import './App.css';

function App() {

  function handleServer() {
    fetch('/test')
      .then(r => r.json())
      .then(data => { console.log(data); })
  }
  return (
    <div className="App">
      <h1>hi</h1>
      <button type="submit" onClick={handleServer}>click</button>
    </div>
  );
}

export default App;
