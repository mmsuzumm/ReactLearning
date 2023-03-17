import { useState, useEffect } from 'react';

export default function TodoList() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);

  return <div>{todo && todo.title}</div>;
}
