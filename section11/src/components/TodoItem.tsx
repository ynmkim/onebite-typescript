import { Todo } from '../types';

interface Props extends Todo {
  onDelete: (id: number) => void;
}

export default function TodoItem({ onDelete, ...todo }: Props) {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li>
      {todo.id}번: {todo.content}
      <button type="button" onClick={handleDelete}>
        삭제
      </button>
    </li>
  );
}
