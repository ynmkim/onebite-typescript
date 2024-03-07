import { useState } from 'react';

interface Props {
  onCreate: (text: string) => void;
}

export default function Editor({ onCreate }: Props) {
  const [todoItem, setTodoItem] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoItem(e.target.value);
  };

  const handleClick = () => {
    onCreate(todoItem);
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
