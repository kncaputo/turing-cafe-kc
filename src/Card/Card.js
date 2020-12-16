import React from 'react';
import './Card.css'

const Card = ({ id, name, date, time, number, cancelReservation}) => {
  return (
    <section key={id} className='card' id={id}>
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Party of {number}</p>
      <button className='cancel-btn' id={id} onClick={event => cancelReservation(event)}>CANCEL</button>
    </section>
  )
}

export default Card;