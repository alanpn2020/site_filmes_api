import axios from 'axios';

const api = axios.create(
    {
        //URL que não muda da API
        baseURL: 'https://api.themoviedb.org/3/'
    }
)

export default api;