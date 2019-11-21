export const getErrorMessage = error => {
  switch (error.response.status) {
    case 404:
      return 'Not found'
    default:
      return 'Sorry, failed to fetch weather data'
  }
}
