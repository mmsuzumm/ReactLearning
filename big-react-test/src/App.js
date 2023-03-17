import './App.css';
import RandomNumber from './components/randomNumber/RandomNumber';
import ClickCounter from './components/counter/ClickCounter';
import PetsInfo from './components/petInfo/PetsInfo';
import Persons from './components/persons/Persons';
import Login from './components/auth/Login';
import GetTodo from './components/todoList/GetTodo';

function App() {
  return (
    <div className="App">
      <GetTodo />
      <Login />
      <Persons />
      <RandomNumber range={1000} />
      <ClickCounter />
      <PetsInfo />
    </div>
  );
}

export default App;
