import axios from "axios";
export const eventpostdata = async (data) => {
  try {
    await axios.post(`${import.meta.env.VITE_API_BACKEND_URL}/api/events/add`, {
      data,
    });
  } catch (error) {
    console.log(`error in Postdata in Api.jsx ${error}`);
  }
};
export const eventgetdata = async (searchTerm) => {
  try {
    const data = await axios.get(
      `${import.meta.env.VITE_API_BACKEND_URL}/api/events`,{
        params:{
          searchTerm:searchTerm
        }
      }
    );
    
    return data;
  } catch (error) {
    console.log(`error in getdata in Api.jsx ${error}`);
  }
};
export const eventupdatedata = async (data) => {
  try {
    return await axios.put(
      `${import.meta.env.VITE_API_BACKEND_URL}/api/events/update/${data.id}`,
      { data }
    );
  } catch (error) {
     console.log(`error in Api.jsx in eventupdatedata ${error}`);
  }
};
export const eventdeletedata = async (id) => {
  try {
    return await axios.delete(
      `${import.meta.evn.VITE_API_BACKEND_URL}/api/events/delete/${id}`
    );
  } catch (error) {
    console.log(`error in Api.jsx ${error}`);
  }
};
