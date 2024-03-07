import { useTodoDispatch } from '../App';
import { Todo } from '../types';

interface Props extends Todo {}

export default function TodoItem({ ...todo }: Props) {
  const dispatch = useTodoDispatch();

  const handleDelete = () => {
    dispatch.onDelete(todo.id);
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
