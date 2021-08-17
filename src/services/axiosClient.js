import axios from 'axios';

const client = axios.create({
    baseURL : process.env.PORT || 'http://localhost:4000',
    headers : {
        'Content-Type' : 'application/json'
    }
})


export default client;