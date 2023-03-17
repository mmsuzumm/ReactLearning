import PetInfo from './PetInfo';
export default function PetsInfo() {
  return (
    <div className="PetsInfo">
      <PetInfo pet="Cat" age={5} hasPet />
      <PetInfo pet="Dog" age={3} hasPet />
      <PetInfo hasPet={false} />
    </div>
  );
}
