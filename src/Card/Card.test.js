import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { resyData } from '../testData';
import Card from './Card';

describe('Card', () => {
  it('should render correctly', () => {
    const res = resyData[0];

    render(
      <Card
        id={res.id}
        name={res.name}
        date={res.date}
        time={res.time}
        number={res.number}
      />
    );

    expect(screen.getByText('Christie')).toBeInTheDocument();
    expect(screen.getByText('12/29')).toBeInTheDocument();
    expect(screen.getByText('7:00 pm')).toBeInTheDocument();
    expect(screen.getByText('Party of 12')).toBeInTheDocument();
  });
})