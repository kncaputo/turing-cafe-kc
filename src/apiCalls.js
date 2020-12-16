const endpoint = 'http://localhost:3001/api/v1/reservations';

export const fetchReservations = () => {
  return fetch(endpoint)
  .then(response => {
    if (!response.ok) {
      throw Error('Failed to fetch reservations');
    }
    return response.json()
  })
}

export const postReservation = (reservation, onSuccess) => {
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(reservation),
  })
  .then(response => {
    if (!response.ok) {
      throw Error('Failed to post reservation');
    }
    return response.json()
  })
  .then(() => onSuccess())
  .catch(error => console.log(error))
}

export const deleteReservation = (id, onSuccess) => {
  return fetch(`${endpoint}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  })
    .then(response => response.json())
    .then(json => {
    console.log(json);
    onSuccess();
  })
  .catch(err => console.log(err))
}