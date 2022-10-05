export const apiUrl = process.env.REACT_APP_API_URL

const apiKey = process.env.REACT_APP_X_RapidAPI_Key

const apiHost = process.env.REACT_APP_X_RapidAPI_Host

export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': apiKey!,
    'X-RapidAPI-Host': apiHost!,
  },
}
