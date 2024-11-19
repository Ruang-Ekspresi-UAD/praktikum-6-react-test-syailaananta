import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

test('Counter Default Value must be 0', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    expect(countValue).toHaveTextContent('0');
});

test('Increment works when button clicked', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');

    fireEvent.click(incrementButton);

    expect(countValue).toHaveTextContent('1');
});

test('Decrement works when button clicked', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    const decrementButton = screen.getByTestId('decrement-button');

    fireEvent.click(decrementButton);

    expect(countValue).toHaveTextContent('-1');
});

test('Reset the count using reset button', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    const resetButton = screen.getByTestId('reset-button');

    fireEvent.click(resetButton);

    expect(countValue).toHaveTextContent('0');
});

test('greeting component renders {nama kalian}', () => {
    render(<Greeting name="Syaila Suryani Ananta" />);
    const greetingMessage = screen.getByTestId('greeting');
    expect(greetingMessage).toHaveTextContent('Hello, Syaila Suryani Ananta');
});

test('greeting component renders {nama dosen kalian}', () => {
    render(<Greeting name="Pak Farid" />);
    const greetingMessage = screen.getByTestId('greeting');
    expect(greetingMessage).toHaveTextContent('Hello, Pak Farid');
});

test('Triggers alert with correct message when clicked', () => {
    window.alert = jest.fn(); // Mock alert function
    render(<AlertButton message="This is an alert" />);
    const alertButton = screen.getByTestId('alert-button');

    fireEvent.click(alertButton);

    expect(window.alert).toHaveBeenCalledWith('This is an alert');
});
