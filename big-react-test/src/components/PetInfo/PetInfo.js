export default function PetInfo(props) {
  const { pet, age, hasPet } = props;
  console.log(pet, age, hasPet);
  return hasPet ? (
    <h1>{`${pet} is ${age} years old`}</h1>
  ) : (
    <h1>I don't have an animal</h1>
  );
}
