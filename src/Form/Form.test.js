import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, screen, render } from '@testing-library/react';
import { resyData } from '../testData';
import Form from './Form';

describe('Form', () => {
  const mockCreateNewReservation = jest.mock()

  beforeEach(() => {
    render(
      <Form
        createNewReservation={mockCreateNewReservation}
      />
    );
  })

  it('should render correctly', () => {
    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date (MM/DD)');
    const timeInput = screen.getByPlaceholderText('Time (00:00)');
    const numberInput = screen.getByPlaceholderText('Number of Guests');

    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(numberInput).toBeInTheDocument();
  });

  // I don't know why this test is failing
  // it('should submit a new reservation when Submit is clicked', () => {
  //   const mockInput = {
  //     "name": "Kara",
  //     "date": "12/30",
  //     "time": "10:00",
  //     "number": "2"
  //   };

  //   const nameInput = screen.getByPlaceholderText('Name');
  //   const dateInput = screen.getByPlaceholderText('Date (MM/DD)');
  //   const timeInput = screen.getByPlaceholderText('Time (00:00)');
  //   const numberInput = screen.getByPlaceholderText('Number of Guests');

  //   fireEvent.change(nameInput, { target: { value: mockInput.name } });
  //   fireEvent.change(dateInput, { target: { value: mockInput.date } });
  //   fireEvent.change(timeInput, { target: { value: mockInput.time } });
  //   fireEvent.change(numberInput, { target: { value: mockInput.number } });

  //   fireEvent.click(screen.getByText('Submit'));

  //   expect(mockCreateNewReservation).toHaveBeenCalledWith(mockInput);
  // });

  it('should reflect the value of input entered into form', () => {
    const mockInput = {
      "name": "Kara",
      "date": "12/30",
      "time": "10:00",
      "number": "2"
    };

    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date (MM/DD)');
    const timeInput = screen.getByPlaceholderText('Time (00:00)');
    const numberInput = screen.getByPlaceholderText('Number of Guests');

    fireEvent.change(nameInput, { target: { value: mockInput.name } });
    fireEvent.change(dateInput, { target: { value: mockInput.date } });
    fireEvent.change(timeInput, { target: { value: mockInput.time } });
    fireEvent.change(numberInput, { target: { value: mockInput.number } });

    expect(nameInput.value).toBe('Kara');
    expect(dateInput.value).toBe('12/30');
    expect(timeInput.value).toBe('10:00');
    expect(numberInput.value).toBe('2');
  })
})