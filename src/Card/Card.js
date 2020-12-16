import React from 'react';
import './Card.css'

const Card = ({ key, name, date, time, number }) => {
  return (
    <section>
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Party of {number}</p>
      <button>CANCEL</button>
    </section>
  )
}

export default Card;