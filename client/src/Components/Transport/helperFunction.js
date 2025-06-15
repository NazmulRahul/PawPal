import axios from "axios";


const helperFunctionApproved = async (id) => {
  try {
    const response = await axios.post(`https://www.pawpalbd.com/api/user/transport/isApproved/${id}`)
    return response.data
  } catch (error) {
    throw "Failed to update data";
  }
}

export async function helperFunctionCompleted(id) {
  try {
    const response = await axios.post(`https://www.pawpalbd.com/api/user/transport/isCompleted/${id}`)
    return response.data
  } catch (error) {
    throw "Failed to update data";
  }
}

export default helperFunctionApproved