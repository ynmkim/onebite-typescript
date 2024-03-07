import { useEffect, useRef, useState } from 'react';
import './App.css';

interface Todo {
  id: number;
  content: string;
}

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  const idRef = useRef(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setTodo([
      ...todo,
      {
        id: idRef.current++,
        content: text,
      },
    ]);

    setText('');
  };

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <input value={text} onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        추가
      </button>
    </div>
  );
}

export default App;
