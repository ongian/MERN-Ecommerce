import axios from 'axios';

export const setRequest = (url, data) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    return axios.post(url, data, config);
}