import axios from 'axios'

const ApiService = (() => {
const baseUrl = 'http://localhost:3000'
  const create = async (body: {firstName: string, lastName: string,email: string, password:string}) => {
    return await axios.post(`${baseUrl}/users`, body)
  }

  const auth = async (body: {email: string, password:string}) => {
    const data = await axios.post(`${baseUrl}/userAuth`, {params:body})
    .then(res => res.data.find((user:{email:string,password:string})=> user.email === body.email && user.password === body.password))

    if(!data) return {status: 401, message: 'Invalid credentials'}

    return {status: 200, message: 'Login successful'}
  }

  return {create, auth}
})

export default ApiService