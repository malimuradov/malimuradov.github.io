import React, { useState } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoFilters from './components/TodoFilters';
import { Todo } from './types';


type FilterType = 'all' | 'active' | 'completed';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const activeTodos = todos.filter((todo) => !todo.completed);
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          todos
        </Typography>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
        <TodoFilters
          todos={todos}
          activeTodos={activeTodos}
          clearCompleted={clearCompleted}
          filter={filter}
          setFilter={setFilter}
        />
      </Paper>
    </Container>
  );
};

export default App;