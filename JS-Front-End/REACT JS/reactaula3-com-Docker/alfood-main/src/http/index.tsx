import axios from "axios";

const http = axios.create({
    baseURL: 'http://192.168.0.111:8000/api/v2/'
})

export default http