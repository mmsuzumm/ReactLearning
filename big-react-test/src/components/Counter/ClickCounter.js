import { useState } from 'react';
import Counter from './Counter';
import Button from './Button';

const buttonsText = ['Click me', 'Press me', 'Click me please'];

// In large projects it is better to make a separate css file
const buttonResetStyle = { backgroundColor: 'green', color: 'white' };

export default function ClickCounter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const resetCounter = () => {
    setCount(0);
  };
  return (
    <>
      <Counter count={count} />;
      {buttonsText.map((text) => {
        return <Button key={text} onClick={incrementCount} text={text} />;
      })}
      {!!count && (
        <>
          <button style={buttonResetStyle} onClick={resetCounter}>
            Reset
          </button>
        </>
      )}
    </>
  );
}
