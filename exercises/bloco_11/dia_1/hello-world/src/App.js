import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <ol>
      {task('HTML')}
    </ol>
  );
}

export default App;
