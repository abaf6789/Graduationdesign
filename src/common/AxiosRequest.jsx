import axios from 'axios';
import { BASE_URL } from './Constants';


const axiosRequest = axios.create({
    baseURL: BASE_URL
});

export default axiosRequest;
