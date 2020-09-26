import axios from 'axios'

export const submitUserData = async ({ fullname, email, dob, phone, appointmentTime, hospital }) => {
  appointmentTime = appointmentTime.toString().replace('T', ' ')
  axios.defaults.baseURL = process.env.REACT_APP_API_URL
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  await axios.post('/submit', {
      fullname,
      email,
      dob,
      phone,
      appointmentTime,
      hospital
  })
}
