//more detailed information
import { api } from './api'

export async function GetFriends() {
    const x = await api("users")
    return x
}

export const GetFriends2 = () => api("users")// this one does the same thing as the above one

export async function Register(data) {
    const x = await api("users",data)
    return x
}