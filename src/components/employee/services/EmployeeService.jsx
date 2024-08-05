import axios from 'axios';

const REST_BASE_URL ='http://localhost:8082/api/employees'

export const listEmployees = () => {
    return axios.get(REST_BASE_URL);
}