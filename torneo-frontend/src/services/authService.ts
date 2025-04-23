import axios from "axios";

const BASE_URI = process.env.NEXT_PUBLIC_API_URL
export const loginUser = async (email: string, password: string) => {
    const res = await axios.post(`${BASE_URI}/auth/login`, { email, password })
    return res
}
export const resgisterUser = async (nome:string, cognome:string,email: string, password: string, ruolo:string) => {
    const res = await axios.post(`${BASE_URI}/auth/register`, { nome,cognome,email, password,ruolo })
    return res.data
}