import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  render() {
    return (
      <section>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='date'
          placeholder='Date (MM/DD)'
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='time'
          placeholder='Time (00:00)'
          value={this.state.time}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='number'
          placeholder='Number of Guests'
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button onClick={}>
          Submit
        </button>
      </section>
    )
  }
}