import generateRandomNumber from '../utils/generateRandomNumber';
import { useState } from 'react';

function RandomNumber({ range }) {
  const [randomNum, setRandomNum] = useState(generateRandomNumber(range));
  const changeRandomNumber = () => {
    setRandomNum(generateRandomNumber(range));
  };
  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNumber}>Generate random number</button>
    </div>
  );
}

export default RandomNumber;
