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
    fetchReservations.mockResolvedValueOnce(resyData);
    render(
      <App />
    )
  })
})

