import axios from "axios"



export const getPetDetailsWithId = async (id) => {
  try {
    const response = await axios.get(`http://15.235.163.93:5000/adoption/api/getPostWithId/${id}`)
    return response.data    
  } catch (error) {
    return error
  }
}