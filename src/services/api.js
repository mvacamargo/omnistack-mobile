import axios from 'axios';

const api = axios.create({
    baseURL: 'exp://fy-qcv.anonymous.omnistack-mobile.exp.direct:80'
});

export default api;