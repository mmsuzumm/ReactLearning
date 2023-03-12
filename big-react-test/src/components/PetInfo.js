function PetInfo(props) {
  const { pet, age } = props;
  return (
    <h1>
      {pet} is {age} years old
    </h1>
  );
}

export default PetInfo;
