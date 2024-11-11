import axios from "axios";

export const latestNewgetdata = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/api/latestnews/posts"
    );
    return response;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};
