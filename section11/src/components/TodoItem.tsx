import { Todo } from '../types';

interface Props extends Todo {}

export default function TodoItem({ ...todo }: Props) {
  return <li>{todo.id}번: {todo.content}</li>;
}
