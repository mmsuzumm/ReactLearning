import persons from '../../data/persons';
import Person from './Person';

function Persons() {
  return (
    <div className="persons">
      {persons.map((person) => {
        return <Person key={person.index} {...person} />;
      })}
    </div>
  );
}

export default Persons;
