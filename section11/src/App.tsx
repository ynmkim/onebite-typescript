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

  const onDelete = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
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
          <TodoItem key={todo.id} {...todo} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}

export default App;
