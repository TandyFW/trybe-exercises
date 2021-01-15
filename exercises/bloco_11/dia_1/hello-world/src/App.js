import './App.css';

const array = ['HTML', 'CSS', 'JavaScript', 'SoftSkills', 'React', 'HOF'];

const task = (array) => {
  return (
    array.map(item => <li>{item}</li> )
  );
}

function App() {
  return (
    <ol>
      {task(array)}
    </ol>
  );
}

export default App;
