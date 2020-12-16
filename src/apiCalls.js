export const fetchReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(() => {
    if (!response.ok) {
      throw Error('Failed to fetch reservations')
    }
    return response.json()
  })
}