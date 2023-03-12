import { useState } from 'react';
import './App.css';
import PetInfo from './components/PetInfo';
import RandomNumber from './components/RandomNumber';
import Button from './components/Counter/Button';
import Counter from './components/Counter/Counter';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <RandomNumber range={1000} />
      <PetInfo pet="Cat" age={5} hasPet />
      <PetInfo pet="Dog" age={3} hasPet />
      <PetInfo hasPet={false} />
    </div>
  );
}

export default App;
