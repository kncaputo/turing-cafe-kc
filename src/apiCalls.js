const endpoint = http://localhost:3001/api/v1/reservations;

export const fetchReservations = () => {
  return fetch(endpoint)
  .then((response) => {
    if (!response.ok) {
      throw Error('Failed to fetch reservations')
    }
    return response.json()
  })
}

export const postReservation = (reservation) => {
  return fetch(endpoint, )
}