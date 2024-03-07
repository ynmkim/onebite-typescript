import { useState } from 'react';

interface Props {
  onCreate: (text: string) => void;
}

export default function Editor({ onCreate }: Props) {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    onCreate(text);
    setText(text);
  };

  return (
    <div>
      <input value={text} onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        추가
      </button>
    </div>
  );
}
