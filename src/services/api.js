import axios from 'axios'

export const ongId = localStorage.getItem('ongId')
export const ongName = localStorage.getItem('ongName')

const api =  axios.create({
    baseURL: "http://localhost:3333"
})

export default api