import axios from "axios";
const url=`http://localhost:4000/api/auth`
export const SignUpFunc = async (user)=>{

    try{
        const res= await axios.post(`${url}/signup`,user)
        console.log(res)
        return res
    }catch(error){

        return error.response
    }
}
export const loginfunc = async (user)=>{
    console.log("formdata",user)
    try{
        const res= await axios.post(`${url}/login`,user,{
            withCredentials:true
        })
   
       return res
    }catch(error){
       return error.response.data
    }
}