import axios from "axios";

const IMAGE_URL = "http://15.235.163.93:5000/adoption/api/uploadImage";
const POST_URL = "http://15.235.163.93:5000/adoption/api/createPost";

export const imageUploadHandler = async (file) => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const { data } = await axios.post(IMAGE_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data.url;
  } catch (error) {
    return error;
  }
};

export const addPost = async (formBody) => {
  try {
    const response = await axios.post(POST_URL, formBody);
    return response.data;
  } catch (error) {
    return error;
  }
};
