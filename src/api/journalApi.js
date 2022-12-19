import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-b9eb0-default-rtdb.firebaseio.com'
})

export default journalApi