import axios from 'axios';

const api2 = axios.create({
    baseURL: "http://thronesapi.com/api/v2/Characters",
});

export default api2;
