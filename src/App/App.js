import React, { Component } from 'react';
import { fetchReservations } from '../apiCalls';
import Card from '../Card/Card';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    fetchReservations()
    .then(data => this.setState({ reservations: data }))
    .catch(error => console.log(error.message))
  }

  displayReservations = () => {
    return this.state.reservations.map(res => {
      return (
        <Card
        key={res.id}
        name={res.name}
        date={res.date}
        time={res.time}
        number={res.number}
        />
      )
    })
  }

  createNewReservation = (reservation) => {
    
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form createNewReservation={this.createNewReservation}/>
        </div>
        <div className='resy-container'>
          {this.displayReservations()}
        </div>
      </div>
    )
  }
}

export default App;
