import axios from "axios";

export const latestNewgetdata = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BACKEND_URL}/api/latestnews/posts`
    );
    return response;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};
