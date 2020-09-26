import axios from 'axios'

export const fetchHospitals = async (userLocation) => {
  const URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000"
  const long = userLocation[1]
  const lat = userLocation[0]
  const res = await axios.get(`${URL}/location?longitude=${long}&latitude=${lat}`)
  return res
}