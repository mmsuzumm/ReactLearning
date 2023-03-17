export default function Person(props) {
  const { name, age, email, picture } = props;
  return (
    <div className="person">
      <img src={picture} />
      <h2>
        {name} {age}
      </h2>
      <h4>{email}</h4>
    </div>
  );
}
