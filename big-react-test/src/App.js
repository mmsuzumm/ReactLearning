import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo pet="Cat" age={5} />
      <PetInfo pet="Dog" age={3} />

    </div>
  );
}

export default App;
