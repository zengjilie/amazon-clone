import axios from 'axios';
const instance = axios.create({
    baseURL:'https://us-central1-challenge-d6ab9.cloudfunctions.net/api'
})

export default instance;