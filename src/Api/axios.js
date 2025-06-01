import axios from "axios";

const axiosInstance= axios.create({
    //local url on firebase
    // baseURL :"http://127.0.0.1:5001/clone-9d14e/us-central1/api"
    
    // backend deploy on render.com
    baseURL: "https://amazon-api-deploy-new-v5i5.onrender.com"
});

export {axiosInstance};