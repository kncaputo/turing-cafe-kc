import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom';
import { fireEvent, screen, render } from '@testing-library/react';
import { resyData } from '../testData';
import { fetchReservations } from '../apiCalls';
jest.mock('../apiCalls');


describe('App', () => {
  // it('renders without crashing', () => {
  //   fetchReservations.mockResolvedValueOnce(resyData);

  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('should update display when a user submits new reservation', () => {
    const mockInput = {
      "name": "Kara",
      "date": "12/30",
      "time": "10:00",
      "number": "2"
    };
    fetchReservations.mockResolvedValueOnce(resyData);

    render(
      <App />
    )

    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date (MM/DD)');
    const timeInput = screen.getByPlaceholderText('Time (00:00)');
    const numberInput = screen.getByPlaceholderText('Number of Guests');

    fireEvent.change(nameInput, { target: { value: mockInput.name } });
    fireEvent.change(dateInput, { target: { value: mockInput.date } });
    fireEvent.change(timeInput, { target: { value: mockInput.time } });
    fireEvent.change(numberInput, { target: { value: mockInput.number } });

    fireEvent.click(screen.getByText('Submit'));

    expect(screen.getByText('Kara')).toBeInTheDocument();
    expect(screen.getByText('12/30')).toBeInTheDocument();
    expect(screen.getByText('10:00 pm')).toBeInTheDocument();
    expect(screen.getByText('Party of 2')).toBeInTheDocument();
  })
})

