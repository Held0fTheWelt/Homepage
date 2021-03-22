import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Held0fTheWelt/YvesProjectDataMockup',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default
{
    getProjects(){
        return apiClient.get('/projects')
    }
}