import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Todo } from '../types';

type FilterType = 'all' | 'active' | 'completed';
interface Props {
  todos: Todo[];
  activeTodos: Todo[];
  clearCompleted: () => void;
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const TodoFilters: React.FC<Props> = ({
  todos,
  activeTodos,
  clearCompleted,
  filter,
  setFilter,
}) => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography>{activeTodos.length} items left</Typography>
      </Grid>
      <Grid item>
        <Button
          onClick={() => setFilter('all')}
          variant={filter === 'all' ? 'contained' : 'text'}
          color="primary"
        >
          All
        </Button>
        <Button
          onClick={() => setFilter('active')}
          variant={filter === 'active' ? 'contained' : 'text'}
          color="primary"
        >
          Active
        </Button>
        <Button
          onClick={() => setFilter('completed')}
          variant={filter === 'completed' ? 'contained' : 'text'}
          color="primary"
        >
          Completed
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={clearCompleted} color="primary">Clear completed</Button>
      </Grid>
    </Grid>
  );
};

export default TodoFilters;

