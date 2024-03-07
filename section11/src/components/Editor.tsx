import { useState } from 'react';
import { useTodoDispatch } from '../App';

export default function Editor() {
  const dispatch = useTodoDispatch();
  const [todoItem, setTodoItem] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoItem(e.target.value);
  };

  const handleClick = () => {
    dispatch.onCreate(todoItem);
    setTodoItem(todoItem);
  };

  return (
    <div>
      <input value={todoItem} onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        추가
      </button>
    </div>
  );
}
