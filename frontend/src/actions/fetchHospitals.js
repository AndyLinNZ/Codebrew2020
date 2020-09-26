import axios from 'axios'

export const fetchHospitals = async (location) => {
  const URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000"
  const long = location[1]
  const lat = location[0]
  const res = await axios.get(`${URL}/location?longitude=${long}&latitude=${lat}`)
  return res
}