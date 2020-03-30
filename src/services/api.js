import axios from 'axios'

export const getOngId = localStorage.getItem('ongId')
export const setOngId = (ongId) => localStorage.setItem('ongId', ongId)
export const getOngName = localStorage.getItem('ongName')
export const setOngName = (ongId) => localStorage.setItem('ongId', ongId)

export const isAuthenticated = () => getOngId !== null


const headers = {
    Authorization: getOngId
}
const api =  axios.create({
    baseURL: "http://localhost:3333",
    headers
})

export default api