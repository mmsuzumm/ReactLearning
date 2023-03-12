function PetInfo(props) {
  const { pet, age, hasPet } = props;

  return hasPet ? (
    <h1>{`${pet} is ${age} years old`}</h1>
  ) : (
    <h1>I don't have an animal</h1>
  );
}

export default PetInfo;
