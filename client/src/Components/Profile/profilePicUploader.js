import axios from "axios";

const profilePicUploader = async (userId, formData) => {
  try {
    const response = await axios.post(
      `https://www.pawpalbd.com/api/user/api/profilePicture/${userId}`,
      formData,
      { headers:{"Content-Type": "multipart/form-data"} }
    );
    return response?.data?.updatedUser
  } catch (error) {
    throw error?.response?.data || error?.message
  }
};

export default profilePicUploader;
