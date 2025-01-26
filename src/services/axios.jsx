import axios from "axios";
const url = `${import.meta.env.VITE_API_BACKEND_URL}/api/auth`
export const SignUpFunc = async (user) => {

    try {
        const { confirmPassword, ...userData } = user;  // Remove confirmPassword
        const res = await axios.post(`${url}/signup`, userData);
        console.log(res)
        return res
    } catch (error) {

        console.error("Error during signup:", error);
        return error.response ? error.response : error.message;
    }
}
export const loginfunc = async (user) => {
    console.log("formdata", user)
    try {
        const res = await axios.post(`${url}/login`, user, {
            withCredentials: true
        })

        return res
    } catch (error) {
        return error.response.data
    }
}