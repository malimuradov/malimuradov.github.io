import React, { useState } from 'react';
import { TextField } from '@mui/material';

interface Props {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        margin="normal"
      />
    </form>
  );
};

export default TodoInput;