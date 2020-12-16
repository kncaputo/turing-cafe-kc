import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { resyData } from '../testData';
import Form from './Form';

describe('Form', () => {
  it('should render correctly', () => {
    const mockCreateNewReservation = jest.mock();
    render(
      <Form
        createNewReservation={mockCreateNewReservation}
      />
    );
    
    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date (MM/DD)');
    const timeInput = screen.getByPlaceholderText('Time (00:00)');
    const numberInput = screen.getByPlaceholderText('Number of Guests');

    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(numberInput).toBeInTheDocument();
  })
})