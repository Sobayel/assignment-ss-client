import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const secure = axios.create({
    baseURL:'http://localhost:5000',withCredentials:true
});

const AxiosSecure = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() =>{
        secure.interceptors.response.use(res =>{
            return res;
        }, error =>{
            if(error.response.status === 401 || error.response.status === 403){
                logOut()
                .then(()=>{
                    navigate('/login')
                })
                .catch(error => console.log(error))
            }
        })
    },[])
    return secure;
};

export default AxiosSecure;