import { useEffect, useReducer, useRef, createContext, useContext } from 'react';
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

export const TodoStateContext = createContext<Todo[] | null>(null);
export const TodoDispatchContext = createContext<{
  onCreate: (text: string) => void;
  onDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error('반드시 TodoDispatchContext 안에서 사용해야 합니다');

  return dispatch;
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
      <TodoStateContext.Provider value={todoList}>
        <TodoDispatchContext.Provider value={{ onCreate, onDelete }}>
          <Editor />
          <ul>
            {todoList.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </ul>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
