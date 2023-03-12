import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo pet="Cat" age={5} hasPet />
      <PetInfo pet="Dog" age={3} hasPet />
      <PetInfo hasPet={false} />
    </div>
  );
}

export default App;
