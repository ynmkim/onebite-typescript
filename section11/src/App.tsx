import { useEffect, useRef, useState } from 'react';
import './App.css';
import Editor from './components/Editor';
interface Todo {
  id: number;
  content: string;
}

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);

  const idRef = useRef(0);

  const onCreate = (text: string) => {
    setTodo([
      ...todo,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onCreate={onCreate} />
    </div>
  );
}

export default App;
