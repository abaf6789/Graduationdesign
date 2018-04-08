import axios from 'axios';
import { BASE_URL } from './Constants';


const axiosRequest = axios.create({
    // timeout: 3000,
    baseURL: BASE_URL
});

export default axiosRequest;
