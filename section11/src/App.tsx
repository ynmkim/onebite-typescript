import { useEffect, useRef, useState } from 'react';
import './App.css';
import Editor from './components/Editor';
interface TodoList {
  id: number;
  content: string;
}

function App() {
  const [todoList, setTodoList] = useState<TodoList[]>([]);

  const idRef = useRef(0);

  const onCreate = (text: string) => {
    setTodoList([
      ...todoList,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onCreate={onCreate} />
    </div>
  );
}

export default App;
