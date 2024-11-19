import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './counter';
import Display from './display';

describe('Counter Component', () => {
    test('renders the initial count value as 0', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        expect(countValue).toHaveTextContent('0');
    });

    test('increments count when increment button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const incrementButton = screen.getByText('Increment');

        fireEvent.click(incrementButton);

        expect(countValue).toHaveTextContent('1');
    });

    test('decrements count when decrement button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const decrementButton = screen.getByText('Decrement');

        fireEvent.click(decrementButton);

        expect(countValue).toHaveTextContent('-1');
    });
    test('Display has correct value', () => {
        render(<Display value ={5} />);
        const displayValue = screen.getByText(/value: 5/i);
        expect(displayValue).toBeInTheDocument();
    });
    
});