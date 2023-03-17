import './App.css';
import RandomNumber from './components/RandomNumber/RandomNumber';
import ClickCounter from './components/Counter/ClickCounter';
import PetsInfo from './components/PetInfo/PetsInfo';
import Persons from './components/Persons/Persons';
import Login from './components/auth/Login';

function App() {
  return (
    <div className="App">
      <Login />
      <Persons />
      <RandomNumber range={1000} />
      <ClickCounter />
      <PetsInfo />
    </div>
  );
}

export default App;
