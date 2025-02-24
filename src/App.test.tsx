import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('adds a new todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('What needs to be done?');
  fireEvent.change(input, { target: { value: 'New todo' } });
  fireEvent.submit(input);
  expect(screen.getByText('New todo')).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('What needs to be done?');
  fireEvent.change(input, { target: { value: 'Toggle me' } });
  fireEvent.submit(input);
  const todoItem = screen.getByText('Toggle me');
  fireEvent.click(todoItem);

  // Find the ListItemText component that contains the todo text and expect it to be crossed out
  const listItemText = todoItem.closest('div[class*="MuiListItemText-root"]');
  expect(listItemText).toHaveStyle('text-decoration: line-through');
});


test('clears completed todos', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('What needs to be done?');
  fireEvent.change(input, { target: { value: 'Completed todo' } });
  fireEvent.submit(input);
  const todoItem = screen.getByText('Completed todo');
  fireEvent.click(todoItem);
  const clearButton = screen.getByText('Clear completed');
  fireEvent.click(clearButton);
  expect(screen.queryByText('Completed todo')).not.toBeInTheDocument();
});

test('filters todos', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('What needs to be done?');
  fireEvent.change(input, { target: { value: 'Active todo' } });
  fireEvent.submit(input);
  fireEvent.change(input, { target: { value: 'Completed todo' } });
  fireEvent.submit(input);
  const completedTodo = screen.getByText('Completed todo');
  fireEvent.click(completedTodo);
  
  const activeFilter = screen.getByText('Active');
  fireEvent.click(activeFilter);
  expect(screen.getByText('Active todo')).toBeInTheDocument();
  expect(screen.queryByText('Completed todo')).not.toBeInTheDocument();

  const completedFilter = screen.getByText('Completed');
  fireEvent.click(completedFilter);
  expect(screen.queryByText('Active todo')).not.toBeInTheDocument();
  expect(screen.getByText('Completed todo')).toBeInTheDocument();
});