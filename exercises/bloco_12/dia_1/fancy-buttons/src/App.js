import logo from './logo.svg';
import './App.css';

functon handleClick() {
  console.log('Clicou');
}

function App() {
  return (
    <button onClick={handleClick}></button>
  );
}

export default App;
