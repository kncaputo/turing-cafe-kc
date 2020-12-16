import React from 'react';
import './Card.css'

const Card = ({ key, name, date, time, number }) => {
  return (
    <section className='card'>
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Party of {number}</p>
      <button className='cancel-btn'>CANCEL</button>
    </section>
  )
}

export default Card;