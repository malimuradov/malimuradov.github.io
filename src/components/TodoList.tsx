import React from 'react';
import { List, ListItem, ListItemButton, ListItemText, Checkbox } from '@mui/material';
import { Todo } from '../types';

interface Props {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id} disablePadding>
          <ListItemButton onClick={() => toggleTodo(todo.id)} dense>
            <Checkbox checked={todo.completed} edge="start" />
            <ListItemText
              primary={todo.text}
              sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;

