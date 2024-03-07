import { useEffect, useRef, useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import TodoItem from './components/TodoItem';
import { Todo } from './types';

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

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
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
