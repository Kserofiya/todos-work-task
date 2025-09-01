import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('добавление задачи', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Введите новую задачу/i);
  const button = screen.getByText(/Добавить задачу/i);

  fireEvent.change(input, { target: { value: 'Новая задача' } });
  fireEvent.click(button);

  expect(screen.getByText(/Новая задача/i)).toBeInTheDocument();
});

test('очистка выполненных задач', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Введите новую задачу/i);
  const button = screen.getByText(/Добавить задачу/i);
  const clearButton = screen.getByText(/Очистить выполненные/i);

  fireEvent.change(input, { target: { value: 'Задача 1' } });
  fireEvent.click(button);
  fireEvent.change(input, { target: { value: 'Задача 2' } });
  fireEvent.click(button);
  
  const checkbox = screen.getAllByRole('checkbox')[0];
  fireEvent.click(checkbox);

  fireEvent.click(clearButton);

  expect(screen.queryByText(/Задача 1/i)).not.toBeInTheDocument();
});
