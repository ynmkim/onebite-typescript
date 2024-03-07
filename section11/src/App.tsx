import { useEffect, useReducer, useRef } from 'react';
import './App.css';
import Editor from './components/Editor';
import TodoItem from './components/TodoItem';
import { Todo } from './types';

type Action =
  | {
      type: 'CREATE';
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: 'DELETE';
      id: number;
    }; // 서로소 유니온 타입

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data];
    case 'DELETE':
      return state.filter((it) => it.id !== action.id);
  }
}

function App() {
  const [todoList, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  const onCreate = (text: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const onDelete = (id: number) => {
    dispatch({
      type: 'DELETE',
      id: id,
    });
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
